import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium } = createRequire(import.meta.url)('playwright');
const PORT = '5199', out = process.argv[2];
const srv = spawn('npx', ['vite', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 3500));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
for (const [n, q, vp] of [['f3', 'f=3', [1280, 800]], ['p3', 'f=3', [430, 760]], ['eve', 'f=3&t=eve', [1280, 800]]]) {
  const p = await (await b.newContext({ viewport: { width: vp[0], height: vp[1] }, deviceScaleFactor: 1 })).newPage(); p.on('pageerror', (e) => console.log('ERR', String(e)));
  await p.goto(`http://localhost:${PORT}/work.html?${q}`); await p.waitForFunction(() => window.__work, null, { timeout: 60000 }); await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/work-${n}.jpg`, type: 'jpeg', quality: 85 }); await p.close();
}
await b.close(); srv.kill();
