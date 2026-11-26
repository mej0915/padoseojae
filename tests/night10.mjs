import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const PORT = '4289', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
async function open(opt, q) {
  const c = await b.newContext(opt); const p = await c.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
  await p.goto(`http://localhost:${PORT}/?quality=mid${q}`, { waitUntil: 'load' });
  await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
  await p.waitForTimeout(2500); return { p, c, errs };
}
const PC = { viewport: { width: 1280, height: 800 } };
{ const { p, c, errs } = await open(PC, "&night=0.2"); await p.screenshot({ path: `${out}/n-sink2.png`, clip: { x: 700, y: 150, width: 260, height: 140 } }); await p.screenshot({ path: `${out}/n-sink.jpg`, type: 'jpeg', quality: 85 }); console.log('sink', errs); await c.close(); }
{ const { p, c, errs } = await open(PC, '&night=1'); await p.waitForTimeout(1500); await p.screenshot({ path: `${out}/n-night.jpg`, type: 'jpeg', quality: 85 });
  const [x, y] = await p.evaluate(() => window.__s5.screenOf(window.__s5.objects.seal.group.position).map(Math.round));
  await p.screenshot({ path: `${out}/n-seal.png`, clip: { x: x - 200, y: y - 240, width: 400, height: 300 } });
  const mir = await p.evaluate(() => { const c = document.createElement('canvas'); c.width = c.height = 256; window.__s5.renderMirror(c.getContext('2d')); return c.toDataURL(); });
  console.log('night', errs); await c.close();
  const c2 = await b.newContext(PC); const p2 = await c2.newPage(); await p2.setContent(`<body style="margin:0;background:#000"><img src="${mir}"></body>`); await p2.screenshot({ path: `${out}/n-mirror.png`, clip: { x: 0, y: 0, width: 256, height: 256 } }); await c2.close(); }
{ const { p, c, errs } = await open(devices['iPhone 13'], '&night=1'); await p.waitForTimeout(1500); await p.screenshot({ path: `${out}/n-iphone.jpg`, type: 'jpeg', quality: 80 }); console.log('iphone', errs); await c.close(); }
{ const { p, c, errs } = await open(PC, '');
  for (const k of ['bear', 'bunny']) { await p.evaluate((k) => window.__s5.setKind(k), k); await p.waitForTimeout(800);
    const [x, y] = await p.evaluate(() => window.__s5.screenOf(window.__s5.objects.seal.group.position).map(Math.round));
    await p.screenshot({ path: `${out}/n-${k}.png`, clip: { x: x - 160, y: y - 260, width: 320, height: 300 } }); }
  // 꽃게 누르기
  const [cx, cy] = await p.evaluate(() => { const S = window.__s5, v = S.objects.crab.userData.worldPos(new (S.objects.seal.group.position.constructor)()); return S.screenOf(v).map(Math.round); });
  await p.evaluate(() => { window.__s5.ctl.paused = true; });
  await p.mouse.click(cx, cy); await p.waitForTimeout(250);
  const bub = await p.evaluate(() => document.querySelector('.bubble')?.textContent || null);
  await p.screenshot({ path: `${out}/n-crab.png`, clip: { x: Math.max(0, cx - 150), y: Math.max(0, cy - 150), width: 300, height: 220 } });
  console.log('crab', cx, cy, bub, errs); await c.close(); }
await b.close(); srv.kill();
