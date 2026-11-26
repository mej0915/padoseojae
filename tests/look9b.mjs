import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
const { chromium, devices } = createRequire(import.meta.url)('playwright');
const PORT = '4288', out = process.argv[2];
const srv = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const fake = `window.YT={PlayerState:{PLAYING:1,BUFFERING:3,ENDED:0,PAUSED:2},Player:function(el,o){const f=document.createElement('div');f.style.cssText='width:200px;height:200px;background:#333;color:#fff';f.textContent='YT '+o.videoId+' / '+o.playerVars.playlist;el.replaceWith(f);window.__yt=o;this.playVideo=()=>o.events.onStateChange({data:1});this.pauseVideo=()=>o.events.onStateChange({data:2});this.nextVideo=()=>{window.__next=(window.__next||0)+1};this.previousVideo=()=>{};this.getVideoData=()=>({title:'Test song'});this.setVolume=()=>{};this.seekTo=()=>{};this.getCurrentTime=()=>0;this.getDuration=()=>100;setTimeout(()=>o.events.onReady(),50);}};setTimeout(()=>window.onYouTubeIframeAPIReady(),10);`;
for (const [n, opt] of [['iphone', devices['iPhone 13']], ['pc', { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 }]]) {
  const c = await b.newContext(opt); await c.route('https://www.youtube.com/iframe_api', (r) => r.fulfill({ contentType: 'text/javascript', body: fake }));
  const p = await c.newPage(); const errs = []; p.on('pageerror', (e) => { errs.push(String(e)); console.log('ERR', String(e)); });
  await p.goto(`http://localhost:${PORT}/?quality=mid`, { waitUntil: 'load' });
  await p.waitForFunction(() => window.__s5 && window.__s5.stats().firstFrameMs !== null, null, { timeout: 90000 });
  await p.waitForTimeout(3000);
  await p.evaluate(() => { document.getElementById('act-headset').click(); window.__s5.toggleItem('blanket'); });
  await p.waitForTimeout(2500);
  // 겹침 확인: 일시정지 단추 가운데가 실제로 눌리는 요소인지
  const hit = await p.evaluate(() => { const r = (id) => document.getElementById(id).getBoundingClientRect(); const ok = ['np-prev', 'np-play', 'np-next', 'np-wave', 'btn-timer'].map((id) => { const b = r(id); const el = document.elementFromPoint(b.x + b.width / 2, b.y + b.height / 2); return [id, !!el && (el.id === id || el.closest('#' + id) !== null), el ? (el.id || el.className || el.tagName) : null]; }); const y = r('yt-box'), np = r('np'); const pb = r('np-play'); window.__dbg = [pb.x, pb.y, pb.width, innerWidth, document.elementsFromPoint(pb.x + pb.width / 2, pb.y + pb.height / 2).map((e) => e.id || e.className || e.tagName).join(',')]; return { ok, ytOverlapsNp: !(y.right < np.left || y.bottom < np.top || y.top > np.bottom), src: window.__ui.music.source, dbg: window.__dbg, vars: window.__yt?.videoId + '|' + window.__yt?.playerVars.playlist }; });
  await p.click('#np-next'); const nx = await p.evaluate(() => window.__next || 0);
  console.log(n, JSON.stringify(hit), 'next', nx, errs);
  await p.screenshot({ path: `${out}/s9b-${n}.jpg`, type: 'jpeg', quality: 82 });
  if (n === 'pc') { const [x, y] = await p.evaluate(() => window.__s5.screenOf(window.__s5.objects.seal.group.position).map(Math.round)); await p.screenshot({ path: `${out}/s9b-seal.png`, clip: { x: x - 170, y: y - 250, width: 360, height: 300 } }); }
  await c.close();
}
await b.close(); srv.kill();
