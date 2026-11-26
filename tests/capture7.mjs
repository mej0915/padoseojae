// S7 최종 캡처·검증: node tests/capture7.mjs <outdir> <pc|iphone|android> [dist]
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const out = process.argv[2] || 'captures', which = process.argv[3] || 'pc', dist = process.argv[4] || 'dist'; mkdirSync(out, { recursive: true });
const PORT = process.env.PORT || '4270';
const srv = spawn('npx', ['vite', 'preview', '--outDir', dist, '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const D = { pc: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 }, iphone: { ...devices['iPhone 13'] }, android: { ...devices['Pixel 7'] } };
const ctx = await browser.newContext(D[which]); const page = await ctx.newPage();
const errors = []; page.on('pageerror', (e) => errors.push(String(e))); page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
const R = { device: which, checks: {}, data: {} };
const shot = (n) => page.screenshot({ path: `${out}/${which}-${n}.jpg`, type: 'jpeg', quality: 88 });
const tap = async (x, y) => { if (which === 'pc') await page.mouse.click(x, y); else await page.touchscreen.tap(x, y); };
const waitMotion = async (at) => { await page.waitForFunction((a) => window.__s5.motion.time >= a || !window.__s5.motion.current, at, { timeout: 60000, polling: 20 }); await page.evaluate(() => { window.__s5.ctl.paused = true; }); };
const resume = () => page.evaluate(() => { window.__s5.ctl.paused = false; });
const motionEnd = async () => { await resume(); return page.waitForFunction(() => !window.__s5.motion.current, null, { timeout: 90000 }); };
await page.goto(`http://localhost:${PORT}/?quality=mid&timescale=${process.env.TS || 2}`, { waitUntil: 'load' });
await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
await page.waitForTimeout(2500);
await shot('0-seat');
// 조개: 화면 안, 서로 55px 이상, 오른쪽 메뉴·윗줄 버튼과 겹치지 않음
const geo = await page.evaluate(() => {
  const S = window.__s5, r = (el) => el.getBoundingClientRect(), rail = r(document.getElementById('rail')), bar = r(document.querySelector('.bar'));
  const sh = S.objects.shells.map((s) => S.screenOf(s.position).map(Math.round));
  return { shells: sh, size: S.stats().size, rail: [rail.left, rail.top, rail.right, rail.bottom].map(Math.round), barBottom: Math.round(bar.bottom), seal: S.screenOf(S.objects.seal.group.position).map(Math.round) };
});
R.data.geo = geo;
let minD = 1e9; for (let i = 0; i < geo.shells.length; i++) for (let j = i + 1; j < geo.shells.length; j++) minD = Math.min(minD, Math.hypot(geo.shells[i][0] - geo.shells[j][0], geo.shells[i][1] - geo.shells[j][1]));
R.data.minShellGap = Math.round(minD);
R.checks.shellsApart55 = minD >= 55;
R.checks.shellsOnScreen = geo.shells.every(([x, y]) => x > 20 && x < geo.size[0] - 20 && y > geo.barBottom + 20 && y < geo.size[1] - 10);
R.checks.shellsClearOfRail = geo.shells.every(([x, y]) => !(x > geo.rail[0] - 24 && y > geo.rail[1] - 24 && y < geo.rail[3] + 24));
// 조개 4개 모두 눌러서 쪽지 창이 열리는지 (내 자리 시점 그대로)
const opened = [];
for (let i = 0; i < geo.shells.length; i++) {
  const [x, y] = geo.shells[i]; await tap(x, y - 4);
  const ok = await page.waitForFunction(() => !document.getElementById('dlg-shell').hidden, null, { timeout: 8000 }).then(() => true, () => false);
  opened.push(ok);
  if (i === 0 && ok) { await page.fill('#shell-title', '바다의 뚜껑'); await page.fill('#shell-text', '파도 소리 들으면서 읽으니까 문장이 천천히 들어온다'); await shot('4-shell-note'); await page.click('#shell-ok'); }
  else if (ok) await page.click('#shell-cancel');
  await page.waitForTimeout(300);
}
R.data.shellTap = opened; R.checks.allShellsTappableFromSeat = opened.every(Boolean);
R.checks.viewStayedSeat = await page.evaluate(() => window.__s5.view === 'seat');
// 동작 메뉴
await page.click('#rail-motion'); await page.waitForTimeout(400); await shot('1-motion-menu');
await page.click('[data-motion="stretch"]'); await waitMotion(1.6); await shot('2-motion-stretch'); await motionEnd();
await page.click('#rail-motion'); await page.click('[data-motion="clap"]'); await waitMotion(0.98); await shot('2-motion-clap'); await motionEnd();
await page.click('#rail-motion'); await page.click('[data-motion="coffee"]'); await waitMotion(1.7); await shot('2-motion-coffee'); await motionEnd();
// 꾸미기
await page.click('#rail-dress'); await page.click('#act-glasses'); await page.click('#act-blanket'); await page.waitForTimeout(500); await shot('3-dress-menu');
await page.click('#act-cap'); await page.waitForTimeout(200); await page.click('#act-cap');
await page.click('#act-mirror'); await page.waitForTimeout(1500); await shot('3-mirror'); await page.click('#mirror-close');
// 모래글씨 (글자로 쓰기)
await page.click('#act-sand'); await page.click('#tab-type'); await page.fill('#sand-text', '오늘도 한 장'); await page.waitForTimeout(600); await page.click('#sand-ok');
await waitMotion(1.5); await shot('5-sand-writing'); await resume();
await page.waitForFunction(() => window.__s5.sandWriting && window.__s5.sandWriting.p >= 1 && !window.__s5.motion.current, null, { timeout: 60000 });
await page.waitForTimeout(400); await shot('5-sand-done');
R.checks.sandWritingVisible = await page.evaluate(() => { const S = window.__s5, b = S.sandWriting.box, [x, y] = S.screenOf(S.groundFromStage(b.cx, b.cy)), s = S.stats().size; return x > 0 && x < s[0] && y > 0 && y < s[1]; });
// 타이머 끝
await page.click('#btn-timer'); await page.click('[data-min="10"]'); await page.waitForTimeout(800);
R.checks.timerRunning = await page.evaluate(() => /\d+:\d\d/.test(document.getElementById('timer-text').textContent));
await shot('6-timer-running');
await page.evaluate(() => window.__timer.finish());
R.checks.timerDoneToast = await page.waitForFunction(() => !document.getElementById('toast').hidden && /독서 완료/.test(document.getElementById('toast').textContent), null, { timeout: 8000 }).then(() => true, () => false);
await waitMotion(1.4); await page.evaluate(() => { document.getElementById('toast').hidden = false; }); await shot('6-timer-done');
await motionEnd();
// 하늘에서 보기
await page.click('#btn-view'); await page.waitForTimeout(4000); await shot('7-bird');
await page.click('#btn-home'); await page.waitForTimeout(3000);
R.errors = errors; R.checks.noConsoleErrors = errors.length === 0;
writeFileSync(`${out}/${which}-results.json`, JSON.stringify(R, null, 1));
console.log(JSON.stringify({ checks: R.checks, minGap: R.data.minShellGap, errors: errors.slice(0, 4) }));
await browser.close(); srv.kill();
