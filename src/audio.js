import { asset } from './assets.js';
// 사운드 — 모두 실제 녹음 파일을 쓴다(합성음 없음). 출처·라이선스는 public/audio/SOURCES.md 와 보고서 참고.
//  - 파도 가까이(wave-near): 해변에서 2m 거리에서 녹음한 파도 (CC BY 3.0)
//  - 파도 멀리(wave-far): 같은 녹음의 다른 구간을 고음만 줄여(저역통과) 먼 바다처럼 낮고 부드럽게 (파일 하나로 거리감 표현)
//  - 바람+새(wind-birds), 갈매기(gull), 책장(page): 퍼블릭 도메인
//  - 발소리(step1~4): CC0 "자갈 위 걸음" 녹음에서 한 걸음씩 잘라낸 것. 모래 소리가 아니라 임시 대체 → 보고서에 명시
// 브라우저 자동재생 제한: 사용자가 처음 누르는 순간(unlock) AudioContext를 깨운다. 그 전에는 아무 소리도 나지 않는다.
// 볼륨: 배경음(파도·바람·새)과 효과음(발소리·책장·갈매기)을 따로 조절한다.
const FILES = {
  waveNear: 'wave-near.ogg', waveFar: 'wave-far.ogg', windBirds: 'wind-birds.ogg',
  gull: 'gull.ogg', page: 'page.ogg', step1: 'step1.ogg', step2: 'step2.ogg', step3: 'step3.ogg', step4: 'step4.ogg',
};

const OGG_OK = (() => { try { return !!document.createElement('audio').canPlayType('audio/ogg; codecs="vorbis"'); } catch { return true; } })();
// 한 파일 실행본은 소리가 data URL로 들어 있다. 공개 페이지 보안 규칙에서 fetch(data:)가 막힐 수 있어 직접 풀어 쓴다 (S8: 파도 소리가 안 나던 원인)
async function bytesOf(url) {
  if (url.startsWith('data:')) { const bin = atob(url.slice(url.indexOf(',') + 1)), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; }
  const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.arrayBuffer();
}

export function createAudio(base = './audio/') {
  const AC = window.AudioContext || window.webkitAudioContext;
  let ctx = null, started = false, loading = null;
  const buffers = {};
  const vol = { bg: 0.8, sfx: 0.8 };
  let muted = false, bgScale = 1, unlocking = null;
  const g = {}; // 노드 모음
  const played = { step: 0, page: 0, gull: 0 };
  let gullTimer = 0, lastStepIdx = -1;

  const decode = (buf) => new Promise((res, rej) => { const p = ctx.decodeAudioData(buf, res, rej); if (p && p.then) p.then(res, rej); });   // 옛 사파리 대응
  async function loadAll() {
    if (loading) return loading;
    loading = Promise.all(Object.entries(FILES).map(async ([k, f]) => {
      try {
        const urlOf = (name) => (base === './audio/' ? asset('audio/' + name) : base + name);
        const alt = f.replace(/\.ogg$/, '.m4a');
        const [first, second] = OGG_OK ? [f, alt] : [alt, f];      // 옛 아이폰 사파리는 ogg를 못 풀어서 m4a를 먼저
        try { buffers[k] = await decode(await bytesOf(urlOf(first))); } catch { buffers[k] = await decode(await bytesOf(urlOf(second))); }
      } catch (e) { buffers[k] = null; console.warn('[audio] 불러오기 실패', f, e); }
    }));
    return loading;
  }

  function loop(key, { gain, pan = 0, lp = 0, offset = 0 }) {
    const buf = buffers[key]; if (!buf) return null;
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    const gn = ctx.createGain(); gn.gain.value = gain;
    let node = src.connect(gn);
    if (lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; node.connect(f); node = f; }
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; node.connect(p); node = p; }
    node.connect(g.bg);
    src.start(0, offset % buf.duration);
    return gn;
  }

  const lastAt = {};   // 효과음이 너무 자주 겹쳐 울리지 않게 종류별 최소 간격(ms)
  const MIN_GAP = { step: 180, page: 400, pick: 250, gull: 5000 };
  const tooSoon = (kind) => { const n = performance.now(); if (n - (lastAt[kind] || -1e9) < (MIN_GAP[kind] || 0)) return true; lastAt[kind] = n; return false; };
  function oneShot(key, { gain = 1, rate = 1, pan = 0, lp = 0, bus = 'sfx' } = {}) {
    const buf = buffers[key]; if (!ctx || !buf || !started) return;
    const src = ctx.createBufferSource(); src.buffer = buf; src.playbackRate.value = rate;
    const gn = ctx.createGain(); gn.gain.value = gain;
    let node = src.connect(gn);
    if (lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; node.connect(f); node = f; }
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; node.connect(p); node = p; }
    node.connect(g[bus]); src.start();
  }

  function applyVolumes() {
    if (!ctx) return;
    const t = ctx.currentTime;
    g.master.gain.setTargetAtTime(muted ? 0 : 1, t, 0.08);        // 끄면 음악까지 전부 꺼진다
    g.bg.gain.setTargetAtTime(vol.bg * bgScale, t, 0.25);
    g.sfx.gain.setTargetAtTime(vol.sfx, t, 0.05);
  }

  function scheduleGull() {
    clearTimeout(gullTimer);
    gullTimer = setTimeout(() => { // 가끔 멀리서 갈매기 (30~70초 간격, 작고 먹먹하게)
      if (started && !document.hidden) { played.gull++; oneShot('gull', { gain: 0.5, rate: 0.95 + Math.random() * 0.1, pan: (Math.random() - 0.5) * 1.4, lp: 2600 }); }
      scheduleGull();
    }, 30000 + Math.random() * 40000);
  }

  return {
    /** 사용자가 처음 화면을 누를 때 호출 (자동재생 제한 때문에 반드시 사용자 동작 안에서) */
    unlock() { return (unlocking ||= this._unlock().finally(() => { unlocking = null; })); },
    async _unlock() {
      if (!AC) return false;
      if (!ctx) {
        ctx = new AC();
        g.master = ctx.createGain(); g.master.connect(ctx.destination);
        g.bg = ctx.createGain(); g.sfx = ctx.createGain();
        g.bg.connect(g.master); g.sfx.connect(g.master);
        applyVolumes();
      }
      if (ctx.state !== 'running') await ctx.resume();
      await loadAll();
      if (!started) {
        started = true;
        g.near = loop('waveNear', { gain: 0.9, pan: -0.15 });
        g.far = loop('waveFar', { gain: 0.5, pan: 0.2, offset: 7 });
        g.wind = loop('windBirds', { gain: 0.45 });
        scheduleGull();
      }
      return true;
    },
    /** 파도 박자(0~1)에 맞춰 가까운 파도 소리가 밀려올 때 커지고 빠질 때 작아짐 */
    setWash(w) { if (g.near && ctx) { g.near.gain.setTargetAtTime(0.55 + 0.4 * w, ctx.currentTime, 0.3); g.far.gain.setTargetAtTime(0.5 - 0.12 * w, ctx.currentTime, 0.3); } },
    /** 한 걸음: 4개 중 직전과 다른 것을 골라 속도·세기를 조금씩 바꿈. near(0~1): 카메라에 가까울수록 크고 또렷, 멀수록 작고 먹먹(거리감) */
    step(near = 1) {
      if (tooSoon('step')) return;
      let i; do { i = 1 + Math.floor(Math.random() * 4); } while (i === lastStepIdx); lastStepIdx = i;
      played.step++; oneShot('step' + i, { gain: (0.8 + Math.random() * 0.3) * (0.5 + 0.5 * near), rate: 0.92 + Math.random() * 0.16, pan: (Math.random() - 0.5) * 0.2, lp: near < 0.5 ? 2400 + near * 6000 : 0 });
    },
    /** 조개 줍는 소리: 새 녹음을 구하지 못해, 같은 CC0 자갈 녹음 한 걸음을 높고 가볍게 재생한 임시 대체 */
    pick() { if (tooSoon('pick')) return; played.pick = (played.pick || 0) + 1; oneShot('step3', { gain: 0.5, rate: 1.55, pan: 0 }); },
    page() { if (tooSoon('page')) return; played.page++; oneShot('page', { gain: 1.0, rate: 0.96 + Math.random() * 0.08 }); },
    gull() { played.gull++; oneShot('gull', { gain: 0.5, lp: 2600 }); },
    /** 헤드셋을 쓰면 파도·바람을 낮춘다 (1=그대로) */
    setBgScale(x) { bgScale = x; applyVolumes(); },
    get ctx() { return ctx; }, get out() { return g.master; }, get sfxBus() { return g.sfx; }, get ready() { return started; },
    setVolume(bus, v) { vol[bus] = Math.min(1, Math.max(0, v)); applyVolumes(); },
    getVolume: (bus) => vol[bus],
    setMuted(m) { muted = m; applyVolumes(); },
    get muted() { return muted; },
    // 자동 검증용 상태
    diag() {
      return { supported: !!AC, state: ctx?.state ?? 'none', started, loaded: Object.fromEntries(Object.entries(buffers).map(([k, b]) => [k, b ? +b.duration.toFixed(1) : null])),
        bgGain: g.bg ? +g.bg.gain.value.toFixed(3) : null, sfxGain: g.sfx ? +g.sfx.gain.value.toFixed(3) : null, vol: { ...vol }, muted, played: { ...played } };
    },
  };
}
