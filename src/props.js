// S6 풍성한 해변: 소품 모음. 전부 코드로 만든 3D(새 이미지·모델 파일 없음), 그림책 재질(paint.js) 사용.
import * as THREE from 'three';
import { paintMat, addOutline, plaidTexture } from './paint.js';
import { ITEMS } from './items.js';

const LINE = '#8a6250';
const mesh = (geo, color, o = {}, line = 0.006) => {
  const m = new THREE.Mesh(geo, paintMat(color, { grain: 14, grainAmt: 0.16, rim: 0.25, ...o }));
  m.castShadow = true; if (line) addOutline(m, o.line || LINE, line, 16);
  return m;
};
let seed = 11; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

/** 큰 줄무늬 파라솔 */
export function createParasol(c1 = '#ee8f78', c2 = '#fbeeda') {
  const g = new THREE.Group(); g.name = 'parasol';
  const pole = mesh(new THREE.CylinderGeometry(0.022, 0.026, 2.35, 10), '#e9dcc6', { grain: 20 }); pole.position.y = 1.17; g.add(pole);
  const top = new THREE.Group(); top.position.y = 2.2; g.add(top);
  const N = 10, R = 1.32, Hh = 0.46;
  for (let i = 0; i < N; i++) {
    const seg = new THREE.Mesh(new THREE.ConeGeometry(R, Hh, 5, 1, true, (i / N) * Math.PI * 2, (Math.PI * 2) / N),
      paintMat(i % 2 ? c2 : c1, { grain: 6, grainAmt: 0.14, side: THREE.DoubleSide, tint: '#a08ac8', rim: 0.2 }));
    seg.castShadow = true; top.add(seg);
    // 가장자리 술 장식
    const tip = mesh(new THREE.SphereGeometry(0.035, 8, 6), i % 2 ? c1 : c2, {}, 0);
    const a = ((i + 0.5) / N) * Math.PI * 2; tip.position.set(Math.sin(a) * R * 0.99, -Hh / 2 - 0.02, Math.cos(a) * R * 0.99); tip.userData.tip = true; top.add(tip);   // S10: 밤에 불이 켜지는 방울
  }
  const knob = mesh(new THREE.SphereGeometry(0.05, 10, 8), '#c99662'); knob.position.y = Hh / 2 + 0.03; top.add(knob);
  g.userData.top = top;
  g.rotation.z = 0.1; g.rotation.x = 0.06;
  return g;
}

/** 작은 나무 탁자 + 김 나는 머그 + 책 더미 */
export function createTable() {
  const g = new THREE.Group(); g.name = 'table';
  const wood = { grain: 9, grainAmt: 0.2, tint: '#8a6a9c' };
  const topM = mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.035, 24), '#d2a06c', wood); topM.position.y = 0.44; g.add(topM);
  for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2 + 0.4; const leg = mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.46, 8), '#c08d5c', wood, 0.004); leg.position.set(Math.cos(a) * 0.2, 0.22, Math.sin(a) * 0.2); leg.rotation.set(Math.sin(a) * 0.16, 0, -Math.cos(a) * 0.16); g.add(leg); }
  // 머그
  const mug = new THREE.Group(); mug.position.set(-0.1, 0.46, 0.06);
  const cup = mesh(new THREE.CylinderGeometry(0.058, 0.05, 0.11, 20), '#fbf3e6', { grain: 30 }); cup.position.y = 0.055; mug.add(cup);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0595, 0.056, 0.03, 20, 1, true), paintMat('#7fb6c9', { grain: 20 })); band.position.y = 0.05; mug.add(band);
  const handle = mesh(new THREE.TorusGeometry(0.032, 0.01, 8, 14, Math.PI), '#fbf3e6', {}, 0.004); handle.position.set(0.058, 0.055, 0); handle.rotation.z = -Math.PI / 2; mug.add(handle);
  const tea = new THREE.Mesh(new THREE.CircleGeometry(0.052, 18), new THREE.MeshBasicMaterial({ color: '#b97a4e' })); tea.rotation.x = -Math.PI / 2; tea.position.y = 0.105; mug.add(tea);
  // 김(작은 반투명 방울 3개가 천천히 올라감)
  const steam = []; const sMat = new THREE.MeshBasicMaterial({ color: '#fff6ea', transparent: true, opacity: 0.35, depthWrite: false });
  for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), sMat.clone()); s.userData.ph = i / 4; mug.add(s); steam.push(s); }
  g.add(mug);
  // 책 더미
  const cols = ['#e58f7a', '#7fb0bf', '#f0cf86'];
  cols.forEach((c, i) => { const b = mesh(new THREE.BoxGeometry(0.2, 0.034, 0.145), c, { grain: 22 }, 0.004); b.position.set(0.09, 0.475 + i * 0.036, -0.06); b.rotation.y = 0.25 - i * 0.22; g.add(b);
    const pg = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.024, 0.14), paintMat('#fbf3e0', { grain: 30 })); pg.position.copy(b.position); pg.position.x += 0.006; pg.rotation.y = b.rotation.y; g.add(pg); });
  g.userData.update = (t) => steam.forEach((s) => { const k = (t * 0.22 + s.userData.ph) % 1; s.position.set(Math.sin(k * 6 + s.userData.ph * 9) * 0.02, 0.12 + k * 0.26, 0); s.scale.setScalar(0.6 + k * 1.6); s.material.opacity = 0.36 * Math.sin(Math.PI * k); });
  return g;
}

/** 등불: 따뜻한 빛이 살짝 흔들림 */
export function createLantern() {
  const g = new THREE.Group(); g.name = 'lantern';
  const metal = '#6e5a58';
  const base = mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.03, 14), metal, {}, 0.004); base.position.y = 0.015; g.add(base);
  const cap = mesh(new THREE.ConeGeometry(0.085, 0.07, 14), metal, {}, 0.004); cap.position.y = 0.245; g.add(cap);
  for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.78; const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.19, 6), paintMat(metal)); bar.position.set(Math.cos(a) * 0.062, 0.12, Math.sin(a) * 0.062); g.add(bar); }
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), new THREE.MeshBasicMaterial({ color: '#ffd98a' })); glow.position.y = 0.12; g.add(glow);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), new THREE.MeshBasicMaterial({ color: '#ffc36a', transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.y = 0.12; g.add(halo);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.006, 6, 14), paintMat(metal)); ring.position.y = 0.3; g.add(ring);
  const light = new THREE.PointLight('#ffb866', 0.3, 2.2, 2); light.position.y = 0.14; g.add(light);
  let on = 1; g.userData.setOn = (k) => { on = k; glow.material.color.set('#7a6658').lerp(new THREE.Color('#ffd98a'), k); };   // S10: 밤에만 불을 켬
  g.userData.glowAt = glow;
  g.userData.update = (t) => { const f = 0.85 + 0.15 * Math.sin(t * 7.3) * Math.sin(t * 2.9 + 1); light.intensity = 1.0 * f * on; halo.material.opacity = (0.16 + 0.07 * f) * on; halo.scale.setScalar(0.95 + 0.1 * f); };
  return g;
}

/** 격자무늬 돗자리 + 밀짚모자 + 슬리퍼 + 펼친 책 */
export function createMat(plain = false) {
  const g = new THREE.Group(); g.name = 'mat';
  const geo = new THREE.PlaneGeometry(1.5, 0.95, 12, 8); const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setZ(i, 0.012 * Math.sin(p.getX(i) * 7) * Math.cos(p.getY(i) * 6) + 0.006 * rnd());   // 살짝 구겨짐
  geo.computeVertexNormals();
  const tex = plaidTexture(); tex.repeat.set(3, 2);
  const cloth = new THREE.Mesh(geo, paintMat('#ffffff', { map: tex, grain: 5, tint: '#a08ac8' })); cloth.rotation.x = -Math.PI / 2; cloth.position.y = 0.012; cloth.receiveShadow = true; g.add(cloth);
  if (plain) return g;
  const hat = ITEMS.strawHat.build(); hat.scale.setScalar(1.25); hat.position.set(-0.38, 0.1, -0.1); hat.rotation.set(0.06, 0.6, 0.05); g.add(hat);
  for (const s of [-1, 1]) { const sl = mesh(new THREE.CapsuleGeometry(0.045, 0.13, 4, 10), '#ee8f78', { grain: 24 }, 0.004); sl.rotation.set(Math.PI / 2, 0, 0.25 * s + 0.3); sl.scale.z = 0.3; sl.position.set(0.42 + s * 0.07, 0.03, 0.22 + s * 0.02); g.add(sl);
    const st = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 6, 12, Math.PI), paintMat('#fbf3e6')); st.position.copy(sl.position); st.position.y += 0.012; st.position.z -= 0.03; st.rotation.y = 0.25 * s + 0.3; g.add(st); }
  // 펼쳐 엎어 둔 책
  const bk = new THREE.Group(); bk.position.set(0.1, 0.03, -0.15); bk.rotation.y = -0.4;
  for (const s of [-1, 1]) { const half = mesh(new THREE.BoxGeometry(0.14, 0.012, 0.2), '#7fb0bf', { grain: 22 }, 0.004); half.position.set(s * 0.068, 0.025, 0); half.rotation.z = s * 0.38; bk.add(half); }
  g.add(bk);
  return g;
}

/** 모래성 + 양동이 + 삽 */
export function createCastle() {
  const g = new THREE.Group(); g.name = 'castle';
  const sand = { grain: 40, grainAmt: 0.3, tint: '#b98a8a', rim: 0.15 }, C = '#efc58d';
  const wall = mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.16, 20), C, sand, 0.005); wall.position.y = 0.08; g.add(wall);
  const towers = [];
  const tower = (x, z, r, h) => { const parts = []; const t = mesh(new THREE.CylinderGeometry(r * 0.9, r, h, 14), C, sand, 0.005); t.position.set(x, h / 2, z); g.add(t);
    const roof = mesh(new THREE.ConeGeometry(r * 1.05, r * 1.3, 14), '#f3d09c', sand, 0.005); roof.position.set(x, h + r * 0.62, z); g.add(roof); parts.push(roof);
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const c = new THREE.Mesh(new THREE.BoxGeometry(r * 0.3, r * 0.3, r * 0.3), paintMat(C, sand)); c.position.set(x + Math.cos(a) * r * 0.82, h + r * 0.08, z + Math.sin(a) * r * 0.82); c.castShadow = true; g.add(c); parts.push(c); } towers.push(parts); };
  tower(0, 0, 0.13, 0.42); tower(-0.27, 0.12, 0.085, 0.27); tower(0.27, 0.1, 0.085, 0.25); tower(0.02, 0.3, 0.07, 0.2);
  const door = new THREE.Mesh(new THREE.CircleGeometry(0.045, 12, 0, Math.PI), new THREE.MeshBasicMaterial({ color: '#b98c62' })); door.position.set(0.0, 0.03, 0.372); g.add(door);
  const fp = mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.22, 6), '#c99662', {}, 0); fp.position.set(0, 0.42 + 0.17 + 0.11, 0); g.add(fp);
  const fg = new THREE.PlaneGeometry(0.13, 0.08, 6, 1); fg.translate(0.065, 0, 0);
  const flag = new THREE.Mesh(fg, paintMat('#ee8f78', { side: THREE.DoubleSide, grain: 20 })); flag.position.set(0, 0.42 + 0.17 + 0.17, 0); flag.castShadow = true; g.add(flag);
  // 양동이, 삽
  const bucket = mesh(new THREE.CylinderGeometry(0.105, 0.08, 0.16, 18, 1, true), '#74b9c4', { grain: 22, side: THREE.DoubleSide }); bucket.position.set(0.55, 0.08, 0.28); g.add(bucket);
  const bsand = new THREE.Mesh(new THREE.CircleGeometry(0.098, 16), paintMat(C, sand)); bsand.rotation.x = -Math.PI / 2; bsand.position.set(0.55, 0.14, 0.28); g.add(bsand);
  const bh = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.007, 6, 18, Math.PI), paintMat('#fbf3e6')); bh.position.set(0.55, 0.16, 0.28); bh.rotation.x = -0.5; g.add(bh);
  const sh = new THREE.Group(); sh.position.set(0.36, 0.02, 0.52); sh.rotation.set(0, 0.9, 0);
  const hd = mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8), '#f2c35f', {}, 0.004); hd.rotation.z = Math.PI / 2; sh.add(hd);
  const bl = mesh(new THREE.BoxGeometry(0.1, 0.012, 0.075), '#f2c35f', {}, 0.004); bl.position.x = 0.15; sh.add(bl); g.add(sh);
  // S11: 읽은 시간만큼 가운데 탑이 한 층씩 높아짐
  const tierG = new THREE.Group(); g.add(tierG); const lift = [...towers[0], fp, flag].map((o) => [o, o.position.y]);
  g.userData.setLevel = (n) => {
    n = Math.max(0, Math.min(6, n | 0)); while (tierG.children.length) tierG.remove(tierG.children[0]);
    for (let i = 0; i < n; i++) { const r = 0.12 - i * 0.008; const d = mesh(new THREE.CylinderGeometry(r * 0.92, r, 0.1, 14), i % 2 ? '#f3d09c' : C, sand, 0.005); d.position.set(0, 0.42 + 0.05 + i * 0.1, 0); tierG.add(d); }
    for (const [o, y] of lift) o.position.y = y + n * 0.1;
  };
  const pos = fg.attributes.position, base = Float32Array.from(pos.array);
  g.userData.update = (t) => { for (let i = 0; i < pos.count; i++) { const x = base[i * 3]; pos.setZ(i, Math.sin(x * 40 - t * 5) * 0.012 * (x / 0.13)); } pos.needsUpdate = true; };
  return g;
}

/** 비치볼 */
export function createBall() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
  ['#ee8f78', '#fbf3e6', '#74b9c4', '#fbf3e6', '#f2c35f', '#fbf3e6'].forEach((col, i) => { x.fillStyle = col; x.fillRect((i * 256) / 6, 0, 256 / 6 + 1, 64); });
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 28, 18), paintMat('#ffffff', { map: tex, grain: 8, rim: 0.3, form: 1 })); b.castShadow = true; addOutline(b, LINE, 0.006, 12);
  b.rotation.set(0.5, 0.4, 0.3); b.name = 'ball'; return b;
}

/** 바위 무더기 */
export function createRocks() {
  const g = new THREE.Group(); g.name = 'rocks';
  [[0, 0, 0.32, 0.62], [0.42, 0.12, 0.2, 0.6], [-0.36, 0.2, 0.17, 0.55], [0.15, 0.36, 0.12, 0.5], [-0.62, -0.05, 0.1, 0.6]].forEach(([x, z, r, sy], i) => {
    const geo = new THREE.IcosahedronGeometry(r, 1); const p = geo.attributes.position;
    for (let k = 0; k < p.count; k++) { const n = 1 + 0.16 * Math.sin(p.getX(k) * 23 + i) * Math.cos(p.getZ(k) * 19 + p.getY(k) * 13); p.setXYZ(k, p.getX(k) * n, p.getY(k) * n, p.getZ(k) * n); }
    geo.computeVertexNormals();
    const m = mesh(geo, i % 2 ? '#a99aa6' : '#b9a79f', { grain: 16, grainAmt: 0.3, tint: '#7d6f9c', rim: 0.35, form: 1 }, 0.008); m.scale.y = sy; m.position.set(x, r * sy * 0.55, z); m.rotation.y = i * 1.3; g.add(m);
  });
  return g;
}

/** 물가에 떠밀려 온 나무 */
export function createDriftwood() {
  const g = new THREE.Group(); g.name = 'driftwood';
  const o = { grain: 10, grainAmt: 0.3, tint: '#8a7a9c' };
  const log = mesh(new THREE.CylinderGeometry(0.06, 0.085, 1.5, 10), '#c9b19a', o); log.rotation.z = Math.PI / 2; log.position.y = 0.07; g.add(log);
  const br = mesh(new THREE.CylinderGeometry(0.02, 0.04, 0.5, 8), '#c9b19a', o, 0.004); br.position.set(0.25, 0.2, 0.05); br.rotation.set(0.3, 0, -0.7); g.add(br);
  const br2 = mesh(new THREE.CylinderGeometry(0.015, 0.03, 0.32, 8), '#bfa58c', o, 0.004); br2.position.set(-0.4, 0.14, -0.06); br2.rotation.set(-0.4, 0, 0.9); g.add(br2);
  return g;
}

/** 불가사리 */
export function createStarfish(color = '#f08f6f') {
  const s = new THREE.Shape(); const N = 5;
  for (let i = 0; i < N * 2; i++) { const a = (i / (N * 2)) * Math.PI * 2, r = i % 2 ? 0.045 : 0.13; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i === 0) s.moveTo(x, y); else s.lineTo(x, y); }
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.025, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.018, bevelSegments: 3, curveSegments: 4 });
  const m = mesh(geo, color, { grain: 50, grainAmt: 0.3, rim: 0.4 }, 0.005); m.rotation.x = -Math.PI / 2; m.name = 'starfish';
  const g = new THREE.Group(); g.add(m); return g;
}

/** 부채꼴 조개 (S4 형태) / 소라 */
export function createShell(color = '#f2a9a0') {
  const g = new THREE.Group(); g.name = 'shell';
  const geo = new THREE.SphereGeometry(0.15, 36, 14, 0, Math.PI * 2, 0, Math.PI / 2); const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), r = Math.hypot(x, z) || 1, a = Math.atan2(z, x); const rib = 1 + 0.11 * Math.cos(a * 11) * Math.min(1, r / 0.1); p.setX(i, x * rib); p.setZ(i, z * rib); }
  geo.computeVertexNormals();
  const body = mesh(geo, color, { grain: 28, grainAmt: 0.25, tint: '#b07ab0', rim: 0.35, line: '#a4645a' }); body.scale.set(1.0, 0.55, 0.9);
  g.add(body); g.rotation.set(0.12, 0.5, -0.1); return g;
}
export function createConch(color = '#f6dcc4') {
  const pts = []; for (let i = 0; i <= 14; i++) { const k = i / 14; pts.push(new THREE.Vector2(0.075 * Math.sin(Math.PI * Math.pow(k, 0.75)) * (1 + 0.12 * Math.sin(k * 30)), k * 0.24)); }
  const m = mesh(new THREE.LatheGeometry(pts, 20), color, { grain: 30, grainAmt: 0.25, tint: '#b07ab0', rim: 0.4, line: '#a4645a' }, 0.005);
  m.rotation.set(Math.PI / 2 - 0.15, 0, 0.4); m.position.y = 0.06; const g = new THREE.Group(); g.add(m); g.name = 'conch'; return g;
}

/** 바닷가 풀 한 포기: 가는 잎 여러 장이 바람에 흔들림 */
export function createGrass(n = 16, h = 0.7) {
  const g = new THREE.Group(); g.name = 'grass'; const blades = [];
  const cols = ['#9db77a', '#b7c486', '#86a76f', '#c9cf93'];
  for (let i = 0; i < n; i++) {
    const hh = h * (0.55 + rnd() * 0.6), geo = new THREE.PlaneGeometry(0.035, hh, 1, 5); geo.translate(0, hh / 2, 0);
    const p = geo.attributes.position; for (let k = 0; k < p.count; k++) { const y = p.getY(k) / hh; p.setX(k, p.getX(k) * (1 - y * 0.92)); p.setZ(k, y * y * 0.22 * hh); }
    geo.computeVertexNormals();
    const b = new THREE.Mesh(geo, paintMat(cols[i % 4], { grain: 20, grainAmt: 0.2, side: THREE.DoubleSide, rim: 0.45, tint: '#6f8a9c' })); b.castShadow = true;
    const piv = new THREE.Group(); const a = rnd() * Math.PI * 2, r = rnd() * 0.16; piv.position.set(Math.cos(a) * r, 0, Math.sin(a) * r); piv.rotation.y = rnd() * Math.PI * 2; piv.rotation.x = (rnd() - 0.3) * 0.5;
    piv.add(b); g.add(piv); blades.push([piv, piv.rotation.x, rnd() * 6]);
  }
  // 작은 분홍 꽃 몇 송이
  for (let i = 0; i < 3; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), paintMat(i % 2 ? '#f6b3c2' : '#fbe9a6', { rim: 0.4 })); f.position.set((rnd() - 0.5) * 0.3, h * (0.45 + rnd() * 0.3), (rnd() - 0.5) * 0.3); g.add(f); }
  g.userData.update = (t) => blades.forEach(([piv, rx, ph]) => { piv.rotation.x = rx + Math.sin(t * 1.3 + ph) * 0.07 + Math.sin(t * 0.37 + ph * 2) * 0.05; });
  return g;
}

/** 나무 팻말 "파도서재" */
export function createSign() {
  const g = new THREE.Group(); g.name = 'sign';
  const post = mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.9, 8), '#b98a5e', { grain: 12, grainAmt: 0.2 }); post.position.set(0, 0.45, -0.045); post.rotation.z = -0.05; g.add(post);   // S8: 기둥을 판 뒤로 (글씨를 가리지 않게)
  const c = document.createElement('canvas'); c.width = 512; c.height = 192; const x = c.getContext('2d');
  x.fillStyle = '#e7c49a'; x.fillRect(0, 0, 512, 192);
  for (let i = 0; i < 40; i++) { x.strokeStyle = `rgba(140,96,64,${0.05 + rnd() * 0.1})`; x.lineWidth = 1 + rnd() * 2; x.beginPath(); const y = rnd() * 192; x.moveTo(0, y); x.bezierCurveTo(170, y + rnd() * 12 - 6, 340, y + rnd() * 12 - 6, 512, y + rnd() * 8 - 4); x.stroke(); }
  const bg = x.getImageData(0, 0, 512, 192);
  // S8: 손으로 쓴 필기체(나눔펜). 서체가 늦게 오면 받은 뒤 다시 그린다
  const FONT = '"Nanum Pen Script", "Gaegu", cursive';
  const draw = () => { x.putImageData(bg, 0, 0); x.save(); x.translate(256, 104); x.rotate(-0.035); x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = `150px ${FONT}`;
    x.globalAlpha = 0.35; x.fillStyle = '#fff3e0'; x.fillText('파도서재', 2, 3); x.globalAlpha = 1;
    x.lineJoin = 'round'; x.lineWidth = 3; x.strokeStyle = '#5a3424'; x.fillStyle = '#5a3424'; x.fillText('파도서재', 0, 0); x.strokeText('파도서재', 0, 0); x.restore(); };
  draw();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  document.fonts?.load?.(`150px ${FONT}`, '파도서재').then(() => { draw(); tex.needsUpdate = true; }).catch(() => {});
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.23, 0.03), [paintMat('#d4ad82'), paintMat('#d4ad82'), paintMat('#d4ad82'), paintMat('#d4ad82'), paintMat('#ffffff', { map: tex, grain: 8, grainAmt: 0.1 }), paintMat('#d4ad82')]);
  board.castShadow = true; board.position.y = 0.78; board.rotation.z = 0.04; g.add(board);
  const ol = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.25, 0.02), new THREE.MeshBasicMaterial({ color: LINE })); ol.position.set(0, 0.78, -0.012); ol.rotation.z = 0.04; g.add(ol);
  return g;
}

/** 조약돌 */
export function createPebble(r = 0.045, color = '#b3a092') {
  const p = mesh(new THREE.SphereGeometry(r, 12, 8), color, { grain: 30, grainAmt: 0.2 }, 0); p.scale.set(1.2, 0.55, 0.9); p.position.y = r * 0.2; return p;
}

/** S11 모닥불: 돌 테두리, 엇갈린 장작, 일렁이는 불꽃 세 겹, 튀어 오르는 불티. setOn(0~1)로 켜고 끔 */
export function createCampfire() {
  const g = new THREE.Group(); g.name = 'campfire';
  for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2; const s = mesh(new THREE.DodecahedronGeometry(0.06 + rnd() * 0.02, 0), i % 2 ? '#9c8d86' : '#b3a39a', { grain: 30 }, 0.004); s.scale.y = 0.65; s.position.set(Math.cos(a) * 0.24, 0.03, Math.sin(a) * 0.24); s.rotation.set(rnd(), rnd() * 3, rnd()); g.add(s); }
  const ash = new THREE.Mesh(new THREE.CircleGeometry(0.2, 20), new THREE.MeshBasicMaterial({ color: '#5b4a44' })); ash.rotation.x = -Math.PI / 2; ash.position.y = 0.006; g.add(ash);
  for (let i = 0; i < 4; i++) { const l = mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.36, 8), i % 2 ? '#8a5a3c' : '#9b6a48', { grain: 26 }, 0.004); l.rotation.set(Math.PI / 2 - 0.35, (i / 4) * Math.PI * 2 + 0.3, 0); l.position.y = 0.07; g.add(l); }
  const fireMat = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, depthWrite: false, blending: THREE.AdditiveBlending });
  const flames = [['#ff7a2e', 0.85, 0.13, 0.34], ['#ffb347', 0.8, 0.09, 0.27], ['#fff1b0', 0.9, 0.05, 0.17]].map(([c, o, r, h], i) => {
    const geo = new THREE.ConeGeometry(r, h, 10, 4, true); const p = geo.attributes.position;
    for (let k = 0; k < p.count; k++) { const y = p.getY(k); p.setX(k, p.getX(k) * (1 + 0.25 * Math.sin(y * 18 + i))); }
    const m = new THREE.Mesh(geo, fireMat(c, o)); m.position.y = 0.08 + h / 2; m.userData.h = h; g.add(m); return m;
  });
  const sparks = Array.from({ length: 14 }, () => { const s = new THREE.Mesh(new THREE.SphereGeometry(0.008, 5, 4), fireMat('#ffcf6a', 1)); s.userData = { t: rnd() * 2, x: 0, z: 0 }; g.add(s); return s; });
  const light = new THREE.PointLight('#ff9a4a', 0, 3.4, 1.6); light.position.y = 0.35; g.add(light);
  const glowAt = new THREE.Object3D(); glowAt.position.y = 0.2; g.add(glowAt);
  let on = 0; g.userData.on = 0;
  g.userData.setOn = (k) => { on = k; g.userData.on = k; };
  g.userData.glowAt = glowAt;
  g.userData.update = (t, dt) => {
    const f = 0.8 + 0.2 * Math.sin(t * 9.1) * Math.sin(t * 3.7 + 1.3);
    flames.forEach((m, i) => { m.visible = on > 0.02; m.scale.set(on * (0.9 + 0.12 * Math.sin(t * (11 + i * 3) + i)), on * (0.85 + 0.25 * Math.sin(t * (7 + i * 2) + i * 2)), on * (0.9 + 0.1 * Math.cos(t * 9 + i))); m.rotation.y = t * (0.8 + i * 0.5); m.position.y = 0.08 + m.userData.h / 2 * m.scale.y; });
    for (const s of sparks) { const u = s.userData; u.t += (dt || 0.016) * 0.7; if (u.t > 1) { u.t = 0; u.x = (rnd() - 0.5) * 0.12; u.z = (rnd() - 0.5) * 0.12; } s.visible = on > 0.3; s.position.set(u.x + Math.sin(u.t * 8 + u.x * 50) * 0.04 * u.t, 0.15 + u.t * 0.7, u.z); s.material.opacity = (1 - u.t) * on; }
    light.intensity = 1.2 * f * on;
  };
  return g;
}

/** S11 유리병 편지: 코르크 마개, 말린 쪽지가 비치는 초록빛 병. 물가에서 살짝 흔들림 */
export function createBottle() {
  const g = new THREE.Group(); g.name = 'bottle';
  const glass = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.13, 6, 14), new THREE.MeshToonMaterial({ color: '#9fd6c2', transparent: true, opacity: 0.6 })); glass.rotation.z = Math.PI / 2; glass.position.y = 0.05; g.add(glass); addOutline(glass, '#4f7f74', 0.004, 12);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.05, 10), glass.material); neck.rotation.z = Math.PI / 2; neck.position.set(0.12, 0.05, 0); g.add(neck);
  const cork = mesh(new THREE.CylinderGeometry(0.019, 0.017, 0.035, 10), '#b98a5a', {}, 0.003); cork.rotation.z = Math.PI / 2; cork.position.set(0.155, 0.05, 0); g.add(cork);
  const paper = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.12, 10), '#fbf0d8', {}, 0); paper.rotation.z = Math.PI / 2; paper.position.y = 0.05; g.add(paper);
  const ribbon = mesh(new THREE.TorusGeometry(0.026, 0.004, 6, 14), '#e07a5f', {}, 0); ribbon.rotation.y = Math.PI / 2; ribbon.position.y = 0.05; g.add(ribbon);
  g.userData.update = (t) => { g.rotation.z = Math.sin(t * 1.6) * 0.06; g.position.y = (g.userData.y0 || 0) + Math.abs(Math.sin(t * 1.6)) * 0.01; };
  return g;
}
