'use client';

import { useEffect, useRef, useState } from 'react';

const trackURL = '/audio/clair-de-lune.mp3';

export function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pending, setPending] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hint, setHint] = useState('');

  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => {
      setPending(false);
      setExpanded(true);
      setHint('Loading is taking a while. Try the audio controls below or open the song directly.');
    }, 15000);
    return () => clearTimeout(timer);
  }, [pending]);

  async function toggleMusic() {
    const player = audio.current;
    if (!player) return;
    if (!player.paused) { player.pause(); return; }
    setHint('');
    setPending(true);
    try {
      if (player.error) player.load();
      // Keep play in the click handler for mobile user activation.
      await player.play();
    } catch (error) {
      setPending(false);
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setExpanded(true);
      setHint('Playback could not start. Try the controls below, or open or download the song.');
    }
  }

  return <aside className={`music-widget ${playing ? 'music-is-playing' : ''}`} aria-label="Music player">
    <div className="music-card">
      <div className="music-disc" aria-hidden="true"><span /></div>
      <div className="music-info">
        <span className="music-status" aria-live="polite">{pending ? 'loading…' : playing ? 'now playing' : 'a little background music'}</span>
        <a className="music-title" href={trackURL} target="_blank" rel="noreferrer">Clair de Lune</a>
        <div className="music-meta"><span className="music-bars" aria-hidden="true">{[5,9,13,7,11,6,10,14,8,5,12,7].map((height,index)=><i key={index} style={{height,animationDelay:`${index * -.13}s`}} />)}</span></div>
      </div>
      <button className="music-play" onClick={toggleMusic} aria-label={playing || pending ? 'Pause Clair de Lune' : 'Play Clair de Lune'}>
        {playing || pending ? <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4v12M14 4v12" /></svg> : <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 3 10 7-10 7Z" /></svg>}
      </button>
    </div>
    <div id="music-details" className={`music-details ${expanded ? 'is-expanded' : ''}`} inert={!expanded}>
      <div className="music-details-heading"><span>Clair de Lune · Claude Debussy</span><button aria-label="Close audio controls" onClick={()=>setExpanded(false)}>×</button></div>
      <audio ref={audio} className="music-audio" controls preload="none" loop aria-label="Clair de Lune"
        onPlay={()=>setPending(true)}
        onPlaying={()=>{setPlaying(true);setPending(false);setHint('');}}
        onPause={()=>{setPlaying(false);setPending(false);}}
        onEnded={()=>{setPlaying(false);setPending(false);}}
        onWaiting={()=>{setPlaying(false);setPending(true);}}
        onError={()=>{setPlaying(false);setPending(false);setExpanded(true);setHint('The song could not load. Try again, or open or download the file below.');}}>
        <source src={trackURL} type="audio/mpeg" />
        <source src="/audio/clair-de-lune.ogg" type="audio/ogg" />
        Your browser does not support embedded audio. Open or download the song below.
      </audio>
      {hint && <p role="status">{hint}</p>}
      <p><a href={trackURL} target="_blank" rel="noreferrer">Open audio</a> · <a href={trackURL} download="Clair de Lune.mp3">Download MP3</a></p>
    </div>
  </aside>;
}
