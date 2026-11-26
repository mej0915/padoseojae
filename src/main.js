// S7: 물범 한 마리, 내 자리에서 바로 조개 누르기, 오른쪽 동작·꾸미기 메뉴, 바닥에 새겨지는 모래글씨, 동작 소리, 독서 타이머
import './style.css';
import { createScene, QUALITY } from './scene.js';
import { createAudio } from './audio.js';
import { createMusic } from './music.js';
import { createYTMusic } from './youtube.js';
import { createSfx } from './sfx.js';
import { FONTS, loadCustomFont, ensureFont, textToCanvas, strokesToCanvas, sandPreview, PAD_ASPECT } from './sandtext.js';

const MAX_ASPECT = 1.75;
document.documentElement.style.setProperty('--max-aspect', MAX_ASPECT);
const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
if (params.get('fill') === '1') document.body.classList.add('fill');
const audio = createAudio();
const S = createScene($('c'), audio);
const music = createYTMusic(createMusic(audio), document.getElementById('yt-box')), sfx = createSfx(audio);
const tip = (text, ms = 3500) => { $('tip').textContent = text; $('tip').hidden = false; clearTimeout(tip.t); tip.t = setTimeout(() => { $('tip').hidden = true; }, ms); };

// ----- 소리: 처음 누를 때 켠다 (브라우저 규칙상 누르기 전에는 소리를 낼 수 없음) -----
let soundOn = false;
async function sound(on) {
  soundOn = on; if (on) await audio.unlock(); audio.setMuted(!on);
  $('btn-sound').setAttribute('aria-pressed', String(on)); $('btn-sound').textContent = on ? '소리 끄기' : '소리 켜기';
}
$('btn-sound').addEventListener('click', () => sound(!soundOn));
addEventListener('pointerdown', (e) => { if (!soundOn && !e.target.closest('#btn-sound')) sound(true); }, { once: true });

// ----- 시점: 내 자리 ↔ 하늘에서 둘러보기 -----
S.onView = (v, f) => {
  document.body.classList.toggle('bird', v === 'bird'); document.body.classList.toggle('focus', v === 'focus');
  $('btn-home').hidden = v === 'seat'; $('btn-view').hidden = v === 'bird'; sfx.whoosh();
  if (v === 'bird') tip('끌어서 해변을 둘러보세요. 자리를 누르면 가까이 볼 수 있어요', 4500);
  if (v === 'focus') tip(f.mine ? '통통 뛰는 조개를 누르면 쪽지를 남기거나 읽을 수 있어요' : '이 자리의 조개를 누르면 쪽지를 읽을 수 있어요', 4500);
};
$('btn-view').addEventListener('click', () => S.setView('bird'));
$('btn-home').addEventListener('click', () => S.setView('seat'));

// ----- 오른쪽 메뉴: 동작 / 꾸미기 (화면 아래를 비워 조개를 누를 수 있게) -----
const panes = { motion: $('pane-motion'), dress: $('pane-dress') };
function openPane(name) {
  for (const [k, el] of Object.entries(panes)) { const on = k === name && el.hidden; el.hidden = !on; $('rail-' + k).setAttribute('aria-expanded', String(on)); }
  sfx.tick();
}
$('rail-motion').addEventListener('click', () => openPane('motion'));
$('rail-dress').addEventListener('click', () => openPane('dress'));
const closePanes = () => { for (const k in panes) { panes[k].hidden = true; $('rail-' + k).setAttribute('aria-expanded', 'false'); } };
$('c').addEventListener('pointerdown', closePanes);
document.querySelectorAll('[data-motion]').forEach((b) => b.addEventListener('click', () => { sound(true); closePanes(); if (b.dataset.motion === 'tteok') return grillTteok(); S.act(b.dataset.motion); }));
// 동작 소리: 동작의 시간표(cue)에 맞춰 울린다
S.onCue = (name) => {
  if (name === 'page') audio.page(); else if (name === 'gull') audio.gull(); else sfx[name]?.();
};

// ----- 꾸미기: 모자, 담요, 안경, 헤드셋 -----
const ITEMS = ['cap', 'blanket', 'headset', 'glasses'];
function syncItems() {
  for (const id of ITEMS) { $('act-' + id).setAttribute('aria-pressed', String(S.worn[id])); document.querySelectorAll(`[data-item="${id}"]`).forEach((b) => b.setAttribute('aria-pressed', String(S.worn[id]))); }
}
async function toggle(id) {
  const on = S.toggleItem(id);
  if (id === 'headset') {
    if (on) { await sound(true); audio.setBgScale(musicBg()); music.start(); } else { music.hide(); audio.setBgScale(1); }
    $('np').hidden = !on;
  } else sfx.cloth();
  if (id === 'headset') sfx.click();
  syncItems();
}
for (const id of ITEMS) $('act-' + id).addEventListener('click', () => toggle(id));
document.querySelectorAll('[data-item]').forEach((b) => b.addEventListener('click', () => toggle(b.dataset.item)));
music.onChange((m) => { $('np-title').textContent = m.title; $('np-src').textContent = m.source === 'youtube' ? '유튜브 · 헤드셋 음악' : '독서 음악'; $('np-prev').setAttribute('aria-label', music.source === 'youtube' && music.single ? '30초 뒤로' : '이전 곡'); $('np-next').setAttribute('aria-label', music.source === 'youtube' && music.single ? '30초 앞으로' : '다음 곡'); $('np-play').textContent = m.playing ? '⏸' : '▶'; $('np-play').setAttribute('aria-label', m.playing ? '일시정지' : '다시 재생'); $('np').classList.toggle('paused', !m.playing); });
$('np-play').addEventListener('click', () => { if (music.playing) { music.stop(); audio.setBgScale(1); } else { music.start(); audio.setBgScale(musicBg()); } sfx.click(); });
// S9: 음악 들을 때 파도 소리를 켜 둘지(작게) 끌지 고르기. 이 기기에 기억
const WAVE_KEY = 'padoseojae.wavesWithMusic';
let wavesWithMusic = true; try { wavesWithMusic = localStorage.getItem(WAVE_KEY) !== '0'; } catch { /* */ }
function musicBg() { return wavesWithMusic ? 0.35 : 0; }
const syncWave = () => { $('np-wave').setAttribute('aria-pressed', String(wavesWithMusic)); $('np-wave').title = wavesWithMusic ? '파도 소리 켜짐 (누르면 끔)' : '파도 소리 꺼짐 (누르면 켬)'; };
syncWave();
$('np-wave').addEventListener('click', () => { wavesWithMusic = !wavesWithMusic; try { localStorage.setItem(WAVE_KEY, wavesWithMusic ? '1' : '0'); } catch { /* */ } syncWave(); if (music.playing) audio.setBgScale(musicBg()); sfx.click(); tip(wavesWithMusic ? '음악과 함께 파도 소리도 들려요' : '음악만 들려요 (파도 소리 끔)'); });
$('np-prev').addEventListener('click', () => music.prev()); $('np-next').addEventListener('click', () => music.next());
syncItems();

// ----- 거울: 물범은 돌아보지 않고, 거울 속에만 얼굴이 비친다 -----
let mirrorTimer = 0; const mctx = $('mirror').getContext('2d');
$('act-mirror').addEventListener('click', () => { closePanes(); sfx.chime(); $('dlg-mirror').hidden = false; S.renderMirror(mctx); mirrorTimer = setInterval(() => S.renderMirror(mctx), 90); });
$('mirror-close').addEventListener('click', () => { $('dlg-mirror').hidden = true; clearInterval(mirrorTimer); });

// ----- 모래글씨: 손으로 쓰기 / 글자로 쓰기 -----
const pad = $('pad'), pctx = pad.getContext('2d'); let strokes = [], cur = null, mode = 'hand';
const drawPadNow = () => { padRaf = 0; sandPreview(pctx, pad.width, pad.height, strokesToCanvas(cur ? [...strokes, cur] : strokes, '#000', pad.width, pad.height)); };
let padRaf = 0; const drawPad = () => { if (!padRaf) padRaf = requestAnimationFrame(drawPadNow); };   // 한 화면에 한 번만 다시 그림
const ppos = (e) => { const r = pad.getBoundingClientRect(); return [Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))]; };
// S8: 손가락 속도로 굵기를 정한다(천천히 = 넓고 깊게, 빠르게 = 가늘게). 끊김 없이 촘촘한 점(합쳐진 이벤트까지)을 모은다
let lastT = 0, lastW = 1.1;
pad.addEventListener('pointerdown', (e) => { pad.setPointerCapture(e.pointerId); e.preventDefault(); const p = ppos(e); lastT = performance.now(); lastW = 1.15; cur = [[p[0], p[1], 1.15]]; drawPad(); sfx.scratchStart(); });
pad.addEventListener('pointermove', (e) => {
  if (!cur) return; let moved = 0;
  for (const ev of (e.getCoalescedEvents?.() || [e])) {
    const p = ppos(ev), l = cur[cur.length - 1]; const d = Math.hypot((p[0] - l[0]) * PAD_ASPECT, p[1] - l[1]); if (d < 0.006) continue;
    const now = ev.timeStamp || performance.now(), dt = Math.max(4, now - lastT); lastT = now;
    const v = d / dt * 1000;                                   // 모래판 높이 기준 초당 이동량
    lastW = lastW * 0.7 + Math.min(1.3, Math.max(0.6, 1.35 - v * 0.16)) * 0.3;
    cur.push([p[0], p[1], +lastW.toFixed(2)]); moved += d;
  }
  if (moved) { drawPad(); sfx.scratchMove(moved * 14); }
});
const endStroke = () => { sfx.scratchStop(); if (cur) { strokes.push(cur); cur = null; drawPad(); } };
pad.addEventListener('pointerup', endStroke); pad.addEventListener('pointercancel', endStroke);
const fontOf = () => FONTS.find((f) => f.id === $('sand-font').value) || FONTS[0];
async function drawPrev() { const f = fontOf(), t = $('sand-text').value; await ensureFont(f, t); sandPreview($('sand-prev').getContext('2d'), 720, 240, textToCanvas(t, f, '#000', 720, 240)); }
function fillFonts() { $('sand-font').innerHTML = FONTS.map((f) => `<option value="${f.id}">${f.label}</option>`).join(''); }
fillFonts(); (window.__ASSETS ? Promise.resolve(false) : loadCustomFont()).then((ok) => { if (ok) { fillFonts(); $('sand-font').value = 'custom'; } });
$('sand-text').addEventListener('input', () => { drawPrev(); sfx.sand(1); }); $('sand-font').addEventListener('change', drawPrev);
function setMode(m) { mode = m; $('tab-hand').setAttribute('aria-pressed', String(m === 'hand')); $('tab-type').setAttribute('aria-pressed', String(m === 'type')); $('pane-hand').hidden = m !== 'hand'; $('pane-type').hidden = m !== 'type'; $('sand-undo').hidden = m !== 'hand'; if (m === 'type') { drawPrev(); $('sand-text').focus(); } else drawPad(); }
$('tab-hand').addEventListener('click', () => setMode('hand')); $('tab-type').addEventListener('click', () => setMode('type'));
$('act-sand').addEventListener('click', () => { closePanes(); $('dlg-sand').hidden = false; setMode(mode); });
$('sand-undo').addEventListener('click', () => { strokes.pop(); drawPad(); });
$('sand-clear').addEventListener('click', () => { if (mode === 'hand') { strokes = []; drawPad(); } else { $('sand-text').value = ''; drawPrev(); } });
$('sand-cancel').addEventListener('click', () => { $('dlg-sand').hidden = true; });
const SAND_KEY = 'padoseojae.sand.v1';
$('sand-ok').addEventListener('click', async () => {
  let spec;
  if (mode === 'hand') { if (!strokes.length) return tip('모래판에 먼저 글씨를 써 주세요'); spec = { strokes: strokes.map((s) => s.map(([u, v, w = 1]) => [+u.toFixed(4), +v.toFixed(4), w])) }; }
  else { const t = $('sand-text').value.trim(); if (!t) return tip('남길 말을 먼저 적어 주세요'); await ensureFont(fontOf(), t); spec = { text: t, font: fontOf().id }; }
  $('dlg-sand').hidden = true; strokes = []; $('sand-text').value = '';
  if (S.view !== 'seat') S.setView('seat');
  sound(true); S.act('write'); S.writeSand(spec, { delay: 0.75 });
  try { localStorage.setItem(SAND_KEY, JSON.stringify(spec)); } catch { /* 저장 불가: 이번 접속 동안만 */ }
  setTimeout(() => tip('물범 앞 모래에 글씨를 새겼어요. 다음에 와도 남아 있어요', 4500), 2600);
});
// 지난번에 남긴 모래글씨 복원
try { const saved = JSON.parse(localStorage.getItem(SAND_KEY) || 'null'); if (saved && (saved.strokes?.length || saved.text)) ensureFont(FONTS.find((f) => f.id === saved.font) || FONTS[0], saved.text || '가').then(() => S.writeSand(saved, { instant: true })); } catch { /* 없음 */ }

// ----- 조개 쪽지: 이 기기에만 저장 (공유 없음) -----
const NOTE_KEY = 'padoseojae.shellnotes.v2'; let notes = {}, shellId = -1;
try { notes = JSON.parse(localStorage.getItem(NOTE_KEY) || '{}') || {}; } catch { notes = {}; }
const saveNotes = () => { try { localStorage.setItem(NOTE_KEY, JSON.stringify(notes)); } catch { /* 저장 불가: 이번 접속 동안만 유지 */ } S.pick.noted = new Set(Object.keys(notes).map(Number)); };
saveNotes();
function openShell(n, mine, who) {
  $('shell-h').textContent = !mine ? '조개 속 쪽지' : n ? '내가 남긴 쪽지' : '조개 속에 쪽지 남기기'; $('shell-title').value = n?.title || ''; $('shell-text').value = n?.text || '';
  $('shell-who').hidden = mine; $('shell-who').textContent = mine ? '' : `${who} 님이 남긴 쪽지 (예시)`;
  for (const id of ['shell-title', 'shell-text']) $(id).readOnly = !mine;
  $('shell-del').hidden = !mine || !n; $('shell-ok').hidden = !mine; document.querySelector('#dlg-shell .hint').hidden = !mine;
  $('dlg-shell').hidden = false;
}
// S10: 밤바다 — 파도 소리 조금 작게, 갈매기 조용, 숄을 두를 때 천 소리
S.onNightLevel = (k) => audio.setNight(k);
S.onNight = (step, k, first) => { if (first) return; if (step === 1) tip('해가 바다 뒤로 넘어가요. 곧 밤바다예요', 4500); if (step === 2) { sfx.cloth(); tip('밤이 되어 랜턴을 켜고 털담요를 둘렀어요', 4500); } };
// S10: 캐릭터 바꾸기 (같은 동작, 다른 친구)
const KIND_KEY = 'padoseojae.kind', KIND_ORDER = ['seal', 'bear', 'bunny'];
function setKind(k, quiet) { const name = S.setKind(k); try { localStorage.setItem(KIND_KEY, k); } catch { /* */ } $('act-kind').querySelector('span').textContent = name; if (!quiet) { sfx.cloth(); S.act('hello'); } }
try { setKind(localStorage.getItem(KIND_KEY) || 'seal', true); } catch { setKind('seal', true); }
$('act-kind').addEventListener('click', () => { const i = KIND_ORDER.indexOf(S.kind); setKind(KIND_ORDER[(i + 1) % KIND_ORDER.length]); });
// ----- S11 해님·달님: 낮 ↔ 밤 -----
function syncDayNight() { const nightNow = S.night > 0.5; const b = $('act-daynight'); b.setAttribute('aria-pressed', String(nightNow)); b.querySelector('i').textContent = nightNow ? '☀️' : '🌙'; b.querySelector('span').textContent = nightNow ? '낮으로' : '밤으로'; $('act-fire').hidden = !(S.night > 0.3); if (S.night <= 0.3 && S.fireOn) setFire(false); }
$('act-daynight').addEventListener('click', () => { sound(true); closePanes(); const toNight = S.night < 0.5; S.setNightTarget(toNight ? 1 : 0); sfx.twinkle(); tip(toNight ? '해가 바다 뒤로 넘어가요…' : '다시 해가 떠요', 3500); });
setInterval(syncDayNight, 400);
// ----- S11 모닥불 (밤에만) + 타닥타닥 -----
function setFire(on) { const ok = S.setFire(on); $('act-fire').setAttribute('aria-pressed', String(ok)); if (ok) { sfx.fireOn(); } else sfx.fireOff(); return ok; }
$('act-fire').addEventListener('click', async () => { await sound(true); closePanes(); const on = !S.fireOn; if (on && !setFire(true)) return tip('모닥불은 밤에만 켤 수 있어요'); if (!on) setFire(false); else tip('모닥불을 켰어요. 동작 메뉴에서 가래떡을 구워 보세요', 4000); });
async function grillTteok() {
  if (S.night < 0.3) return tip('밤이 되면 모닥불에 가래떡을 구울 수 있어요 (🌙 단추)', 4000);
  await sound(true); if (!S.fireOn) { setFire(true); setTimeout(() => S.act('tteok'), 900); } else S.act('tteok');
}
// ----- S11 별똥별: 밤에 가끔 떨어지고, 누르면 소원 -----
const WISH_KEY = 'padoseojae.wishes';
function shootStar() {
  if (S.night > 0.6 && S.view === 'seat' && document.visibilityState === 'visible' && $('star-fall').hidden) {
    const el = $('star-fall'), w = innerWidth, h = innerHeight;
    el.style.left = (w * (0.35 + Math.random() * 0.5)) + 'px'; el.style.top = (h * (0.06 + Math.random() * 0.16)) + 'px';
    el.hidden = false; el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    clearTimeout(shootStar.t); shootStar.t = setTimeout(() => { el.hidden = true; }, 3200);
  }
  setTimeout(shootStar, 18000 + Math.random() * 25000);
}
setTimeout(shootStar, 6000);
$('star-fall').addEventListener('click', () => { $('star-fall').hidden = true; sound(true); sfx.twinkle(); $('dlg-wish').hidden = false; let n = 0; try { n = JSON.parse(localStorage.getItem(WISH_KEY) || '[]').length; } catch { /* */ } $('wish-count').textContent = n ? `지금까지 별에 보낸 소원 ${n}개` : ''; $('wish-text').focus(); });
$('wish-close').addEventListener('click', () => { $('dlg-wish').hidden = true; });
$('wish-ok').addEventListener('click', () => { const t = $('wish-text').value.trim(); if (!t) return tip('소원을 먼저 적어 주세요'); try { const a = JSON.parse(localStorage.getItem(WISH_KEY) || '[]'); a.push({ t, at: Date.now() }); localStorage.setItem(WISH_KEY, JSON.stringify(a.slice(-100))); } catch { /* */ } $('wish-text').value = ''; $('dlg-wish').hidden = true; sfx.twinkle(); S.act('clap'); tip('소원이 별을 타고 날아갔어요 ✨', 4000); });
// ----- S11 유리병 편지: 파도가 가끔 데려옴. 열면 책 속 한 문장 -----
const QUOTES = [
  ['책은 한 번에 한 사람에게 말을 건다.', '파도서재 메모'],
  ['오늘 읽은 한 문장이 내일의 나를 조금 바꾼다.', '파도서재 메모'],
  ['가장 중요한 것은 눈에 보이지 않아.', '생텍쥐페리, 「어린 왕자」'],
  ['네가 네 장미에게 들인 시간 때문에 네 장미가 그토록 소중한 거야.', '생텍쥐페리, 「어린 왕자」'],
  ['행복한 가정은 모두 비슷하고, 불행한 가정은 저마다의 이유로 불행하다.', '톨스토이, 「안나 카레니나」'],
  ['내일은 또 다른 날이니까.', '마거릿 미첼, 「바람과 함께 사라지다」'],
  ['나는 생각한다, 그러므로 나는 존재한다.', '데카르트, 「방법서설」'],
  ['새는 알에서 나오려고 투쟁한다. 알은 세계이다.', '헤르만 헤세, 「데미안」'],
  ['우리가 할 수 있는 것은 주어진 시간으로 무엇을 할지 정하는 것뿐이야.', '톨킨, 「반지의 제왕」'],
  ['천천히 서두르라.', '옛 라틴어 격언'],
  ['한 권의 책을 읽은 사람은 그만큼의 바다를 건넌 사람이다.', '파도서재 메모'],
  ['우리는 모두 시궁창에 있지만, 그중 몇몇은 별을 바라보고 있다.', '오스카 와일드, 「윈더미어 부인의 부채」'],
];
const BOTTLE_KEY = 'padoseojae.bottleIdx';
function scheduleBottle(ms) { clearTimeout(scheduleBottle.t); scheduleBottle.t = setTimeout(() => { if (!S.bottleVisible) { S.showBottle(true); tip('파도가 유리병을 데려왔어요. 눌러 보세요', 4500); } }, ms); }
scheduleBottle(45000);
S.pick.onBottle = () => {
  sound(true); sfx.shell(); let i = 0; try { i = (+localStorage.getItem(BOTTLE_KEY) || 0) % QUOTES.length; localStorage.setItem(BOTTLE_KEY, String(i + 1)); } catch { i = Math.floor(Math.random() * QUOTES.length); }
  $('bottle-quote').textContent = QUOTES[i][0]; $('bottle-src').textContent = '— ' + QUOTES[i][1]; $('dlg-bottle').hidden = false; S.showBottle(false);
};
$('bottle-close').addEventListener('click', () => { $('dlg-bottle').hidden = true; scheduleBottle(150000 + Math.random() * 120000); });
// ----- S11 읽은 시간만큼 모래성이 높아짐 (오늘 이 화면을 펴 둔 시간, 10분마다 한 층, 최대 6층) -----
const READ_KEY = 'padoseojae.read.' + new Date().toISOString().slice(0, 10);
let readSec = 0; try { readSec = +localStorage.getItem(READ_KEY) || 0; } catch { /* */ }
let castleLv = Math.min(6, Math.floor(readSec / 600)); S.setCastleLevel(castleLv);
setInterval(() => {
  if (document.visibilityState !== 'visible') return; readSec += 5; try { localStorage.setItem(READ_KEY, String(readSec)); } catch { /* */ }
  const lv = Math.min(6, Math.floor(readSec / 600)); if (lv > castleLv) { castleLv = lv; S.setCastleLevel(lv); sfx.twinkle(); tip(`오늘 ${Math.floor(readSec / 60)}분 함께 읽었어요. 모래성이 ${lv}층 높아졌어요 🏰`, 5000); }
}, 5000);
window.__read = { add: (min) => { readSec += min * 60; }, get sec() { return readSec; } };
// ----- S11 꽃게를 다섯 번 누르면 친구 꽃게 -----
let crabTaps = 0;
// S10: 꽃게를 누르면 랜덤 말풍선
const CRAB_SAYS = ['뿅', '뀨', '꼬륵', '챱', '*.*', '+••+', '집게 조심!', '사각사각', '안녕?', '...!', '♪', '킁'];
S.pick.onCrab = (x, y, friend) => {
  sound(true); sfx.yip?.();
  if (!friend && ++crabTaps === 5) { S.addCrabFriend(); setTimeout(() => tip('꽃게 친구가 놀러 왔어요 🦀🦀', 4000), 600); }
  const b = document.createElement('div'); b.className = 'bubble'; b.textContent = CRAB_SAYS[Math.floor(Math.random() * CRAB_SAYS.length)];
  b.style.left = x + 'px'; b.style.top = y + 'px'; $('app').appendChild(b); setTimeout(() => b.remove(), 1700);
};
S.pick.onShell = (i) => { shellId = i; sfx.shell(); setTimeout(() => openShell(notes[i], true), 380); };
S.pick.onOther = (os) => openShell(os, false, os.who);
$('shell-cancel').addEventListener('click', () => { $('dlg-shell').hidden = true; });
$('shell-del').addEventListener('click', () => { delete notes[shellId]; saveNotes(); $('dlg-shell').hidden = true; tip('쪽지를 지웠어요'); });
$('shell-ok').addEventListener('click', () => {
  const title = $('shell-title').value.trim(), text = $('shell-text').value.trim();
  if (!title && !text) return tip('책 제목이나 남길 말을 적어 주세요');
  notes[shellId] = { title, text, at: Date.now() }; saveNotes(); sfx.shellClose(); $('dlg-shell').hidden = true; tip('조개 속에 쪽지를 넣었어요. 반짝이는 조개를 누르면 다시 읽을 수 있어요');
});

// ----- 품질, 가로 채움, 측정값 -----
const order = ['low', 'mid', 'high'];
$('btn-quality').textContent = `품질: ${S.Q.label}`;
$('btn-quality').addEventListener('click', () => {
  const next = order[(order.indexOf(S.qName) + 1) % order.length];
  let saved = false; try { sessionStorage.setItem('s5q', next); saved = true; } catch { /* 저장 불가 */ }
  if (saved && !params.get('quality')) location.reload();
  else { const u = new URL(location.href); u.searchParams.set('quality', next); location.href = u.toString(); }
});
function fillBtn() { $('btn-fill').hidden = innerWidth / innerHeight <= MAX_ASPECT + 0.01; }
fillBtn(); addEventListener('resize', fillBtn);
$('btn-fill').addEventListener('click', () => { const on = document.body.classList.toggle('fill'); $('btn-fill').setAttribute('aria-pressed', String(on)); dispatchEvent(new Event('resize')); });
$('hud').hidden = params.get('hud') !== '1';
setInterval(() => {
  if ($('hud').hidden) return; const s = S.stats();
  $('hud').textContent = `초당 ${s.fps}장 (상한 ${s.fpsCap}) · 한 장 ${s.workMs}ms\n품질 ${QUALITY[s.quality].label} · ${s.size[0]}×${s.size[1]} ×${s.pixelRatio} · 그리기 ${s.calls}회`;
}, 500);

window.__s5 = S; window.__ui = { music, audio, sfx, toggle, notes: () => notes };

// ----- 독서 타이머: 시간이 다 되면 물범이 기지개 + 박수, 작은 종소리 -----
const TIMER_KEY = 'padoseojae.timer.v1';
let timer = null;   // { end, min }
const fmt = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
function syncTimer() {
  const on = !!timer; $('btn-timer').classList.toggle('on', on);
  $('timer-text').textContent = on ? fmt(timer.end - Date.now()) : '타이머';
  $('timer-h').textContent = on ? `${timer.min}분 읽는 중` : '얼마나 읽을까요?';
  $('timer-mins').hidden = on; $('timer-stop').hidden = !on; $('timer-hint').textContent = on ? '타이머를 끄고 그냥 쉴 수도 있어요' : '시간이 다 되면 물범이 기지개를 켜고 알려 줘요';
}
function startTimer(min) {
  timer = { end: Date.now() + min * 60000 / (Number(params.get('timescale')) > 1 && params.get('fasttimer') ? 60 : 1), min };
  try { localStorage.setItem(TIMER_KEY, JSON.stringify(timer)); } catch { /* 저장 불가 */ }
  $('dlg-timer').hidden = true; syncTimer(); sound(true); sfx.tick(); S.act('page'); tip(`${min}분 동안 함께 읽어요`);
}
function stopTimer(done) {
  const min = timer?.min; timer = null; try { localStorage.removeItem(TIMER_KEY); } catch { /* */ } syncTimer();
  if (done) {
    sfx.done(); S.act('stretch'); setTimeout(() => S.act('clap'), 3700);
    $('toast').textContent = `${min}분 독서 완료 ✓  오늘도 한 장 넘겼어요`; $('toast').hidden = false; clearTimeout(stopTimer.t); stopTimer.t = setTimeout(() => { $('toast').hidden = true; }, 12000);
  }
}
try { const t = JSON.parse(localStorage.getItem(TIMER_KEY) || 'null'); if (t && t.end > Date.now()) timer = t; } catch { /* */ }
$('btn-timer').addEventListener('click', () => { closePanes(); syncTimer(); $('dlg-timer').hidden = false; sfx.tick(); });
document.querySelectorAll('[data-min]').forEach((b) => b.addEventListener('click', () => startTimer(+b.dataset.min)));
$('timer-stop').addEventListener('click', () => { stopTimer(false); $('dlg-timer').hidden = true; tip('타이머를 껐어요'); });
$('timer-close').addEventListener('click', () => { $('dlg-timer').hidden = true; });
$('toast').addEventListener('click', () => { $('toast').hidden = true; });
setInterval(() => { if (!timer) return; if (Date.now() >= timer.end) stopTimer(true); else $('timer-text').textContent = fmt(timer.end - Date.now()); }, 500);
syncTimer();
window.__timer = { start: startTimer, finish: () => { if (timer) timer.end = Date.now() - 1; } };
setTimeout(() => { if (S.view === 'seat') tip('반짝이는 조개를 누르면 쪽지를 남길 수 있어요 · 오른쪽에서 동작을 골라 보세요', 5500); }, 1800);
