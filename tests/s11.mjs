import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const PORT = '4291', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
async function open(opt, q) {
  const c = await b.newContext(opt); const p = await c.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
  await p.goto(`http://localhost:${PORT}/?quality=mid${q}`, { waitUntil: 'load' });
  await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
  await p.waitForTimeout(2000); return { p, c, errs };
}
for (const [n, opt] of [['pc', { viewport: { width: 1280, height: 800 } }], ['iphone', devices['iPhone 13']]]) {
  const { p, c, errs } = await open(opt, '&night=1&timescale=1');
  await p.evaluate(() => { const S = window.__s5; S.setFire(true); S.showBottle(true); S.setCastleLevel(3); S.addCrabFriend(); });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/s11-${n}.jpg`, type: 'jpeg', quality: 85 });
  await p.evaluate(() => window.__s5.act('tteok'));
  await p.waitForFunction(() => window.__s5.motion.time >= 2.0, null, { timeout: 60000, polling: 30 }); await p.evaluate(() => { window.__s5.ctl.paused = true; });
  const [x, y] = await p.evaluate(() => window.__s5.screenOf(window.__s5.objects.seal.group.position).map(Math.round));
  await p.screenshot({ path: `${out}/s11-${n}-tteok.png`, clip: { x: Math.max(0, x - 190), y: Math.max(0, y - 230), width: 380, height: 330 } });
  await p.evaluate(() => { window.__s5.ctl.paused = false; });
  await p.waitForFunction(() => window.__s5.motion.time >= 4.9 || !window.__s5.motion.current, null, { timeout: 60000, polling: 30 }); await p.evaluate(() => { window.__s5.ctl.paused = true; });
  await p.screenshot({ path: `${out}/s11-${n}-eat.png`, clip: { x: Math.max(0, x - 190), y: Math.max(0, y - 230), width: 380, height: 330 } });
  await p.evaluate(() => { window.__s5.ctl.paused = false; });
  // 별똥별
  await p.evaluate(() => { const el = document.getElementById('star-fall'); el.style.left = '60%'; el.style.top = '10%'; el.hidden = false; });
  await p.waitForTimeout(600); await p.screenshot({ path: `${out}/s11-${n}-star.jpg`, type: 'jpeg', quality: 70 });
  await p.click('#star-fall', { force: true }).catch(() => {}); await p.waitForTimeout(300);
  const wish = await p.evaluate(() => !document.getElementById('dlg-wish').hidden);
  await p.evaluate(() => { document.getElementById('dlg-wish').hidden = true; });
  const [bx, by] = await p.evaluate(() => { const S = window.__s5, o = S.objects2.bottle; const v = o.position.clone(); v.y = 0.06; return S.screenOf(v).map(Math.round); });
  await p.mouse.click(bx, by); await p.waitForTimeout(500);
  const bottle = await p.evaluate(() => !document.getElementById('dlg-bottle').hidden);
  await p.screenshot({ path: `${out}/s11-${n}-bottle.jpg`, type: 'jpeg', quality: 70 });
  await p.evaluate(() => { document.getElementById('dlg-bottle').hidden = true; });
  const [cx, cy] = await p.evaluate(() => { const S = window.__s5, o = S.objects.crab; return S.screenOf(o.userData.worldPos(o.position.clone())).map(Math.round); });
  await p.mouse.click(cx, cy); const crabBubble = await p.waitForSelector('.bubble', { timeout: 4000 }).then(() => true).catch(() => false);
  console.log(n, { wish, bottle, crabBubble, rail: await p.evaluate(() => [...document.querySelectorAll('#rail button')].map((b) => b.hidden ? '-' : b.textContent.trim())) }, errs);
  await c.close();
}
await b.close(); srv.kill();
