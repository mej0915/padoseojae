// S5 해변 환경 프로토타입 장면: 하늘(2D) + 3D 바닥(바다·파도·모래) + 크기 비교용 소품 + 둘러보기 카메라 + 종이결 마무리
import * as THREE from 'three';
import { createBeach, STAGE, DRY_MIN } from './beach.js';
import { createWaves } from './waves.js';
import { paintMat, addOutline, blobTexture, NOISE } from './paint.js';
import { createSeal } from './seal.js';
import { createMotionPlayer } from './motions.js';
import * as PR from './props.js';
import { createCap, createHeadset } from './chibi.js';
import { createSeasonHat, createScarf } from './hats.js';
import { createPuppy } from './puppy.js';
import { textToCanvas, FONTS, sandMask } from './sandtext.js';
import { createBoat, createIsland, createGull, createCrab, createMotes } from './life.js';

/** 품질 3단계. 모바일 기본 = 보통, PC 기본 = 높음. ?quality=low|mid|high 로 강제 */
export const QUALITY = {
  low: { label: '낮음', pixelRatio: 1, shadow: 1024, fps: 30, map: 512, msaa: 0, finish: false },
  mid: { label: '보통', pixelRatio: 1.5, shadow: 1024, fps: 30, map: 2048, msaa: 0, finish: true },
  high: { label: '높음', pixelRatio: 2, shadow: 2048, fps: 60, map: 2048, msaa: 4, finish: true },
};
export function pickQuality() {
  const forced = new URLSearchParams(location.search).get('quality');
  if (QUALITY[forced]) return forced;
  try { const saved = sessionStorage.getItem('s5q'); if (QUALITY[saved]) return saved; } catch { /* 저장 불가 환경 */ }
  const mobile = matchMedia?.('(pointer: coarse)').matches || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
  return mobile ? 'mid' : 'high';
}

const FINISH_FRAG = /* glsl */`
uniform sampler2D tScene; uniform vec2 uRes, uSun; uniform float uDpr, uPaper, uDof, uFocus, uDusk, uHor, uSkyK;
${NOISE}
void main(){
  vec2 px = gl_FragCoord.xy / uDpr;
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 w = (vec2(vnoise(vec3(px * 0.045, 1.0)), vnoise(vec3(px * 0.045, 7.0))) - 0.5) * uPaper;
  vec2 uvw = uv + w * 1.4 * uDpr / uRes;
  // 몰입감: 캐릭터가 있는 높이만 또렷하게, 먼 바다와 하늘, 화면 맨 앞은 부드럽게 흐림
  float far = smoothstep(0.14, 0.46, uv.y - uFocus), near = smoothstep(0.30, 0.55, uFocus - uv.y);
  float blur = uDof * max(far * 0.8, near * 0.45);
  vec3 c = texture2D(tScene, uvw).rgb;
  if (blur > 0.02) {
    vec2 rad = blur * 4.2 * uDpr / uRes; vec3 acc = c; 
    for (int i = 0; i < 12; i++) { float a = float(i) * 2.399963, rr = sqrt((float(i) + 0.5) / 12.0); acc += texture2D(tScene, uvw + vec2(cos(a), sin(a)) * rr * rad).rgb; }
    c = acc / 13.0;
    c = mix(c, mix(vec3(dot(c, vec3(0.3, 0.59, 0.11))), c, 0.9) * 1.02 + vec3(0.008, 0.005, 0.003), far * uDof);     // 먼 곳은 살짝 옅게
  } else {
    // S7: 또렷한 곳은 살짝 선명하게(언샤프): 윤곽선과 질감이 뭉개지지 않게
    vec2 o1 = 1.2 * uDpr / uRes;
    vec3 nb = (texture2D(tScene, uvw + vec2(o1.x, 0.0)).rgb + texture2D(tScene, uvw - vec2(o1.x, 0.0)).rgb + texture2D(tScene, uvw + vec2(0.0, o1.y)).rgb + texture2D(tScene, uvw - vec2(0.0, o1.y)).rgb) * 0.25;
    c = max(c + (c - nb) * 0.55, vec3(0.0));
  }
  vec4 o = linearToOutputTexel(vec4(c, 1.0));
  float paper = 0.955 + 0.06 * fbm(vec3(px * 0.22, 2.0)) + 0.025 * (vnoise(vec3(px * 1.3, 4.0)) - 0.5);
  o.rgb *= mix(1.0, paper, uPaper * 0.8);
  // 채색 (S7: 색감은 유지하고 대비를 올림) — 어두운 곳을 더 깊게, 밝은 곳은 그대로, 채도 조금 더
  float lum = dot(o.rgb, vec3(0.3, 0.59, 0.11));
  o.rgb = mix(vec3(lum), o.rgb, 1.14);
  o.rgb = clamp((o.rgb - 0.045) / 0.955, 0.0, 1.0);                         // 검은 쪽 기준점을 내림(뿌연 막 걷어냄)
  o.rgb = mix(o.rgb, o.rgb * o.rgb * (3.0 - 2.0 * o.rgb), 0.48);           // S자 대비
  vec3 shadowTint = vec3(0.93, 0.9, 1.02), lightTint = vec3(1.03, 1.0, 0.95);  // 그늘은 살짝 보랏빛, 빛은 살짝 따뜻하게
  float l2 = dot(o.rgb, vec3(0.3, 0.59, 0.11));
  o.rgb *= mix(shadowTint, lightTint, smoothstep(0.2, 0.75, l2));
  float sunD = length((uv - uSun) * vec2(uRes.x / uRes.y, 1.0));
  o.rgb += vec3(1.0, 0.72, 0.42) * (0.10 * exp(-sunD * 2.4) + 0.08 * exp(-sunD * 7.0));
  // S8 노을: 머무는 시간이 길어질수록(uDusk 0→1) 하늘은 주황·분홍·보라로, 땅은 따뜻하고 낮게, 그늘은 보랏빛으로
  if (uDusk > 0.001) {
    float l3 = dot(o.rgb, vec3(0.3, 0.59, 0.11));
    float sky = smoothstep(uHor - 0.015, uHor + 0.06, uv.y) * uSkyK;
    float up = smoothstep(uHor, uHor + 0.5, uv.y);
    vec3 skyGrad = mix(mix(vec3(1.0, 0.6, 0.3), vec3(0.98, 0.5, 0.5), smoothstep(0.0, 0.45, up)), vec3(0.52, 0.42, 0.7), smoothstep(0.35, 1.0, up));
    vec3 skyC = skyGrad * (0.62 + 0.55 * l3);
    o.rgb = mix(o.rgb, skyC, sky * uDusk * 0.72);
    vec3 warm = o.rgb * mix(vec3(0.66, 0.56, 0.72), vec3(1.12, 0.84, 0.64), smoothstep(0.12, 0.8, l3));
    o.rgb = mix(o.rgb, warm, (1.0 - sky) * uDusk * 0.8);
    float band = exp(-abs(uv.y - uHor) * 22.0) * uSkyK;                       // 수평선 근처 바다에 노을빛 띠
    o.rgb += vec3(1.0, 0.5, 0.25) * band * 0.16 * uDusk;
    o.rgb += vec3(1.0, 0.45, 0.2) * 0.22 * exp(-sunD * 3.2) * uDusk;          // 해 주변이 붉게 번짐
  }
  float v = length((uv - 0.5) * vec2(1.0, 0.9));
  o.rgb *= mix(vec3(1.0), vec3(0.74, 0.69, 0.82), smoothstep(0.42, 0.95, v));
  gl_FragColor = vec4(o.rgb, 1.0);
}`;

export const CHAIR_POS = new THREE.Vector3(0, 0, -0.8);

function createShell(color) {   // S4 props.js의 조개(형태 동일)
  const g = new THREE.Group();
  const geo = new THREE.SphereGeometry(0.15, 36, 14, 0, Math.PI * 2, 0, Math.PI / 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), r = Math.hypot(x, z) || 1, a = Math.atan2(z, x);
    const rib = 1 + 0.11 * Math.cos(a * 11) * Math.min(1, r / 0.1);
    p.setX(i, x * rib); p.setZ(i, z * rib);
  }
  geo.computeVertexNormals();
  const body = new THREE.Mesh(geo, paintMat(color, { grain: 28, grainAmt: 0.25, tint: '#b07ab0', rim: 0.35 }));
  body.scale.set(1.0, 0.55, 0.9); body.castShadow = true;
  addOutline(body, '#a4645a', 0.006, 28);
  g.add(body); g.rotation.set(0.12, 0.5, -0.1);
  return g;
}

export function createScene(canvas, audio = null) {
  const qName = pickQuality(), Q = QUALITY[qName];
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'default' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, Q.pixelRatio));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.info.autoReset = false;
  const gl = renderer.getContext();
  const halfOK = renderer.capabilities.isWebGL2 && (renderer.extensions.has('EXT_color_buffer_half_float') || renderer.extensions.has('EXT_color_buffer_float'));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.05, 2000);
  camera.rotation.order = 'YXZ';
  const refCam = new THREE.PerspectiveCamera(40, 1, 0.05, 2000);
  const beach = createBeach(renderer, { mapW: Q.map });
  scene.add(beach.sky, beach.ground);
  const waves = createWaves(Number(new URLSearchParams(location.search).get('seed')) || 20261115);

  const hemi = new THREE.HemisphereLight('#efd2dc', '#d9b08e', 0.9); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffd6a8', 1.35);
  sun.position.set(1.6, 4.0, -7.8); sun.target.position.set(0, 0, -0.3); scene.add(sun.target);
  sun.castShadow = true; sun.shadow.mapSize.set(Q.shadow * 2, Q.shadow * 2);
  Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 7, bottom: -7, near: 1, far: 22 });
  sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.02; sun.shadow.radius = 5;
  scene.add(sun);
  const fill = new THREE.DirectionalLight('#fff0dc', 1.3); fill.position.set(-2.4, 3.6, 3.2); scene.add(fill);

  // 그림자만 받는 투명 바닥 (바닥 셰이더 위에 겹침)
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(24, 16), new THREE.ShadowMaterial({ color: '#5e2f4c', opacity: 0.58 }));
  catcher.rotation.x = -Math.PI / 2; catcher.position.set(0, 0.002, 1); catcher.receiveShadow = true; scene.add(catcher);

  // ----- 캐릭터: 물범 하나. 돗자리에 비스듬히 앉아 얼굴이 3/4쯤 보이게 -----
  const SPOT = new THREE.Vector3(CHAIR_POS.x + 0.05, 0, CHAIR_POS.z + 0.1);
  const SEAL_YAW = -2.25;
  const myMat = PR.createMat(true); myMat.scale.setScalar(1.12); myMat.position.set(SPOT.x + 0.08, 0, SPOT.z + 0.08); myMat.rotation.y = 0.1; scene.add(myMat);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.1), new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2; blob.position.set(SPOT.x, 0.03, SPOT.z + 0.05); scene.add(blob);
  const seal = createSeal(); scene.add(seal.group);
  let onCue = null;
  const motion = createMotionPlayer(seal.group, { onCue: (n, m) => onCue?.(n, m) });
  seal.group.rotation.order = 'YXZ'; seal.group.position.set(SPOT.x, 0.03, SPOT.z); seal.group.rotation.set(0, SEAL_YAW, 0);
  const sealCap = createSeasonHat(); seal.bones.head.add(sealCap);   // S8: 머리 모양을 따라 쓰는 모자 (겨울엔 비니)
  // S9 강아지 친구 몽글이: 물범 오른쪽 돗자리 위
  const puppy = createPuppy(); puppy.position.set(SPOT.x + 0.68, 0.03, SPOT.z + 0.26); puppy.rotation.y = -0.45; puppy.scale.setScalar(1.05); scene.add(puppy);
  const sealSet = createHeadset(0.265); sealSet.position.set(0, 0.13, 0); sealSet.visible = false; seal.bones.head.add(sealSet);
  const SX = seal.extras;
  const sealScarf = createScarf(); sealScarf.visible = false; seal.bones.spine.add(sealScarf);   // S9: 담요 대신 목도리
  const worn = { cap: true, blanket: false, headset: false, glasses: false };
  const applyWorn = () => { sealCap.visible = worn.cap; sealSet.visible = worn.headset; SX.blanket.visible = false; sealScarf.visible = worn.blanket; SX.glasses.visible = worn.glasses; };
  applyWorn();
  let blinkT = 2.2;
  const sealChar = { group: seal.group, head: seal.bones.head, front: -1,
    update(t, dt) {
      motion.update(dt);
      blinkT -= dt; if (blinkT < -0.13) blinkT = 2.4 + Math.random() * 3.4 + (Math.random() < 0.2 ? -2.1 : 0);   // 가끔 두 번 연달아 깜빡
      const closed = motion.state.eyes > 0.5 || blinkT < 0;
      const sleepy = motion.state.eyes <= 0.5 || motion.state.sleepy; for (const l of SX.lids) { l.visible = closed; l.rotation.z = sleepy ? Math.PI : 0; l.position.y = sleepy ? 0.178 : 0.162; } for (const e of SX.eyes) e.visible = !closed;
      SX.mug.visible = !!motion.state.show.mug; SX.leaf.visible = !!motion.state.show.leaf;
    } };
  const chars = [sealChar], charIdx = 0;
  function toggleItem(id) { worn[id] = !worn[id]; applyWorn(); return worn[id]; }
  const act = (name) => motion.play(name);

  // ----- 소품: 무대 좌표(가로 화면용 / 세로 화면용)로 자리를 정해 어떤 화면에서도 화면 안에 놓이게 한다 -----
  const items = [], updaters = [];
  const put = (o, dxL, syL, dxP, syP, sP = 1, rot = null) => {
    if (rot !== null) o.rotation.y = rot;
    scene.add(o); items.push({ o, dxL, syL, dxP, syP, sP, s0: o.scale.x, y0: o.position.y }); if (o.userData.update) updaters.push(o); return o;
  };
  const parasol = PR.createParasol(); parasol.scale.setScalar(0.86); scene.add(parasol);
  // S7: 소품을 줄여 여백을 둔다 (돗자리 하나, 탁자, 모래성, 팻말, 바위, 조개 4개, 조약돌 몇 개, 풀 두 포기, 꽃게 한 마리)
  put(PR.createTable(), 255, 812, 150, 828, 0.85);
  const castle = put(PR.createCastle(), 545, 880, 230, 960, 1, -0.3);     // 세로 화면에서는 모래성을 빼서 여백을 둠
  put(PR.createSign(), 505, 798, 222, 786, 0.55, -0.25);
  put(PR.createRocks(), -600, 776, -250, 760, 0.35);
  put(PR.createStarfish('#ef8466'), -470, 935, -232, 940, 0.85, 0.4);
  // 내 조개 4개: 앞쪽 빈 모래에 넉넉히 떨어뜨려 놓아 손가락으로도 누르기 쉽게 (무대 좌표, 가로 화면 / 세로 화면)
  const shellSpots = [[-345, 875, -190, 870], [-330, 992, -165, 1000], [250, 975, 160, 1003], [395, 890, 205, 885]];
  const shellCols = ['#f4a99c', '#f6e3cf', '#e5c3ea', '#f7c9a8'];
  const shells = shellSpots.map(([a, b, c, d], i) => put(i === 2 ? PR.createConch(shellCols[i]) : PR.createShell(shellCols[i]), a, b, c, d, 0.9, 0.6 + i * 1.7));
  shells.forEach((sh, i) => { const k = 0.9; sh.scale.setScalar(k); items[items.length - shells.length + i].s0 = k; });
  const pebbles = [[-560, 870], [470, 820], [-120, 1000], [600, 960], [130, 905]].map(([a, b], i) =>
    put(PR.createPebble(0.032 + (i % 3) * 0.01, i % 2 ? '#a99486' : '#bba59e'), a, b, a * 0.32, b + (i % 3) * 8, 1, i));
  put(PR.createGrass(16, 0.75), -735, 1006, -232, 1012, 0.7);
  put(PR.createGrass(12, 0.6), 748, 1010, 236, 1016, 0.7, 1.2);
  put(createCrab('#e8694c', 0.45, 0), 415, 820, -150, 806, 0.6);
  // 조개 반짝임: 누를 수 있다는 표시
  const sparkTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); x.translate(32, 32);
    const g = x.createRadialGradient(0, 0, 0, 0, 0, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,246,214,0.55)'); g.addColorStop(1, 'rgba(255,230,180,0)'); x.fillStyle = g; x.fillRect(-32, -32, 64, 64);
    x.fillStyle = 'rgba(255,255,255,0.95)'; for (const r of [0, Math.PI / 2]) { x.save(); x.rotate(r); x.beginPath(); x.moveTo(-30, 0); x.quadraticCurveTo(0, 2.5, 30, 0); x.quadraticCurveTo(0, -2.5, -30, 0); x.fill(); x.restore(); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const sparks = shells.map(() => { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); sp.scale.setScalar(0.2); scene.add(sp); return sp; });
  const shellHop = shells.map(() => 0);
  // 먼 바다와 하늘
  const boat1 = createBoat(7.5); boat1.position.set(-22, 0, -125); scene.add(boat1); updaters.push(boat1);
  const boat2 = createBoat(9, '#8f7aa6', '#ffe9d6'); boat2.position.set(30, 0, -300); scene.add(boat2); updaters.push(boat2);
  const island = createIsland(); island.position.set(-58, 0, -560); island.scale.setScalar(1.35); scene.add(island); updaters.push(island);
  for (const o of [createGull({ cx: -6, cy: 7, cz: -34, rx: 15, rz: 6, speed: 0.2, ph: 0 }), createGull({ cx: 6, cy: 8.5, cz: -44, rx: 18, rz: 8, speed: -0.16, ph: 2.2, size: 1.1 }), createGull({ cx: -2, cy: 4.2, cz: -17, rx: 7, rz: 3, speed: 0.27, ph: 4.1, size: 0.8 })]) { scene.add(o); updaters.push(o); }
  const motes = createMotes(Q.finish ? 46 : 24); scene.add(motes); updaters.push(motes);

  // ----- 하늘에서 보기(버드뷰)용: 다른 사람들의 자리와 흔적. 지금은 꾸며 둔 예시이고, 나중에 실제 이용자 자리로 바뀔 곳 -----
  const others = new THREE.Group(); others.visible = false; scene.add(others);
  const addOther = (o, x, z, ry = 0, sc = 1) => { o.position.x = x; o.position.z = z; o.rotation.y = ry; o.scale.setScalar(sc); others.add(o); if (o.userData.update) updaters.push(o); return o; };
  const labelTex = (text, bg = 'rgba(255,248,236,0.92)', fg = '#5a4034') => {
    const c = document.createElement('canvas'); c.width = 512; c.height = 112; const x = c.getContext('2d');
    x.font = '600 44px "Gaegu", "Nanum Pen Script", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif'; const tw = Math.min(480, x.measureText(text).width + 56);
    x.fillStyle = bg; x.beginPath(); x.roundRect(256 - tw / 2, 14, tw, 84, 42); x.fill(); x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 256, 58, 440);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  };
  const labels = [], spots = [{ x: SPOT.x, z: SPOT.z, mine: true }], otherShells = [];
  const sampleNotes = [['바다의 뚜껑', '파도 소리 들으면서 읽으니까 문장이 더 천천히 들어온다'], ['작은 것들의 신', '오늘은 스무 쪽. 내일 또 올게'], ['어린 왕자', '길들인다는 건 시간을 쓰는 일'], ['달러구트 꿈 백화점', '졸리지만 한 장만 더'], ['모모', '시간은 삶이고 삶은 마음속에 있다'], ['긴긴밤', '노을이 예뻐서 책을 잠깐 덮었다']];
  const addLabel = (text, x, z, y = 0.6, bg) => { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(text, bg), transparent: true, depthTest: false, depthWrite: false })); sp.scale.set(3.7, 0.81, 1); sp.position.set(x, y, z); sp.renderOrder = 50; sp.userData.text = text; sp.userData.bg = bg; others.add(sp); labels.push(sp); return sp; };
  const sandTexts = [];
  const addSandText = (text, x, z, ry, w = 2.6) => {
    const mat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0.85 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 3), mat); m.rotation.set(-Math.PI / 2, 0, ry); m.position.set(x, 0.006, z); m.renderOrder = 2; others.add(m);
    const draw = () => { const c = document.createElement('canvas'); c.width = 768; c.height = 256; const g = c.getContext('2d'); g.globalAlpha = 0.7; g.drawImage(textToCanvas(text, FONTS[0], '#fff0d8'), 2, 3); g.globalAlpha = 1; g.drawImage(textToCanvas(text, FONTS[0], '#8a5644'), 0, 0); mat.map?.dispose(); mat.map = new THREE.CanvasTexture(c); mat.map.colorSpace = THREE.SRGBColorSpace; mat.needsUpdate = true; };
    draw(); sandTexts.push(draw);
  };
  const stepMat = new THREE.MeshBasicMaterial({ color: '#7a4a3c', transparent: true, opacity: 0.3, depthWrite: false });
  const stepGeo = new THREE.CircleGeometry(0.07, 10);
  const addSteps = (x0, z0, x1, z1) => { const n = Math.round(Math.hypot(x1 - x0, z1 - z0) / 0.32), ang = Math.atan2(x1 - x0, z1 - z0);
    for (let i = 0; i <= n; i++) { const u = i / n, sd = i % 2 ? 1 : -1, m = new THREE.Mesh(stepGeo, stepMat); m.rotation.set(-Math.PI / 2, 0, ang); m.scale.set(0.7, 1.25, 1);
      m.position.set(x0 + (x1 - x0) * u + Math.cos(ang) * 0.09 * sd + Math.sin(u * 9) * 0.05, 0.005, z0 + (z1 - z0) * u - Math.sin(ang) * 0.09 * sd); m.renderOrder = 2; others.add(m); } };
  [[-5.4, 1.2, '#6fa8c9', 0.3, '소미 · 읽는 중'], [4.9, 0.4, '#f2c14e', -0.4, '바다곰 · 읽는 중'], [-2.9, 4.0, '#b98ad0', 0.8, null], [3.2, 3.6, '#7cc4a0', -0.2, '달빛 · 쉬는 중'], [8.2, 2.6, '#ee8f78', 0.5, null], [-8.4, 3.4, '#f0a8b8', -0.6, null]].forEach(([x, z, col, ry, name], i) => {
    const p = addOther(PR.createParasol(col, '#fbeeda'), x, z, ry, 0.86); p.rotation.z = 0.08 * (i % 2 ? 1 : -1);
    addOther(PR.createMat(), x + 0.9, z + 0.6, ry + 0.4, 0.9);
    const osh = addOther(i % 2 ? PR.createConch() : PR.createShell(shellCols[i % 6]), x - 0.5, z + 1.0, i, 1.0); otherShells.push({ o: osh, who: name ? name.split(' ')[0] : '누군가', title: sampleNotes[i][0], text: sampleNotes[i][1] });
    spots.push({ x: x + 0.3, z: z + 0.4 });
    if (i % 3 === 0) addOther(PR.createBall(), x + 1.7, z - 0.3, 0, 0.9);
    if (name) addLabel(name, x, z - 1.5, 0.6);
  });
  addOther(PR.createCastle(), -6.6, 4.4, 0.5, 0.9); addOther(PR.createCastle(), 6.3, 4.6, -0.8, 0.75);
  // 비어 있는 자리: 돗자리와 조개만 남고, 발자국이 멀어진다
  addOther(PR.createMat(), 5.6, -0.4 + 2.6, -0.3, 0.9); addOther(PR.createShell('#f7c9b6'), 6.5, 2.9, 1, 0.9); addOther(PR.createConch(), 5.0, 3.0, 2, 0.8);
  spots.push({ x: 5.7, z: 2.6 });
  addLabel('10분 전에 집에 갔어요', 5.8, 1.35, 0.6, 'rgba(255,236,214,0.94)'); addSteps(6.2, 2.9, 10.5, 5.6);
  addSteps(-5.0, 1.9, -3.4, -0.9); addSteps(3.0, 3.2, 1.6, 5.8); addSteps(-8.0, 4.0, -10.5, 2.0);
  addSandText('오늘도 수고했어', -3.3, 1.9, 0.12); addSandText('소미 다녀감', 2.6, 1.5, -0.1, 2.0); addSandText('또 올게 바다야', -6.6, 2.5, 0.2, 2.4); addSandText('한 장만 더', 7.2, 1.0, -0.15, 2.0);
  [[-1.8, 2.6], [1.4, 4.3], [-4.2, 3.1], [6.9, 3.9], [-7.3, 1.5], [9.2, 4.4], [0.6, 5.4], [-9.4, 4.9]].forEach(([x, z], i) => addOther(i % 3 ? PR.createShell(shellCols[i % 6]) : PR.createStarfish(i % 2 ? '#f6b56a' : '#e88aa0'), x, z, i * 1.3, 0.85));
  // 내 자리 표시
  const myRing = new THREE.Mesh(new THREE.RingGeometry(1.25, 1.36, 48), new THREE.MeshBasicMaterial({ color: '#fff3c8', transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending }));
  myRing.rotation.x = -Math.PI / 2; myRing.position.set(CHAIR_POS.x, 0.012, CHAIR_POS.z + 0.1); others.add(myRing);
  const myLabel = addLabel('내 자리', CHAIR_POS.x, CHAIR_POS.z - 1.7, 0.6, 'rgba(255,255,255,0.96)');
  document.fonts?.ready?.then(() => setTimeout(() => { sandTexts.forEach((d) => d()); labels.forEach((sp) => { sp.material.map.dispose(); sp.material.map = labelTex(sp.userData.text, sp.userData.bg); }); }, 300));
  let view = 'seat', onView = null; const bird = { k: 0, b: 0 }, focus = { x: SPOT.x, z: SPOT.z, mine: true };
  function setView(v, spot = null) { view = v; if (v === 'focus') Object.assign(focus, spot || spots[0]); if (v !== 'bird') { look.tx = 0; look.ty = 0; } if (v !== 'focus') pick.on = false; onView?.(v, focus); }
  const cam = { pos: new THREE.Vector3(), pitch: 0, fov: 40, init: false }, camT = { pos: new THREE.Vector3(), pitch: 0, fov: 40 };
  const pick = { on: false, onShell: null, onOther: null, noted: new Set(), hover: -1 };

  // ----- 마무리 패스 -----
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: halfOK ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: Q.msaa });
  if (!halfOK) rt.texture.colorSpace = THREE.SRGBColorSpace;
  const finishU = { tScene: { value: rt.texture }, uRes: { value: new THREE.Vector2() }, uDpr: { value: 1 }, uPaper: { value: Q.finish ? 1 : 0 }, uSun: { value: new THREE.Vector2(0.7, 0.75) }, uDof: { value: 1 }, uFocus: { value: 0.35 }, uDusk: { value: 0 }, uHor: { value: 0.6 }, uSkyK: { value: 1 } };
  const finishScene = new THREE.Scene();
  const finish = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: finishU, depthTest: false, depthWrite: false, vertexShader: 'void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }', fragmentShader: FINISH_FRAG,
  }));
  finish.frustumCulled = false; finishScene.add(finish);
  const ortho = new THREE.OrthographicCamera();

  // ----- 카메라: 기본 구도는 S4와 같은 풀이(수평선·의자 발밑을 그림 좌표에 맞춤). 둘러보기는 실제로 카메라를 옮긴다 -----
  let W = 1, H = 1, L = null, simT = 0;
  const base = { pos: new THREE.Vector3(), pitch: 0, fov: 40, f: 1, d: 5 };
  const look = { on: false, x: 0, y: 0, tx: 0, ty: 0, k: 0 };          // x,y: -1~1 (현재값), tx,ty: 목표, k: 둘러보기 전환 0~1
  const gPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), gRay = new THREE.Raycaster(), gNdc = new THREE.Vector2(), gHit = new THREE.Vector3(), tmp = new THREE.Vector3();
  function groundFromStage(sx, sy) {
    const px = L.tx + sx * L.scale, py = L.ty + sy * L.scale;
    gNdc.set((px / W) * 2 - 1, -(py / H) * 2 + 1); gRay.setFromCamera(gNdc, refCam);
    return gRay.ray.intersectPlane(gPlane, gHit) ? gHit.clone() : new THREE.Vector3();
  }
  /** 월드 점 → 현재 카메라 화면(css px) */
  function screenOf(v) { tmp.copy(v).project(camera); return [(tmp.x + 1) / 2 * W, (1 - tmp.y) / 2 * H]; }
  /** 월드 점 → 기준 구도에서의 무대 좌표 */
  function stageOf(v) { tmp.copy(v).project(refCam); return [(((tmp.x + 1) / 2) * W - L.tx) / L.scale, (((1 - tmp.y) / 2) * H - L.ty) / L.scale]; }

  function layout() {
    W = canvas.clientWidth || innerWidth; H = canvas.clientHeight || innerHeight;
    renderer.setSize(W, H, false);
    const dpr = renderer.getPixelRatio();
    rt.setSize(Math.round(W * dpr), Math.round(H * dpr));
    finishU.uRes.value.set(Math.round(W * dpr), Math.round(H * dpr)); finishU.uDpr.value = dpr;
    L = beach.layout(W, H, dpr);
    const s = L.scale, cy = H / 2, SCALE_C = L.portrait ? 178 : 205, TA = 0.3;     // S7: 290 → 205/178, 한 걸음 물러난 시점
    const yH = L.horizonFrac * H; finishU.uHor.value = 1 - L.horizonFrac;
    const feetStage = Math.min(805, L.stageBottom - 0.2 * (L.stageBottom - L.stageTop));
    const yC = L.ty + feetStage * s;
    const A = cy - yH, B = (yC - cy) / A;
    const u = (-(B + 1) + Math.sqrt((B + 1) ** 2 + 4 * B * TA * TA)) / (2 * B * TA);
    const f = A / u, d = f / (SCALE_C * s), camY = TA * d;
    base.pitch = Math.atan(u); base.f = f; base.d = d; base.fov = THREE.MathUtils.radToDeg(2 * Math.atan((H / 2) / f));
    base.pos.set(0, camY, d + CHAIR_POS.z - 0.36);
    refCam.fov = base.fov; refCam.aspect = W / H; refCam.position.copy(base.pos); refCam.rotation.order = 'YXZ'; refCam.rotation.set(-base.pitch, 0, 0);
    refCam.updateProjectionMatrix(); refCam.updateMatrixWorld(); refCam.matrixWorldInverse.copy(refCam.matrixWorld).invert();
    beach.setRef(new THREE.Matrix4().multiplyMatrices(refCam.projectionMatrix, refCam.matrixWorldInverse));
    L.feetStage = feetStage; L.camY = camY; L.camDist = d;
    // 소품 배치: 무대 좌표 → 바닥 3D 좌표
    const hw = (W / s) / 2, bottom = L.stageBottom, cx = STAGE.focusX, k = THREE.MathUtils.clamp((hw - 237) / 360, 0, 1), mix = THREE.MathUtils.lerp;
    for (const it of items) {
      const g = groundFromStage(cx + mix(it.dxP, it.dxL, k), Math.min(mix(it.syP, it.syL, k), bottom + 4));
      it.o.position.set(g.x, it.y0, g.z); it.o.scale.setScalar(it.s0 * mix(it.sP, 1, k)); it.o.userData.s0 = it.o.scale.x;
    }
    parasol.position.set(mix(-0.5, -0.92, k), 0, CHAIR_POS.z - 0.42);
    castle.visible = k > 0.45;
    const sunP = [L.tx + 1000 * s, L.ty + 232 * s]; finishU.uSun.value.set(sunP[0] / W, 1 - sunP[1] / H);
    applyCamera(true);
  }

  let camDt = 0;
  function applyCamera(snap) {
    const k = look.k, x = look.x * k, y = look.y * k;
    const idle = (1 - k) * (L.portrait ? 0.035 : 0.07), truck = x * 0.95 + Math.sin(simT * 0.21) * idle, fwd = (y < 0 ? -y * 1.0 : -y * 0.45) + 0.25 * k + (Math.sin(simT * 0.13 + 1.0) * 0.5 + 0.5) * idle;     // 위로 끌면 앞으로, 아래로 끌면 조금 뒤로
    const yaw = Math.atan2(truck, base.d) * 0.18, zoom = 1 + 0.08 * k;
    const wide = W / H > 1 ? 1 : 0;
    const seatFov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(base.fov) / 2) / zoom));
    if (view === 'bird') { camT.pos.set(look.x * (wide ? 4.5 : 6.5), wide ? 13.5 : 15, 3.4 + look.y * 3.2); camT.pitch = -1.32; camT.fov = wide ? 52 : 64; }
    else if (view === 'focus') { camT.pos.set(focus.x, wide ? 4.3 : 5.6, focus.z + (wide ? 3.3 : 3.6)); camT.pitch = -0.93; camT.fov = wide ? 44 : 54; }   // 한 번 더 물러난 화면: 조개와 글씨가 한눈에 보이고 누르기 쉽다
    else { camT.pos.set(base.pos.x + truck, base.pos.y - 0.1 * Math.max(0, fwd), base.pos.z - fwd); camT.pitch = -base.pitch; camT.fov = seatFov; }
    if (!cam.init || snap === true) { cam.pos.copy(camT.pos); cam.pitch = camT.pitch; cam.fov = camT.fov; cam.init = true; }
    else { const a = Math.min(1, camDt * 3.2); cam.pos.lerp(camT.pos, a); cam.pitch += (camT.pitch - cam.pitch) * a; cam.fov += (camT.fov - cam.fov) * a; }
    camera.fov = cam.fov; camera.aspect = W / H; camera.position.copy(cam.pos);
    const away = THREE.MathUtils.clamp((-cam.pitch - base.pitch) / 0.5, 0, 1);
    camera.rotation.set(cam.pitch, yaw * (1 - away), 0);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    bird.k = away; bird.b = THREE.MathUtils.clamp((-cam.pitch - 1.0) / 0.3, 0, 1);
    beach.setSky(-(base.f * Math.tan(yaw)) / L.scale, zoom);                      // 하늘은 무한히 멀리: 회전만큼만 옆으로
  }
  addEventListener('resize', layout);
  layout();

  // ----- 둘러보기: 끌어서 제한된 범위 안에서 이동 -----
  let drag = null, tap = null;
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  canvas.addEventListener('pointerup', (e) => {
    if (!tap || Math.hypot(e.clientX - tap.x, e.clientY - tap.y) > 8) return;
    const r = canvas.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    if (view === 'bird') {      // 누른 곳에서 가장 가까운 자리(내 자리, 다른 사람 자리)를 가까이 본다
      if (!ray.ray.intersectPlane(gPlane, gHit)) return; let best = null, bd = 2.6;
      for (const sp of spots) { const d = Math.hypot(gHit.x - sp.x, gHit.z - sp.z); if (d < bd) { bd = d; best = sp; } }
      if (best) setView('focus', best); return;
    }
    if (view === 'seat') {      // S7: 내 자리에서 바로 조개 누르기
      const i = shellAt(mx, my); if (i >= 0) { shellHop[i] = 1; puppy.userData.runTo(shells[i].position.x, shells[i].position.z); pick.onShell?.(i); return; }   // S9: 몽글이가 조개로 뛰어감
      tmp2.copy(puppy.position).setY(0.3); const [px, py] = screenOf(tmp2);
      if (Math.hypot(px - mx, py - my) < Math.max(45, Math.min(W, H) * 0.07)) { puppy.userData.poke(); pick.onPuppy?.(); }
      return;
    }
    if (view === 'focus') {     // 조개 누르기 (작은 화면에서도 누르기 쉽게 넉넉히)
      let best = null, bd = 56;
      shells.forEach((sh, i) => { const [sx, sy] = screenOf(sh.position); const d = Math.hypot(sx - mx, sy - my); if (d < bd) { bd = d; best = () => pick.onShell?.(i); } });
      otherShells.forEach((os) => { const [sx, sy] = screenOf(os.o.position); const d = Math.hypot(sx - mx, sy - my); if (d < bd) { bd = d; best = () => pick.onOther?.(os); } });
      best?.();
    }
  });
  function shellAt(mx, my) { let best = -1, bd = Math.max(40, Math.min(W, H) * 0.075); shells.forEach((sh, i) => { const [sx, sy] = screenOf(sh.position); const d = Math.hypot(sx - mx, sy - (my + 6)); if (d < bd) { bd = d; best = i; } }); return best; }
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType !== 'mouse' || view !== 'seat') { pick.hover = -1; return; } const r = canvas.getBoundingClientRect(); pick.hover = shellAt(e.clientX - r.left, e.clientY - r.top); canvas.style.cursor = pick.hover >= 0 ? 'pointer' : ''; });
  canvas.addEventListener('pointerdown', (e) => { tap = { x: e.clientX, y: e.clientY }; if (view !== 'bird') return; drag = { x: e.clientX, y: e.clientY, tx: look.tx, ty: look.ty }; canvas.setPointerCapture?.(e.pointerId); });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const span = Math.min(W, H) * 0.9;
    look.tx = THREE.MathUtils.clamp(drag.tx - (e.clientX - drag.x) / span * 2, -1, 1);   // 화면을 오른쪽으로 끌면 풍경이 따라오도록(카메라는 왼쪽으로)
    look.ty = THREE.MathUtils.clamp(drag.ty + (e.clientY - drag.y) / span * 2, -1, 1);
  });
  const endDrag = () => { drag = null; };
  canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);
  function setLook(on) { look.on = on; if (!on) { look.tx = 0; look.ty = 0; } }

  // ----- 모래에 글씨 남기기: 손글씨·글자 그림(가로:세로 3:1)을 물가 띠에 찍는다. 파도가 닿는 쪽부터 조금씩 지워진다 -----
  // S8: 모래글씨를 하트와 같은 방식으로 "모래 상태 지도"에 판다 → 바닥 셰이더가 홈의 그늘·밝은 벽을 그려 모래에 자연스럽게 남는다.
  //      물범 앞 마른 모래(파도가 닿지 않는 곳)라 지워지지 않고, 쓰는 순서대로 파이며, 새로 쓰면 앞 글씨는 쓸려 평평해진다.
  let sandW = null; const SAND_TALL = 1.6;
  function sandBox() {
    const hw = (W / L.scale) / 2, k = THREE.MathUtils.clamp((hw - 237) / 360, 0, 1);
    const w = THREE.MathUtils.lerp(300, 400, k);
    return { cx: STAGE.focusX + THREE.MathUtils.lerp(-5, -40, k), cy: THREE.MathUtils.lerp(950, 946, k), w, h: w / 3 * SAND_TALL };
  }
  const sandCanvas = (spec, p) => { const m = sandMask(spec, p, 768, 256 * SAND_TALL | 0); return m; };
  function writeSand(spec, { instant = false, delay = 0.7 } = {}) {
    if (sandW && sandW.drawn > 0) sandW.erasing = { mask: sandCanvas(sandW.spec, 1), box: sandW.box, left: 4 };
    const box = sandBox();
    const prevErase = sandW?.erasing;
    sandW = { spec, box, p: instant ? 1 : 0, wait: instant ? (simT < 1 ? 1 - simT : 0) : delay, dur: spec.strokes ? 2.0 : 1.7, drawn: 0, erasing: prevErase, instant };
    return sandW;
  }
  function updateSand(dt) {
    const d = sandW; if (!d || !printed) return;
    if (d.erasing && d.erasing.left > 0) { const e = d.erasing; beach.stamp(e.mask, e.box.cx, e.box.cy, e.box.w, e.box.h, 0.3, true); e.left--; return; }   // 앞 글씨를 몇 번에 나눠 메움
    if (d.wait > 0) { d.wait -= dt; return; }
    if (d.drawn >= 1) return;
    d.p = d.instant ? 1 : Math.min(1, d.p + dt / d.dur);
    if (d.p - d.drawn > 0.035 || d.p >= 1) { beach.stamp(sandCanvas(d.spec, d.p), d.box.cx, d.box.cy, d.box.w, d.box.h, 1); d.drawn = d.p; }
  }
  // ----- 거울: 물범은 그대로 두고, 앞에서 본 얼굴만 따로 그려 거울 속에 보여 준다 -----
  const mirrorRT = new THREE.WebGLRenderTarget(256, 256); mirrorRT.texture.colorSpace = THREE.SRGBColorSpace;
  const mirrorCam = new THREE.PerspectiveCamera(24, 1, 0.1, 30), mirrorBuf = new Uint8Array(256 * 256 * 4), mirrorBg = new THREE.Color('#cfe7ea'), headP = new THREE.Vector3();
  function renderMirror(ctx2d) {
    const ch = chars[charIdx], yaw = ch.group.rotation.y, f = ch.front, dx = Math.sin(yaw) * f, dz = Math.cos(yaw) * f, isSeal = ch === sealChar;
    ch.head.getWorldPosition(headP);
    mirrorCam.position.set(headP.x + dx * 2.6 + dz * 0.2, headP.y + (isSeal ? 0.22 : 0.02), headP.z + dz * 2.6 - dx * 0.2); mirrorCam.lookAt(headP.x, headP.y + (isSeal ? 0.16 : -0.06), headP.z);
    const vis = scene.children.map((o) => o.visible);
    scene.children.forEach((o) => { if (!o.isLight && o !== chars[charIdx].group) o.visible = false; });
    const bg = scene.background; scene.background = mirrorBg;
    renderer.setRenderTarget(mirrorRT); renderer.render(scene, mirrorCam); renderer.setRenderTarget(null);
    scene.background = bg; scene.children.forEach((o, i) => { o.visible = vis[i]; });
    renderer.readRenderTargetPixels(mirrorRT, 0, 0, 256, 256, mirrorBuf);
    const img = ctx2d.createImageData(256, 256);
    for (let y = 0; y < 256; y++) img.data.set(mirrorBuf.subarray((255 - y) * 1024, (256 - y) * 1024), y * 1024);
    ctx2d.putImageData(img, 0, 0);
  }

  // ----- 시험 글씨: 모래 상태 지도의 "파인 깊이"에 글자를 찍는다 (S6 모래글씨의 기술 검증) -----
  function stampTest(text = '파도서재') {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const x = c.getContext('2d'); x.clearRect(0, 0, 512, 128);
    x.font = '700 84px "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.lineJoin = 'round'; x.lineWidth = 9; x.strokeStyle = 'rgba(0,0,0,0.55)'; x.strokeText(text, 256, 68);   // 가장자리는 얕게
    x.fillStyle = '#000'; x.fillText(text, 256, 68);
    const hw = (W / L.scale) / 2, narrow = hw < 420, w = narrow ? hw * 0.55 : 360, cx = narrow ? STAGE.focusX - hw + w / 2 + 14 : STAGE.focusX - 330, cy = 735;   // 좁은 화면은 왼쪽 끝에 작게
    beach.stamp(c, cx, cy, w, w / 4, 1);          // 의자 왼쪽, 파도가 닿는 띠(무대 y 690~780)에 걸치게
    return { cx, cy, w, h: w / 4 };
  }

  // ----- 모래 위 발자국과 낙서 (모래 상태 지도에 찍음. 물이 닿는 쪽은 파도에 조금씩 지워진다) -----
  let printed = false, nextPage = 14, washT = 0, canopyK = 1, lastCanopy = 1; const tmp2 = new THREE.Vector3();
  function stampPrints() {
    const c = document.createElement('canvas'); c.width = 512; c.height = 256; const x = c.getContext('2d');
    x.fillStyle = 'rgba(0,0,0,0.85)';
    for (let i = 0; i < 15; i++) {            // 오른쪽 아래에서 의자 옆까지 걸어온 발자국
      const u = i / 14, px = 480 - u * 400 - Math.sin(u * 3) * 30, py = 236 - u * 190 + Math.sin(u * 5) * 6, side = i % 2 ? 1 : -1;
      x.save(); x.translate(px + side * 5, py + side * 6); x.rotate(-0.6 - u * 0.3 + side * 0.25); x.beginPath(); x.ellipse(0, 0, 9, 5, 0, 0, 6.3); x.fill(); x.restore();
    }
    const hw = (W / L.scale) / 2, k = THREE.MathUtils.clamp((hw - 237) / 360, 0, 1);
    beach.stamp(c, STAGE.focusX + THREE.MathUtils.lerp(120, 390, k), 915, THREE.MathUtils.lerp(260, 520, k), THREE.MathUtils.lerp(180, 230, k), 0.8);
    const h = document.createElement('canvas'); h.width = h.height = 128; const y = h.getContext('2d');
    y.strokeStyle = 'rgba(0,0,0,0.95)'; y.lineWidth = 9; y.lineCap = 'round'; y.lineJoin = 'round'; y.beginPath();
    y.moveTo(64, 108); y.bezierCurveTo(8, 66, 20, 18, 64, 44); y.bezierCurveTo(108, 18, 120, 66, 64, 108); y.stroke();
    beach.stamp(h, STAGE.focusX + THREE.MathUtils.lerp(-120, -250, k), 792, 84, 52, 1);
  }

  // ----- 렌더 루프 -----
  const timescale = Number(new URLSearchParams(location.search).get('timescale')) || 1;
  // ----- S8 노을: 화면을 연 뒤 시간이 지날수록 천천히 노을이 진다 (약 25분에 가장 깊게, 그 뒤로는 그대로) -----
  const duskQ = Number(new URLSearchParams(location.search).get('dusk'));
  const dusk = { start: performance.now(), minutes: 25, forced: Number.isFinite(duskQ) && new URLSearchParams(location.search).has('dusk') ? duskQ : null, v: 0 };
  const C0 = { sun: new THREE.Color('#ffd6a8'), sunD: new THREE.Color('#ff9a5c'), fill: new THREE.Color('#fff0dc'), fillD: new THREE.Color('#e9b2b8'), sky: new THREE.Color('#efd2dc'), skyD: new THREE.Color('#d9a0b8') };
  const fwd = new THREE.Vector3();
  function updateDusk() {
    const t = dusk.forced ?? Math.min(1, (performance.now() - dusk.start) / 60000 / dusk.minutes);
    const v = t * t * (3 - 2 * t); dusk.v = v;
    finishU.uDusk.value = v;
    sun.color.copy(C0.sun).lerp(C0.sunD, v); sun.intensity = 1.35 - 0.25 * v;
    fill.color.copy(C0.fill).lerp(C0.fillD, v); fill.intensity = 1.3 - 0.45 * v;
    hemi.color.copy(C0.sky).lerp(C0.skyD, v); hemi.intensity = 0.9 - 0.2 * v;
    // 지금 카메라에서 수평선이 화면 어디인지 (둘러보기·하늘에서 보기에서도 노을 하늘이 바다 위에만 들도록)
    camera.getWorldDirection(fwd); fwd.y = 0;
    if (fwd.lengthSq() < 1e-6) { finishU.uHor.value = 9; return; }
    fwd.normalize(); tmp2.set(camera.position.x + fwd.x * 1500, 0, camera.position.z + fwd.z * 1500);
    const [, hy] = screenOf(tmp2); finishU.uHor.value = 1 - hy / H;
  }
  const setDusk = (x) => { dusk.forced = x; };
  const ctl = { paused: false };   // 시험용: 캡처하는 순간 시간을 멈춤
  let last = performance.now(), lastDraw = 0, firstFrame = null, frames = 0, fpsT = last, fps = 0, workMs = 0, workAcc = 0, wave = waves.at(0);
  const info = { calls: 0, triangles: 0 };
  function frame(now) {
    requestAnimationFrame(frame);
    if (now - lastDraw < 1000 / Q.fps - 2) return;
    const w0 = performance.now();
    const dt = ctl.paused ? 0 : Math.min(0.1, (now - last) / 1000) * timescale; last = now; lastDraw = now; simT += dt;
    look.x += (look.tx - look.x) * Math.min(1, dt / timescale * 4.5); look.y += (look.ty - look.y) * Math.min(1, dt / timescale * 4.5);
    look.k += ((look.on ? 1 : 0) - look.k) * Math.min(1, dt / timescale * 3.5);
    camDt = dt / timescale; applyCamera();
    wave = waves.at(simT);
    chars[charIdx].update(simT, dt);
    if (simT > nextPage && view === 'seat' && !motion.current) { nextPage = simT + 22 + Math.random() * 20; act(Math.random() < 0.8 ? 'page' : 'sea'); }
    for (const o of updaters) o.userData.update(simT, dt);
    puppy.userData.update(simT, dt / timescale);
    parasol.userData.top.rotation.z = Math.sin(simT * 0.7) * 0.012; parasol.userData.top.rotation.x = Math.sin(simT * 0.53 + 1) * 0.01;
    if (!printed && simT > 0.6) { printed = true; stampPrints(); }
    others.visible = bird.k > 0.03;
    if (others.visible) { for (const sp of labels) sp.material.opacity = bird.b; myRing.material.opacity = (0.55 + 0.3 * Math.sin(simT * 2.4)) * bird.b; myRing.scale.setScalar(1 + 0.04 * Math.sin(simT * 2.4)); }
    const hop = view === 'focus' ? 1 : 0;
    canopyK += ((view === 'focus' && focus.mine ? 0.28 : 1) - canopyK) * Math.min(1, dt / timescale * 3); if (Math.abs(canopyK - lastCanopy) > 0.005) { lastCanopy = canopyK; parasol.userData.top.traverse((o) => { if (o.material && !o.userData.isOutline) { o.material.transparent = canopyK < 0.99; o.material.opacity = canopyK; } }); }
    otherShells.forEach((os, i) => { os.o.position.y = hop * Math.abs(Math.sin(simT * 3 + i * 1.7)) * 0.04; });
    finishU.uDof.value += ((view === 'seat' ? 1 : view === 'focus' ? 0.35 : 0) - finishU.uDof.value) * Math.min(1, dt / timescale * 3);
    { const [, fy] = screenOf(tmp2.set(SPOT.x, 0.55, SPOT.z)); finishU.uFocus.value = 1 - fy / H; }
    shells.forEach((sh, i) => {
      const base0 = sh.userData.y0 ?? (sh.userData.y0 = sh.position.y);
      shellHop[i] = Math.max(0, shellHop[i] - dt / timescale * 1.6);
      const hp = shellHop[i] > 0 ? Math.sin(Math.PI * (1 - shellHop[i])) : 0;
      sh.position.y = base0 + hp * 0.12; sh.rotation.z = hp * 0.35;
      const ph = (simT * 0.42 + i * 0.29) % 1, tw = Math.max(0, Math.sin(Math.PI * Math.min(1, ph / 0.22)));    // 조개마다 돌아가며 반짝
      const sp = sparks[i]; sp.position.set(sh.position.x + 0.06, sh.position.y + 0.14 * sh.scale.x / 0.9, sh.position.z);
      sp.material.opacity = view === 'bird' ? 0 : (ph < 0.22 ? tw : 0) * (pick.noted.has(i) ? 1 : 0.85) + (pick.hover === i ? 0.6 : 0);
      sp.scale.setScalar(0.16 + 0.12 * tw + (pick.hover === i ? 0.08 : 0)); sp.material.rotation = simT * 0.6 + i;
      sh.scale.setScalar(sh.userData.s0); if (pick.hover === i) sh.scale.multiplyScalar(1.12);
    });
    updateSand(dt / timescale);
    updateDusk();
    if (audio?.ready && (washT += dt) > 0.2) { washT = 0; audio.setWash(wave.wash); }

    renderer.info.reset();
    beach.update(simT, dt, wave, timescale);
    renderer.setRenderTarget(rt); renderer.render(scene, camera);
    renderer.setRenderTarget(null); renderer.render(finishScene, ortho);
    info.calls = renderer.info.render.calls; info.triangles = renderer.info.render.triangles;
    gl.flush();
    workAcc += performance.now() - w0; frames++;
    if (firstFrame === null && beach.ready.done) firstFrame = Math.round(now);
    if (now - fpsT >= 1000) { fps = Math.round((frames * 1000) / (now - fpsT)); workMs = +(workAcc / frames).toFixed(1); frames = 0; workAcc = 0; fpsT = now; }
  }
  requestAnimationFrame(frame);

  return {
    setView, get view() { return view; }, set onView(f) { onView = f; }, pick, writeSand, renderMirror, toggleItem, worn, act, motion, ctl, set onCue(f) { onCue = f; }, get sandWriting() { return sandW; }, setDusk, get dusk() { return dusk.v; },
    Q, qName, renderer, camera, refCam, beach, look, setLook, stampTest, groundFromStage, screenOf, stageOf,
    objects: { puppy, shells, pebbles, parasol, seal }, motion,
    get layoutInfo() { return L; }, get wave() { return wave; }, get simT() { return simT; },
    stats: () => ({ fps, workMs, calls: info.calls, triangles: info.triangles, firstFrameMs: firstFrame, quality: qName, pixelRatio: renderer.getPixelRatio(), size: [W, H], halfFloat: halfOK, map: beach.mapSize, fpsCap: Q.fps }),
  };
}
