// 불규칙한 파도 박자 (S5). S4의 "7초 고정 사인파"를 대신한다.
// 파도 하나 = { t0 시작 시각, d 길이(초), s 세기(0~1), seed 해안선 모양 }. 다음 파도는 앞 파도가 빠지는 도중에 시작해 겹친다.
// 화면(셰이더)·모래 상태 지도·(나중에) 소리가 모두 이 값 하나를 쓴다.
export function createWaves(seed = 20261115) {
  let st = seed >>> 0;
  const rnd = () => ((st = (Math.imul(st, 1664525) + 1013904223) >>> 0) / 4294967296);
  const mk = (t0) => ({ t0, d: 6.5 + rnd() * 3.0, s: 0.42 + 0.58 * Math.pow(rnd(), 0.8), seed: 1 + rnd() * 40 });
  let A = mk(0.5), B = mk(A.t0 + A.d * (0.75 + rnd() * 0.2));
  const shape = (p) => { p = Math.min(1, Math.max(0, p)); return Math.pow(Math.sin(Math.PI * Math.pow(p, 0.7)), 1.3); };
  let count = 0;
  return {
    /** t(초) 시점의 두 파도 값. a·b = [진행 p, 세기, seed] (셰이더 uniform으로 그대로 넣는다) */
    at(t) {
      while ((t - A.t0) / A.d > 1.12) { A = B; B = mk(A.t0 + A.d * (0.75 + rnd() * 0.2)); count++; }
      const pa = (t - A.t0) / A.d, pb = (t - B.t0) / B.d;
      return { a: [pa, A.s, A.seed], b: [pb, B.s, B.seed], wash: Math.max(A.s * shape(pa), B.s * shape(pb)), count, period: A.d, strength: A.s };
    },
  };
}

/** 셰이더 공통: 물 앞머리(포말선)의 무대 y. JS의 shape()와 같은 식이어야 한다. */
export const FRONT_GLSL = /* glsl */`
uniform vec3 uWA, uWB; uniform float uTime;
float wshape(float p){ p = clamp(p, 0.0, 1.0); return pow(sin(3.14159265 * pow(p, 0.7)), 1.3); }
float wreach(vec3 w, float x, float lag){
  float n = vnoise(vec3(x * 0.0045, w.z, 2.0)) - 0.5;          // 해안선을 따라 도착 시간·높이가 조금씩 다름
  return w.y * wshape(w.x - lag - n * 0.14) * (50.0 + 44.0 * n);
}
float restLine(float x){ return 690.0 + (vnoise(vec3(x * 0.006, 1.0, 0.0)) - 0.5) * 24.0 + sin(x * 0.013 + uTime * 0.4) * 4.0; }
float frontY(float x, float lag){ return restLine(x) + max(wreach(uWA, x, lag), wreach(uWB, x, lag)); }   // 최대 약 778 (마른 모래 기준선 800 미만)
`;
