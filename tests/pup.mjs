import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const PORT = '4285', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
for (const [n, opt] of [['pc', { viewport: { width: 1280, height: 800 } }], ['iphone', devices['iPhone 13']]]) {
  const p = await (await b.newContext(opt)).newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
  await p.goto(`http://localhost:${PORT}/?quality=mid`, { waitUntil: 'load' });
  await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/pup-${n}.jpg`, type: 'jpeg', quality: 85 });
  const [x, y] = await p.evaluate(() => { const S = window.__s5, v = S.objects.puppy.position.clone(); v.y = 0.3; return S.screenOf(v).map(Math.round); });
  await p.screenshot({ path: `${out}/pup-${n}-zoom.png`, clip: { x: Math.max(0, x - 150), y: Math.max(0, y - 170), width: 300, height: 260 } });
  console.log(n, x, y, errs);
}
await b.close(); srv.kill();
