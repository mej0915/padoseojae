import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium } = createRequire(import.meta.url)('playwright');
const PORT = '4298', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
await p.goto(`http://localhost:${PORT}/?quality=low&night=1`); await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 }); await p.waitForTimeout(2000);
await p.evaluate(() => { const el = document.getElementById('star-fall'); el.style.left = '55%'; el.style.top = '5%'; el.hidden = false; el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; el.getAnimations().forEach((a) => a.pause()); });
for (const t of [600, 2500, 4500]) { await p.evaluate((t) => document.getElementById('star-fall').getAnimations().forEach((a) => { a.currentTime = t; }), t); await p.waitForTimeout(300); await p.screenshot({ path: `${out}/star-${t}.jpg`, clip: { x: 300, y: 0, width: 980, height: 320 }, type: 'jpeg', quality: 70 }); }
await b.close(); srv.kill();
