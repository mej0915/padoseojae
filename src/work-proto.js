// S13 현생(일하는 날) 시안: 책상 앞에서 일하는 물범. 바닷가 장면과 따로 그려 보는 시안용 장면.
import * as THREE from 'three';
import { createSeal } from './seal.js';
import { paintMat, addOutline } from './paint.js';

const LINE = '#6a4a3e';
const q = new URLSearchParams(location.search);
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const evening = q.get('t') === 'eve';
scene.background = new THREE.Color(evening ? '#3c3552' : '#f3e3d3');
const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);

const M = (geo, color, o = {}, line = 0.006) => { const m = new THREE.Mesh(geo, paintMat(color, { grain: 14, grainAmt: 0.1, rim: 0.15, ...o })); m.castShadow = true; m.receiveShadow = true; if (line) addOutline(m, o.line || LINE, line, 16); return m; };
const rbox = (w, h, d) => new THREE.BoxGeometry(w, h, d, 2, 2, 2);

// ----- 방: 벽, 바닥, 창문 -----
const wallCol = evening ? '#8f86a8' : '#f7e6d4';
const wall = new THREE.Mesh(new THREE.PlaneGeometry(12, 6), paintMat(wallCol, { grain: 30, grainAmt: 0.08 })); wall.position.set(0, 2.2, -1.6); wall.receiveShadow = true; scene.add(wall);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), paintMat(evening ? '#6e5c6a' : '#d9b38f', { grain: 20, grainAmt: 0.12 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
// 창문: 하늘과 먼 바다 (휴가가 그리운 현생)
const winTex = (() => { const c = document.createElement('canvas'); c.width = 512; c.height = 384; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 384); if (evening) { g.addColorStop(0, '#2c2f5e'); g.addColorStop(0.7, '#e59a8c'); g.addColorStop(1, '#f6c79a'); } else { g.addColorStop(0, '#9fd3f0'); g.addColorStop(1, '#e8f6fb'); }
  x.fillStyle = g; x.fillRect(0, 0, 512, 384);
  x.fillStyle = evening ? '#3d3a5e' : '#b9c9dc'; for (let i = 0; i < 9; i++) { const w = 40 + (i * 37) % 50, h = 90 + (i * 53) % 140; x.fillRect(i * 58 - 8, 384 - h, w, h); }
  if (evening) { x.fillStyle = '#ffe7a8'; for (let i = 0; i < 60; i++) x.fillRect((i * 97) % 512, 250 + (i * 31) % 130, 5, 6); }
  x.fillStyle = 'rgba(255,255,255,.85)'; for (const [cx, cy] of [[110, 70], [330, 110]]) { x.beginPath(); x.ellipse(cx, cy, 52, 16, 0, 0, 7); x.ellipse(cx + 30, cy - 10, 34, 18, 0, 0, 7); x.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const win = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.4), new THREE.MeshBasicMaterial({ map: winTex })); win.position.set(-1.05, 2.0, -1.58); scene.add(win);
const frameMat = '#fbf3e8';
for (const [w, h, x, y] of [[2.02, 0.07, -1.05, 2.7], [2.02, 0.07, -1.05, 1.3], [0.07, 1.46, -2.03, 2.0], [0.07, 1.46, -0.07, 2.0], [0.05, 1.4, -1.05, 2.0]]) { const f = M(rbox(w, h, 0.06), frameMat, {}, 0.004); f.position.set(x, y, -1.56); scene.add(f); }
// 벽 액자: 바다 그림
const art = M(rbox(0.62, 0.46, 0.03), '#fbf3e8', {}, 0.004); art.position.set(1.05, 2.25, -1.57); scene.add(art);
const artIn = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.36), new THREE.MeshBasicMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = 128; c.height = 96; const x = c.getContext('2d'); x.fillStyle = '#ffd3b0'; x.fillRect(0, 0, 128, 50); x.fillStyle = '#6fb8c4'; x.fillRect(0, 50, 128, 22); x.fillStyle = '#f3c98f'; x.fillRect(0, 72, 128, 24); x.fillStyle = '#ffeec2'; x.beginPath(); x.arc(84, 48, 12, Math.PI, 0); x.fill(); x.fillStyle = '#ee8f78'; x.beginPath(); x.moveTo(30, 60); x.lineTo(52, 60); x.lineTo(41, 50); x.fill(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })() }));
artIn.position.set(1.05, 2.25, -1.55); scene.add(artIn);

// ----- 책상 -----
const rig = new THREE.Group(); rig.rotation.y = Number(q.get('yaw') || -2.25); rig.position.set(0.0, 0, 0.0); scene.add(rig);   /* 책상·의자·물범 한 묶음: 물범 옆얼굴이 보이게 돌림 */
const desk = new THREE.Group(); rig.add(desk);
const top = M(rbox(2.2, 0.07, 0.95), '#c99a72', { grain: 10, grainAmt: 0.16 }); top.position.set(0.15, 0.92, -0.55); desk.add(top);
for (const [x, z] of [[-0.9, -0.95], [1.2, -0.95], [-0.9, -0.15], [1.2, -0.15]]) { const l = M(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 10), '#8d6a52', {}, 0.004); l.position.set(x, 0.45, z); desk.add(l); }

// 모니터 (물범 쪽으로 화면, 카메라에서 옆모습이 살짝 보이게)
const MONX = Number(q.get('mx') || -0.25); const mon = new THREE.Group(); mon.position.set(MONX, 0.96, -0.78); mon.rotation.y = Math.atan2(0.12 - MONX, 0.24 + 0.78); desk.add(mon);
const bez = M(rbox(0.68, 0.44, 0.04), '#f4efe8', {}, 0.006); bez.position.y = 0.36; mon.add(bez);
const scrTex = (() => { const c = document.createElement('canvas'); c.width = 512; c.height = 300; const x = c.getContext('2d'); x.fillStyle = '#2f3550'; x.fillRect(0, 0, 512, 300);
  const cols = ['#ffb86b', '#8fd3c8', '#f39ab0', '#c8b6ff', '#ffe08a']; for (let i = 0; i < 15; i++) { let px = 20 + (i % 4) * 18; for (let k = 0; k < 4; k++) { const w = 20 + ((i * 7 + k * 13) % 70); x.fillStyle = cols[(i + k) % 5]; x.fillRect(px, 18 + i * 18, w, 8); px += w + 10; } }
  x.fillStyle = '#ffd36b'; x.fillRect(360, 200, 120, 70); x.fillStyle = '#2f3550'; x.font = 'bold 26px sans-serif'; x.fillText('D-3', 388, 245);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.38), new THREE.MeshBasicMaterial({ map: scrTex })); scr.position.set(0, 0.36, 0.021); mon.add(scr);
const neck = M(new THREE.CylinderGeometry(0.025, 0.03, 0.16, 10), '#e9e2da', {}, 0.004); neck.position.y = 0.1; mon.add(neck);
const foot = M(new THREE.CylinderGeometry(0.12, 0.13, 0.02, 20), '#e9e2da', {}, 0.004); foot.position.y = 0.01; mon.add(foot);
const scrLight = new THREE.PointLight('#9fb4ff', evening ? 1.2 : 0.4, 2.2, 2); scrLight.position.set(0, 0.42, 0.3); mon.add(scrLight);

// 키보드 (도독도독)
const kb = new THREE.Group(); kb.position.set(0.1, 0.96, -0.2); kb.rotation.y = -0.15; desk.add(kb);
const kbBase = M(rbox(0.62, 0.03, 0.2), '#fbf3e8', {}, 0.004); kb.add(kbBase);
const keys = []; const keyCols = ['#f6d7c3', '#fbe9dc', '#cfe7e2'];
for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) { const k = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.016, 0.034), paintMat(keyCols[(r * 3 + c) % 7 === 0 ? 2 : (r + c) % 2], { grain: 30 })); k.position.set(-0.264 + c * 0.048, 0.022, -0.072 + r * 0.048); k.castShadow = true; kb.add(k); keys.push(k); }
// 머그컵, 메모지, 화분, 스탠드
const mug = M(new THREE.CylinderGeometry(0.06, 0.055, 0.12, 18), '#ee8f78', {}, 0.005); mug.position.set(-0.55, 1.02, -0.6); desk.add(mug);
const handle = M(new THREE.TorusGeometry(0.035, 0.011, 8, 16, Math.PI), '#ee8f78', {}, 0); handle.rotation.z = -Math.PI / 2; handle.position.set(-0.49, 1.02, -0.55); desk.add(handle);
for (const [x, z, c, r] of [[-0.55, -0.4, '#ffe08a', 0.2], [-0.42, -0.5, '#bfe3d6', -0.15], [0.6, -0.78, '#f6b8c8', 0.35]]) { const n = M(rbox(0.12, 0.004, 0.12), c, {}, 0); n.position.set(x, 0.96, z); n.rotation.y = r; desk.add(n); }
const pot = M(new THREE.CylinderGeometry(0.1, 0.075, 0.16, 18), '#d98d6c', {}, 0.005); pot.position.set(0.78, 1.04, -0.92); pot.scale.setScalar(0.8); desk.add(pot);
const soil = new THREE.Mesh(new THREE.CircleGeometry(0.092, 18), paintMat('#6b4a3a')); soil.rotation.x = -Math.PI / 2; soil.position.set(0.78, 1.115, -0.92); desk.add(soil);
const plant = new THREE.Group(); plant.position.set(0.78, 1.11, -0.92); plant.scale.setScalar(0.75); desk.add(plant);
const leafMat = paintMat('#7cbf86', { grain: 10, side: THREE.DoubleSide });
for (let i = 0; i < 9; i++) { const lf = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), leafMat); lf.scale.set(0.55, 1.5, 0.18); const a = i * 2.4, h = 0.08 + (i % 3) * 0.06; lf.position.set(Math.cos(a) * 0.05, h, Math.sin(a) * 0.05); lf.rotation.set(Math.sin(a) * 0.5, a, Math.cos(a) * 0.5); lf.castShadow = true; plant.add(lf); }
// 물뿌리개 (화분 물주기 소품)
const can = new THREE.Group(); can.position.set(-0.85, 0.96, -0.3); desk.add(can);
const canBody = M(new THREE.CylinderGeometry(0.07, 0.08, 0.13, 16), '#8fc7d6', {}, 0.005); canBody.position.y = 0.065; can.add(canBody);
const spout = M(new THREE.CylinderGeometry(0.01, 0.016, 0.16, 8), '#8fc7d6', {}, 0.003); spout.rotation.z = -0.9; spout.position.set(0.1, 0.1, 0); can.add(spout);
const lamp = new THREE.Group(); lamp.position.set(-0.95, 0.96, -0.85); desk.add(lamp);
const lb = M(new THREE.CylinderGeometry(0.08, 0.09, 0.02, 16), '#f4d36b', {}, 0.004); lamp.add(lb);
const la = M(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 8), '#f4d36b', {}, 0.003); la.position.set(0, 0.2, 0.0); la.rotation.z = 0.25; lamp.add(la);
const lh = M(new THREE.ConeGeometry(0.09, 0.12, 16, 1, true), '#f4d36b', { side: THREE.DoubleSide }, 0.004); lh.position.set(-0.1, 0.42, 0.05); lh.rotation.z = 0.9; lamp.add(lh);

// 의자
const chair = new THREE.Group(); chair.position.set(0.12, 0, 0.36); rig.add(chair);
const seat = M(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 24), '#9ec7b8', {}, 0.006); seat.position.y = 0.58; chair.add(seat);
const back = M(rbox(0.6, 0.5, 0.07), '#9ec7b8', {}, 0.006); back.position.set(0, 0.86, 0.33); back.rotation.x = -0.12; chair.add(back);
const pole = M(new THREE.CylinderGeometry(0.03, 0.03, 0.45, 10), '#7a7a86', {}, 0.004); pole.position.y = 0.26; chair.add(pole);
for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const leg = M(new THREE.CylinderGeometry(0.018, 0.018, 0.3, 8), '#7a7a86', {}, 0); leg.rotation.z = Math.PI / 2; leg.rotation.y = a; leg.position.set(Math.cos(a) * 0.14, 0.04, -Math.sin(a) * 0.14); chair.add(leg); }

// ----- 물범 -----
const seal = createSeal(); rig.add(seal.group);
seal.group.position.set(0.12, 0.62, 0.26); seal.group.scale.setScalar(0.82);
seal.bones.book.scale.setScalar(0.0001);
const { armL, armR, head, spine } = seal.bones;
// 줄 이어폰: 양쪽 귀에 하얀 콩, 줄이 목 앞에서 만나 아래로 늘어짐
const podMat = paintMat('#ffffff', { grain: 40, grainAmt: 0.04, rim: 0.4 });
for (const s of [-1, 1]) { const bud = new THREE.Mesh(new THREE.SphereGeometry(0.032, 14, 12), podMat); bud.scale.set(0.8, 1, 1); bud.position.set(s * 0.255, 0.07, -0.02); head.add(bud); addOutline(bud, '#9c8f88', 0.004, 20);
  const pts = [[s * 0.26, 0.29, -0.02], [s * 0.25, 0.16, -0.12], [s * 0.12, 0.02, -0.25], [0, -0.06, -0.29]].map((p) => new THREE.Vector3(...p));
  const cord = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.0045, 6), podMat); spine.add(cord); }
{ const pts = [[0, -0.06, -0.29], [0.03, -0.2, -0.31], [0.1, -0.34, -0.3], [0.18, -0.4, -0.22]].map((p) => new THREE.Vector3(...p));
  spine.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.0055, 6), podMat)); }
// 미간 주름 (집중 1단계부터)
const browMat = new THREE.MeshBasicMaterial({ color: '#7a4a30' });
const brows = [-1, 1].map((s) => { const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.0055, 0.03, 3, 6), browMat); b.position.set(s * 0.017, 0.215, -0.228); b.rotation.z = s * 0.25; b.visible = false; head.add(b); return b; });
// 레이저 눈빛: 두 눈에서 모니터까지
const laser = new THREE.Group(); scene.add(laser);
const beamMat = new THREE.MeshBasicMaterial({ color: '#ff2f6a', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
const glowMat = new THREE.MeshBasicMaterial({ color: '#ff5c8a', transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false });
const beams = [0, 1].map(() => { const g = new THREE.Group(); const core = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 1, 8, 1, true), beamMat); const halo = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 10, 1, true), glowMat); g.add(core, halo); laser.add(g); return g; });
const dotTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,120,160,.8)'); g.addColorStop(1, 'rgba(255,80,120,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
const sparks = [0, 1, 2, 3].map(() => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); s.scale.setScalar(0.09); laser.add(s); return s; });
const F = Number(q.get('f') ?? 3);   /* 집중 단계: 0 평소, 1 미간 주름, 2 모니터에 얼굴 들이대기, 3 레이저 */
const focus = F >= 3; laser.visible = focus; brows.forEach((b) => { b.visible = F >= 1; });

// ----- 빛 -----
scene.add(new THREE.HemisphereLight(evening ? '#c8b8ff' : '#fff6ea', evening ? '#5a4660' : '#d8b89a', evening ? 0.9 : 1.5));
const sun = new THREE.DirectionalLight(evening ? '#ffc6a0' : '#fff1dc', evening ? 1.2 : 2.2); sun.position.set(-2.5, 4, 2.5); sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -3; sun.shadow.camera.right = 3; sun.shadow.camera.top = 3; sun.shadow.camera.bottom = -2; sun.shadow.bias = -0.0008; scene.add(sun);
if (evening) { const deskLamp = new THREE.PointLight('#ffd08a', 2.2, 2.5, 2); deskLamp.position.set(0.85, 1.3, -0.75); scene.add(deskLamp); }

// ----- 카메라 -----
const view = q.get('v') || 'front';
function place() {
  const W = innerWidth, H = innerHeight; renderer.setSize(W, H, false); camera.aspect = W / H;
  const portrait = H > W;
  if (view === 'side') { camera.position.set(2.3, 1.75, 1.2); camera.lookAt(0.0, 1.05, -0.45); }
  else { rig.updateMatrixWorld(true); const c = new THREE.Vector3(0.1, 1.15, -0.15); rig.localToWorld(c); camera.position.set(c.x - (portrait ? 0.2 : 0.3), c.y + (portrait ? 0.55 : 0.42), c.z + (portrait ? 3.9 : 2.4)); camera.lookAt(c.x + (portrait ? 0.32 : 0), c.y - (portrait ? 0.12 : 0.05), c.z); }
  camera.fov = portrait ? 40 : 34; camera.updateProjectionMatrix();
}
place(); addEventListener('resize', place);

// ----- 움직임: 타자 치기, 레이저 -----
const eyeW = new THREE.Vector3(), tgt = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), tmpQ = new THREE.Quaternion();
let t0 = performance.now();
seal.group.rotation.y = 0;   // 물범 얼굴은 -z(모니터 쪽)
function frame(now) {
  const t = (now - t0) / 1000;
  // 몸은 살짝 앞으로, 두 팔은 키보드로
  const lean = F >= 2 ? 1 : 0, look = Math.atan2(MONX - 0.12, 1.02);   /* 모니터 쪽으로 고개 */
  seal.group.position.set(0.12 + 0.06 * lean * Math.sign(MONX - 0.12), 0.62, 0.26 - 0.1 * lean);
  spine.rotation.set(-0.1 - 0.42 * lean + 0.01 * Math.sin(t * 2), (F >= 1 ? 0.35 : 0.25) * look, 0);
  head.rotation.set(0.05 - 0.18 * lean, (0.45 + 0.35 * lean) * look + 0.02 * Math.sin(t * 0.7), 0);
  armL.rotation.set(0.8 + 0.12 * Math.max(0, Math.sin(t * 17)), 0, 0.35);
  armR.rotation.set(0.8 + 0.12 * Math.max(0, Math.sin(t * 17 + 1.7)), 0, -0.35);
  keys.forEach((k, i) => { k.position.y = 0.022 - (Math.sin(t * 17 + i * 1.3) > 0.85 ? 0.006 : 0); });
  for (const e of seal.extras.eyes) e.visible = true;
  if (focus) {
    seal.group.updateMatrixWorld(true);
    seal.extras.eyes.forEach((e, i) => {
      e.getWorldPosition(eyeW);
      tgt.set((i ? 0.1 : -0.1) + 0.08 * Math.sin(t * 3 + i), 0.05 * Math.sin(t * 4.3), 0.03); scr.localToWorld(tgt);
      const b = beams[i]; const d = tgt.clone().sub(eyeW); const L = d.length();
      b.position.copy(eyeW).addScaledVector(d, 0.5); b.scale.set(1, L, 1); tmpQ.setFromUnitVectors(up, d.normalize()); b.quaternion.copy(tmpQ);
      sparks[i].position.copy(tgt); sparks[i].scale.setScalar(0.1 + 0.03 * Math.sin(t * 20 + i));
      sparks[i + 2].position.copy(eyeW); sparks[i + 2].scale.setScalar(0.035);
    });
    beamMat.opacity = 0.75 + 0.2 * Math.sin(t * 30);
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__work = { ready: true };
