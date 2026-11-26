// 임시 독서 음악: 새 음원 없이 코드로 연주하는 잔잔한 곡 3개(전자피아노 + 베이스 + 솔질 소리 + 먼지 튀는 소리). 나중에 진짜 독서 플레이리스트로 교체할 자리.
// 소리는 사용자가 헤드셋을 눌렀을 때만 시작한다.
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
export const TRACKS = [
  { title: '오후의 책장', bpm: 72, seed: 3, pent: [72, 74, 76, 79, 81], chords: [{ b: 36, n: [55, 59, 62, 64] }, { b: 33, n: [52, 55, 60, 64] }, { b: 41, n: [53, 57, 60, 64] }, { b: 43, n: [55, 59, 62, 65] }] },
  { title: '파도 사이', bpm: 64, seed: 8, pent: [74, 76, 78, 81, 83], chords: [{ b: 38, n: [57, 61, 64, 66] }, { b: 35, n: [54, 57, 62, 66] }, { b: 43, n: [59, 62, 66, 69] }, { b: 45, n: [57, 61, 66, 69] }] },
  { title: '노을 아래 한 장', bpm: 78, seed: 5, pent: [77, 79, 81, 84, 86], chords: [{ b: 41, n: [57, 60, 64, 67] }, { b: 40, n: [55, 59, 62, 67] }, { b: 38, n: [53, 57, 60, 64] }, { b: 36, n: [55, 59, 64, 67] }] },
];

export function createMusic(audio) {
  let ctx = null, bus = null, verb = null, noise = null, timer = 0, playing = false, idx = 0, next = 0, bar = 0, rnd = Math.random;
  const listeners = new Set();
  const emit = () => listeners.forEach((f) => f({ playing, index: idx, title: TRACKS[idx].title }));
  const seeded = (s) => () => ((s = (s * 16807) % 2147483647) / 2147483647);

  let lpNode = null;
  function newBus() { const old = bus; if (old) { old.gain.cancelScheduledValues(ctx.currentTime); old.gain.setTargetAtTime(0, ctx.currentTime, 0.08); setTimeout(() => old.disconnect(), 600); } bus = ctx.createGain(); bus.gain.value = 0; bus.connect(lpNode); bus.connect(verb); }
  function setup() {
    ctx = audio.ctx; bus = ctx.createGain(); bus.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
    lpNode = lp; bus.connect(lp); lp.connect(audio.out);
    const len = ctx.sampleRate * 1.8, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    verb = ctx.createConvolver(); verb.buffer = ir; const wet = ctx.createGain(); wet.gain.value = 0.32; bus.connect(verb); verb.connect(wet); wet.connect(lp);
    noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate); const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  function ep(t, m, dur, vel) {
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const o1 = ctx.createOscillator(); o1.type = 'sine'; o1.frequency.value = mtof(m);
    const o2 = ctx.createOscillator(); o2.type = 'triangle'; o2.frequency.value = mtof(m) * 2.003; const g2 = ctx.createGain(); g2.gain.value = 0.18;
    o1.connect(g); o2.connect(g2); g2.connect(g); g.connect(bus); o1.start(t); o2.start(t); o1.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
  }
  function bass(t, m, dur) {
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.2, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = mtof(m); o.connect(g); g.connect(bus); o.start(t); o.stop(t + dur + 0.05);
  }
  function hush(t, gain, hp = 6000, dur = 0.05) {
    const s = ctx.createBufferSource(); s.buffer = noise; s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp; const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(bus); s.start(t, Math.random() * 0.8); s.stop(t + dur + 0.02);
  }
  function scheduleBar(t0, tr) {
    const beat = 60 / tr.bpm, ch = tr.chords[bar % 4], sw = 0.12 * beat;
    bass(t0, ch.b, beat * 1.8); bass(t0 + beat * 2.5, ch.b + (bar % 2 ? 7 : 0), beat * 1.3);
    const pat = [0, 2, 1, 3, 2, 1, 3, 2];
    for (let i = 0; i < 8; i++) {
      const t = t0 + i * beat * 0.5 + (i % 2 ? sw : 0);
      if (rnd() < 0.86) ep(t, ch.n[pat[i]], beat * 1.6, 0.05 + 0.025 * rnd());
      if (i % 2) hush(t, 0.05 + 0.02 * rnd());
    }
    if (rnd() < 0.7) { const n = tr.pent[Math.floor(rnd() * 5)], t = t0 + beat * (1 + Math.floor(rnd() * 3)) + sw; ep(t, n, beat * 2.2, 0.075); if (rnd() < 0.5) ep(t + beat * 0.75, tr.pent[Math.floor(rnd() * 5)], beat * 1.8, 0.06); }
    for (let i = 0; i < 4; i++) if (rnd() < 0.5) hush(t0 + rnd() * beat * 4, 0.05, 2500, 0.012);     // 먼지 튀는 소리
  }
  function tick() {
    if (!playing || !ctx) return;
    const tr = TRACKS[idx];
    while (next < ctx.currentTime + 1.2) {
      scheduleBar(next, tr); next += (60 / tr.bpm) * 4; bar++;
      if (bar >= 36) { go((idx + 1) % TRACKS.length); return; }
    }
  }
  function go(i) { idx = (i + TRACKS.length) % TRACKS.length; bar = 0; rnd = seeded(TRACKS[idx].seed * 977 + Math.floor(Math.random() * 1000)); next = (ctx?.currentTime || 0) + 0.15; emit(); }
  return {
    start() { if (!audio.ctx) return; if (!ctx) setup(); if (playing) return; playing = true; newBus(); go(idx); bus.gain.setTargetAtTime(0.9, ctx.currentTime, 0.5); clearInterval(timer); timer = setInterval(tick, 250); tick(); },
    stop() { if (!playing) return; playing = false; clearInterval(timer); timer = 0; if (bus) { bus.gain.cancelScheduledValues(ctx.currentTime); bus.gain.setTargetAtTime(0, ctx.currentTime, 0.12); } emit(); },
    next() { if (playing) { newBus(); bus.gain.setTargetAtTime(0.9, ctx.currentTime, 0.3); go(idx + 1); } else { idx = (idx + 1) % TRACKS.length; emit(); } }, prev() { if (playing) { newBus(); bus.gain.setTargetAtTime(0.9, ctx.currentTime, 0.3); go(idx - 1); } else { idx = (idx + TRACKS.length - 1) % TRACKS.length; emit(); } },
    onChange(f) { listeners.add(f); }, get playing() { return playing; }, get title() { return TRACKS[idx].title; },
  };
}
