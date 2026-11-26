import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const PORT = '4296', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
for (const [n, d] of [['iph', devices['iPhone 13 landscape']], ['gal', devices['Galaxy S9+ landscape']]]) {
  const c = await b.newContext({ ...d, deviceScaleFactor: 1 }); const p = await c.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
  await p.goto(`http://localhost:${PORT}/?quality=mid`);
  const ok = await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 }).then(() => true).catch(() => false);
  await p.waitForTimeout(2500); await p.screenshot({ path: `${out}/land-${n}.jpg`, type: 'jpeg', quality: 75 });
  await p.evaluate(() => { window.__s5.setNight(1); }); await p.waitForTimeout(1500); await p.screenshot({ path: `${out}/land-${n}-night.jpg`, type: 'jpeg', quality: 75 });
  for (const id of ['rail-motion', 'rail-dress', 'btn-timer']) { await p.click('#' + id).catch((e) => console.log('noclick', id, String(e).slice(0, 80))); await p.waitForTimeout(700); await p.screenshot({ path: `${out}/land-${n}-${id}.jpg`, type: 'jpeg', quality: 75 }); await p.keyboard.press('Escape'); await p.mouse.click(300, 200); await p.waitForTimeout(400); }
  console.log(n, d.viewport, ok, errs, await p.evaluate(() => window.__s5?.stats()));
  await c.close();
}
await b.close(); srv.kill();
