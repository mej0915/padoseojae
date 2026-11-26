// S9 헤드셋 음악 = 은정님이 고른 유튜브 영상(또는 플레이리스트). 깃허브 페이지처럼 직접 올린 웹페이지에서만 동작한다.
//  - claude.ai 공개 페이지처럼 유튜브를 막는 곳이거나 인터넷이 안 되면, 원래 들어 있던 잔잔한 음악으로 자동으로 돌아간다.
//  - 유튜브 규칙상 플레이어는 화면에 보여야 하므로(200×200 이상) 헤드셋을 쓰는 동안 왼쪽 위에 창으로 보여 준다. 접으면 음악도 멈춘다.
//  - 주소 뒤에 ?yt=영상ID 또는 ?ytlist=플레이리스트ID 를 붙이면 다른 곡으로 바꿀 수 있다.
// 순서대로 재생, 끝나면 처음부터. 앞 두 곡은 은정님이 고른 곡, 나머지는 가사 없는 잔잔한 곡을 장르별로 골라 넣음
// (제목에 '광고 없음'이라고 적힌 영상 위주. 실제 광고 여부는 유튜브와 채널이 정하므로 보장할 수 없음)
export const YT_DEFAULT = { videos: [
  'BxFbF8oGlic', 'fS-glIMAoUM',
  'nPk1bo_9CfM',   // 스무스 재즈 (No Ads)
  'gSpQUDDPUpw',   // 카페 보사노바, 부드러운 기타
  '21yPAtV20cw',   // 클래식 피아노를 로파이로
  'f4S3Hn5wHsE',   // 잔잔한 재즈 (No Ads)
  '5852pGvlogw',   // 로파이 카페 음악 (No Mid-Roll Ads)
  'nREb6TRDqwo',   // 밤에 듣는 잔잔한 재즈 (No Ads)
], list: '' };

export function createYTMusic(fallback, box) {
  const q = new URLSearchParams(location.search);
  const videos = q.get('yt') ? q.get('yt').split(',') : YT_DEFAULT.videos, video = videos[0], list = q.get('ytlist') || YT_DEFAULT.list;
  let errs = 0, player = null, ready = false, failed = false, playing = false, title = '유튜브 음악', wantPlay = false;
  const listeners = new Set();
  const emit = () => listeners.forEach((f) => f({ playing: api.playing, title: api.title, source: useYT() ? 'youtube' : 'built-in' }));
  const useYT = () => ready && !failed;
  fallback.onChange(() => { if (!useYT()) emit(); });

  function load() {
    if (!box || q.get('yt') === 'off') { failed = true; return; }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      const vars = { autoplay: 0, controls: 1, playsinline: 1, rel: 0, modestbranding: 1, loop: 1 };
      if (list) Object.assign(vars, { listType: 'playlist', list }); else vars.playlist = videos.join(',');   // 영상 목록(하나면 자기 자신)을 반복
      player = new window.YT.Player(box.querySelector('.yt-frame'), {
        width: 200, height: 200, videoId: list ? undefined : video, playerVars: vars,
        events: {
          onReady: () => { ready = true; try { player.setVolume(70); } catch { /* */ } emit(); if (wantPlay) api.start(); },
          onStateChange: (e) => {
            const YT = window.YT.PlayerState; playing = e.data === YT.PLAYING || e.data === YT.BUFFERING; if (e.data === YT.PLAYING) errs = 0;
            try { const t = player.getVideoData()?.title; if (t) title = t; } catch { /* */ }
            if (e.data === YT.ENDED && videos.length === 1 && !list) { player.seekTo(0); player.playVideo(); }
            emit();
          },
          onError: () => {   // 퍼가기가 막힌 영상 등은 건너뛰고, 전부 안 될 때만 원래 음악으로
            errs++; if (errs < videos.length && (list || videos.length > 1)) { try { player.nextVideo(); } catch { /* */ } return; }
            failed = true; box.hidden = true; if (wantPlay) fallback.start(); emit();
          },
        },
      });
    };
    const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; s.async = true;
    s.onerror = () => { failed = true; emit(); };
    document.head.appendChild(s);
    setTimeout(() => { if (!ready) { failed = true; if (wantPlay && !fallback.playing) fallback.start(); emit(); } }, 12000);   // 막힌 곳이면 원래 음악으로
  }

  const api = {
    start() { wantPlay = true; if (useYT()) { box.hidden = false; fallback.stop(); player.playVideo(); playing = true; emit(); } else fallback.start(); },
    stop() { wantPlay = false; if (useYT()) { player.pauseVideo(); playing = false; emit(); } fallback.stop(); },
    hide() { api.stop(); box.hidden = true; },
    next() { if (useYT()) { if (list || videos.length > 1) player.nextVideo(); else player.seekTo(Math.min((player.getCurrentTime() || 0) + 30, (player.getDuration() || 1e9) - 1), true); } else fallback.next(); },
    prev() { if (useYT()) { if (list || videos.length > 1) player.previousVideo(); else player.seekTo(Math.max(0, (player.getCurrentTime() || 0) - 30), true); } else fallback.prev(); },
    onChange(f) { listeners.add(f); }, get playing() { return useYT() ? playing : fallback.playing; }, get title() { return useYT() ? title : fallback.title; },
    get source() { return useYT() ? 'youtube' : 'built-in'; }, get single() { return !list && videos.length === 1; },
  };
  load();
  return api;
}
