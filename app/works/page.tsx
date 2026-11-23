import Link from 'next/link';
import { projects } from '@/lib/content';
import { workPhotos } from '@/lib/photos';
export default function Works(){return <main id="main" className="inner-page works-page"><Link href="/" className="back-link">back to the photos</Link><div className="works-heading"><span className="eyebrow">a collection of things I’ve made</span><h1>My works.</h1><p>Sample projects, waiting for your own stories.</p></div><div className="works-grid">{projects.map((p,i)=><Link className="work-tile" href={`/works/${p.id}`} key={p.id}><img src={workPhotos[i]} alt={`${p.title} placeholder photograph`}/><div><small>{p.category} · sample project</small><h2>{p.title}</h2><p>{p.description}</p></div></Link>)}</div></main>}
