// 동작별 대표 장면 캡처 (물범 주변 확대): node tests/motions.mjs <outdir> [device]
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const out = process.argv[2] || 'captures/motions', which = process.argv[3] || 'pc'; mkdirSync(out, { recursive: true });
const PORT = process.env.PORT || '4250';
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const D = { pc: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 }, iphone: { ...devices['iPhone 13'] }, android: { ...devices['Pixel 7'] } };
const page = await (await browser.newContext(D[which])).newPage();
const errors = []; page.on('pageerror', (e) => errors.push(String(e))); page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto(`http://localhost:${PORT}/?quality=mid`, { waitUntil: 'load' });
await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
await page.waitForTimeout(2500);
const list = (process.env.LIST || 'page:0.9,coffee:1.7,sea:3.0,stretch:1.7,doze:3.4,doze:4.3,clap:1.0,hello:1.2,write:1.4').split(',').map((x) => x.split(':'));
const clip = await page.evaluate(() => { const S = window.__s5, T = S.camera.position.constructor; const [x, y] = S.screenOf(new T(0.05, 0.45, -0.7)); const s = S.stats().size; return { x: Math.max(0, x - s[1] * 0.28), y: Math.max(0, y - s[1] * 0.26), width: s[1] * 0.56, height: s[1] * 0.44 }; });
for (const [name, at] of list) {
  await page.evaluate((n) => window.__s5.act(n), name);
  await page.waitForFunction((a) => window.__s5.motion.time >= +a || !window.__s5.motion.current, at, { timeout: 30000, polling: 30 });
  await page.screenshot({ path: `${out}/${which}-${name}-${at}.png`, clip: which === 'pc' ? clip : undefined });
  await page.waitForFunction(() => !window.__s5.motion.current, null, { timeout: 40000 });
}
console.log('errors', errors.slice(0, 5));
await browser.close(); srv.kill();
