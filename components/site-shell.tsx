'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BackgroundVideo } from './video-background';
import { MusicPlayer } from './music-player';
export function SiteShell({children}:{children:React.ReactNode}){const pathname=usePathname();return <div className={`site-shell ${pathname==='/'?'is-home':'is-inner'}`}><BackgroundVideo/><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><Link className="logo" href="/">shanne quitlong</Link><div className="header-right"><nav aria-label="Main navigation">{['about','works','contact'].map(item=><Link href={`/${item}`} key={item} aria-current={pathname.startsWith(`/${item}`)?'page':undefined}>{item}</Link>)}</nav><MusicPlayer/></div></header>{children}<footer className="site-footer">Designed and Developed by Shanne Quitlong</footer></div>}

