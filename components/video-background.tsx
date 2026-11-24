'use client';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
type Player={mute:()=>void;playVideo:()=>void;pauseVideo:()=>void;destroy:()=>void};
type PlayerEvent={target:Player;data:number};
declare global{interface Window{YT?:{Player:new(element:HTMLElement,options:object)=>Player};onYouTubeIframeAPIReady?:()=>void}}
export function BackgroundVideo(){
 const host=useRef<HTMLDivElement>(null);const player=useRef<Player|null>(null);
 const [apiReady,setApiReady]=useState(false);const [playing,setPlaying]=useState(false);const [failed,setFailed]=useState(false);
 useEffect(()=>{if(window.YT?.Player)setApiReady(true);window.onYouTubeIframeAPIReady=()=>setApiReady(true);},[]);
 useEffect(()=>{if(!apiReady||!window.YT||!host.current)return;const element=document.createElement('div');host.current.appendChild(element);const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 player.current=new window.YT.Player(element,{videoId:'q8nPaqfRm_c',playerVars:{autoplay:reduced?0:1,mute:1,loop:1,playlist:'q8nPaqfRm_c',controls:0,playsinline:1,disablekb:1,fs:0,rel:0,origin:window.location.origin},events:{onReady:(event:PlayerEvent)=>{event.target.mute();if(!reduced)event.target.playVideo();const iframe=host.current?.querySelector('iframe');if(iframe){iframe.title='Riverside train ride in Gifu, Japan background video';iframe.tabIndex=-1;}},onStateChange:(event:PlayerEvent)=>setPlaying(event.data===1),onError:()=>setFailed(true)}});return()=>{player.current?.destroy();player.current=null;};},[apiReady]);
 return <><div className="video-background" aria-hidden="true"><div className="video-poster"/><div ref={host} className={`video-player ${failed||!playing?'video-failed':''}`}/><div className="video-tint"/></div><Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" onReady={()=>{if(window.YT?.Player)setApiReady(true);}} onError={()=>setFailed(true)}/><div className="video-controls">{failed?<a href="https://www.youtube.com/watch?v=q8nPaqfRm_c" target="_blank" rel="noreferrer">Watch background on YouTube</a>:<button onClick={()=>{if(playing){setPlaying(false);player.current?.pauseVideo();}else player.current?.playVideo();}} aria-label={playing?'Pause background video':'Play background video'}><span aria-hidden="true">{playing?'Ⅱ':'▷'}</span> {playing?'pause scene':'play scene'}</button>}</div></>;
}


