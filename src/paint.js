// 그림책 재질 모음. S1 B안(b-3d.js)의 재질 코드를 복사해 S2에 맞게 고쳤다.
//  - 바뀐 점: 털 껍데기 제거(이번 지시: 복잡한 털 금지), 노을 역광 테두리빛 추가,
//    화면 전체를 렌더 타깃(선형 색)에 그린 뒤 마지막에 종이결을 입히므로 색 계산을 선형 기준으로 변경
import * as THREE from 'three';

export const NOISE = /* glsl */`
float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`;

let GRAD = null;
function gradientMap() {
  if (GRAD) return GRAD;
  // 단계가 부드럽게 이어지는 툰 그라데이션 (딱딱한 셀 셰이딩이 아니라 물감 번짐처럼)
  GRAD = new THREE.DataTexture(new Uint8Array([120, 160, 205, 238, 255]), 5, 1, THREE.RedFormat);
  GRAD.minFilter = GRAD.magFilter = THREE.LinearFilter;
  GRAD.needsUpdate = true;
  return GRAD;
}

/**
 * 그림책 재질
 * @param {string} color 기본색(sRGB)
 * @param {object} o grain: 물감 얼룩 크기, grainAmt: 얼룩 세기, tint: 그림자 색, rim: 노을 테두리빛 세기, form: 위 밝게/아래 어둡게
 */
export function paintMat(color, { map = null, grain = 6, grainAmt = 0.12, tint = '#9a86c4', rim = 0.0, form = 0, side = THREE.FrontSide, transparent = false, opacity = 1 } = {}) {
  const m = new THREE.MeshToonMaterial({ color, map, gradientMap: gradientMap(), side, transparent, opacity });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, {
      uTint: { value: new THREE.Color(tint) }, uGrain: { value: grain }, uGrainAmt: { value: grainAmt },
      uRim: { value: rim }, uRimCol: { value: new THREE.Color('#ffb98a') }, uForm: { value: form },
    });
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vWP; uniform vec3 uTint; uniform float uGrain; uniform float uGrainAmt; uniform float uRim; uniform vec3 uRimCol; uniform float uForm;\n${NOISE}`)
      .replace('#include <dithering_fragment>', /* glsl */`
#include <dithering_fragment>
{
  vec3 col = gl_FragColor.rgb;
  float shade = dot(col, vec3(0.333)) / max(dot(diffuseColor.rgb, vec3(0.333)), 0.01);
  float t = smoothstep(0.95, 0.45, shade);
  col = mix(col, col * mix(vec3(1.0), uTint * 1.6, 0.6), t);          // 그림자는 라벤더로
  col *= 1.0 - uGrainAmt * 0.5 + uGrainAmt * fbm(vWP * uGrain);       // 물감 얼룩
  col *= 0.97 + 0.05 * vnoise(vWP * uGrain * 9.0);                    // 종이결
  vec3 vn = normalize(normal);
  float rim = 1.0 - abs(dot(vn, normalize(vViewPosition)));
  col *= 1.0 - 0.14 * smoothstep(0.55, 1.0, rim);                       // 가장자리 물감 고임
  col *= 1.0 + uForm * (0.12 * vn.y - 0.12 * smoothstep(0.4, 0.95, rim)); // 둥근 덩어리감
  col += uRimCol * uRim * smoothstep(0.62, 1.0, rim) * (0.6 + 0.4 * vn.y); // 노을 역광 테두리
  gl_FragColor.rgb = col;
}`);
  };
  return m;
}

const outlineCache = new Map();
export function outlineMat(color = '#7a5646', thick = 0.008, freq = 12) {
  const key = `${color}|${thick}|${freq}`;
  if (outlineCache.has(key)) return outlineCache.get(key);
  const m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uThick = { value: thick };
    sh.uniforms.uFreq = { value: freq };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\nuniform float uThick; uniform float uFreq;\n${NOISE}`)
      .replace('#include <begin_vertex>', /* glsl */`
#include <begin_vertex>
float wob = vnoise(position * uFreq);
transformed += normal * uThick * (0.4 + 1.2 * wob);`); // 연필 선처럼 굵기가 흔들림
  };
  outlineCache.set(key, m);
  return m;
}
export function addOutline(mesh, color, thick, freq) {
  const o = new THREE.Mesh(mesh.geometry, outlineMat(color, thick, freq));
  o.name = `${mesh.name || 'mesh'}-outline`;
  mesh.add(o);
  return mesh;
}

export function stripeTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#f8e6c8'; g.fillRect(0, 0, 512, 256);
  const n = 10, w = 512 / n;
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < n; i += 2) {
    for (let k = 0; k < 3; k++) {
      g.fillStyle = `rgba(238, 150, 112, ${0.24 + rnd() * 0.08})`;
      g.beginPath();
      g.moveTo(i * w + 2 + rnd() * 3, 0);
      for (let y = 0; y <= 256; y += 32) g.lineTo(i * w + 1 + rnd() * 4, y);
      for (let y = 256; y >= 0; y -= 32) g.lineTo((i + 1) * w - 1 - rnd() * 4, y);
      g.closePath(); g.fill();
    }
  }
  for (let i = 0; i < 1400; i++) {
    g.fillStyle = `rgba(120, 80, 60, ${rnd() * 0.05})`;
    g.fillRect(rnd() * 512, rnd() * 256, 1 + rnd() * 2, 1);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function blobTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const r = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  r.addColorStop(0, 'rgba(110,70,90,0.5)'); r.addColorStop(1, 'rgba(110,70,90,0)');
  g.fillStyle = r; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** 담요용 격자무늬 (연한 하늘색·살구색) */
export function plaidTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#e9e2f0'; g.fillRect(0, 0, 256, 256);
  let seed = 11; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 4; i++) {
    g.fillStyle = 'rgba(126, 168, 196, 0.38)'; g.fillRect(i * 64 + 14, 0, 26, 256);
    g.fillStyle = 'rgba(240, 160, 140, 0.34)'; g.fillRect(0, i * 64 + 14, 256, 26);
  }
  for (let i = 0; i < 1600; i++) { g.fillStyle = `rgba(110, 80, 90, ${rnd() * 0.05})`; g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 2, 1); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
}
