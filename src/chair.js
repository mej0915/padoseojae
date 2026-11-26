// 줄무늬 독서 의자 — S1 B안 의자 코드를 그대로 옮김(형태·치수 동일)
import * as THREE from 'three';
import { paintMat, addOutline, stripeTexture } from './paint.js';

function rod(a, b, r, mat) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const dir = B.clone().sub(A); const len = dir.length();
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 4, 10), mat);
  m.position.copy(A).add(B).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  m.castShadow = true;
  return addOutline(m, '#7a5646', 0.008, 14);
}

export function createChair() {
  const chair = new THREE.Group(); chair.name = 'chair';
  const wood = paintMat('#c99662', { grain: 9, grainAmt: 0.18, tint: '#8a6a9c', rim: 0.25 });
  for (const s of [-1, 1]) {
    chair.add(rod([s * 0.36, 0, 0.1], [s * 0.36, 1.2, 0.55], 0.03, wood));
    chair.add(rod([s * 0.41, 0, 0.66], [s * 0.37, 0.56, 0.28], 0.027, wood));
    chair.add(rod([s * 0.34, 0, -0.56], [s * 0.35, 0.5, -0.34], 0.027, wood));
    chair.add(rod([s * 0.36, 0.5, -0.36], [s * 0.36, 0.42, 0.25], 0.024, wood));
  }
  chair.add(rod([-0.4, 0.13, 0.6], [0.4, 0.13, 0.6], 0.024, wood));
  chair.add(rod([-0.36, 0.5, -0.36], [0.36, 0.5, -0.36], 0.026, wood));
  const geo = new THREE.PlaneGeometry(1, 1, 18, 24);
  const pa = geo.attributes.position, uv = geo.attributes.uv;
  const P0 = [1.1, 0.505], P1 = [0.22, 0.46], P2 = [0.5, -0.36];
  for (let i = 0; i < pa.count; i++) {
    const u = uv.getX(i), s = 1 - uv.getY(i), k = 1 - s;
    const y = k * k * P0[0] + 2 * k * s * P1[0] + s * s * P2[0];
    const z = k * k * P0[1] + 2 * k * s * P1[1] + s * s * P2[1];
    const bulge = 0.085 * (1 - (2 * u - 1) ** 2) * Math.sin(Math.PI * Math.min(1, s * 1.3));
    pa.setXYZ(i, (u - 0.5) * 0.7, y - bulge * 0.25, z + bulge);
  }
  geo.computeVertexNormals();
  const sling = new THREE.Mesh(geo, paintMat('#ffffff', { map: stripeTexture(), grain: 5, side: THREE.DoubleSide, tint: '#a08ac8', rim: 0.2 }));
  sling.castShadow = true; sling.receiveShadow = true; sling.name = 'sling';
  chair.add(sling);
  return chair;
}
