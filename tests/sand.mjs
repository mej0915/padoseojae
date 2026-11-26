// 모래글씨: 손글씨(마우스/터치) → 모래에 새겨짐, 새로고침 후 복원 확인. node tests/sand.mjs <outdir> <device> [dist]
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const out = process.argv[2] || 'captures', which = process.argv[3] || 'pc', dist = process.argv[4] || 'dist'; mkdirSync(out, { recursive: true });
const PORT = process.env.PORT || '4260';
const srv = spawn('npx', ['vite', 'preview', '--outDir', dist, '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const D = { pc: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 }, iphone: { ...devices['iPhone 13'] }, android: { ...devices['Pixel 7'] } };
const ctx = await browser.newContext(D[which]); const page = await ctx.newPage();
const errors = []; page.on('pageerror', (e) => errors.push(String(e))); page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
const ready = async () => { await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 }); await page.waitForTimeout(1500); };
await page.goto(`http://localhost:${PORT}/?quality=mid`, { waitUntil: 'load' }); await ready();
await page.click('#act-sand'); await page.waitForTimeout(300);
const box = await page.locator('#pad').boundingBox();
// "바다" 비슷한 획 몇 개 + 하트
const strokes = [[[0.08, 0.25], [0.08, 0.75], [0.2, 0.75], [0.2, 0.25]], [[0.08, 0.5], [0.2, 0.5]], [[0.27, 0.2], [0.27, 0.8]], [[0.27, 0.5], [0.34, 0.5]],
  [[0.42, 0.25], [0.55, 0.25], [0.42, 0.75], [0.56, 0.75]], [[0.62, 0.2], [0.62, 0.8]], [[0.62, 0.5], [0.69, 0.5]],
  [[0.83, 0.72], [0.76, 0.5], [0.77, 0.32], [0.83, 0.38], [0.89, 0.32], [0.9, 0.5], [0.83, 0.72]]];
for (const s of strokes) {
  await page.mouse.move(box.x + s[0][0] * box.width, box.y + s[0][1] * box.height); await page.mouse.down();
  for (let i = 1; i < s.length; i++) { const [a, b] = s[i - 1], [c, d] = s[i]; for (let k = 1; k <= 6; k++) await page.mouse.move(box.x + (a + (c - a) * k / 6) * box.width, box.y + (b + (d - b) * k / 6) * box.height); }
  await page.mouse.up();
}
await page.screenshot({ path: `${out}/${which}-sand-1-pad.png` });
await page.click('#sand-ok');
await page.waitForFunction(() => window.__s5.motion.time > 1.6, null, { timeout: 30000, polling: 30 });
await page.screenshot({ path: `${out}/${which}-sand-2-writing.png` });
await page.waitForFunction(() => window.__s5.sandWriting && window.__s5.sandWriting.p >= 1 && !window.__s5.motion.current, null, { timeout: 60000 });
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}/${which}-sand-3-done.png` });
await page.reload(); await ready(); await page.waitForTimeout(1000);
const restored = await page.evaluate(() => !!window.__s5.sandWriting && window.__s5.sandWriting.p >= 1);
await page.screenshot({ path: `${out}/${which}-sand-4-reload.png` });
console.log(JSON.stringify({ restored, errors: errors.slice(0, 5) }));
await browser.close(); srv.kill();
