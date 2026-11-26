import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium } = createRequire(import.meta.url)('playwright');
const [dir, PORT] = [process.argv[2], process.argv[3]];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore', cwd: dir });
await new Promise((r) => setTimeout(r, 2500));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
for (const q of ['', '&night=1']) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await p.goto(`http://localhost:${PORT}/?quality=mid${q}`); await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 }); await p.waitForTimeout(4000);
  if (q) await p.evaluate(() => window.__s5.setFire?.(true)); await p.waitForTimeout(1500);
  const s = await p.evaluate(() => window.__s5.stats()); console.log(dir.slice(-4), q || 'day', 'calls', s.calls, 'tris', s.triangles, 'workMs', s.workMs?.toFixed?.(0));
}
await b.close(); srv.kill();
