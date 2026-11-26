// 모래에 남기는 글씨: 손으로 쓴 획 / 글자로 입력한 글을 "도장용 그림(알파)"으로 만든다.
// 서체는 옵션. 기본은 손글씨체(구글 폰트, OFL), ./fonts/custom.(woff2|otf|ttf) 파일이 있으면 "내 서체" 항목이 생긴다.
export const FONTS = [
  { id: 'pen', label: '손글씨 펜', css: '"Nanum Pen Script", "Gaegu", "Segoe Script", cursive', k: 1.12 },
  { id: 'gaegu', label: '또박 손글씨', css: '"Gaegu", "Nanum Pen Script", cursive', k: 1.0 },
];
export async function loadCustomFont() {
  for (const ext of ['woff2', 'otf', 'ttf']) {
    try { const f = new FontFace('SandCustom', `url(./fonts/custom.${ext})`); await f.load(); document.fonts.add(f); FONTS.push({ id: 'custom', label: '내 서체', css: '"SandCustom", "Nanum Pen Script", cursive', k: 1.0 }); return true; } catch { /* 없음 */ }
  }
  return false;
}
export const PAD_ASPECT = 3;
const rng = (s) => () => ((s = (s * 16807) % 2147483647) / 2147483647);

export async function ensureFont(font, text) { try { await document.fonts.load(`48px ${font.css}`, text || '가'); } catch { /* 폰트가 없으면 대체 서체 */ } }

/** 글자 입력 → 캔버스(투명 바탕). 글자마다 살짝 기울고 흔들려 손으로 쓴 듯 보인다 */
export function textToCanvas(text, font, color = '#000', w = 768, h = 256) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
  const lines = String(text).split('\n').slice(0, 2).map((l) => l.slice(0, 14)); if (!lines.join('')) return c;
  const r = rng(lines.join('|').length * 131 + 17);
  const size = Math.min(h / lines.length * 0.82, (w * 0.92) / Math.max(...lines.map((l) => l.length), 3) / 0.92) * font.k;
  x.textBaseline = 'middle'; x.textAlign = 'center'; x.fillStyle = color; x.strokeStyle = color; x.lineJoin = 'round'; x.lineWidth = size * 0.012;
  x.font = `${size}px ${font.css}`;
  lines.forEach((ln, li) => {
    const adv = x.measureText('가').width * 0.86, total = [...ln].reduce((s, ch) => s + (/\s/.test(ch) ? adv * 0.5 : /[ -~]/.test(ch) ? adv * 0.62 : adv), 0);
    let px = w / 2 - total / 2; const py = (h / lines.length) * (li + 0.5);
    for (const ch of ln) {
      const a = /\s/.test(ch) ? adv * 0.5 : /[ -~]/.test(ch) ? adv * 0.62 : adv;
      if (!/\s/.test(ch)) { x.save(); x.translate(px + a / 2, py + (r() - 0.5) * size * 0.14); x.rotate((r() - 0.5) * 0.22 - 0.03); const sc = 0.93 + r() * 0.14; x.scale(sc, sc); x.fillText(ch, 0, 0); x.strokeText(ch, 0, 0); x.restore(); }
      px += a;
    }
  });
  return c;
}

/** 획을 부드럽게: 점 사이를 한 번 깎아(차이킨) 꺾인 곳을 둥글게. 점은 [u, v, 굵기배율] */
function smooth(s) {
  if (s.length < 3) return s;
  const o = [s[0]];
  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i], b = s[i + 1], wa = a[2] ?? 1, wb = b[2] ?? 1;
    o.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25, wa * 0.75 + wb * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75, wa * 0.25 + wb * 0.75]);
  }
  o.push(s[s.length - 1]); return o;
}
/** 손으로 쓴 획(0~1 비율 좌표, 가로:세로 = 3:1) → 캔버스.
 *  S8: 손가락 속도에 따라 굵기가 변하고(천천히 = 깊고 넓게), 시작과 끝은 가늘게 빠지며, 꺾인 곳은 둥글게 이어진다 */
export function strokesToCanvas(strokes, color = '#000', w = 768, h = 256) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
  x.strokeStyle = color; x.fillStyle = color; x.lineCap = 'round'; x.lineJoin = 'round';
  const base = h * 0.058;
  for (const s0 of strokes) {
    if (!s0.length) continue;
    if (s0.length === 1) { x.beginPath(); x.arc(s0[0][0] * w, s0[0][1] * h, base * 0.5 * (s0[0][2] ?? 1.1), 0, 6.3); x.fill(); continue; }
    const s = smooth(smooth(s0)), n = s.length;
    for (let i = 1; i < n; i++) {
      const a = s[i - 1], b = s[i];
      const taper = Math.min(1, 0.45 + 0.55 * Math.min(i, n - i) / Math.min(6, n / 2));   // 처음·끝이 가늘게
      x.lineWidth = base * ((a[2] ?? 1) + (b[2] ?? 1)) / 2 * taper;
      x.beginPath(); x.moveTo(a[0] * w, a[1] * h); x.lineTo(b[0] * w, b[1] * h); x.stroke();
    }
  }
  return c;
}

// 모래판 바탕: 한 번 만들어 두고 재사용 (고운 모래 결, 바람 물결, 크고 작은 알갱이, 조개 부스러기)
const bgCache = new Map();
function sandBg(W, H) {
  const key = W + 'x' + H; if (bgCache.has(key)) return bgCache.get(key);
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d'), r = rng(77);
  const g = x.createLinearGradient(0, 0, W * 0.3, H); g.addColorStop(0, '#f1d3a4'); g.addColorStop(0.55, '#e9c48f'); g.addColorStop(1, '#ddb27c'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  // 큰 얼룩(눅눅함·마름)
  for (let i = 0; i < 26; i++) { const cx = r() * W, cy = r() * H, rad = 30 + r() * 110, rg = x.createRadialGradient(cx, cy, 0, cx, cy, rad); const dark = r() < 0.5; rg.addColorStop(0, dark ? 'rgba(170,118,70,.13)' : 'rgba(255,240,212,.16)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = rg; x.fillRect(cx - rad, cy - rad, rad * 2, rad * 2); }
  // 바람이 만든 잔물결: 비스듬한 물결선, 한쪽은 밝고 한쪽은 그늘
  for (let k = 0; k < 15; k++) {
    const y0 = (k + r() * 0.6) / 15 * H * 1.25 - H * 0.12, amp = 3 + r() * 4, ph = r() * 6.3, fq = 0.012 + r() * 0.008;
    for (const [dy, col] of [[0, 'rgba(160,108,62,.14)'], [2.2, 'rgba(255,244,222,.22)']]) {
      x.beginPath(); for (let px = -10; px <= W + 10; px += 8) { const py = y0 + dy + Math.sin(px * fq + ph) * amp + px * 0.06; px < 0 ? x.moveTo(px, py) : x.lineTo(px, py); }
      x.strokeStyle = col; x.lineWidth = 2.4; x.stroke();
    }
  }
  // 알갱이: 고운 것 많이, 굵은 것 조금 (밝은 석영·어두운 광물·주황)
  const cols = ['rgba(255,247,230,.55)', 'rgba(140,95,60,.35)', 'rgba(205,140,80,.35)', 'rgba(90,70,60,.3)', 'rgba(255,255,255,.5)'];
  for (let i = 0; i < W * H / 55; i++) { x.fillStyle = cols[(r() * cols.length) | 0]; const s = r() < 0.92 ? 1 + r() * 1.2 : 1.8 + r() * 1.8; x.fillRect(r() * W, r() * H, s, s * (0.7 + r() * 0.6)); }
  // 조개 부스러기 몇 개
  for (let i = 0; i < 7; i++) { x.save(); x.translate(r() * W, r() * H); x.rotate(r() * 6.3); x.fillStyle = r() < 0.5 ? 'rgba(255,236,226,.8)' : 'rgba(240,214,190,.85)'; x.beginPath(); x.ellipse(0, 0, 2.5 + r() * 3, 1.5 + r() * 2, 0, 0, 6.3); x.fill(); x.fillStyle = 'rgba(150,100,70,.35)'; x.fillRect(-1, 1, 3, 1); x.restore(); }
  bgCache.set(key, c); return c;
}
const scratch = {};
function layer(name, W, H) { const c = scratch[name] ||= document.createElement('canvas'); if (c.width !== W || c.height !== H) { c.width = W; c.height = H; } const x = c.getContext('2d'); x.clearRect(0, 0, W, H); x.globalCompositeOperation = 'source-over'; return [c, x]; }
function tintInto(name, src, color, W, H) { const [c, x] = layer(name, W, H); x.drawImage(src, 0, 0, W, H); x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, W, H); return c; }

/** 쪽지·모래판 미리보기: 모래 바탕 위에 손가락으로 판 홈처럼 그린다.
 *  (위쪽 벽은 그늘, 아래쪽 벽은 햇빛, 홈 바닥은 눅눅하고 결이 있음, 양옆으로 밀려난 둔덕) — 바닥에 그린 하트와 같은 느낌 */
export function sandPreview(ctx, W, H, alphaCanvas) {
  ctx.drawImage(sandBg(W, H), 0, 0);
  const k = W / 720;
  ctx.save(); ctx.filter = `blur(${3 * k}px)`; ctx.globalAlpha = 0.7; ctx.drawImage(tintInto('a', alphaCanvas, '#fff2d6', W, H), 0, 5 * k); ctx.drawImage(tintInto('a', alphaCanvas, '#fbe6c0', W, H), 0, -5 * k); ctx.restore();   // 밀려난 둔덕
  ctx.save(); ctx.filter = `blur(${1.2 * k}px)`;
  ctx.drawImage(tintInto('a', alphaCanvas, '#fff0d4', W, H), 0, 2.5 * k);    // 해를 보는 아래 벽
  ctx.drawImage(tintInto('a', alphaCanvas, '#6b4029', W, H), 0, -2.5 * k);   // 그늘진 위 벽
  ctx.restore();
  ctx.save(); ctx.filter = `blur(${0.8 * k}px)`; ctx.drawImage(tintInto('a', alphaCanvas, '#b07f54', W, H), 0, 0); ctx.restore();   // 홈 바닥
  // 홈 바닥에도 모래 결이 보이게: 바탕 무늬를 홈 모양으로 오려 어둡게 겹침
  const [c, x] = layer('b', W, H); x.drawImage(alphaCanvas, 0, 0, W, H); x.globalCompositeOperation = 'source-in'; x.drawImage(sandBg(W, H), 0, 0);
  ctx.save(); ctx.globalAlpha = 0.5; ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(c, 0, 0); ctx.restore();
}
function tint(src, color) { const c = document.createElement('canvas'); c.width = src.width; c.height = src.height; const x = c.getContext('2d'); x.drawImage(src, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, c.width, c.height); return c; }

/** 글씨 모양(알파) 만들기. spec = { strokes } 또는 { text, font }. p(0~1): 쓰는 진행도 */
export function sandMask(spec, p = 1, w = 1024, h = 342) {
  if (spec.strokes) {
    const total = spec.strokes.reduce((n, s) => n + Math.max(1, s.length), 0); let left = Math.ceil(total * p);
    const part = []; for (const s of spec.strokes) { if (left <= 0) break; part.push(s.slice(0, Math.max(1, left))); left -= Math.max(1, s.length); }
    const c = strokesToCanvas(part, '#000', w, h);
    return c;
  }
  const font = FONTS.find((f) => f.id === spec.font) || FONTS[0];
  const c0 = textToCanvas(spec.text || '', font, '#000', w, h), c = document.createElement('canvas'); c.width = w; c.height = h;
  { const x = c.getContext('2d'); for (const [dx, dy] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3], [2, 2], [-2, -2], [2, -2], [-2, 2]]) x.drawImage(c0, dx, dy); }   // 글자 획을 조금 굵게(홈이 보이게)
  if (p < 1) { const x = c.getContext('2d'); x.globalCompositeOperation = 'destination-in'; const g = x.createLinearGradient(0, 0, w, 0); const e = p * 1.08 * w; g.addColorStop(0, '#000'); g.addColorStop(Math.max(0, Math.min(1, (e - 40) / w)), '#000'); g.addColorStop(Math.max(0, Math.min(1, e / w)), 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); }
  return c;
}

/** 모래에 판 홈처럼 그린다: 해를 등진 위쪽 벽은 그늘, 아래쪽 벽은 밝게, 홈 바닥은 눅눅한 갈색, 가장자리에 밀려난 모래알 */
export function engraveCanvas(cv, spec, p = 1) {
  const w = cv.width, h = cv.height, x = cv.getContext('2d');
  x.clearRect(0, 0, w, h);
  const m = sandMask(spec, p, w, h);
  const lw = spec.strokes ? 1 : 1;
  x.save(); x.filter = 'blur(3px)'; x.globalAlpha = 0.55; x.drawImage(tint(m, '#fff1d8'), 0, 5 * lw); x.restore();   // 밀려나 쌓인 둔덕(밝게)
  x.save(); x.filter = 'blur(2px)'; x.globalAlpha = 0.5; x.drawImage(tint(m, '#e9c79a'), 0, -6 * lw); x.restore();   // 뒤쪽 둔덕
  x.globalAlpha = 0.95; x.drawImage(tint(m, '#fbe7c6'), 0, 3);       // 해를 보는 아래쪽 벽
  x.globalAlpha = 0.95; x.drawImage(tint(m, '#5d3726'), 0, -3);      // 그늘진 위쪽 벽
  x.globalAlpha = 1; x.drawImage(tint(m, '#8d5c3e'), 0, 0);          // 홈 바닥
  // 홈 바닥 안쪽 결
  const inner = document.createElement('canvas'); inner.width = w; inner.height = h; const ix = inner.getContext('2d');
  ix.drawImage(m, 0, 0); ix.globalCompositeOperation = 'source-in'; const r = rng(9);
  for (let i = 0; i < 900; i++) { ix.fillStyle = r() < 0.5 ? 'rgba(60,32,20,.35)' : 'rgba(190,140,95,.35)'; ix.fillRect(r() * w, r() * h, 2.5, 2.5); }
  x.globalAlpha = 0.8; x.drawImage(inner, 0, 0);
  // 가장자리 모래알
  const d = m.getContext('2d').getImageData(0, 0, w, h).data, r2 = rng(21); x.globalAlpha = 1;
  for (let i = 0; i < 2600; i++) {
    const px = Math.floor(r2() * w), py = Math.floor(r2() * h), a = d[(py * w + px) * 4 + 3];
    if (a > 10) { const ox = (r2() - 0.5) * 22, oy = 6 + r2() * 12; const qx = Math.min(w - 1, Math.max(0, Math.round(px + ox))), qy = Math.min(h - 1, Math.round(py + oy)); if (d[(qy * w + qx) * 4 + 3] < 10) { x.fillStyle = r2() < 0.7 ? 'rgba(255,238,206,.85)' : 'rgba(150,100,66,.6)'; x.fillRect(qx, qy, 2 + r2() * 2, 2 + r2() * 1.5); } }
  }
  x.globalAlpha = 1;
}
