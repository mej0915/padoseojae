// 행동 효과음: 새 음원 파일 없이 잡음과 순음을 다듬어 만든다 (S7: 물범 동작마다 소리를 더함).
// 숨소리·지느러미 박수·졸음 숨·작은 물범 목소리·조개 여닫는 소리 등. 나중에 실제 녹음으로 바꿀 자리.
// 나중에 실제 녹음으로 바꿀 자리. 책장 넘기기와 조개 소리는 기존 녹음(audio.js)을 그대로 쓴다.
export function createSfx(audio) {
  let noise = null, scratch = null;
  const ok = () => audio.ctx && audio.ready;
  const buf = () => { if (!noise) { const c = audio.ctx; noise = c.createBuffer(1, c.sampleRate * 2, c.sampleRate); const d = noise.getChannelData(0); let b = 0; for (let i = 0; i < d.length; i++) { b = 0.6 * b + 0.4 * (Math.random() * 2 - 1); d[i] = b; } } return noise; };
  function burst(t, dur, { type = 'bandpass', f0 = 3000, f1 = f0, q = 0.8, gain = 0.2, attack = 0.01 } = {}) {
    const c = audio.ctx, s = c.createBufferSource(); s.buffer = buf(); s.loop = true;
    const f = c.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(audio.sfxBus); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  function tone(t, freq, dur, gain = 0.08, type = 'sine') { const c = audio.ctx, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = freq; g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(audio.sfxBus); o.start(t); o.stop(t + dur + 0.02); }
  /** 작은 물범 목소리: 음높이가 미끄러지는 둥근 소리 (pts = [[시각, 주파수], ...]) */
  function voice(t, pts, gain = 0.06, vib = 7) {
    const c = audio.ctx, o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(), lfo = c.createOscillator(), lg = c.createGain();
    o.type = 'triangle'; o2.type = 'sine'; f.type = 'lowpass'; f.frequency.value = 2200; f.Q.value = 0.8;
    lfo.frequency.value = vib; lg.gain.value = 12; lfo.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
    o.frequency.setValueAtTime(pts[0][1], t); o2.frequency.setValueAtTime(pts[0][1] * 2, t);
    for (const [dt, fr] of pts.slice(1)) { o.frequency.exponentialRampToValueAtTime(fr, t + dt); o2.frequency.exponentialRampToValueAtTime(fr * 2, t + dt); }
    const end = t + pts[pts.length - 1][0];
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.04); g.gain.setTargetAtTime(gain * 0.7, t + 0.08, 0.1); g.gain.exponentialRampToValueAtTime(0.0001, end + 0.05);
    const g2 = c.createGain(); g2.gain.value = 0.18; o.connect(f); o2.connect(g2); g2.connect(f); f.connect(g); g.connect(audio.sfxBus);
    for (const n of [o, o2, lfo]) { n.start(t); n.stop(end + 0.1); }
  }
  const now = () => audio.ctx.currentTime + 0.01;
  return {
    /** 모래에 글씨가 새겨질 때: 사각사각 여러 번 */
    sand(n = 5) { if (!ok()) return; let t = audio.ctx.currentTime + 0.02; for (let i = 0; i < n; i++) { const d = 0.16 + Math.random() * 0.18; burst(t, d, { f0: 2600 + Math.random() * 900, f1: 1900 + Math.random() * 700, q: 0.7, gain: 0.34, attack: 0.03 }); t += d * 0.85 + 0.05; } },
    /** 손으로 쓰는 동안: 누르면 시작, 빠르게 그을수록 크게, 떼면 멈춤 */
    scratchStart() { if (!ok() || scratch) return; const c = audio.ctx, s = c.createBufferSource(); s.buffer = buf(); s.loop = true; const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2400; f.Q.value = 0.7; const g = c.createGain(); g.gain.value = 0.0001; s.connect(f); f.connect(g); g.connect(audio.sfxBus); s.start(); scratch = { s, f, g }; },
    scratchMove(speed) { if (!scratch) return; const c = audio.ctx, v = Math.min(1, speed); scratch.g.gain.setTargetAtTime(0.06 + 0.4 * v, c.currentTime, 0.03); scratch.f.frequency.setTargetAtTime(1900 + 1500 * v, c.currentTime, 0.05); clearTimeout(scratch.t); scratch.t = setTimeout(() => scratch && scratch.g.gain.setTargetAtTime(0.0001, audio.ctx.currentTime, 0.05), 70); },
    scratchStop() { if (!scratch) return; const { s, g } = scratch; clearTimeout(scratch.t); scratch = null; g.gain.setTargetAtTime(0.0001, audio.ctx.currentTime, 0.03); s.stop(audio.ctx.currentTime + 0.2); },
    /** 커피 한 모금: 홀짝, 그리고 컵 내려놓는 소리 */
    sip() { if (!ok()) return; const t = now(); burst(t, 0.42, { f0: 700, f1: 2300, q: 2.2, gain: 0.28, attack: 0.08 }); burst(t + 0.5, 0.16, { f0: 500, f1: 320, q: 1.5, gain: 0.12 }); },
    /** 따뜻한 걸 마시고 "하아" */
    ahh() { if (!ok()) return; const t = now(); burst(t, 0.75, { type: 'lowpass', f0: 1300, f1: 380, q: 0.6, gain: 0.16, attack: 0.14 }); voice(t + 0.02, [[0, 420], [0.35, 360]], 0.025, 5); },
    /** 머그 내려놓기 */
    clink() { if (!ok()) return; const t = now(); tone(t, 1750, 0.09, 0.05); tone(t + 0.01, 2630, 0.06, 0.03); burst(t, 0.05, { type: 'lowpass', f0: 900, q: 0.6, gain: 0.12 }); },
    /** 바다 바람이 한 번 불어오고, 멀리 갈매기 */
    breeze() { if (!ok()) return; const t = now(); burst(t, 2.6, { f0: 320, f1: 900, q: 0.5, gain: 0.13, attack: 1.0 }); burst(t + 0.6, 2.2, { type: 'lowpass', f0: 600, f1: 1400, q: 0.4, gain: 0.08, attack: 0.9 }); setTimeout(() => audio.gull?.(), 1500); },
    /** 기지개: 흐읍 들이쉬며 끄응 */
    stretch() { if (!ok()) return; const t = now(); burst(t, 0.95, { f0: 500, f1: 1500, q: 0.7, gain: 0.12, attack: 0.5 }); this.cloth(); voice(t + 0.55, [[0, 520], [0.35, 760], [0.9, 700], [1.3, 620]], 0.05, 9); },
    /** 기지개 끝: 통 튀며 내려앉음 */
    plop() { if (!ok()) return; const t = now(); const c = audio.ctx, o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(190, t); o.frequency.exponentialRampToValueAtTime(85, t + 0.16); g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2); o.connect(g); g.connect(audio.sfxBus); o.start(t); o.stop(t + 0.25); burst(t + 0.02, 0.5, { type: 'lowpass', f0: 1200, f1: 400, q: 0.5, gain: 0.18, attack: 0.04 }); },
    /** 졸음 숨소리 두 번: 쿠울… */
    snore() { if (!ok()) return; const t = now(); for (const d of [0, 1.55]) { burst(t + d, 1.1, { type: 'lowpass', f0: 380, f1: 180, q: 1.2, gain: 0.2, attack: 0.45 }); const c = audio.ctx, o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.value = 62 + d * 6; f.type = 'lowpass'; f.frequency.value = 260; g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.04, t + d + 0.5); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 1.1); o.connect(f); f.connect(g); g.connect(audio.sfxBus); o.start(t + d); o.stop(t + d + 1.2); } },
    /** 화들짝 깸: 뀩! */
    wake() { if (!ok()) return; const t = now(); voice(t, [[0, 700], [0.08, 1150], [0.16, 980]], 0.07, 0); this.plop(); },
    /** 지느러미 박수 한 번 */
    pat() { if (!ok()) return; const t = now(); burst(t, 0.08, { type: 'lowpass', f0: 1800, f1: 600, q: 0.7, gain: 0.42, attack: 0.004 }); tone(t, 230, 0.07, 0.08); },
    /** 기분 좋은 물범 목소리: 꾸우~ */
    yip() { if (!ok()) return; const t = now(); voice(t, [[0, 900], [0.05, 1350], [0.11, 1000]], 0.05, 0); voice(t + 0.17, [[0, 950], [0.05, 1400], [0.1, 1050]], 0.04, 0); },   // 강아지 "왕왕" (작고 높게)
    coo() { if (!ok()) return; const t = now(); voice(t, [[0, 640], [0.12, 880], [0.32, 760]], 0.055); voice(t + 0.38, [[0, 700], [0.14, 920]], 0.045); },
    /** 지느러미 휘두르는 바람 (손 흔들기) */
    flap() { if (!ok()) return; const t = now(); for (let i = 0; i < 3; i++) burst(t + i * 0.26, 0.2, { f0: 700, f1: 1500, q: 0.8, gain: 0.07, attack: 0.05 }); },
    /** 모래에 지느러미로 긁어 쓰기 */
    scratch() { this.sand(9); },
    /** 메뉴 여닫기: 나무 딸깍 */
    tick() { if (!ok()) return; const t = now(); tone(t, 1250, 0.035, 0.05, 'triangle'); burst(t, 0.03, { f0: 2500, q: 1.2, gain: 0.05 }); },
    /** 조개 열기: 달그락 + 살짝 반짝 */
    shell() { if (!ok()) return; const t = now(); burst(t, 0.06, { f0: 3800, q: 2.5, gain: 0.16 }); tone(t + 0.01, 2900, 0.12, 0.035); tone(t + 0.09, 3700, 0.1, 0.025); burst(t + 0.1, 0.05, { f0: 3200, q: 2.5, gain: 0.1 }); [1760, 2350, 2960].forEach((f, i) => tone(t + 0.2 + i * 0.06, f, 0.35, 0.018)); },
    /** 조개 닫기: 톡 */
    shellClose() { if (!ok()) return; const t = now(); burst(t, 0.05, { f0: 2600, q: 2.0, gain: 0.16 }); tone(t, 1900, 0.09, 0.035); },
    /** 타이머 끝: 맑은 종 네 번 */
    done() { if (!ok()) return; const t = now(); [1047, 1319, 1568, 2093].forEach((f, i) => { tone(t + i * 0.16, f, 1.4, 0.045); tone(t + i * 0.16, f * 2.01, 0.6, 0.012); }); },
    /** 천 스치는 소리 (담요, 모자) */
    cloth() { if (!ok()) return; const t = audio.ctx.currentTime; burst(t, 0.28, { type: 'lowpass', f0: 1800, f1: 700, q: 0.5, gain: 0.3, attack: 0.06 }); burst(t + 0.2, 0.22, { type: 'lowpass', f0: 1400, f1: 600, q: 0.5, gain: 0.2, attack: 0.05 }); },
    /** 헤드셋 딸깍 */
    click() { if (!ok()) return; const t = audio.ctx.currentTime; tone(t, 1300, 0.04, 0.07); tone(t + 0.09, 900, 0.05, 0.07); },
    /** 거울 드는 반짝 소리 */
    chime() { if (!ok()) return; const t = audio.ctx.currentTime; [1320, 1760, 2640].forEach((f, i) => tone(t + i * 0.07, f, 0.5, 0.035)); },
    /** 시점 전환 바람 소리 */
    whoosh() { if (!ok()) return; burst(audio.ctx.currentTime, 0.7, { f0: 400, f1: 1500, q: 0.6, gain: 0.14, attack: 0.3 }); },
  };
}
