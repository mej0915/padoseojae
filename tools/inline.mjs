// dist/ → 한 파일짜리 artifact.html (JS·CSS·그림·소리를 모두 안에 넣음). 사용: node tools/inline.mjs dist artifact.html
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const dist = process.argv[2] || 'dist', out = process.argv[3] || 'artifact.html';
let html = readFileSync(join(dist, 'index.html'), 'utf8');
const assets = {};
const MIME = { webp: 'image/webp', ogg: 'audio/ogg', m4a: 'audio/mp4' };
for (const dir of ['bg', 'audio']) for (const f of readdirSync(join(dist, dir))) { const ext = f.split('.').pop(); if (MIME[ext]) assets[`${dir}/${f}`] = `data:${MIME[ext]};base64,` + readFileSync(join(dist, dir, f)).toString('base64'); }
html = html.replace(/<link rel="stylesheet"[^>]*href="\.\/(assets\/[^"]+\.css)"[^>]*>/g, (_, p) => `<style>${readFileSync(join(dist, p), 'utf8')}</style>`);
let js = '';
html = html.replace(/<script type="module"[^>]*src="\.\/(assets\/[^"]+\.js)"[^>]*><\/script>/g, (_, p) => { js = readFileSync(join(dist, p), 'utf8'); return ''; });
const tag = `<script>window.__ASSETS=${JSON.stringify(assets)};</script>\n<script type="module">${js.replace(/<\/script/g, '<\\/script')}</script>`;
html = html.replace('</body>', () => tag + '\n</body>');
writeFileSync(out, html);
console.log(out, (html.length / 1024 / 1024).toFixed(2) + ' MB', Object.keys(assets).length + ' assets');
