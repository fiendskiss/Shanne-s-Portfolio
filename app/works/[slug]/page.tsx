import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/content';
import { workPhotos } from '@/lib/photos';
export function generateStaticParams(){return projects.map(p=>({slug:p.id}));}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const index=projects.findIndex(p=>p.id===slug);if(index<0)notFound();const p=projects[index];return <main id="main" className="inner-page"><Link className="back-link" href="/works">all works</Link><article className="glass-page project-detail"><img src={workPhotos[index]} alt={`${p.title} placeholder photograph`}/><div><span className="eyebrow">{p.category} · sample project</span><h1>{p.title}</h1><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><h2>The idea</h2><p>{p.challenge}</p><h2>The approach</h2><p>{p.approach}</p>{p.url&&<a className="text-link" href={p.url}>View live project</a>}{p.github&&<a className="text-link" href={p.github}>View source code</a>}</div></article></main>}
