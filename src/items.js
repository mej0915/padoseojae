// 꾸미기 아이템 — 모델을 고치지 않고 캐릭터의 "슬롯"에 끼웠다 뺀다.
// 아이템은 { slot, build() } 형태의 정의만 있으면 되므로 안경(face)·목도리(neck)·가방(back)도 같은 방식으로 추가할 수 있다.
import * as THREE from 'three';
import { paintMat, addOutline, plaidTexture } from './paint.js';

const LINE = '#7a5646';

export const ITEMS = {
  strawHat: {
    slot: 'head',
    label: '밀짚모자',
    build() {
      const g = new THREE.Group(); g.name = 'item:strawHat';
      const straw = paintMat('#ecd096', { grain: 30, grainAmt: 0.22, tint: '#b49ac0', rim: 0.35 });
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.27, 0.02, 40), straw);
      brim.position.y = -0.035; brim.castShadow = true; addOutline(brim, LINE, 0.006, 20);
      // 챙 가장자리가 살짝 처지게
      const p = brim.geometry.attributes.position;
      for (let i = 0; i < p.count; i++) { const r = Math.hypot(p.getX(i), p.getZ(i)); if (r > 0.2) p.setY(i, p.getY(i) - (r - 0.2) * 0.35); }
      brim.geometry.computeVertexNormals();
      const crown = new THREE.Mesh(new THREE.SphereGeometry(0.15, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), straw);
      crown.scale.set(1, 0.72, 0.95); crown.position.y = -0.03; crown.castShadow = true; addOutline(crown, LINE, 0.006, 20);
      const ribbon = new THREE.Mesh(new THREE.CylinderGeometry(0.152, 0.152, 0.032, 40, 1, true), paintMat('#ec8f7c', { grain: 12, side: THREE.DoubleSide }));
      ribbon.position.y = -0.012; ribbon.scale.z = 0.95;
      g.add(brim, crown, ribbon);
      g.rotation.z = 0.12; // 살짝 삐딱하게
      g.scale.setScalar(1.35); // S3: 꾸미기 요소로 존재감 있게 키움
      return g;
    },
  },
  // 안경: 얼굴 슬롯(머리 뼈의 자식)이라 걷기·고개 돌리기·거울 보기에서도 얼굴에 붙어 있음
  glasses: {
    slot: 'face',
    label: '안경',
    build() {
      const g = new THREE.Group(); g.name = 'item:glasses';
      const frame = paintMat('#8a5a46', { grain: 8, rim: 0.2 });
      const glass = new THREE.MeshBasicMaterial({ color: '#cfe6ee', transparent: true, opacity: 0.22, depthWrite: false });
      for (const sx of [-1, 1]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.008, 10, 36), frame);
        ring.position.set(sx * 0.092, 0.0, -0.012); ring.scale.y = 0.92; g.add(ring);
        const lens = new THREE.Mesh(new THREE.CircleGeometry(0.052, 28), glass);
        lens.position.set(sx * 0.092, 0.0, -0.012); lens.rotation.y = Math.PI; g.add(lens);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.17, 6), frame);   // 귀 쪽 다리
        arm.rotation.x = Math.PI / 2; arm.position.set(sx * 0.146, 0.0, 0.07); g.add(arm);
      }
      const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0055, 0.06, 6), frame);
      bridge.rotation.z = Math.PI / 2; bridge.position.set(0, 0.012, -0.014); g.add(bridge);
      return g;
    },
  },
  // 담요: 의자 앞쪽 가장자리에 걸쳐 앞으로 늘어뜨림. 슬롯 'chair'(물범이 아니라 의자에 붙는 아이템)
  blanket: {
    slot: 'chair',
    label: '담요',
    build() {
      const g = new THREE.Group(); g.name = 'item:blanket';
      const geo = new THREE.PlaneGeometry(0.66, 1, 16, 20);
      const p = geo.attributes.position, uv = geo.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        const u = uv.getX(i), v = uv.getY(i);          // v: 1 = 등받이 쪽, 0 = 늘어진 끝
        const s = 1 - v;                               // 0 → 1 : 의자 앉는 면 → 앞으로 늘어진 끝
        let y, z;
        if (s < 0.45) { y = 0.485; z = 0.18 - s / 0.45 * 0.55; }                       // 앉는 면 위
        else { const k = (s - 0.45) / 0.55; y = 0.485 - Math.sin(k * 1.25) * 0.36; z = -0.37 - (1 - Math.cos(k * 1.25)) * 0.14; } // 앞으로 처짐
        const wave = 0.018 * Math.sin(u * 9 + s * 6) * s;
        p.setXYZ(i, (u - 0.5) * 0.66, y, z + wave);
      }
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, paintMat('#ffffff', { map: plaidTexture(), grain: 5, side: THREE.DoubleSide, tint: '#a08ac8', rim: 0.2 }));
      m.castShadow = true; m.receiveShadow = true; m.name = 'blanket';
      g.add(m);
      return g;
    },
  },
};

/** 캐릭터 슬롯에 아이템을 끼우고 빼는 관리자 */
export function createWardrobe(slots) {
  const worn = new Map(); // slot → { id, obj }
  return {
    equip(id) {
      const def = ITEMS[id]; const slot = slots[def.slot];
      this.unequip(def.slot);
      const obj = def.build(); slot.add(obj); worn.set(def.slot, { id, obj });
    },
    unequip(slotName) {
      const w = worn.get(slotName); if (!w) return;
      w.obj.removeFromParent(); w.obj.traverse((o) => o.geometry?.dispose()); worn.delete(slotName);
    },
    toggle(id) { const s = ITEMS[id].slot; if (worn.get(s)?.id === id) { this.unequip(s); return false; } this.equip(id); return true; },
    isWorn: (id) => worn.get(ITEMS[id].slot)?.id === id,
    object: (id) => worn.get(ITEMS[id].slot)?.obj || null,
  };
}
