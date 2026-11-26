// 노란 물범 — 뼈대(스켈레톤)가 있는 3D 캐릭터 1종
//  - 몸과 머리를 하나로 이어진 회전체(콩 모양)로 만들고, 뼈 3개(root·spine·head)에 무게를 나눠 붙인 SkinnedMesh
//    → S0 토끼나 S1 B안처럼 구를 겹친 형태가 아니라, 고개를 들면 목 부분이 자연스럽게 휘어짐
//  - 얼굴(점 눈·주둥이·코·볼터치), 앞지느러미(팔), 뒷발, 책은 각 뼈의 자식이라 동작을 그대로 따라감
//  - 꾸미기 아이템은 모델을 고치지 않고 "슬롯"(머리 위·얼굴·목·등·손)에 끼우는 방식 (items.js)
import * as THREE from 'three';
import { paintMat, addOutline, outlineMat, plaidTexture } from './paint.js';
import { ITEMS } from './items.js';

const FUR = '#f6db8c';
const LINE = '#7c573f';

// 옆에서 본 몸 윤곽 (반지름, 높이). 아래가 넓고 머리 쪽이 살짝 좁아지는 콩 모양
const PROFILE = [
  [0.0, 0.0], [0.17, 0.01], [0.27, 0.05], [0.325, 0.14], [0.34, 0.26], [0.33, 0.38], [0.3, 0.49],
  [0.272, 0.58], [0.262, 0.65], [0.266, 0.73], [0.258, 0.81], [0.232, 0.89], [0.18, 0.96], [0.1, 1.01], [0.0, 1.03],
];

function bodyGeometry() {
  const curve = new THREE.SplineCurve(PROFILE.map(([r, y]) => new THREE.Vector2(r, y)));
  const pts = curve.getPoints(48).map((p) => new THREE.Vector2(Math.max(0, p.x), p.y));
  pts[0].x = 0; pts[pts.length - 1].x = 0;
  const geo = new THREE.LatheGeometry(pts, 48);
  geo.scale(1, 1, 0.9);
  // 뼈 무게: 아래는 root, 가운데는 spine, 위(머리)는 head
  const pos = geo.attributes.position;
  const idx = [], wts = [];
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const wHead = ss(0.58, 0.74, y);
    const wUpper = ss(0.28, 0.5, y);
    const wSpine = wUpper - wHead;
    const wRoot = 1 - wUpper;
    idx.push(0, 1, 2, 0); wts.push(wRoot, wSpine, wHead, 0);
  }
  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(idx, 4));
  geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(wts, 4));
  return geo;
}

function part(geo, mat, name, { outline = true, shadow = true } = {}) {
  const m = new THREE.Mesh(geo, mat); m.name = name; m.castShadow = shadow;
  if (outline) addOutline(m, LINE, 0.006, 16);
  return m;
}

/** 담요 천 모양: 몸 앞쪽(얼굴 방향 -z)을 반 바퀴 넘게 감싸고, 위는 무릎 높이에서 한 번 접히고, 아래는 바닥에 퍼진다 */
function drapeGeometry() {
  const NU = 40, NV = 18, A = 2.0;
  // 위에서 아래로 단면 경로 (반지름, 높이)
  const path = [[0.338, 0.29], [0.355, 0.26], [0.358, 0.2], [0.362, 0.13], [0.385, 0.06], [0.44, 0.022], [0.52, 0.01], [0.585, 0.008]];
  const at = (v) => { const f = v * (path.length - 1), i = Math.min(path.length - 2, Math.floor(f)), t = f - i; return [path[i][0] + (path[i + 1][0] - path[i][0]) * t, path[i][1] + (path[i + 1][1] - path[i][1]) * t]; };
  const geo = new THREE.PlaneGeometry(1, 1, NU, NV), p = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const u = uv.getX(i), v = 1 - uv.getY(i);                     // v 0 = 위 가장자리
    const a = (u - 0.5) * 2 * A;                                   // 0 = 정면
    const side = Math.abs(u - 0.5) * 2;
    let [r, y] = at(v);
    const fold = 0.036 * Math.pow(v, 1.2) * (Math.sin(a * 6.0 + 0.7) + 0.45 * Math.sin(a * 11 + 2.1));   // 아래로 갈수록 깊어지는 주름
    r += fold + 0.012 * Math.sin(a * 3.1);
    if (v < 0.12) r += 0.018 * (1 - v / 0.12);                     // 위쪽 접힌 단이 조금 도톰하게
    y += (side * side * 0.02 + (u - 0.5) * 0.07) * (1 - v);       // 한쪽이 조금 더 올라간 비스듬한 윗단 (무릎에 대충 덮은 모양)
    if (v > 0.8) y = Math.max(0.006, y + 0.006 * Math.sin(a * 9));   // 바닥에 닿은 끝단 물결
    p.setXYZ(i, Math.sin(a) * r, y, -Math.cos(a) * r * 0.9);
  }
  geo.computeVertexNormals();
  return geo;
}

/** 도톰한 털담요(셰르파) 무늬: 크림색 바탕에 몽글몽글한 털뭉치 */
function fleeceTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  x.fillStyle = '#efe2cf'; x.fillRect(0, 0, 256, 256);
  let sd = 3; const r = () => ((sd = (sd * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 1400; i++) { const px = r() * 256, py = r() * 256, rad = 2 + r() * 4; const g = x.createRadialGradient(px - 1, py - 1, 0, px, py, rad); g.addColorStop(0, 'rgba(255,250,240,.9)'); g.addColorStop(0.7, 'rgba(236,220,198,.5)'); g.addColorStop(1, 'rgba(180,150,120,0)'); x.fillStyle = g; x.beginPath(); x.arc(px, py, rad, 0, 6.3); x.fill(); }
  for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(176,120,96,.10)'; x.fillRect(0, i * 44 + 10, 256, 12); x.fillRect(i * 44 + 10, 0, 12, 256); }   // 은은한 체크
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 2); return t;
}
/** 숄: spine 뼈 기준. 얼굴 쪽(-z)을 빼고 등·옆·어깨를 감쌈. 목에는 두툼하게 말린 깃, 가장자리는 도톰한 테 */
function createShawl() {
  const g = new THREE.Group(); g.name = 'shawl';
  const mat = paintMat('#ffffff', { map: fleeceTexture(), grain: 30, grainAmt: 0.18, tint: '#a08ac8', rim: 0.35, side: THREE.DoubleSide });
  const path = [[0.255, 0.215], [0.3, 0.17], [0.345, 0.09], [0.37, -0.02], [0.385, -0.13], [0.395, -0.24]];
  const at = (v) => { const f = v * (path.length - 1), i = Math.min(path.length - 2, Math.floor(f)), t = f - i; return [path[i][0] + (path[i + 1][0] - path[i][0]) * t, path[i][1] + (path[i + 1][1] - path[i][1]) * t]; };
  const A = 2.0;   // 등 쪽(+z)에서 좌우로 2.0rad씩 → 앞쪽 약 70도가 열림
  const pos = (u, v) => { const a = (u - 0.5) * 2 * A; let [r, y] = at(v); r += 0.012 * Math.sin(a * 7) * v * v + 0.01; const edge = Math.abs(u - 0.5) * 2; y -= edge * edge * 0.05 * v; return new THREE.Vector3(Math.sin(a) * r, y, Math.cos(a) * r * 0.9); };
  const NU = 36, NV = 12, geo = new THREE.PlaneGeometry(1, 1, NU, NV), p = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) { const v3 = pos(uv.getX(i), 1 - uv.getY(i)); p.setXYZ(i, v3.x, v3.y, v3.z); }
  geo.computeVertexNormals();
  const cloth = new THREE.Mesh(geo, mat); cloth.castShadow = true; g.add(cloth);
  // 도톰한 테두리: 목 깃(굵게), 양쪽 앞자락, 아래 끝단
  const tube = (pts, r) => { const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 6, r, 8, false), mat); m.castShadow = true; addOutline(m, LINE, 0.005, 14); g.add(m); };
  tube(Array.from({ length: 13 }, (_, i) => pos(i / 12, 0).add(new THREE.Vector3(0, 0.01, 0))), 0.034);
  for (const u of [0, 1]) tube(Array.from({ length: 8 }, (_, i) => pos(u, i / 7)), 0.022);
  tube(Array.from({ length: 13 }, (_, i) => pos(i / 12, 1)), 0.02);
  return g;
}

export function createSeal() {
  const group = new THREE.Group(); group.name = 'seal';
  const fur = paintMat(FUR, { grain: 6, grainAmt: 0.22, tint: '#c4a0b0', rim: 0.45, form: 1 });
  const cream = paintMat('#fbecc4', { grain: 9, grainAmt: 0.1, tint: '#c4a0b0', rim: 0.3, form: 0.6 });
  const dark = new THREE.MeshBasicMaterial({ color: '#3d2c25' });

  // ----- 뼈대 -----
  const B = (name, x, y, z, parent) => { const b = new THREE.Bone(); b.name = name; b.position.set(x, y, z); if (parent) parent.add(b); return b; };
  const root = B('root', 0, 0, 0);
  const spine = B('spine', 0, 0.42, 0, root);
  const head = B('head', 0, 0.24, 0, spine);            // 머리 회전축 = 높이 0.66
  const armL = B('armL', -0.255, 0.05, -0.05, spine);
  const armR = B('armR', 0.255, 0.05, -0.05, spine);
  const footL = B('footL', -0.12, 0.07, -0.22, root);
  const footR = B('footR', 0.12, 0.07, -0.22, root);
  const book = B('book', 0.0, 0.03, -0.37, spine);
  book.scale.setScalar(1.75);                           // S3: 책을 눈에 띄게 키움
  head.rotation.x = -0.26;                                // 쉬는 자세: 책을 내려다봄
  book.rotation.x = -1.05;

  const geo = bodyGeometry();
  const body = new THREE.SkinnedMesh(geo, fur); body.name = 'body'; body.castShadow = true;
  body.add(root);
  const skeleton = new THREE.Skeleton([root, spine, head, armL, armR, footL, footR, book]);
  body.bind(skeleton);
  const bodyLine = new THREE.SkinnedMesh(geo, outlineMat(LINE, 0.0045, 14)); bodyLine.name = 'body-outline';
  body.add(bodyLine); bodyLine.bind(skeleton, body.bindMatrix);
  group.add(body);

  // ----- 얼굴 (머리 뼈 기준, 앞쪽 = -z) -----
  const eyeGeo = new THREE.SphereGeometry(0.021, 14, 10);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(eyeGeo, dark); eye.name = s < 0 ? 'eyeL' : 'eyeR';
    eye.position.set(s * 0.092, 0.17, -0.212); eye.scale.set(1, 1.15, 0.6);
    head.add(eye);
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.034, 18), new THREE.MeshBasicMaterial({ color: '#f2a0a0', transparent: true, opacity: 0.45, depthWrite: false }));
    blush.position.set(s * 0.15, 0.11, -0.195); blush.rotation.y = Math.PI + s * -0.62; blush.scale.y = 0.7;
    head.add(blush);
    const puff = part(new THREE.SphereGeometry(0.048, 18, 12), cream, s < 0 ? 'muzzleL' : 'muzzleR', { outline: false });
    puff.position.set(s * 0.038, 0.095, -0.222); puff.scale.set(1, 0.85, 0.7);
    head.add(puff);
  }
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.02, 12, 8), dark); nose.name = 'nose';
  nose.position.set(0, 0.125, -0.252); nose.scale.set(1.3, 0.85, 0.8);
  head.add(nose);
  // 배(앞쪽 크림색)
  const belly = part(new THREE.SphereGeometry(0.2, 24, 16), cream, 'belly', { outline: false });
  belly.position.set(0, -0.12, -0.215); belly.scale.set(1.05, 1.3, 0.35);
  spine.add(belly);

  // ----- 짧은 팔(앞지느러미): 책을 받쳐 듦 -----
  const flipGeo = new THREE.SphereGeometry(0.07, 18, 12);
  for (const [bone, s] of [[armL, -1], [armR, 1]]) {
    const f = part(flipGeo, fur, `${bone.name}-flipper`);
    f.scale.set(0.8, 1.7, 0.62); f.position.set(0, -0.09, 0);
    bone.add(f);
    bone.rotation.set(1.45, 0, s * 0.3);              // 책을 감싸 안는 자세
  }
  // ----- 짧은 다리(뒷발) -----
  const footGeo = new THREE.SphereGeometry(0.07, 18, 12);
  for (const [bone, s] of [[footL, -1], [footR, 1]]) {
    const f = part(footGeo, fur, `${bone.name}-flipper`);
    f.scale.set(0.9, 0.55, 1.5); f.position.set(0, 0, -0.06);
    bone.add(f);
    bone.rotation.set(0.15, s * 0.25, 0);
  }

  // ----- 종이책 (펼친 V자) -----
  const pageMat = paintMat('#f8efdc', { grain: 14, tint: '#b6a6cf', rim: 0.2 });
  const coverMat = paintMat('#6286a8', { grain: 10 });
  for (const s of [-1, 1]) {
    const leaf = new THREE.Group();
    const pages = part(new THREE.BoxGeometry(0.15, 0.2, 0.024), pageMat, 'pages');
    pages.position.x = s * 0.08;
    const cover = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.21, 0.007), coverMat);
    cover.position.set(s * 0.082, 0, -0.016); cover.castShadow = true;
    leaf.add(pages, cover);
    leaf.rotation.y = s * -0.4;
    book.add(leaf);
  }

  // ----- 꾸미기 슬롯 (아이템을 끼우는 빈 자리) -----
  const slot = (name, parent, x, y, z, rx = 0) => { const o = new THREE.Object3D(); o.name = `slot:${name}`; o.position.set(x, y, z); o.rotation.x = rx; parent.add(o); return o; };
  const slots = {
    head: slot('head', head, 0, 0.345, 0.0, 0.08),
    face: slot('face', head, 0, 0.17, -0.22),
    neck: slot('neck', spine, 0, 0.2, 0),
    back: slot('back', spine, 0, 0.0, 0.27),
    hand: slot('hand', book, 0, 0, 0),
  };

  // ----- S7: 감은 눈(웃는 눈), 머그, 넘기는 책장, 담요, 안경 -----
  const lidGeo = new THREE.TorusGeometry(0.024, 0.0062, 6, 16, Math.PI);
  const lids = [-1, 1].map((s) => { const l = new THREE.Mesh(lidGeo, dark); l.name = s < 0 ? 'lidL' : 'lidR'; l.position.set(s * 0.092, 0.162, -0.216); l.rotation.y = Math.PI; l.visible = false; head.add(l); return l; });
  const mug = new THREE.Group(); mug.name = 'mug';
  { const cup = part(new THREE.CylinderGeometry(0.05, 0.043, 0.095, 18), paintMat('#fbf3e6', { grain: 30 }), 'mug-cup'); mug.add(cup);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0515, 0.048, 0.026, 18, 1, true), paintMat('#6fb0c6', { grain: 20 })); mug.add(band);
    const hd = part(new THREE.TorusGeometry(0.026, 0.008, 6, 12, Math.PI), paintMat('#fbf3e6'), 'mug-handle'); hd.position.x = 0.05; hd.rotation.z = -Math.PI / 2; mug.add(hd);
    const tea = new THREE.Mesh(new THREE.CircleGeometry(0.045, 16), new THREE.MeshBasicMaterial({ color: '#9a6240' })); tea.rotation.x = -Math.PI / 2; tea.position.y = 0.042; mug.add(tea); }
  mug.position.set(0.0, -0.2, -0.04); mug.rotation.set(-2.3, 0, 0); mug.visible = false; armR.add(mug);
  const leaf = new THREE.Group(); leaf.name = 'leaf'; leaf.rotation.y = -0.4; book.add(leaf);
  { const pg = part(new THREE.BoxGeometry(0.145, 0.195, 0.004), pageMat, 'leaf-page'); pg.position.set(0.078, 0, 0.015); leaf.add(pg); }
  leaf.visible = false;
  // S8 담요: 무릎 앞을 감싸 덮고 바닥까지 흘러내려 주름지며 퍼지는 천 (반구 덮개 → 천)
  const tex = plaidTexture(); tex.repeat.set(2.2, 1.4);
  const blanket = new THREE.Mesh(drapeGeometry(), paintMat('#ffffff', { map: tex, grain: 5, tint: '#a08ac8', rim: 0.2, side: THREE.DoubleSide }));
  blanket.name = 'blanket'; blanket.castShadow = true; blanket.receiveShadow = true; blanket.visible = false; root.add(blanket);
  const glasses = ITEMS.glasses.build(); glasses.visible = false; slots.face.add(glasses);
  const eyes = [head.getObjectByName('eyeL'), head.getObjectByName('eyeR')];

  // ----- S10 밤에 두르는 도톰한 털담요(숄): 어깨부터 등·옆을 감싸고 앞은 열려 팔과 책이 나옴 -----
  const shawl = createShawl(); shawl.visible = false; spine.add(shawl);

  // ----- S10 캐릭터 바꾸기: 같은 몸(같은 동작)에 색과 귀만 바꿔 다른 친구로 -----
  const earsBear = new THREE.Group(), earsBunny = new THREE.Group(); head.add(earsBear, earsBunny);
  const innerPink = paintMat('#f6b8b4', { grain: 10, rim: 0.2 });
  for (const s of [-1, 1]) {
    const e = part(new THREE.SphereGeometry(0.075, 18, 12), fur, 'earBear'); e.scale.set(1, 1, 0.55); e.position.set(s * 0.235, 0.285, 0.02); e.rotation.z = s * -0.75; e.scale.multiplyScalar(1.1); earsBear.add(e);
    const ei = new THREE.Mesh(new THREE.CircleGeometry(0.045, 16), innerPink); ei.position.set(s * 0.235, 0.285, -0.025); ei.rotation.set(0, Math.PI, s * 0.75); earsBear.add(ei);
    const b = part(new THREE.CapsuleGeometry(0.05, 0.2, 6, 14), fur, 'earBunny'); b.scale.set(1, 1, 0.5); b.position.set(s * 0.085, 0.47, 0.03); b.rotation.z = s * -0.22; b.rotation.x = 0.12; earsBunny.add(b);
    const bi = new THREE.Mesh(new THREE.CapsuleGeometry(0.028, 0.15, 4, 10), innerPink); bi.scale.set(1, 1, 0.3); bi.position.set(s * 0.085, 0.47, 0.006); bi.rotation.z = s * -0.22; bi.rotation.x = 0.12; earsBunny.add(bi);
  }
  earsBear.visible = earsBunny.visible = false;
  const KINDS = {
    seal: { name: '노란 물범', fur: '#f6db8c', cream: '#fbecc4' },
    bear: { name: '곰돌이', fur: '#c99670', cream: '#f3dcc0' },
    bunny: { name: '하얀 토끼', fur: '#fbf4ea', cream: '#ffffff' },
  };
  let kind = 'seal';
  function setKind(k) {
    if (!KINDS[k]) k = 'seal'; kind = k; const K = KINDS[k];
    fur.color.set(K.fur); cream.color.set(K.cream);
    earsBear.visible = k === 'bear'; earsBunny.visible = k === 'bunny';
    return K.name;
  }

  return { group, body, skeleton, bones: { root, spine, head, armL, armR, footL, footR, book }, slots, extras: { lids, eyes, mug, leaf, blanket, glasses, shawl }, setKind, get kind() { return kind; }, KINDS };
}
