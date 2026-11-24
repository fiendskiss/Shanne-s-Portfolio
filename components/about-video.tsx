'use client';

import Link from 'next/link';
import { useRef } from 'react';

const videoURL = '/videos/about-me.webm';
const posterURL = '/videos/about-me.png';

export function AboutVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const hovered = useRef(false);

  function stop() {
    hovered.current = false;
    video.current?.pause();
  }

  return <Link className="photo-link about-photo" href="/about" aria-label="About Shanne"
    onPointerEnter={(event) => {
      if (event.pointerType === 'touch') return;
      hovered.current = true;
      void video.current?.play().then(() => {
        if (!hovered.current) video.current?.pause();
      }).catch(() => {});
    }}
    onPointerLeave={stop} onPointerCancel={stop} onClick={stop}>
    <video ref={video} src={videoURL} poster={posterURL} muted loop playsInline preload="none" aria-hidden="true" />
    <span className="about-caption">a little about me</span>
  </Link>;
}
