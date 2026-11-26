// S5 해변: 하늘은 2D 그림, 수평선 아래(바다·파도·모래)는 실제 3D 바닥(y=0)에 그림을 "기준 카메라"에서 비춰 입힌다.
//  - 기본 시점에서는 S4와 픽셀 단위로 같은 그림이 보이고, 카메라가 움직이면 바닥 전체가 실제 원근으로 따라 움직인다.
//  - 모래 상태 지도(sandMap): 무대 좌표 기준의 작은 이미지. R=젖음, G=파인 깊이(S6 글씨·발자국용, 이번에는 시험 글씨만).
//    파도가 덮은 칸은 젖고(R), 파인 곳은 조금씩 메워진다(G). 젖음은 시간이 지나며 마른다.
import * as THREE from 'three';
import { NOISE } from './paint.js';
import { FRONT_GLSL } from './waves.js';
import { asset } from './assets.js';

export const STAGE = { w: 1536, h: 1024, horizon: 355, focusX: 768 };
export const WET_MAX = 780, DRY_MIN = 800;
const BANDS = { sky: [0, 420], sea: [330, 270], waves: [520, 240], sand: [680, 344] };
export const MAP = { x0: -256, w: 2048, y0: 640, h: 512 };       // 모래 상태 지도가 덮는 무대 범위

const COMMON = /* glsl */`
${NOISE}
vec3 toLin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 over(vec3 base, vec4 c){ return mix(base, c.rgb, c.a); }
vec4 layerM(sampler2D t, vec2 P, float top, float h){      // 그림 좌우 바깥은 거울처럼 이어 붙임(하늘에서 볼 때 바다가 끊기지 않게)
  vec2 uv = vec2(P.x / 1536.0, 1.0 - (P.y - top) / h);
  if (uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  uv.x = abs(mod(uv.x + 1.0, 2.0) - 1.0);
  return texture2D(t, vec2(clamp(uv.x, 0.002, 0.998), clamp(uv.y, 0.004, 0.996)));
}
vec4 layer(sampler2D t, vec2 P, float top, float h){
  vec2 uv = vec2(P.x / 1536.0, 1.0 - (P.y - top) / h);
  if (uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  return texture2D(t, vec2(clamp(uv.x, 0.002, 0.998), clamp(uv.y, 0.004, 0.996)));   // 그림 밖(좌우)은 가장자리 색을 이어 씀
}
`;

const _M = 0; // (자리 표시)
const SKY_FRAG = /* glsl */`
uniform sampler2D tSky; uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr, uTime; uniform vec3 uSky;
${COMMON}
void main(){
  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  vec2 c = uView.xy * 0.5;
  vec2 P = ((c + (fc - c) / uSky.y) - uView.zw) / uS + vec2(uSky.x, 0.0);
  P.x += (vnoise(vec3(P.y * 0.05, 3.0, 1.0)) - 0.5) * 14.0 * step(1536.0, max(P.x, 1536.0 - P.x));   // 그림 밖은 살짝 흔들어 줄무늬가 덜 보이게
  vec3 col = layer(tSky, vec2(P.x, min(P.y, 418.0)), 0.0, 420.0).rgb;
  // 천천히 흐르는 엷은 구름과 해 주변의 빛 번짐
  float cl = fbm(vec3(P.x * 0.0035 + uTime * 0.012, P.y * 0.011, 2.0 + uTime * 0.006));
  float wisp = smoothstep(0.5, 0.78, cl) * smoothstep(350.0, 250.0, P.y) * smoothstep(-40.0, 90.0, P.y);
  col = mix(col, toLin(vec3(1.0, 0.9, 0.86)), wisp * 0.42);
  float sd = length((P - vec2(1000.0, 232.0)) * vec2(1.0, 1.15));
  float rays = 0.75 + 0.25 * sin(atan(P.y - 232.0, P.x - 1000.0) * 14.0 + uTime * 0.15);
  col += toLin(vec3(1.0, 0.8, 0.5)) * (0.5 * exp(-sd / 70.0) + 0.22 * exp(-sd / 260.0) * rays);
  gl_FragColor = vec4(col, 1.0);
}`;

const GROUND_FRAG = /* glsl */`
uniform sampler2D tSky, tSea, tWaves, tSand, tMap;
uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr; uniform vec3 uSky; uniform mat4 uRefVP; uniform vec2 uMapPx;
varying vec3 vWP;
${COMMON}
${FRONT_GLSL}
void main(){
  float t = uTime;
  // 바닥 점 → 기준 카메라 화면 → 무대 좌표
  vec4 cp = uRefVP * vec4(vWP, 1.0);
  vec2 P;
  if (cp.w > 0.05) { vec2 n = cp.xy / cp.w; P = (vec2((n.x * 0.5 + 0.5) * uView.x, (0.5 - n.y * 0.5) * uView.y) - uView.zw) / uS; }
  else P = vec2(768.0 + vWP.x * 120.0, 4000.0);
  P.y = min(P.y, 4000.0);
  // 하늘(수평선 바로 아래 바다 가장자리가 반투명이라 밑색으로 필요)
  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr, c = uView.xy * 0.5;
  vec2 Ps = ((c + (fc - c) / uSky.y) - uView.zw) / uS + vec2(uSky.x, 0.0);
  vec3 col = layer(tSky, vec2(Ps.x, min(Ps.y, 418.0)), 0.0, 420.0).rgb;

  // ---- 바다: 잔물결, 윤슬 ----
  float depth = clamp((P.y - 355.0) / 250.0, 0.0, 1.0);
  vec2 flow = vec2(vnoise(vec3(P.x * 0.012, P.y * 0.09, t * 0.25)) - 0.5, vnoise(vec3(P.x * 0.01 + 7.0, P.y * 0.07, t * 0.22)) - 0.5);
  vec4 sea = layerM(tSea, P + flow * vec2(5.0, 2.2) * (0.25 + depth), 330.0, 270.0);
  float path = exp(-pow((P.x - 1000.0) / (18.0 + depth * 60.0), 2.0)) * step(356.0, P.y) * (1.0 - smoothstep(600.0, 700.0, P.y));
  float spark = smoothstep(0.72, 0.92, vnoise(vec3(P.x * 0.18, P.y * 0.5, t * 1.4)));
  sea.rgb = mix(sea.rgb, sea.rgb * toLin(vec3(0.86, 1.0, 1.04)) + toLin(vec3(0.0, 0.07, 0.09)), 0.55 * sea.a);     // 바다색을 더 맑고 깊게
  float wide = exp(-pow((P.x - 1000.0) / (120.0 + depth * 300.0), 2.0)) * step(356.0, P.y);
  sea.rgb += toLin(vec3(1.0, 0.78, 0.5)) * wide * 0.13 * sea.a;
  sea.rgb += toLin(vec3(1.0, 0.92, 0.68)) * path * (0.25 + spark) * 0.8 * sea.a;
  sea.rgb += toLin(vec3(1.0, 0.95, 0.8)) * smoothstep(0.8, 0.95, vnoise(vec3(P.x * 0.09, P.y * 0.45, t * 1.1 + 4.0))) * 0.22 * sea.a * depth;
  col = over(col, sea);
  vec2 Pw = P + vec2((vnoise(vec3(P.y * 0.05, t * 0.4, 3.0)) - 0.5) * 6.0, sin(t * 0.9 + P.x * 0.004) * 2.5);
  col = over(col, layerM(tWaves, Pw, 520.0, 240.0));

  // ---- 모래: 그림 + 그림 아래쪽(카메라 발밑)은 같은 색으로 이어 칠함 + 바닥에 붙은 모래알 ----
  // 그림 좌우 바깥의 모래는 가장자리 띠에서 얼룩지게 가져와 줄무늬가 생기지 않게 한다
  float outX = max(-P.x, P.x - 1536.0);
  vec2 Pn = vec2(P.x, min(P.y, 1020.0));
  if (outX > 0.0) {
    float nx = vnoise(vec3(vWP.xz * 2.3, 6.0)), ny = vnoise(vec3(vWP.xz * 1.9, 8.0));
    Pn.x = P.x < 0.0 ? 6.0 + 70.0 * nx : 1530.0 - 70.0 * nx;
    Pn.y = clamp(Pn.y + (ny - 0.5) * 36.0, 700.0, 1020.0);
  }
  vec4 sand = layer(tSand, Pn, 680.0, 344.0);
  float beyond = smoothstep(1010.0, 1130.0, P.y);
  vec3 plain = toLin(vec3(0.95, 0.72, 0.45)) * (0.92 + 0.16 * fbm(vec3(vWP.xz * 1.7, 4.0)));
  sand.rgb = mix(sand.rgb, plain, beyond * 0.85);
  float grain = vnoise(vec3(vWP.xz * 55.0, 1.0)) * 0.6 + vnoise(vec3(vWP.xz * 140.0, 2.0)) * 0.4;
  sand.rgb *= 0.95 + 0.10 * grain;
  float rip = sin(vWP.z * 26.0 + vnoise(vec3(vWP.xz * 1.6, 3.0)) * 9.0 + vWP.x * 2.0);                          // 바람이 만든 잔 모래결
  sand.rgb *= 1.0 + 0.045 * rip * smoothstep(790.0, 840.0, P.y);
  sand.rgb *= mix(vec3(1.0), toLin(vec3(1.03, 1.0, 0.97)), 0.9);
  sand.rgb *= 0.93 + 0.14 * fbm(vec3(vWP.xz * 0.9, 9.0));                                                      // 넓은 얼룩(햇빛 드는 곳과 살짝 눅은 곳)
  sand.rgb += toLin(vec3(1.0, 0.85, 0.6)) * 0.10 * exp(-pow((P.x - 1000.0) / 420.0, 2.0)) * smoothstep(1024.0, 780.0, P.y);
  sand.rgb += toLin(vec3(1.0, 0.96, 0.85)) * 0.5 * step(0.985, h3(vec3(floor(vWP.xz * 260.0), 1.0))) * (0.5 + 0.5 * sin(t * 2.0 + vWP.x * 40.0));
  col = over(col, sand);

  // ---- 모래 상태 지도 ----
  vec2 muv = vec2((P.x - ${MAP.x0.toFixed(1)}) / ${MAP.w.toFixed(1)}, (P.y - ${MAP.y0.toFixed(1)}) / ${MAP.h.toFixed(1)});
  float inMap = step(0.0, muv.x) * step(muv.x, 1.0) * step(0.0, muv.y) * step(muv.y, 1.0);
  vec4 m = texture2D(tMap, muv) * inMap;
  float wet = smoothstep(0.02, 0.75, m.r) * smoothstep(668.0, 690.0, P.y);
  // 파인 자국: 홈 안쪽은 어둡게, 해를 등진 벽은 그늘, 해를 보는 벽은 밝게
  float gU = texture2D(tMap, muv - vec2(0.0, uMapPx.y * 1.5)).g, gD = texture2D(tMap, muv + vec2(0.0, uMapPx.y * 1.5)).g;
  float gL = texture2D(tMap, muv - vec2(uMapPx.x * 1.5, 0.0)).g, gR = texture2D(tMap, muv + vec2(uMapPx.x * 1.5, 0.0)).g;
  float slope = (gD - gU) + 0.35 * (gL - gR);
  col *= 1.0 - 0.34 * smoothstep(0.05, 0.9, m.g) * inMap;
  col *= 1.0 - 0.55 * clamp(slope, 0.0, 1.0) * inMap;
  col += toLin(vec3(1.0, 0.9, 0.72)) * 0.3 * clamp(-slope, 0.0, 1.0) * inMap;

  // ---- 젖은 모래: 어둡고, 해 쪽으로 반사광 ----
  col *= mix(vec3(1.0), toLin(vec3(0.78, 0.71, 0.76)), wet * 0.72);
  col = mix(col, toLin(vec3(0.99, 0.74, 0.70)), wet * 0.16 * smoothstep(800.0, 690.0, P.y));   // 젖은 모래에 비친 노을
  float refl = exp(-pow((P.x - 1000.0 + (P.y - 700.0) * 0.35) / (60.0 + (P.y - 690.0) * 0.5), 2.0)) * wet;
  refl *= 0.45 + 0.55 * vnoise(vec3(P.x * 0.05, P.y * 0.4, t * 0.7));
  col += toLin(vec3(1.0, 0.86, 0.62)) * refl * 0.5;
  col += toLin(vec3(1.0, 0.9, 0.8)) * 0.05 * wet * smoothstep(0.55, 0.8, vnoise(vec3(P.x * 0.3, P.y * 0.8, 5.0)));   // 젖은 모래의 잔 반짝임

  // ---- 밀려오는 물과 포말 (두 겹) ----
  float e1 = frontY(P.x, 0.0), e2 = restLine(P.x) - 6.0 + 0.88 * (frontY(P.x, 0.11) - restLine(P.x));
  float shallow = smoothstep(e1 + 2.0, e1 - 12.0, P.y) * smoothstep(672.0, 696.0, P.y);
  float lagoon = smoothstep(585.0, 690.0, P.y) * smoothstep(e1 + 2.0, e1 - 14.0, P.y);                           // 물가의 맑은 옥빛
  col = mix(col, toLin(vec3(0.50, 0.86, 0.83)), lagoon * 0.34);
  float ca = abs(vnoise(vec3(P.x * 0.07 + t * 0.3, P.y * 0.2, t * 0.5)) - 0.5); ca = smoothstep(0.06, 0.0, ca);
  col += toLin(vec3(0.9, 1.0, 0.95)) * ca * 0.16 * lagoon;
  col = mix(col, col * toLin(vec3(0.78, 0.96, 0.96)) + toLin(vec3(0.05, 0.10, 0.10)), shallow * 0.7);
  float lacy1 = fbm(vec3(P.x * 0.06, P.y * 0.14, t * 0.45));
  float front1 = smoothstep(5.0 + 7.0 * lacy1, 0.0, abs(P.y - e1 + 3.0)) * smoothstep(0.36, 0.62, lacy1 + 0.18 + 0.12 * sin(P.x * 0.03 + t * 0.9));
  float lacy2 = fbm(vec3(P.x * 0.05 + 9.0, P.y * 0.12, t * 0.4));
  float front2 = smoothstep(4.0 + 6.0 * lacy2, 0.0, abs(P.y - e2 + 2.0)) * smoothstep(0.4, 0.66, lacy2 + 0.14) * 0.7;
  float bub = smoothstep(0.62, 0.72, vnoise(vec3(P.x * 0.35, P.y * 0.6, t * 0.3))) * smoothstep(e1 - 28.0, e1 - 2.0, P.y) * smoothstep(e1 + 2.0, e1 - 10.0, P.y) * 0.5;
  float foam = clamp(front1 + front2 + bub, 0.0, 1.0) * step(660.0, P.y);
  col = mix(col, toLin(vec3(1.0, 0.98, 0.94)), foam * 0.88);
  col = mix(col, col * toLin(vec3(1.0, 0.93, 0.95)), smoothstep(10.0, 0.0, abs(P.y - e1 - 6.0)) * 0.3);
  gl_FragColor = vec4(col, 1.0);
}`;

// 모래 상태 지도 갱신 (0.1초마다 한 번)
const MAP_FRAG = /* glsl */`
uniform sampler2D tPrev; uniform float uDt; varying vec2 vUv;
${NOISE}
${FRONT_GLSL}
void main(){
  vec2 P = vec2(${MAP.x0.toFixed(1)} + vUv.x * ${MAP.w.toFixed(1)}, ${MAP.y0.toFixed(1)} + vUv.y * ${MAP.h.toFixed(1)});
  vec4 prev = texture2D(tPrev, vUv);
  float e1 = frontY(P.x, 0.0);
  float cover = smoothstep(e1 + 3.0, e1 - 5.0, P.y);                     // 지금 물이 덮고 있는가
  float rnd = h3(vec3(P * 0.37, uTime * 7.0));
  // 젖음: 덮이면 1. 마를 때는 8비트 한 칸(1/255)씩, 확률로 내려 아주 느린 속도도 표현
  float dry = uDt / 16.0 * (0.7 + 0.9 * vnoise(vec3(P * 0.03, 3.0)));
  float wet = prev.r - floor(dry * 255.0 + rnd) / 255.0;
  wet = max(wet, cover);
  // 파인 깊이: 물이 덮는 동안 불규칙하게 조금씩 메워짐 (물에 닿은 쪽부터, 여러 번에 걸쳐)
  float crumble = 0.35 + 1.5 * vnoise(vec3(P * 0.11, uTime * 0.35));
  float fill = cover * uDt * 0.2 * crumble;
  float g = prev.g - floor(fill * 255.0 + rnd) / 255.0;
  gl_FragColor = vec4(clamp(wet, 0.0, 1.0), clamp(g, 0.0, 1.0), 0.0, 1.0);
}`;

export function createBeach(renderer, { mapW = 1024 } = {}) {
  const loader = new THREE.TextureLoader();
  let pending = 4; const ready = { done: false };
  const tex = (n) => { const t = loader.load(asset(`bg/${n}.webp`), () => { if (--pending === 0) ready.done = true; }); t.colorSpace = THREE.SRGBColorSpace; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false; return t; };
  const mapH = mapW / 4;
  const mkRT = () => new THREE.WebGLRenderTarget(mapW, mapH, { type: THREE.UnsignedByteType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
  let rtA = mkRT(), rtB = mkRT();

  const shared = {
    uRes: { value: new THREE.Vector2(1, 1) }, uView: { value: new THREE.Vector4(1, 1, 0, 0) }, uS: { value: 1 }, uDpr: { value: 1 },
    uSky: { value: new THREE.Vector3(0, 1, 0) }, uTime: { value: 0 }, uWA: { value: new THREE.Vector3(-1, 0, 1) }, uWB: { value: new THREE.Vector3(-1, 0, 2) },
  };
  const tSky = { value: tex('sky') };
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: { tSky, ...shared }, depthTest: false, depthWrite: false,
    vertexShader: 'void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }', fragmentShader: SKY_FRAG,
  }));
  sky.frustumCulled = false; sky.renderOrder = -100;

  const gU = { tSky, tSea: { value: tex('sea') }, tWaves: { value: tex('waves') }, tSand: { value: tex('sand') }, tMap: { value: rtA.texture },
    uRefVP: { value: new THREE.Matrix4() }, uMapPx: { value: new THREE.Vector2(1 / mapW, 1 / mapH) }, ...shared };
  const gGeo = new THREE.BufferGeometry();
  const X = 400, ZF = -900, ZN = 40;
  gGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-X, 0, ZF, X, 0, ZF, -X, 0, ZN, X, 0, ZN]), 3));
  gGeo.setIndex([0, 2, 1, 1, 2, 3]);
  const ground = new THREE.Mesh(gGeo, new THREE.ShaderMaterial({
    uniforms: gU, vertexShader: 'varying vec3 vWP; void main(){ vWP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWP, 1.0); }', fragmentShader: GROUND_FRAG,
  }));
  ground.frustumCulled = false; ground.renderOrder = -50;

  // ----- 모래 상태 지도 갱신용 장면 -----
  const mapScene = new THREE.Scene(), mapCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const mapU = { tPrev: { value: null }, uDt: { value: 0.1 }, uTime: shared.uTime, uWA: shared.uWA, uWB: shared.uWB };
  const mapQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: mapU, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }', fragmentShader: MAP_FRAG,
  }));
  mapQuad.frustumCulled = false; mapScene.add(mapQuad);
  // 도장 찍기(파인 깊이 G에 더하기): 캔버스 그림을 지도 위 사각형에 찍는다
  const stampScene = new THREE.Scene();
  const stampMat = new THREE.ShaderMaterial({
    uniforms: { tStamp: { value: null }, uAmt: { value: 1 } }, depthTest: false, depthWrite: false, transparent: true, side: THREE.DoubleSide,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4((modelMatrix * vec4(position, 1.0)).xy, 0.0, 1.0); }',
    fragmentShader: 'uniform sampler2D tStamp; uniform float uAmt; varying vec2 vUv; void main(){ gl_FragColor = vec4(0.0, texture2D(tStamp, vUv).a * uAmt, 0.0, 0.0); }',
  });
  const stampQuad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), stampMat); stampQuad.frustumCulled = false; stampScene.add(stampQuad);

  let cleared = false, acc = 0;
  function stepMap(dt) {
    const prevRT = renderer.getRenderTarget(), prevAuto = renderer.autoClear;
    if (!cleared) { for (const r of [rtA, rtB]) { renderer.setRenderTarget(r); renderer.setClearColor(0x000000, 1); renderer.clear(); } cleared = true; }
    mapU.tPrev.value = rtA.texture; mapU.uDt.value = dt;
    renderer.setRenderTarget(rtB); renderer.render(mapScene, mapCam);
    [rtA, rtB] = [rtB, rtA]; gU.tMap.value = rtA.texture;
    renderer.setRenderTarget(prevRT); renderer.autoClear = prevAuto;
  }
  /** 무대 좌표 사각형(가운데 cx,cy / 크기 w,h)에 캔버스의 알파를 "파인 깊이"로 찍는다 */
  function stamp(canvas, cx, cy, w, h, amount = 1, erase = false) {
    stampMat.blendEquation = erase ? THREE.ReverseSubtractEquation : THREE.AddEquation;     // erase: 파인 깊이를 덜어 내어 평평하게 메움
    const t = new THREE.CanvasTexture(canvas); t.flipY = true;
    stampMat.uniforms.tStamp.value = t; stampMat.uniforms.uAmt.value = amount;
    const u = (cx - MAP.x0) / MAP.w, v = (cy - MAP.y0) / MAP.h;
    stampQuad.position.set(u * 2 - 1, v * 2 - 1, 0); stampQuad.scale.set((w / MAP.w) * 2, -(h / MAP.h) * 2, 1);   // 지도 v는 아래로 갈수록 무대 y가 커짐
    const prevRT = renderer.getRenderTarget(), prevAuto = renderer.autoClear;
    renderer.autoClear = false; renderer.setRenderTarget(rtA); renderer.render(stampScene, mapCam);
    renderer.setRenderTarget(prevRT); renderer.autoClear = prevAuto; t.dispose();
  }
  /** 검증용: 지도 평균값 [젖음, 파임] (0~1) — 영역(무대 좌표) 지정 가능 */
  function readMap(x0 = MAP.x0, y0 = MAP.y0, w = MAP.w, h = MAP.h) {
    const px = Math.max(0, Math.floor(((x0 - MAP.x0) / MAP.w) * mapW)), py = Math.max(0, Math.floor(((y0 - MAP.y0) / MAP.h) * mapH));
    const pw = Math.max(1, Math.min(mapW - px, Math.round((w / MAP.w) * mapW))), ph = Math.max(1, Math.min(mapH - py, Math.round((h / MAP.h) * mapH)));
    const buf = new Uint8Array(pw * ph * 4);
    renderer.readRenderTargetPixels(rtA, px, py, pw, ph, buf);
    let r = 0, g = 0; for (let i = 0; i < buf.length; i += 4) { r += buf[i]; g += buf[i + 1]; }
    const n = pw * ph * 255; return [r / n, g / n];
  }

  /** 화면 배치 (S4 background.layout과 같은 계산) */
  function layout(w, h, dpr) {
    const portrait = w / h < 1;
    let s, tx, ty, top = 0;
    if (portrait) { s = h / STAGE.h; tx = w / 2 - STAGE.focusX * s; ty = 0; }
    else {
      s = Math.max(w / STAGE.w, h / STAGE.h);
      const vh = h / s;
      const lo = Math.max(0, DRY_MIN - 0.93 * vh), hi = Math.min(STAGE.h - vh, 200, STAGE.horizon - 0.12 * vh);
      top = Math.min(STAGE.h - vh, Math.max(lo, Math.min(hi, STAGE.horizon - 0.2 * vh)));
      tx = (w - STAGE.w * s) / 2; ty = -top * s;
    }
    shared.uRes.value.set(Math.round(w * dpr), Math.round(h * dpr)); shared.uView.value.set(w, h, tx, ty); shared.uS.value = s; shared.uDpr.value = dpr;
    return { portrait, scale: s, tx, ty, horizonFrac: (ty + STAGE.horizon * s) / h, w, h, stageTop: -ty / s, stageBottom: (h - ty) / s };
  }
  function update(t, dt, wave, speed = 1) {
    shared.uTime.value = t; shared.uWA.value.fromArray(wave.a); shared.uWB.value.fromArray(wave.b);
    acc += dt; let n = 0;
    while (acc >= 0.1 && n < 3 * speed) { stepMap(0.1); acc -= 0.1; n++; }
    if (acc > 0.3 * speed) acc = 0;
  }
  return { sky, ground, layout, update, stamp, readMap, ready, shared, setRef: (m) => gU.uRefVP.value.copy(m), setSky: (shiftStage, zoom) => shared.uSky.value.set(shiftStage, zoom, 0), mapSize: [mapW, mapH] };
}
