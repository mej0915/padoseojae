// 시험 글씨가 파도에 "여러 번에 걸쳐" 지워지는지 촘촘히 재는 짧은 시험. 사용: node tests/writing.mjs [출력폴더] [pc|iphone13]  (PORT 환경변수)
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const out = process.argv[2] || 'captures', name = process.argv[3] || 'pc', PORT = process.env.PORT || '4220';
mkdirSync(out, { recursive: true });
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2500));
const ctxOpt = name === 'pc' ? { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 } : { ...devices['iPhone 13'] };
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext(ctxOpt)).newPage();
await page.goto(`http://localhost:${PORT}/?timescale=2&quality=mid`, { waitUntil: 'load' });
await page.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 60000 });
await page.waitForTimeout(1500);
const box = await page.evaluate(() => window.__s5.stampTest());
await page.waitForTimeout(600);
await page.screenshot({ path: `${out}/${name}-w0-fresh.png` });
const read = () => page.evaluate((b) => { const S = window.__s5; return { t: +S.simT.toFixed(1), wave: S.wave.count, sea: S.beach.readMap(b.cx - b.w / 2, b.cy - b.h / 2, b.w, b.h / 2)[1], land: S.beach.readMap(b.cx - b.w / 2, b.cy, b.w, b.h / 2)[1] }; }, box);
const gs = [await read()]; const g0 = gs[0]; let s1 = false, s2 = false;
for (let i = 0; i < 150; i++) {
  await page.waitForTimeout(150); const g = await read(); gs.push(g);
  if (!s1 && g.sea < g0.sea * 0.6) { await page.screenshot({ path: `${out}/${name}-w1-partly.png` }); s1 = true; }
  if (!s2 && g.sea < g0.sea * 0.2) { await page.screenshot({ path: `${out}/${name}-w2-mostly.png` }); s2 = true; }
  if (g.sea < g0.sea * 0.05) break;
}
const gl = gs[gs.length - 1];
const wavesWithDrop = new Set(gs.filter((g, i) => i && gs[i - 1].sea - g.sea > 0.003).map((g) => g.wave)).size;
const half = gs.find((g) => g.sea < g0.sea * 0.5);
const r = { start: g0, end: gl, samples: gs.length, wavesThatErased: wavesWithDrop, secondsToHalf: half ? +(half.t - g0.t).toFixed(1) : null, secondsTotal: +(gl.t - g0.t).toFixed(1),
  checks: { erasedByWaves: gl.sea < g0.sea * 0.5, overSeveralWaves: wavesWithDrop >= 2, seaSideFirst: gl.sea / g0.sea < gl.land / g0.land } };
writeFileSync(`${out}/${name}-writing.json`, JSON.stringify(r, null, 2)); console.log(name, JSON.stringify(r));
await browser.close(); srv.kill();
