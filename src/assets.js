// 한 파일짜리 artifact.html에서는 그림·소리가 window.__ASSETS(data URL)에 들어 있다. 일반 실행에서는 ./public 파일을 쓴다.
export const asset = (p) => (typeof window !== 'undefined' && window.__ASSETS && window.__ASSETS[p]) || './' + p;
