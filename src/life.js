// S6 풍성한 해변: 움직이는 것들 (돛단배, 섬과 등대, 갈매기, 꽃게, 빛 알갱이). 전부 코드로 만든 형태.
import * as THREE from 'three';
import { paintMat, addOutline } from './paint.js';

const flat = (color, o = {}) => new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, ...o });
const tri = (pts) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts.flat()), 3)); g.computeVertexNormals(); return g; };

/** 먼 바다의 돛단배 (크기 s 미터) */
export function createBoat(s = 7, hull = '#b06c74', sail = '#fff4e4') {
  const g = new THREE.Group(), b = new THREE.Group(); g.add(b);
  const h = new THREE.Shape(); h.moveTo(-0.5, 0.16); h.lineTo(0.55, 0.16); h.lineTo(0.4, 0); h.lineTo(-0.38, 0); h.closePath();
  b.add(new THREE.Mesh(new THREE.ShapeGeometry(h), flat(hull)));
  const mast = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 0.95), flat('#8c6a66')); mast.position.set(0.02, 0.62, 0); b.add(mast);
  b.add(new THREE.Mesh(tri([[0.05, 0.22, 0], [0.05, 1.08, 0], [0.5, 0.22, 0]]), flat(sail)));
  b.add(new THREE.Mesh(tri([[-0.02, 0.24, 0], [-0.02, 0.92, 0], [-0.36, 0.24, 0]]), flat('#ffd9c2')));
  const refl = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.22), flat('#fff0e0', { transparent: true, opacity: 0.28 })); refl.position.y = -0.1; b.add(refl);
  b.scale.setScalar(s);
  g.userData.update = (t) => { b.rotation.z = Math.sin(t * 0.9 + s) * 0.035; b.position.y = Math.sin(t * 1.1 + s) * 0.05 * s * 0.2; };
  return g;
}

/** 수평선의 작은 섬과 등대 */
export function createIsland() {
  const g = new THREE.Group();
  const sh = new THREE.Shape(); sh.moveTo(-30, 0); sh.bezierCurveTo(-22, 9, -10, 13, 0, 11); sh.bezierCurveTo(10, 15, 24, 8, 34, 0); sh.closePath();
  g.add(new THREE.Mesh(new THREE.ShapeGeometry(sh, 16), flat('#b99ab8')));
  const sh2 = new THREE.Shape(); sh2.moveTo(10, 0); sh2.bezierCurveTo(22, 6, 40, 7, 58, 0); sh2.closePath();
  const far = new THREE.Mesh(new THREE.ShapeGeometry(sh2, 12), flat('#cfb4c6')); far.position.z = -2; g.add(far);
  const tower = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 14), flat('#fff1e6')); tower.position.set(-6, 18, 0.5); g.add(tower);
  const band = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3), flat('#e58a7c')); band.position.set(-6, 17, 0.6); g.add(band);
  const cap = new THREE.Mesh(tri([[-8, 25, 0.6], [-4, 25, 0.6], [-6, 28.5, 0.6]]), flat('#c9706a')); g.add(cap);
  const lamp = new THREE.Mesh(new THREE.CircleGeometry(3.2, 20), flat('#fff3b8', { transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })); lamp.position.set(-6, 24, 0.8); g.add(lamp);
  g.userData.update = (t) => { const k = 0.5 + 0.5 * Math.sin(t * 1.3); lamp.material.opacity = 0.25 + 0.6 * k * k; lamp.scale.setScalar(0.7 + 0.8 * k); };
  return g;
}

/** 갈매기: 원을 그리며 난다 */
export function createGull({ cx = 0, cy = 6, cz = -30, rx = 14, rz = 6, speed = 0.22, ph = 0, size = 1 } = {}) {
  const g = new THREE.Group(), white = flat('#fffaf2'), tip = flat('#8b7a88');
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), white); body.scale.set(0.7, 0.6, 2.0); g.add(body);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.14, 6), flat('#f0a45c')); beak.rotation.x = -Math.PI / 2; beak.position.z = -0.38; g.add(beak);
  const wings = [-1, 1].map((s) => {
    const piv = new THREE.Group(), w = new THREE.Group(); piv.add(w); w.scale.x = s;
    w.add(new THREE.Mesh(tri([[0, 0, -0.16], [0, 0, 0.14], [0.62, 0, -0.1], [0, 0, 0.14], [0.62, 0, 0.06], [0.62, 0, -0.1]]), white));
    const outer = new THREE.Group(); outer.position.x = 0.62; w.add(outer);
    outer.add(new THREE.Mesh(tri([[0, 0, -0.1], [0, 0, 0.06], [0.55, 0, 0.1]]), tip));
    g.add(piv); return { piv, outer, s };
  });
  g.scale.setScalar(size);
  g.userData.update = (t) => {
    const a = t * speed + ph, x = cx + Math.sin(a) * rx, z = cz + Math.cos(a) * rz;
    const vx = Math.cos(a) * rx, vz = -Math.sin(a) * rz;
    g.position.set(x, cy + Math.sin(t * 0.5 + ph) * 0.5, z);
    g.rotation.set(0, Math.atan2(-vx, -vz), 0); g.rotateZ(-0.25);
    const glide = Math.sin(t * 0.33 + ph * 2) > 0.55 ? 0.25 : 1, f = Math.sin(t * 5.2 + ph * 3) * 0.55 * glide + 0.12;
    for (const w of wings) { w.piv.rotation.z = f * w.s; w.outer.rotation.z = (f * 0.7 - 0.15); }
  };
  return g;
}

/** 꽃게: 옆으로 걷다가 멈추고, 집게를 든다 */
export function createCrab(color = '#ea7458', range = 0.6, ph = 0) {
  const g = new THREE.Group(), c = new THREE.Group(); g.add(c);
  const mat = paintMat(color, { grain: 26, grainAmt: 0.22, rim: 0.4, tint: '#b0527a' });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 10), mat); body.scale.set(1.25, 0.55, 0.9); body.position.y = 0.075; body.castShadow = true; addOutline(body, '#9a4a48', 0.006, 20); c.add(body);
  const eyes = [-1, 1].map((s) => {
    const e = new THREE.Group(); e.position.set(s * 0.045, 0.11, -0.06);
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.06, 6), mat); st.position.y = 0.03; e.add(st);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshBasicMaterial({ color: '#3a2a34' })); ball.position.y = 0.065; e.add(ball);
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.007, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffffff' })); hl.position.set(0.006, 0.073, -0.014); e.add(hl);
    c.add(e); return e;
  });
  const claws = [-1, 1].map((s) => {
    const p = new THREE.Group(); p.position.set(s * 0.11, 0.07, -0.05);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.014, 0.06, 3, 6), mat); arm.rotation.z = s * -1.1; arm.position.set(s * 0.03, 0.015, 0); p.add(arm);
    const claw = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 8), mat); claw.scale.set(1.25, 0.8, 0.7); claw.position.set(s * 0.075, 0.04, -0.01); claw.castShadow = true; addOutline(claw, '#9a4a48', 0.005, 20); p.add(claw);
    c.add(p); return { p, s };
  });
  const legs = [];
  for (const s of [-1, 1]) for (let i = 0; i < 3; i++) {
    const p = new THREE.Group(); p.position.set(s * 0.1, 0.06, -0.02 + i * 0.04);
    const l = new THREE.Mesh(new THREE.CapsuleGeometry(0.008, 0.09, 3, 5), mat); l.rotation.z = s * 0.95; l.position.set(s * 0.045, -0.025, 0); p.add(l);
    c.add(p); legs.push({ p, s, i });
  }
  let x = 0, dir = 1, pause = 1 + ph, wave = 0;
  g.userData.update = (t, dt) => {
    const d = Math.min(dt, 0.1);
    if (pause > 0) { pause -= d; if (pause <= 0) { dir = Math.abs(x) > range * 0.6 ? -Math.sign(x) : (Math.sin(t * 13.7 + ph) > 0 ? 1 : -1); } }
    else { x += dir * 0.16 * d; if (Math.abs(x) > range || Math.sin(t * 0.9 + ph * 5) > 0.985) { x = THREE.MathUtils.clamp(x, -range, range); pause = 1.2 + 2.2 * Math.abs(Math.sin(t * 3.1)); wave = 1; } }
    const moving = pause <= 0 ? 1 : 0;
    c.position.set(x, moving * Math.abs(Math.sin(t * 14)) * 0.006, 0);
    c.rotation.z = moving * Math.sin(t * 14) * 0.05;
    for (const l of legs) l.p.rotation.z = moving * Math.sin(t * 16 + l.i * 2.1 + (l.s > 0 ? 0 : 1.5)) * 0.35;
    wave = Math.max(0, wave - d * 0.45);
    const up = Math.sin(Math.PI * Math.min(1, wave * 1.4)) * 0.9;
    for (const k of claws) { k.p.rotation.z = k.s * (up * 0.9 + Math.sin(t * 2 + k.s) * 0.06); k.p.position.y = 0.07 + up * 0.03; }
    for (const e of eyes) e.rotation.x = Math.sin(t * 1.7 + ph) * 0.12;
  };
  return g;
}

/** 햇살 속에 떠다니는 빛 알갱이 */
export function createMotes(n = 46) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 32; const x = cv.getContext('2d');
  const gr = x.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,240,200,0.5)'); gr.addColorStop(1, 'rgba(255,230,180,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 32, 32);
  const pos = new Float32Array(n * 3), seedv = [];
  for (let i = 0; i < n; i++) seedv.push([Math.random() * 7 - 3.5, 0.25 + Math.random() * 2.3, -3.2 + Math.random() * 5.6, Math.random() * 6.28, 0.4 + Math.random()]);
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: new THREE.CanvasTexture(cv), size: 0.07, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending, color: '#ffe6b0', sizeAttenuation: true }));
  pts.frustumCulled = false;
  pts.userData.update = (t) => {
    for (let i = 0; i < n; i++) { const s = seedv[i];
      pos[i * 3] = s[0] + Math.sin(t * 0.21 * s[4] + s[3]) * 0.5 + ((t * 0.05 * s[4]) % 1) * 0.6;
      pos[i * 3 + 1] = s[1] + Math.sin(t * 0.33 * s[4] + s[3] * 2) * 0.22;
      pos[i * 3 + 2] = s[2] + Math.cos(t * 0.17 * s[4] + s[3]) * 0.4; }
    geo.attributes.position.needsUpdate = true;
    pts.material.opacity = 0.5 + 0.12 * Math.sin(t * 0.8);
  };
  return pts;
}
