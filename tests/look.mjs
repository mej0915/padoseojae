// 둘러보기 화면만 빠르게 캡처 (보통 품질). 사용: node tests/look.mjs [출력폴더]
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');
const out = process.argv[2] || 'captures'; mkdirSync(out, { recursive: true });
const srv = spawn('npx', ['vite', 'preview', '--port', '4230', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2500));
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })).newPage();
const errors = []; page.on('pageerror', (e) => errors.push(String(e))); page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto('http://localhost:4230/?quality=mid', { waitUntil: 'load' });
await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 60000 });
await page.evaluate(() => { const S = window.__s5; S.stampTest(); S.setLook(true); S.look.tx = 1; S.look.ty = 0.6; });
await page.waitForTimeout(5000); await page.screenshot({ path: `${out}/pc-look-right-back.png` });
await page.evaluate(() => { const S = window.__s5; S.look.tx = -1; S.look.ty = -1; });
await page.waitForTimeout(5000); await page.screenshot({ path: `${out}/pc-look-left-forward.png` });
console.log('errors', errors);
await browser.close(); srv.kill();
