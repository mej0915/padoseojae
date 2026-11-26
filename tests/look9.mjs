import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const PORT = '4287', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 })).newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto(`http://localhost:${PORT}/?quality=mid&timescale=2`, { waitUntil: 'load' });
await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
await p.waitForTimeout(2500);
await p.evaluate(() => window.__s5.toggleItem('blanket'));
await p.waitForTimeout(600);
const [x, y] = await p.evaluate(() => window.__s5.screenOf(window.__s5.objects.seal.group.position).map(Math.round));
await p.screenshot({ path: `${out}/s9-seal.png`, clip: { x: x - 170, y: y - 250, width: 360, height: 300 } });
// 거울 (앞모습)
const mir = await p.evaluate(() => { const c = document.createElement('canvas'); c.width = c.height = 256; window.__s5.renderMirror(c.getContext('2d')); return c.toDataURL(); });
await p.setContent(`<img src="${mir}">`).catch(() => {});
await p.screenshot({ path: `${out}/s9-mirror.png`, clip: { x: 0, y: 0, width: 270, height: 270 } });
// 처음부터 다시: 조개 누르고 달리는 중
await p.goto(`http://localhost:${PORT}/?quality=mid&timescale=1`, { waitUntil: 'load' });
await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
await p.waitForTimeout(2500);
const sh = await p.evaluate(() => window.__s5.objects.shells.map((s) => window.__s5.screenOf(s.position).map(Math.round)));
await p.mouse.click(sh[0][0], sh[0][1] - 4);
for (const [i, ms] of [[1, 150], [2, 300]]) { await p.waitForTimeout(ms); await p.screenshot({ path: `${out}/s9-run${i}.jpg`, type: 'jpeg', quality: 80, scale: 'css' }); }
const pz = await p.evaluate(() => { const S = window.__s5, v = S.objects.puppy.position; return [v.x, v.z]; });
console.log(JSON.stringify({ shells: sh, puppyAt: pz }), errs);
await b.close(); srv.kill();
