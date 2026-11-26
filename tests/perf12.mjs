import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium } = createRequire(import.meta.url)('playwright');
const PORT = '4292';
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const fps = (p) => p.evaluate(() => new Promise((res) => { const t = []; let l = performance.now(); const f = (n) => { t.push(n - l); l = n; if (t.length < 90) requestAnimationFrame(f); else { t.sort((a, b) => a - b); res({ med: t[45].toFixed(1), p95: t[85].toFixed(1), max: t[89].toFixed(0) }); } }; requestAnimationFrame(f); }));
for (const q of ['', '&night=1']) {
  const c = await b.newContext({ viewport: { width: 1280, height: 800 } }); const p = await c.newPage();
  await p.goto(`http://localhost:${PORT}/?quality=mid${q}`); await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 }); await p.waitForTimeout(3000);
  console.log(q || 'day', 'idle', await fps(p));
  if (q) { await p.evaluate(() => window.__s5.setFire(true)); await p.waitForTimeout(1500); console.log('fire', await fps(p)); }
  await p.evaluate(() => { window.__lt = []; new PerformanceObserver((l) => l.getEntries().forEach((e) => window.__lt.push(Math.round(e.duration)))).observe({ entryTypes: ['longtask'] }); });
  for (let i = 0; i < 4; i++) {
    const [x, y] = await p.evaluate(() => { const S = window.__s5; const v = S.objects.crab.userData.worldPos(new (S.objects.crab.position.constructor)()); return S.screenOf(v).map(Math.round); });
    const t0 = Date.now(); await p.mouse.click(x, y);
    const ok = await p.waitForSelector('.bubble', { timeout: 3000 }).then(() => true).catch(() => false);
    console.log(' crab click', i, ok, Date.now() - t0, 'ms'); await p.waitForTimeout(400);
  }
  console.log(' longtasks', await p.evaluate(() => window.__lt));
  await c.close();
}
await b.close(); srv.kill();
