'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type PlaybackEvent = { data: { isPaused: boolean; isBuffering: boolean; duration: number; position: number } };
type SpotifyController = {
  pause: () => void;
  resume: () => void;
  destroy: () => void;
  addListener: (event: string, callback: (event: PlaybackEvent) => void) => void;
};
type SpotifyAPI = { createController: (element: HTMLElement, options: { uri: string; width: string; height: number }, callback: (controller: SpotifyController) => void) => void };
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyAPI) => void;
    portfolioSpotifyAPI?: SpotifyAPI;
  }
}

const trackURL = 'https://open.spotify.com/track/6Er8Fz6fuZNi5cvwQjv1ya';

export function MusicPlayer() {
  const host = useRef<HTMLDivElement>(null);
  const controller = useRef<SpotifyController | null>(null);
  const requestTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [api, setAPI] = useState<SpotifyAPI | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pending, setPending] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [hint, setHint] = useState('');

  useEffect(() => {
    if (window.portfolioSpotifyAPI) setAPI(window.portfolioSpotifyAPI);
    window.onSpotifyIframeApiReady = (sdk) => {
      window.portfolioSpotifyAPI = sdk;
      setAPI(sdk);
    };
    return () => { if (requestTimer.current) clearTimeout(requestTimer.current); };
  }, []);

  useEffect(() => {
    if (!api || !host.current) return;
    let disposed = false;
    const element = document.createElement('div');
    host.current.appendChild(element);
    const loadTimer = setTimeout(() => {
      if (!disposed) { setUnavailable(true); setHint('Open the Spotify player to listen.'); }
    }, 15000);
    api.createController(element, { uri: 'spotify:track:6Er8Fz6fuZNi5cvwQjv1ya', width: '100%', height: 152 }, (embed) => {
      if (disposed) { embed.destroy(); return; }
      controller.current = embed;
      embed.addListener('ready', () => {
        clearTimeout(loadTimer);
        setReady(true);
        setUnavailable(false);
      });
      embed.addListener('playback_update', ({ data }) => {
        if (disposed) return;
        setPlaying(!data.isPaused && !data.isBuffering);
        if (!data.isBuffering) {
          setPending(false);
          if (requestTimer.current) clearTimeout(requestTimer.current);
        }
        if (!data.isPaused) setHint('');
      });
    });
    return () => { disposed = true; clearTimeout(loadTimer); controller.current?.destroy(); controller.current = null; };
  }, [api]);

  function toggleMusic() {
    if (!ready || !controller.current) { setExpanded(true); return; }
    if (playing) controller.current.pause();
    else controller.current.resume();
    setPending(true);
    if (requestTimer.current) clearTimeout(requestTimer.current);
    requestTimer.current = setTimeout(() => {
      setPending(false);
      setExpanded(true);
      setHint('Use the Spotify player below to start playback.');
    }, 5000);
  }

  return <aside className={`music-widget ${playing ? 'music-is-playing' : ''}`} aria-label="Music player">
    <div className="music-card">
      <div className="music-disc" aria-hidden="true"><span /></div>
      <div className="music-info">
        <span className="music-status" aria-live="polite">{pending ? 'connecting…' : playing ? 'now playing' : 'a little background music'}</span>
        <a className="music-title" href={trackURL} target="_blank" rel="noreferrer">Clair de Lune</a>
        <div className="music-meta"><span className="music-bars" aria-hidden="true">{[5,9,13,7,11,6,10,14,8,5,12,7].map((height,index)=><i key={index} style={{height,animationDelay:`${index * -.13}s`}} />)}</span><button className="spotify-toggle" aria-expanded={expanded} aria-controls="spotify-details" onClick={()=>setExpanded(!expanded)}>Spotify</button></div>
      </div>
      <button className="music-play" onClick={toggleMusic} aria-label={playing ? 'Pause Clair de Lune' : 'Play Clair de Lune'} disabled={pending}>
        {playing ? <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4v12M14 4v12" /></svg> : <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 3 10 7-10 7Z" /></svg>}
      </button>
    </div>
    <div id="spotify-details" className={`spotify-details ${expanded ? 'is-expanded' : ''}`} inert={!expanded}>
      <div className="spotify-details-heading"><span>Listen with Spotify</span><button aria-label="Close Spotify player" onClick={()=>setExpanded(false)}>×</button></div>
      <div ref={host} className="spotify-host" />
      {(hint || unavailable) && <p role="status">{hint || 'Spotify is unavailable right now.'}</p>}
      <p>Playback may be a preview. <a href={trackURL} target="_blank" rel="noreferrer">Open in Spotify</a></p>
    </div>
    <Script src="https://open.spotify.com/embed/iframe-api/v1" strategy="afterInteractive" onError={()=>{setUnavailable(true);setHint('Spotify could not load. Use the link below to listen.');}} />
  </aside>;
}
