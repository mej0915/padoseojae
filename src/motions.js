// 물범 동작 (S7). 모든 동작은 쉬는 자세(돗자리에 앉아 책 읽기)에 변화량만 더하는 additive 클립이다.
//  - 한 번에 하나의 동작만 재생하고, 새 동작을 누르면 앞 동작은 0.35초에 걸쳐 부드럽게 빠진다.
//  - 동작마다 예비 동작(살짝 움츠림) → 본동작 → 살짝 넘치고 되돌아오는 마무리를 넣어 덜 기계적으로 보이게 했다.
//  - 눈 감기, 머그·넘기는 책장 보이기, 소리 신호(cue)는 클립이 아니라 시간표로 따로 관리한다.
import * as THREE from 'three';

const FPS = 30;
const sm = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * x * (x * (x * 6 - 15) + 10));          // smootherstep
const seg = (t, a, b) => sm((t - a) / (b - a));
const env = (t, a, b, c, d) => seg(t, a, b) * (1 - seg(t, c, d));                          // a→b 올라가고 c→d 내려옴
const settle = (t, a, f = 9, k = 5) => (t < a ? 0 : Math.exp(-(t - a) * k) * Math.sin((t - a) * f));   // 멈춘 뒤 살짝 출렁임
const bump = (t, c, w) => Math.exp(-(((t - c) / w) ** 2));
const q = new THREE.Quaternion(), e = new THREE.Euler();

function clipFrom(name, duration, defs) {
  const n = Math.round(duration * FPS) + 1;
  const times = Array.from({ length: n }, (_, i) => i / FPS);
  const tracks = [];
  for (const [path, fn] of Object.entries(defs)) {
    const prop = path.split('.').pop(), vals = [];
    for (const t of times) {
      const v = fn(t);
      if (prop === 'quaternion') { q.setFromEuler(e.set(v[0] || 0, v[1] || 0, v[2] || 0)); vals.push(q.x, q.y, q.z, q.w); }
      else vals.push(v[0] || 0, v[1] || 0, v[2] || 0);
    }
    tracks.push(prop === 'quaternion' ? new THREE.QuaternionKeyframeTrack(path, times, vals) : new THREE.VectorKeyframeTrack(path, times, vals));
  }
  const clip = new THREE.AnimationClip(name, duration, tracks);
  clip.blendMode = THREE.AdditiveAnimationBlendMode;
  return clip;
}

/** 책을 무릎 위로 내려놓는 공통 변화량 (팔을 쓰는 동작에서) */
const bookDown = (w) => ({ 'book.position': (t) => [0, -0.11 * w(t), 0.1 * w(t)], 'book.quaternion': (t) => [-0.45 * w(t), 0, 0.12 * w(t)] });

/**
 * 동작 정의: clip(), 길이 D, eyes(t) 0=뜸 1=감음(웃는 눈), show: 보이는 소품 구간, cues: [시각, 소리 이름]
 * 머리 회전 +x = 고개 듦, +y = 물범 기준 왼쪽(바다 쪽)으로 돌림
 */
export const MOTIONS = {
  // 쉬는 동작: 숨쉬기 + 아주 작은 고개 흔들림 (반복, 항상 깔림)
  read: { loop: true, clip: () => { const D = 7.2, br = (t) => 0.5 - 0.5 * Math.cos(t * 2 * Math.PI / 3.6);
    return clipFrom('read', D, {
      'spine.scale': (t) => [0.008 * br(t), 0.02 * br(t), 0.012 * br(t)],
      'head.quaternion': (t) => [0.03 * Math.sin(t * 2 * Math.PI / D), 0.05 * Math.sin(t * 2 * Math.PI / D + 1.2), 0.02 * Math.sin(t * 2 * Math.PI / D + 0.4)],
      'book.position': (t) => [0, 0.005 * br(t), 0],
    }); } },

  // 1. 책장 넘기기 — 오른 지느러미로 책장을 집어 왼쪽으로 넘기고, 눈이 따라감
  page: { D: 1.9, show: { leaf: [0.35, 1.45] }, cues: [[0.45, 'page']], clip: () => {
    const D = 1.9, reach = (t) => env(t, 0.05, 0.4, 1.25, 1.75), sweep = (t) => seg(t, 0.4, 1.2);
    return clipFrom('page', D, {
      'armR.quaternion': (t) => [0.25 * reach(t), 0, -0.15 * reach(t) - 0.55 * sweep(t) * reach(t)],
      'leaf.quaternion': (t) => [0, -2.3 * seg(t, 0.42, 1.25) - 0.08 * settle(t, 1.25, 14, 7), 0],
      'head.quaternion': (t) => [0.03 * reach(t), (-0.1 + 0.22 * sweep(t)) * reach(t), 0.04 * Math.sin(Math.PI * sweep(t))],
      'spine.quaternion': (t) => [0, 0.05 * Math.sin(Math.PI * sweep(t)), 0],
      'book.quaternion': (t) => [0.05 * bump(t, 0.5, 0.15), 0, 0],
    }); } },

  // 2. 커피 한 모금 — 책을 무릎에 내리고 머그를 들어 홀짝, 눈을 감고 "하아" 하고 내려놓음
  coffee: { D: 3.8, eyes: (t) => env(t, 1.15, 1.35, 2.5, 2.75), show: { mug: [0.2, 3.45] }, cues: [[1.25, 'sip'], [2.6, 'ahh'], [3.35, 'clink']], clip: () => {
    const D = 3.8, down = (t) => env(t, 0.0, 0.5, 3.1, 3.7), lift = (t) => env(t, 0.35, 1.1, 2.7, 3.4), sip = (t) => env(t, 1.05, 1.35, 2.3, 2.7);
    return clipFrom('coffee', D, {
      ...bookDown(down),
      'armR.quaternion': (t) => [0.95 * lift(t) + 0.15 * sip(t), 0, -0.5 * lift(t)],
      'armL.quaternion': (t) => [-0.25 * down(t), 0, 0],
      'head.quaternion': (t) => [0.34 * lift(t) + 0.12 * sip(t) - 0.05 * bump(t, 1.6, 0.1), -0.06 * lift(t), 0.05 * sip(t)],
      'spine.quaternion': (t) => [0.06 * sip(t), 0, 0],
      'spine.scale': (t) => [0.02 * bump(t, 2.65, 0.2), -0.035 * bump(t, 2.65, 0.2), 0.02 * bump(t, 2.65, 0.2)],
    }); } },

  // 3. 바다 보기 — 책을 내리고 어깨 너머 바다 쪽으로 몸을 돌려 한참 바라봄
  sea: { D: 6.4, sleepy: true, eyes: (t) => 0.55 * env(t, 2.4, 2.8, 3.7, 4.1), cues: [[0.3, 'breeze']], clip: () => {
    const D = 6.4, w = (t) => env(t, 0.25, 1.9, 4.6, 6.2);
    return clipFrom('sea', D, {
      'head.quaternion': (t) => [0.42 * w(t) + 0.03 * Math.sin(t * 1.3) * w(t), 0.95 * w(t), -0.06 * w(t)],
      'spine.quaternion': (t) => [0.04 * w(t), 0.45 * w(t), 0],
      'root.quaternion': (t) => [0, 0.12 * w(t), 0],
      'spine.scale': (t) => [0, 0.03 * bump(t, 3.2, 0.5), 0],
      ...bookDown((t) => 0.6 * w(t)),
    }); } },

  // 4. 기지개 — 살짝 움츠렸다가 두 팔을 번쩍, 몸이 길어지며 부르르, 탁 풀리며 통 튐
  stretch: { D: 3.9, eyes: (t) => env(t, 0.5, 0.8, 2.6, 2.9), cues: [[0.5, 'stretch'], [2.55, 'plop']], clip: () => {
    const D = 3.9, up = (t) => env(t, 0.45, 1.15, 2.4, 2.75), pre = (t) => env(t, 0.0, 0.4, 0.45, 0.75), quiver = (t) => env(t, 1.15, 1.35, 2.2, 2.4) * Math.sin(t * 38);
    return clipFrom('stretch', D, {
      ...bookDown((t) => env(t, 0.1, 0.55, 2.9, 3.6)),
      'spine.scale': (t) => [-0.03 * up(t) + 0.03 * pre(t) + 0.04 * settle(t, 2.6, 16, 6), 0.09 * up(t) - 0.04 * pre(t) - 0.05 * settle(t, 2.6, 16, 6), 0],
      'root.position': (t) => [0, 0.02 * up(t) + 0.025 * Math.max(0, settle(t, 2.6, 13, 6)), 0],
      'armL.quaternion': (t) => [1.3 * up(t) + 0.05 * quiver(t), 0, -1.2 * up(t)],
      'armR.quaternion': (t) => [1.3 * up(t) - 0.05 * quiver(t), 0, 1.2 * up(t)],
      'head.quaternion': (t) => [0.4 * up(t) - 0.08 * pre(t), 0, 0.03 * quiver(t)],
      'footL.quaternion': (t) => [-0.35 * up(t), 0, 0], 'footR.quaternion': (t) => [-0.35 * up(t), 0, 0],
    }); } },

  // 5. 꾸벅 졸기 — 눈이 스르르 감기고 고개가 두 번 꾸벅, 세 번째에 화들짝 깨서 도리도리
  doze: { D: 6.6, sleepy: true, eyes: (t) => seg(t, 0.4, 1.3) * (1 - seg(t, 4.15, 4.25)), cues: [[1.0, 'snore'], [4.15, 'wake']], clip: () => {
    const D = 6.6;
    const nod = (t) => 0.22 * env(t, 1.0, 1.9, 2.0, 2.4) + 0.36 * env(t, 2.6, 3.6, 4.1, 4.3) + 0.06 * env(t, 0.3, 0.9, 3.8, 4.2);
    const jolt = (t) => (t < 4.12 ? 0 : Math.exp(-(t - 4.12) * 3.5) * Math.cos((t - 4.12) * 9) * (1 - seg(t, 5.4, 6.2)));
    const shake = (t) => env(t, 4.5, 4.7, 5.3, 5.6) * Math.sin((t - 4.5) * 17);
    return clipFrom('doze', D, {
      'head.quaternion': (t) => [-nod(t) + 0.14 * Math.max(0, jolt(t)), 0.22 * shake(t), 0.06 * env(t, 1.0, 2.0, 3.8, 4.2)],
      'spine.quaternion': (t) => [-0.35 * nod(t), 0, 0],
      'book.position': (t) => [0, -0.06 * nod(t) / 0.36 * (t < 4.2 ? 1 : 0), 0],
      'book.quaternion': (t) => [0.4 * nod(t), 0, 0],
      'root.position': (t) => [0, 0.05 * Math.max(0, jolt(t)), 0],
      'spine.scale': (t) => [0, 0.05 * Math.max(0, jolt(t)), 0],
      'armL.quaternion': (t) => [-0.25 * nod(t) + 0.3 * Math.max(0, jolt(t)), 0, -0.25 * Math.max(0, jolt(t))],
      'armR.quaternion': (t) => [-0.25 * nod(t) + 0.3 * Math.max(0, jolt(t)), 0, 0.25 * Math.max(0, jolt(t))],
      'eyeL.scale': (t) => [0.25 * Math.max(0, jolt(t)), 0.45 * Math.max(0, jolt(t)), 0],
      'eyeR.scale': (t) => [0.25 * Math.max(0, jolt(t)), 0.45 * Math.max(0, jolt(t)), 0],
    }); } },

  // 6. 박수 — 책을 내리고 지느러미로 짝짝짝짝, 박수마다 몸이 통통, 웃는 눈
  clap: { D: 3.0, eyes: (t) => env(t, 0.45, 0.6, 2.3, 2.5), cues: [[0.62, 'pat'], [0.98, 'pat'], [1.34, 'pat'], [1.7, 'pat'], [0.55, 'coo']], clip: () => {
    const D = 3.0, w = (t) => env(t, 0.1, 0.5, 2.1, 2.7);
    const c = (t) => (t > 0.45 && t < 1.9 ? 0.5 - 0.5 * Math.cos((t - 0.45) * Math.PI * 2 / 0.36) : 0);   // 0=벌림 1=맞닿음 (0.36초 간격)
    return clipFrom('clap', D, {
      ...bookDown(w),
      'armL.quaternion': (t) => [0.3 * w(t), 0, (0.7 + 0.8 * c(t)) * w(t)],
      'armR.quaternion': (t) => [0.3 * w(t), 0, -(0.7 + 0.8 * c(t)) * w(t)],
      'root.position': (t) => [0, 0.018 * c(t) * w(t), 0],
      'spine.scale': (t) => [0.015 * c(t) * w(t), -0.02 * c(t) * w(t), 0],
      'head.quaternion': (t) => [0.22 * w(t), -0.5 * w(t), 0.1 * Math.sin(t * 5) * w(t)],
    }); } },

  // 7. 손 흔들기 — 이쪽(화면)을 돌아보고 오른 지느러미를 들어 흔듦
  hello: { D: 3.0, eyes: (t) => env(t, 0.9, 1.0, 2.0, 2.1), cues: [[0.35, 'coo'], [0.5, 'flap']], clip: () => {
    const D = 3.0, up = (t) => env(t, 0.1, 0.55, 2.3, 2.85), look = (t) => env(t, 0.0, 0.45, 2.4, 2.95);
    return clipFrom('hello', D, {
      'armR.quaternion': (t) => [1.5 * up(t), 0, 0.85 * up(t) + 0.4 * up(t) * Math.sin(Math.max(0, t - 0.5) * 12)],
      'head.quaternion': (t) => [0.2 * look(t), -0.85 * look(t), 0.14 * look(t) * Math.sin(Math.max(0, t - 0.3) * 4.5)],
      'spine.quaternion': (t) => [0, -0.25 * look(t), 0.05 * up(t)],
      'spine.scale': (t) => [0, 0.02 * up(t), 0],
    }); } },

  // 모래글씨: 몸을 앞으로 숙여 지느러미로 모래를 긁어 씀
  write: { D: 3.2, cues: [[0.6, 'scratch']], clip: () => {
    const D = 3.2, w = (t) => env(t, 0.1, 0.65, 2.5, 3.1), sc = (t) => env(t, 0.6, 0.75, 2.3, 2.5);
    return clipFrom('write', D, {
      ...bookDown(w),
      'root.quaternion': (t) => [-0.28 * w(t), -0.35 * w(t), 0],
      'spine.quaternion': (t) => [-0.25 * w(t), 0, 0],
      'head.quaternion': (t) => [-0.2 * w(t), 0, 0.05 * Math.sin(t * 7) * sc(t)],
      'armR.quaternion': (t) => [-0.55 * w(t) + 0.12 * Math.sin(t * 15) * sc(t), 0, -0.2 * w(t) + 0.25 * Math.sin(t * 9.5) * sc(t)],
    }); } },

  // 파도에 움찔 (자동, 버튼 없음)
  startle: { D: 2.2, cues: [], clip: () => {
    const jolt = (t) => (t < 0.12 ? sm(t / 0.12) : Math.exp(-(t - 0.12) * 3.2) * Math.cos((t - 0.12) * 11) * (1 - seg(t, 1.6, 2.2)));
    const hold = (t) => seg(t, 0, 0.1) * (1 - seg(t, 0.9, 1.9));
    return clipFrom('startle', 2.2, {
      'root.position': (t) => [0, 0.045 * Math.max(0, jolt(t)), 0],
      'spine.scale': (t) => [-0.02 * hold(t), 0.045 * Math.max(0, jolt(t)), 0],
      'head.quaternion': (t) => [0.16 * hold(t), 0, 0.08 * Math.sin(t * 9) * (1 - seg(t, 0.4, 1.4)) * hold(t)],
      'eyeL.scale': (t) => [0.3 * hold(t), 0.45 * hold(t), 0], 'eyeR.scale': (t) => [0.3 * hold(t), 0.45 * hold(t), 0],
    }); } },
};

/** 물범에 동작 재생기를 붙인다. onCue(name): 동작 중 소리 신호 */
export function createMotionPlayer(root, { onCue } = {}) {
  const mixer = new THREE.AnimationMixer(root);
  const actions = {};
  for (const [name, def] of Object.entries(MOTIONS)) {
    const a = mixer.clipAction(def.clip());
    a.blendMode = THREE.AdditiveAnimationBlendMode;
    if (!def.loop) { a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = false; }
    actions[name] = a;
  }
  actions.read.play();
  let cur = null, t = 0, cueI = 0, readW = 1;
  const state = { eyes: 0, show: {} };
  return {
    mixer, actions, state,
    play(name) {
      const def = MOTIONS[name]; if (!def || def.loop) return false;
      if (cur && cur !== name) actions[cur].fadeOut(0.35);
      const a = actions[name]; a.reset(); a.setEffectiveWeight(1); a.fadeIn(cur && cur !== name ? 0.3 : 0.12); a.play();
      cur = name; t = 0; cueI = 0;
      return true;
    },
    get current() { return cur; }, get time() { return t; },
    isPlaying: (name) => cur === name,
    update(dt) {
      if (cur) {
        const def = MOTIONS[cur]; t += dt;
        const cues = def.cues || [];
        while (cueI < cues.length && cues[cueI][0] <= t) { onCue?.(cues[cueI][1], cur); cueI++; }
        state.eyes = def.eyes ? def.eyes(t) : 0; state.sleepy = !!def.sleepy;
        state.show = {}; for (const [k, [a, b]] of Object.entries(def.show || {})) state.show[k] = t >= a && t <= b;
        if (t >= def.D) { cur = null; state.eyes = 0; state.show = {}; state.sleepy = false; }
      }
      readW += ((cur ? 0.35 : 1) - readW) * Math.min(1, dt * 3);      // 동작 중에는 읽기 흔들림을 줄여 겹침을 막음
      actions.read.setEffectiveWeight(readW);
      mixer.update(dt);
    },
  };
}
