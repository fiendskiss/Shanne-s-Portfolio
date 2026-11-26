'use client';

import { useEffect, useRef, useState } from 'react';

// Deliver the original H.264 upload: on-demand conversion exceeds Cloudinary's size limit.
const backgroundVideoURL = 'https://res.cloudinary.com/ddt557yb0/video/upload/v1795518892/YTDown.com_YouTube_Media_q8nPaqfRm_c_Riverside-Train-Ride-in-Gifu-Japan-8K-60fps-HDR-Calm-Piano-Natural-Ambience_001_1080p_4_tfyquw.mov';

export function BackgroundVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    player.muted = true;
    if (!preference.matches) void player.play().catch(() => setPlaying(false));
    const reduceMotion = () => { if (preference.matches) player.pause(); };
    preference.addEventListener('change', reduceMotion);
    return () => preference.removeEventListener('change', reduceMotion);
  }, []);

  async function toggleVideo() {
    const player = video.current;
    if (!player) return;
    if (!player.paused) { player.pause(); return; }
    try {
      if (player.error) player.load();
      await player.play();
      setFailed(false);
    } catch { setPlaying(false); }
  }

  return <>
    <div className="video-background" aria-hidden="true">
      <div className="video-poster" />
      <video ref={video} src={backgroundVideoURL} className={`video-player ${failed ? 'video-failed' : ''}`} muted loop playsInline preload="metadata" poster="/video/background-poster.jpg" tabIndex={-1}
        onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)}
        onError={()=>{setFailed(true);setPlaying(false);}}>
      </video>
      <div className="video-tint" />
    </div>
    <div className="video-controls">
      <button onClick={toggleVideo} aria-label={playing ? 'Pause background video' : 'Play background video'}><span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span> {playing ? 'pause scene' : failed ? 'retry scene' : 'play scene'}</button>
      {failed && <a href={backgroundVideoURL} target="_blank" rel="noreferrer">Open video</a>}
    </div>
  </>;
}
