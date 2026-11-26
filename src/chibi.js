// 물범이 쓰는 모자·헤드셋 (S7: 아이 캐릭터는 삭제하고 소품만 남김)
import * as THREE from 'three';
import { paintMat, addOutline, plaidTexture } from './paint.js';

const LINE = '#6a4a44';
const M = (geo, color, o = {}, line = 0) => { const m = new THREE.Mesh(geo, paintMat(color, { grain: 16, grainAmt: 0.12, rim: 0.35, ...o })); m.castShadow = true; if (line) addOutline(m, o.line || LINE, line, 18); return m; };
const flat = (color) => new THREE.MeshBasicMaterial({ color });
const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

export function createCap(r = 0.27, c1 = '#ef8a72', c2 = '#fbeeda') {
  const g = new THREE.Group();
  const crown = M(new THREE.SphereGeometry(r, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), c1, { grain: 22 }, 0.007); crown.scale.set(1.04, 0.82, 1.06); g.add(crown);
  const visor = M(new THREE.CylinderGeometry(r * 0.86, r * 0.86, r * 0.07, 28, 1, false, -1.0, 2.0), c2, { grain: 22 }, 0.006); visor.position.set(0, r * 0.04, r * 0.42); visor.scale.z = 1.15; visor.rotation.x = 0.16; g.add(visor);
  const btn = M(new THREE.SphereGeometry(r * 0.1, 8, 6), c2); btn.position.y = r * 0.82; g.add(btn);
  return g;
}
export function createHeadset(r = 0.285) {
  const g = new THREE.Group(), cream = '#fbf3e6', mint = '#7fc8c0';
  const band = M(new THREE.TorusGeometry(r, 0.02, 8, 28, Math.PI), cream); g.add(band);
  for (const s of [-1, 1]) { const cup = M(new THREE.CylinderGeometry(r * 0.32, r * 0.32, 0.07, 20), mint, {}, 0.006); cup.rotation.z = Math.PI / 2; cup.position.set(s * (r + 0.01), -0.01, 0); g.add(cup); }
  return g;
}
