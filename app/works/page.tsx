import Link from 'next/link';
import { projects } from '@/lib/content';
import { workPhotos } from '@/lib/photos';
export default function Works(){return <main id="main" className="inner-page works-page"><Link href="/" className="back-link">back to the photos</Link><div className="works-heading"><span className="eyebrow">a collection of things I’ve made</span><h1>My works.</h1><p>A selection of projects shaped by curiosity, creativity, and thoughtful design.</p></div><div className="works-grid">{projects.map((p)=><Link className="work-tile" href={`/works/${p.id}`} key={p.id}><img src={workPhotos[p.id]} alt={`${p.title} project cover`}/><div><small>{p.category}</small><h2>{p.title}</h2><p>{p.description}</p></div></Link>)}</div></main>}
