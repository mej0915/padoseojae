// S9 강아지 친구 "몽글이" — 파도서재 오리지널 캐릭터 (특정 캐릭터를 본뜬 것이 아님)
//  - 크림색 털, 끝이 살구색인 처진 귀, 동그란 볼, 짧은 다리, 동글게 말린 꼬리, 겨울엔 빨간 목도리
//  - 가만히 있을 때: 숨쉬기, 꼬리 살랑, 가끔 고개 갸웃·귀 쫑긋, 가끔 물범 쪽을 봄
//  - 누르면 폴짝 뛰고 꼬리를 세게 흔듦
import * as THREE from 'three';
import { paintMat, addOutline } from './paint.js';
import { isWinter } from './hats.js';

const LINE = '#7c573f', CREAM = '#fbf2e2', APRICOT = '#efc39a';
const M = (geo, color, o = {}, line = 0.006) => { const m = new THREE.Mesh(geo, paintMat(color, { grain: 14, grainAmt: 0.14, tint: '#b39ac4', rim: 0.4, form: 0.6, ...o })); m.castShadow = true; if (line) addOutline(m, LINE, line, 16); return m; };
const dark = new THREE.MeshBasicMaterial({ color: '#3a2a24' }), white = new THREE.MeshBasicMaterial({ color: '#ffffff' });

export function createPuppy() {
  const g = new THREE.Group(); g.name = 'puppy';
  const body = new THREE.Group(); g.add(body);           // 숨쉬기·점프는 여기
  // 몸통: 아래가 넓은 배 모양으로 앉은 자세
  const torso = M(new THREE.SphereGeometry(0.17, 28, 20), CREAM); torso.scale.set(1, 1.08, 0.95); torso.position.y = 0.17; body.add(torso);
  const belly = M(new THREE.SphereGeometry(0.12, 20, 14), '#fffaf0', {}, 0); belly.scale.set(1, 1.1, 0.5); belly.position.set(0, 0.15, 0.1); body.add(belly);
  // 뒷다리(앉아서 옆으로 나온 허벅지)와 앞발
  for (const s of [-1, 1]) {
    const thigh = M(new THREE.SphereGeometry(0.085, 18, 12), CREAM); thigh.scale.set(0.8, 0.7, 1.15); thigh.position.set(s * 0.13, 0.07, 0.0); body.add(thigh);
    const foot = M(new THREE.SphereGeometry(0.045, 14, 10), CREAM); foot.scale.set(1, 0.6, 1.4); foot.position.set(s * 0.14, 0.025, 0.08); body.add(foot);
    const leg = M(new THREE.CapsuleGeometry(0.038, 0.1, 6, 12), CREAM); leg.position.set(s * 0.06, 0.08, 0.12); body.add(leg);
    const paw = M(new THREE.SphereGeometry(0.044, 14, 10), CREAM); paw.scale.set(1, 0.65, 1.25); paw.position.set(s * 0.06, 0.025, 0.14); body.add(paw);
  }
  // 꼬리: 동글게 말린 털뭉치
  const tail = new THREE.Group(); tail.position.set(0, 0.12, -0.15); body.add(tail);
  const tailM = M(new THREE.TorusGeometry(0.05, 0.03, 10, 18, Math.PI * 1.5), CREAM); tailM.rotation.set(0, Math.PI / 2, 0.4); tailM.position.set(0, 0.05, -0.03); tail.add(tailM);
  // 머리
  const head = new THREE.Group(); head.position.set(0, 0.37, 0.02); body.add(head);
  const skull = M(new THREE.SphereGeometry(0.175, 30, 22), CREAM); skull.scale.set(1.18, 0.92, 1); head.add(skull);
  // S9: 살짝 멍한 표정 — 아주 작은 점 눈을 멀리·낮게, 반짝임 없음, ω 입, 혀끝 살짝
  for (const s of [-1, 1]) {   // 통통한 볼
    const cheek = M(new THREE.SphereGeometry(0.085, 16, 12), CREAM, {}, 0); cheek.position.set(s * 0.09, -0.065, 0.07); head.add(cheek);
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.03, 16), new THREE.MeshBasicMaterial({ color: '#f4a4a0', transparent: true, opacity: 0.75 })); blush.scale.y = 0.7; blush.position.set(s * 0.122, -0.06, 0.128); blush.rotation.y = s * 0.6; head.add(blush);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.0135, 12, 10), dark); eye.scale.set(1, 1.1, 0.5); eye.position.set(s * 0.083, -0.012, 0.142); eye.rotation.y = s * 0.5; eye.name = s < 0 ? 'eyeL' : 'eyeR'; head.add(eye);
    const arc = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.0028, 6, 10, Math.PI), dark); arc.rotation.z = Math.PI; arc.position.set(s * 0.012, -0.072, 0.176); head.add(arc);   // ω
  }
  const muzzle = M(new THREE.SphereGeometry(0.05, 18, 12), '#fffaf0', {}, 0); muzzle.scale.set(1.3, 0.75, 0.75); muzzle.position.set(0, -0.06, 0.135); head.add(muzzle);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.014, 12, 10), dark); nose.scale.set(1.35, 0.85, 0.8); nose.position.set(0, -0.045, 0.172); head.add(nose);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 8), new THREE.MeshBasicMaterial({ color: '#f08c8c' })); tongue.scale.set(1, 1.3, 0.5); tongue.position.set(0.008, -0.088, 0.17); head.add(tongue);
  // 처진 귀 (끝이 살구색)
  const ears = [-1, 1].map((s) => {
    const pivot = new THREE.Group(); pivot.position.set(s * 0.13, 0.07, 0.0); head.add(pivot);
    const ear = M(new THREE.SphereGeometry(0.07, 18, 12), APRICOT); ear.scale.set(0.62, 1.25, 0.4); ear.position.set(s * 0.025, -0.07, 0); ear.rotation.z = s * 0.25; pivot.add(ear);
    pivot.rotation.z = s * 0.15; return { pivot, s, base: s < 0 ? 0.15 : 0.32 };   // 한쪽 귀가 더 처져 멍한 느낌
  });
  // 정수리 털 한 가닥
  const tuft = M(new THREE.ConeGeometry(0.025, 0.06, 10), CREAM, {}, 0.004); tuft.position.set(0.01, 0.155, 0.03); tuft.rotation.z = -0.5; head.add(tuft);
  // 겨울 목도리 / 그 밖엔 하늘색 손수건
  const winter = isWinter();
  const scarf = M(new THREE.TorusGeometry(0.125, 0.032, 10, 28), winter ? '#d9584c' : '#7fc0d2'); scarf.rotation.x = Math.PI / 2 - 0.15; scarf.scale.set(1, 1, 0.9); scarf.position.set(0, 0.27, 0.0); body.add(scarf);
  const tail2 = M(new THREE.BoxGeometry(0.06, 0.12, 0.022), winter ? '#d9584c' : '#7fc0d2', {}, 0.004); tail2.position.set(0.06, 0.2, 0.12); tail2.rotation.set(0.2, 0, 0.25); body.add(tail2);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  // ----- 움직임 -----
  let hop = 0, run = null, runHop = 0, wagBoost = 0, tiltT = 4, tilt = 0, tiltTo = 0, lookT = 9, look = 0, lookTo = 0, blinkT = 2.5;
  const eyes = [head.getObjectByName('eyeL'), head.getObjectByName('eyeR')];
  g.userData.poke = () => { hop = 1; wagBoost = 3; tiltTo = (Math.random() < 0.5 ? -1 : 1) * 0.3; tiltT = 1.6; };
  g.userData.lookAtSeal = (on) => { lookTo = on ? 1 : 0; lookT = on ? 6 : 0; };
  const home = { x: 0, z: 0, yaw: 0, set: false };
  /** 조개로 뛰어갔다가 킁킁 냄새 맡고 돌아오기 */
  g.userData.runTo = (x, z) => {
    if (!home.set) { home.x = g.position.x; home.z = g.position.z; home.yaw = g.rotation.y; home.set = true; }
    run = { phase: 'go', tx: x, tz: z, wait: 0 }; wagBoost = 2;
  };
  function stepTo(tx, tz, dt, stopAt) {
    const dx = tx - g.position.x, dz = tz - g.position.z, d = Math.hypot(dx, dz);
    const want = Math.atan2(dx, dz); let dy = want - g.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); g.rotation.y += dy * Math.min(1, dt * 12);
    if (d <= stopAt) return true;
    const sp = 1.9 * dt; g.position.x += dx / d * Math.min(sp, d - stopAt); g.position.z += dz / d * Math.min(sp, d - stopAt); runHop += dt * 11; return false;
  }
  g.userData.update = (t, dt) => {
    if (run) {
      if (run.phase === 'go' && stepTo(run.tx, run.tz, dt, 0.22)) { run.phase = 'sniff'; run.wait = 1.6; }
      else if (run.phase === 'sniff' && (run.wait -= dt) < 0) run.phase = 'back';
      else if (run.phase === 'back' && stepTo(home.x, home.z, dt, 0.01)) run.phase = 'turn';
      else if (run.phase === 'turn') { let dy = home.yaw - g.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); g.rotation.y += dy * Math.min(1, dt * 6); if (Math.abs(dy) < 0.02) run = null; }
    }
    const moving = run && (run.phase === 'go' || run.phase === 'back');
    const breath = Math.sin(t * 2.2) * 0.012;
    body.scale.set(1 + breath * 0.5, 1 + breath, 1 + breath * 0.5);
    hop = Math.max(0, hop - dt * 2.2); const h = hop > 0 ? Math.sin(Math.PI * (1 - hop)) : 0;
    body.position.y = h * 0.13 + (moving ? Math.abs(Math.sin(runHop)) * 0.06 : 0); body.rotation.x = moving ? 0.18 + Math.sin(runHop * 2) * 0.05 : 0;
    if (moving || (run && run.phase === 'sniff')) wagBoost = Math.max(wagBoost, 1.5);
    wagBoost = Math.max(0, wagBoost - dt);
    tail.rotation.y = Math.sin(t * (7 + wagBoost * 4)) * (0.35 + wagBoost * 0.18);
    // 고개 갸웃, 가끔 물범 쪽 보기
    if ((tiltT -= dt) < 0) { tiltT = 4 + Math.random() * 5; tiltTo = Math.random() < 0.5 ? (Math.random() - 0.5) * 0.5 : 0; }
    if ((lookT -= dt) < 0) { lookT = 6 + Math.random() * 8; lookTo = Math.random() < 0.45 ? 1 : 0; }
    tilt += (tiltTo - tilt) * Math.min(1, dt * 4); look += (lookTo - look) * Math.min(1, dt * 2.5);
    const sniff = run && run.phase === 'sniff' ? 1 : 0;
    head.rotation.set(-0.05 + Math.sin(t * 0.9) * 0.03 - h * 0.2 + sniff * (0.35 + Math.sin(t * 14) * 0.05), look * -0.65 * (run ? 0 : 1), tilt + 0.12);   // 늘 살짝 갸웃
    for (const e of ears) e.pivot.rotation.z = e.s * (e.base + Math.max(0, Math.sin(t * 1.3 + e.s)) * 0.06 + h * 0.5) - tilt * 0.4;
    if ((blinkT -= dt) < 0) blinkT = 2.5 + Math.random() * 4;
    const closed = blinkT < 0.12 ? 0.15 : 1; for (const e of eyes) e.scale.y = closed;
  };
  return g;
}
