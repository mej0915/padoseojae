// S5 자동 검증·캡처. 사용: npm run build && node tests/capture.mjs [출력폴더] [pc|iphone13|pixel7|iphone13-land]
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const out = process.argv[2] || 'captures';
const only = process.argv[3];
const PORT = process.env.PORT || '4205';
mkdirSync(out, { recursive: true });
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2500));
const ip = devices['iPhone 13'];
const targets = [
  { name: 'pc', ctx: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 } },
  { name: 'iphone13', ctx: { ...ip } },
  { name: 'pixel7', ctx: { ...devices['Pixel 7'] } },
  { name: 'iphone13-land', ctx: { ...ip, viewport: { width: 844, height: 390 } } },
].filter((t) => !only || t.name === only);
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const results = {};
for (const t of targets) {
  const ctx = await browser.newContext(t.ctx);
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if ((m.type() === 'error' || m.type() === 'warning') && !/ReadPixels/.test(m.text())) errors.push(m.text()); });
  const r = { errors, checks: {}, data: {} };
  const shot = (n) => page.screenshot({ path: `${out}/${t.name}-${n}.png` });
  await page.goto(`http://localhost:${PORT}/?timescale=8&quality=low`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 60000 });
  await page.waitForTimeout(1500);
  r.data.stats = await page.evaluate(() => window.__s5.stats());
  // 1) 기본 구도: 의자 뒷다리 발밑이 마른 모래(무대 y≥800), 수평선이 그림 수평선(355)에
  r.data.base = await page.evaluate(() => {
    const S = window.__s5, T = S.camera.position.constructor;
    const feet = S.stageOf(new T(0, 0, -0.8 - 0.36)), far = S.stageOf(new T(0, 0, -200000));
    return { feetStageY: +feet[1].toFixed(1), horizonStageY: +far[1].toFixed(1), shells: S.objects.shells.map((s) => S.stageOf(s.position).map((v) => Math.round(v))), stage: [Math.round(S.layoutInfo.stageTop), Math.round(S.layoutInfo.stageBottom)] };
  });
  r.checks.chairOnDrySand = r.data.base.feetStageY >= 800;
  r.checks.horizonAligned = Math.abs(r.data.base.horizonStageY - 355) < 3;
  r.checks.shellsOnDrySand = r.data.base.shells.every(([, y]) => y >= 800 && y <= r.data.base.stage[1]);
  // 2) 파도: 물 높이가 불규칙하게 변하고(연속 파도의 세기·길이가 다름), 젖은 모래가 생겼다 마름
  const samples = [];
  let shotIn = false, shotOut = false;
  for (let i = 0; i < 36; i++) {
    const s = await page.evaluate(() => { const S = window.__s5; return { t: S.simT, wash: S.wave.wash, count: S.wave.count, period: S.wave.period, strength: S.wave.strength, wetBand: S.beach.readMap(256, 700, 1024, 60)[0], dry: S.beach.readMap(256, 810, 1024, 100)[0] }; });
    samples.push(s);
    if (!shotIn && s.wash > 0.55) { await shot('1-wave-in'); shotIn = true; }
    if (shotIn && !shotOut && s.wash < 0.12) { await shot('2-wave-out-wet-sand'); shotOut = true; }
    await page.waitForTimeout(250);
  }
  const waveSet = [...new Map(samples.map((s) => [s.count, [+s.period.toFixed(2), +s.strength.toFixed(2)]])).values()];
  r.data.waves = waveSet; r.data.washRange = [Math.min(...samples.map((s) => s.wash)).toFixed(2), Math.max(...samples.map((s) => s.wash)).toFixed(2)];
  r.data.wetBandRange = [Math.min(...samples.map((s) => s.wetBand)).toFixed(2), Math.max(...samples.map((s) => s.wetBand)).toFixed(2)];
  r.checks.wavesIrregular = waveSet.length >= 2 && new Set(waveSet.map((w) => w.join())).size === waveSet.length;
  r.checks.wetSandAppears = Math.max(...samples.map((s) => s.wetBand)) > 0.3;
  r.checks.wetSandDries = Math.min(...samples.slice(6).map((s) => s.wetBand)) < Math.max(...samples.map((s) => s.wetBand)) - 0.08;
  r.checks.drySandStaysDry = Math.max(...samples.map((s) => s.dry)) < 0.01;      // 무대 y≥810(의자·소품 자리)에는 물이 닿지 않음
  // 3) 시험 글씨: 찍힌 뒤 파도에 여러 번에 걸쳐, 물가 쪽(위쪽 절반)부터 지워짐
  const box = await page.evaluate(() => window.__s5.stampTest());
  await page.waitForTimeout(400);
  const read = () => page.evaluate((b) => { const S = window.__s5; return { t: S.simT, sea: S.beach.readMap(b.cx - b.w / 2, b.cy - b.h / 2, b.w, b.h / 2)[1], land: S.beach.readMap(b.cx - b.w / 2, b.cy, b.w, b.h / 2)[1] }; }, box);
  const g0 = await read(); await shot('3-writing-fresh');
  const gs = [g0]; let shotHalf = false;
  for (let i = 0; i < 60; i++) {
    await page.waitForTimeout(250); const g = await read(); gs.push(g);
    if (!shotHalf && g.sea < g0.sea * 0.6) { await shot('4-writing-half-erased'); shotHalf = true; }
    if (g.sea < g0.sea * 0.08 && g.land < g0.land * 0.5) break;
  }
  await shot('5-writing-later');
  const gl = gs[gs.length - 1];
  r.data.writing = { start: g0, end: gl, steps: gs.length, drops: gs.filter((g, i) => i && gs[i - 1].sea - g.sea > 0.002).length };
  r.checks.writingStamped = g0.sea > 0.02 && g0.land > 0.02;
  r.checks.writingErasedByWaves = gl.sea < g0.sea * 0.6;
  r.checks.seaSideErasedFirst = (gl.sea / g0.sea) < (gl.land / g0.land) - 0.05 || gl.land < 0.002;
  r.checks.erasedGradually = r.data.writing.drops >= 4;                          // 한 번에 사라지지 않고 여러 단계에 걸쳐 줄어듦
  // 4) 둘러보기: 카메라를 옮기면 가까운 것이 먼 것보다 화면에서 더 많이 움직임(시차), 하늘·수평선 높이는 그대로
  const pts = () => page.evaluate(() => { const S = window.__s5, T = S.camera.position.constructor; return { near: S.screenOf(S.objects.shells[2].position), mid: S.screenOf(new T(0, 0, -0.8)), far: S.screenOf(new T(0, 0, -60)), size: S.stats().size }; });
  const p0 = await pts();
  await page.click('#btn-look');
  const b = await page.locator('#c').boundingBox();
  await page.mouse.move(b.x + b.width * 0.5, b.y + b.height * 0.6); await page.mouse.down();
  await page.mouse.move(b.x + b.width * 0.5 - Math.min(b.width, b.height) * 0.4, b.y + b.height * 0.6, { steps: 6 }); await page.mouse.up();
  await page.waitForTimeout(3500);
  const p1 = await pts(); await shot('6-look-right');
  const dxs = { near: p1.near[0] - p0.near[0], mid: p1.mid[0] - p0.mid[0], far: p1.far[0] - p0.far[0] };
  r.data.parallaxPx = Object.fromEntries(Object.entries(dxs).map(([k, v]) => [k, Math.round(v)]));
  r.checks.parallax = Math.abs(dxs.near) > Math.abs(dxs.mid) * 1.15 && Math.abs(dxs.mid) > Math.abs(dxs.far) * 1.5 && Math.abs(dxs.near) > 12;
  r.checks.horizonLevel = Math.abs((p1.far[1] - p0.far[1])) < p0.size[1] * 0.03;
  await page.mouse.move(b.x + b.width * 0.5, b.y + b.height * 0.5); await page.mouse.down();
  await page.mouse.move(b.x + b.width * 0.5 + Math.min(b.width, b.height) * 0.8, b.y + b.height * 0.5 - Math.min(b.width, b.height) * 0.4, { steps: 6 }); await page.mouse.up();
  await page.waitForTimeout(3500); await shot('7-look-left-forward');
  r.checks.lookClamped = await page.evaluate(() => { const l = window.__s5.look; return Math.abs(l.tx) <= 1 && Math.abs(l.ty) <= 1; });
  await page.click('#btn-look'); await page.waitForTimeout(3500);
  const p2 = await pts();
  r.checks.lookReturns = Math.abs(p2.near[0] - p0.near[0]) < 3 && Math.abs(p2.near[1] - p0.near[1]) < 3;
  await shot('8-back-to-base');
  // 5) 품질 3단계가 실제로 적용되는가
  r.data.quality = {};
  for (const q of ['mid', 'high']) {
    await page.goto(`http://localhost:${PORT}/?quality=${q}`, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 60000 });
    await page.waitForTimeout(2500);
    const s = await page.evaluate(() => window.__s5.stats()); r.data.quality[q] = { pixelRatio: s.pixelRatio, map: s.map, fpsCap: s.fpsCap, calls: s.calls };
    await shot(`9-quality-${q}`);
  }
  r.checks.qualityLevels = r.data.stats.map[0] < r.data.quality.high.map[0] && r.data.stats.fpsCap < r.data.quality.high.fpsCap && r.data.stats.pixelRatio <= r.data.quality.mid.pixelRatio && r.data.quality.mid.pixelRatio <= r.data.quality.high.pixelRatio;
  r.checks.noConsoleErrors = errors.length === 0;
  results[t.name] = r;
  console.log(t.name, JSON.stringify(r.checks), errors.slice(0, 3));
  await ctx.close();
}
writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2));
await browser.close(); srv.kill();
