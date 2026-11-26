// S9 헤드셋 음악 = 은정님이 고른 유튜브 영상(또는 플레이리스트). 깃허브 페이지처럼 직접 올린 웹페이지에서만 동작한다.
//  - claude.ai 공개 페이지처럼 유튜브를 막는 곳이거나 인터넷이 안 되면, 원래 들어 있던 잔잔한 음악으로 자동으로 돌아간다.
//  - 유튜브 규칙상 플레이어는 화면에 보여야 하므로(200×200 이상) 헤드셋을 쓰는 동안 왼쪽 위에 작은 창으로 보여 준다.
//  - 주소 뒤에 ?yt=영상ID 또는 ?ytlist=플레이리스트ID 를 붙이면 다른 곡으로 바꿀 수 있다.
export const YT_DEFAULT = { video: 'fS-glIMAoUM', list: '' };

export function createYTMusic(fallback, box) {
  const q = new URLSearchParams(location.search);
  const video = q.get('yt') || YT_DEFAULT.video, list = q.get('ytlist') || YT_DEFAULT.list;
  let player = null, ready = false, failed = false, playing = false, title = '유튜브 음악', wantPlay = false;
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
      if (list) Object.assign(vars, { listType: 'playlist', list }); else vars.playlist = video;   // 영상 하나는 playlist=자기자신 으로 반복
      player = new window.YT.Player(box.querySelector('.yt-frame'), {
        width: 200, height: 200, videoId: list ? undefined : video, playerVars: vars,
        events: {
          onReady: () => { ready = true; try { player.setVolume(70); } catch { /* */ } emit(); if (wantPlay) api.start(); },
          onStateChange: (e) => {
            const YT = window.YT.PlayerState; playing = e.data === YT.PLAYING || e.data === YT.BUFFERING;
            try { const t = player.getVideoData()?.title; if (t) title = t; } catch { /* */ }
            if (e.data === YT.ENDED && !list) { player.seekTo(0); player.playVideo(); }
            emit();
          },
          onError: () => { failed = true; box.hidden = true; if (wantPlay) fallback.start(); emit(); },
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
    next() { if (useYT()) { if (list) player.nextVideo(); else player.seekTo(Math.min((player.getCurrentTime() || 0) + 30, (player.getDuration() || 1e9) - 1), true); } else fallback.next(); },
    prev() { if (useYT()) { if (list) player.previousVideo(); else player.seekTo(Math.max(0, (player.getCurrentTime() || 0) - 30), true); } else fallback.prev(); },
    onChange(f) { listeners.add(f); }, get playing() { return useYT() ? playing : fallback.playing; }, get title() { return useYT() ? title : fallback.title; },
    get source() { return useYT() ? 'youtube' : 'built-in'; }, get single() { return !list; },
  };
  load();
  return api;
}
