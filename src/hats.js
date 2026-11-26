// S8 물범 모자: 머리 모양(몸 윤곽)을 그대로 따라 감싸서 "얹힌" 느낌이 아니라 "쓴" 느낌이 나게 한다.
//  - 겨울(11~2월): 골지 니트 비니 + 접은 단 + 방울
//  - 그 밖의 계절: 밀짚 버킷햇(부드럽게 처진 챙 + 리본 띠)
// 좌표는 머리 뼈 기준(몸 높이 0.66이 0). 얼굴은 -z 쪽.
import * as THREE from 'three';
import { paintMat, addOutline } from './paint.js';

const PROFILE = [[0.266, 0.07], [0.258, 0.15], [0.232, 0.23], [0.18, 0.30], [0.1, 0.35], [0.0, 0.37]];   // seal.js 윤곽의 머리 부분 (반지름, 머리 기준 높이)
const LINE = '#7c573f';
function headR(y) {
  if (y <= PROFILE[0][1]) return PROFILE[0][0];
  for (let i = 1; i < PROFILE.length; i++) { const [r1, y1] = PROFILE[i], [r0, y0] = PROFILE[i - 1]; if (y <= y1) { const t = (y - y0) / (y1 - y0); return r0 + (r1 - r0) * t; } }
  return 0;
}
/** 머리 윤곽을 바깥으로 gap만큼 띄운 회전체. y0(아래 끝)부터 꼭대기까지 */
function shell(y0, gap, top = 0.03, n = 18) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, y = y0 + (0.37 - y0) * t;
    const r = Math.max(0, headR(y) + gap * (1 - t * t * 0.4));
    pts.push(new THREE.Vector2(i === n ? 0 : r, y + top * Math.pow(t, 3)));
  }
  return new THREE.LatheGeometry(pts, 40);
}
function tex(draw, w = 256, h = 256, rep = [1, 1]) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); t.anisotropy = 4; return t;
}
const rng = (s) => () => ((s = (s * 16807) % 2147483647) / 2147483647);

function knit(base, dark, light) {
  return tex((x, w, h) => {
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    const cols = 16, cw = w / cols, r = rng(3);
    for (let i = 0; i < cols; i++) {            // 골지: 세로 이랑마다 그늘·밝은 면
      x.fillStyle = dark; x.fillRect(i * cw, 0, cw * 0.22, h);
      x.fillStyle = light; x.fillRect(i * cw + cw * 0.45, 0, cw * 0.22, h);
      for (let j = 0; j < 22; j++) { x.fillStyle = 'rgba(0,0,0,.07)'; x.beginPath(); x.ellipse(i * cw + cw * 0.5, j * h / 22 + 4, cw * 0.32, h / 44, 0, 0, 6.3); x.fill(); }   // 코(뜨개 고리)
    }
    for (let i = 0; i < 900; i++) { x.fillStyle = r() < 0.5 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'; x.fillRect(r() * w, r() * h, 1.5, 1.5); }
  }, 256, 256, [4, 1]);
}

export function createBeanie() {
  const g = new THREE.Group(); g.name = 'beanie';
  const body = new THREE.Mesh(shell(0.2, 0.022, 0.035), paintMat('#ffffff', { map: knit('#d96a5c', 'rgba(110,30,30,.35)', 'rgba(255,200,180,.25)'), grain: 10, tint: '#9a6a9a', rim: 0.25 }));
  body.castShadow = true; addOutline(body, LINE, 0.006, 16); g.add(body);
  // 접어 올린 단: 머리를 두르는 두툼한 띠
  const y0 = 0.185, y1 = 0.245;
  const cuffPts = [];
  for (let i = 0; i <= 8; i++) { const t = i / 8, y = y0 + (y1 - y0) * t; cuffPts.push(new THREE.Vector2(headR(y) + 0.034 + Math.sin(t * Math.PI) * 0.01, y)); }
  const cuff = new THREE.Mesh(new THREE.LatheGeometry(cuffPts, 40), paintMat('#ffffff', { map: knit('#f3e6cf', 'rgba(120,90,60,.3)', 'rgba(255,255,255,.35)'), grain: 10, tint: '#9a86c4', rim: 0.2, side: THREE.DoubleSide }));
  cuff.castShadow = true; addOutline(cuff, LINE, 0.006, 16); g.add(cuff);
  // 방울: 털실 뭉치처럼 울퉁불퉁
  const pg = new THREE.IcosahedronGeometry(0.068, 3), p = pg.attributes.position, r = rng(8);
  for (let i = 0; i < p.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(p, i); v.multiplyScalar(1 + (r() - 0.5) * 0.18); p.setXYZ(i, v.x, v.y, v.z); }
  pg.computeVertexNormals();
  const pom = new THREE.Mesh(pg, paintMat('#f3e6cf', { grain: 40, grainAmt: 0.3, tint: '#9a86c4', rim: 0.3 }));
  pom.position.set(0, 0.43, 0.02); pom.castShadow = true; addOutline(pom, LINE, 0.005, 12); g.add(pom);
  g.rotation.x = 0.13;            // 이마 쪽은 살짝 올라가고 뒤로 눌러 쓴 모양
  g.scale.z = 0.9;                // 머리처럼 앞뒤가 조금 납작
  return g;
}

export function createSunHat() {
  const g = new THREE.Group(); g.name = 'sunhat';
  const straw = tex((x, w, h) => {
    x.fillStyle = '#ead29a'; x.fillRect(0, 0, w, h); const r = rng(5);
    for (let j = 0; j < h; j += 6) { x.fillStyle = j % 12 ? 'rgba(160,110,50,.18)' : 'rgba(255,245,215,.35)'; x.fillRect(0, j, w, 3); }   // 땋은 결
    for (let i = 0; i < 1200; i++) { x.fillStyle = r() < 0.5 ? 'rgba(130,90,40,.15)' : 'rgba(255,250,230,.25)'; x.fillRect(r() * w, r() * h, 3, 1); }
  }, 256, 256, [6, 3]);
  const mat = paintMat('#ffffff', { map: straw, grain: 10, tint: '#a08ac8', rim: 0.25, side: THREE.DoubleSide });
  const crown = new THREE.Mesh(shell(0.19, 0.024, 0.02), mat); crown.castShadow = true; addOutline(crown, LINE, 0.006, 16); g.add(crown);
  // 챙: 바깥으로 갈수록 부드럽게 아래로 처짐 + 살짝 물결
  const brimG = new THREE.RingGeometry(headR(0.19) + 0.02, headR(0.19) + 0.15, 48, 4), bp = brimG.attributes.position;
  for (let i = 0; i < bp.count; i++) {
    const x = bp.getX(i), y = bp.getY(i), d = Math.hypot(x, y), k = (d - headR(0.19) - 0.02) / 0.13, a = Math.atan2(y, x);
    bp.setXYZ(i, x, 0.19 - k * k * 0.06 + Math.sin(a * 5) * 0.006 * k, y);
  }
  brimG.computeVertexNormals();
  const brim = new THREE.Mesh(brimG, mat); brim.castShadow = true; addOutline(brim, LINE, 0.005, 16); g.add(brim);
  const bandPts = [new THREE.Vector2(headR(0.2) + 0.027, 0.195), new THREE.Vector2(headR(0.24) + 0.027, 0.24)];
  const band = new THREE.Mesh(new THREE.LatheGeometry(bandPts, 40), paintMat('#6fa8b8', { grain: 20, side: THREE.DoubleSide })); g.add(band);
  g.rotation.x = 0.1; g.scale.z = 0.9;
  return g;
}

/** 11~2월은 비니. 주소에 ?season=summer / winter 로 바꿔 볼 수 있음 */
export function isWinter(date = new Date()) {
  const q = new URLSearchParams(location.search).get('season');
  if (q === 'winter') return true; if (q === 'summer') return false;
  const m = date.getMonth() + 1; return m >= 11 || m <= 2;
}
export function createSeasonHat() { return isWinter() ? createBeanie() : createSunHat(); }
