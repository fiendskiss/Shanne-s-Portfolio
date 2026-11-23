'use client';
import { useState } from 'react';
import { photos } from '@/lib/photos';
export function Portrait(){const [flipped,setFlipped]=useState(false);return <button className={`portrait photo-link ${flipped?'flipped':''}`} onClick={()=>setFlipped(!flipped)} aria-label="Flip portrait placeholder" aria-pressed={flipped}><img src={flipped?photos.portraitAlternate:photos.portrait} alt="Nature photo placeholder — replace with Shanne’s portrait"/><span className="portrait-overlay">{flipped?'your story, in a picture.':'this is where I go.'}<small>{flipped?'click to flip back':'portrait placeholder · click to flip'}</small></span><span className="photo-caption">shanne quitlong <span>✳</span></span></button>}
