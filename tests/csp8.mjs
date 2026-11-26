// 공개 페이지처럼 fetch를 막은(connect-src 'none') 상태에서 한 파일 실행본의 소리가 불러와지는지
import { createRequire } from 'node:module';
import http from 'node:http';
import { readFileSync } from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');
const html = readFileSync(process.argv[2] || 'artifact.html');
const srv = http.createServer((q, r) => { r.writeHead(200, { 'content-type': 'text/html', 'content-security-policy': "connect-src 'none'" }); r.end(html); }).listen(4299);
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 900, height: 600 } });
const logs = []; p.on('console', (m) => logs.push(m.type() + ': ' + m.text()));
await p.goto('http://localhost:4299/?quality=low', { waitUntil: 'load' });
await p.waitForFunction(() => window.__ui, null, { timeout: 90000 });
await p.evaluate(() => window.__ui.audio.unlock());
console.log(JSON.stringify(await p.evaluate(() => window.__ui.audio.diag())), logs.filter((l) => /audio|CSP|Refused/i.test(l)).slice(0, 5));
await b.close(); srv.close();
