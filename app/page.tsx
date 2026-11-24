import Link from 'next/link';
import { Portrait } from '@/components/portrait';
import { AboutVideo } from '@/components/about-video';
import { photos, workPhotos } from '@/lib/photos';
import { projects } from '@/lib/content';
export default function Home() {
 return <main className="home-scene" id="main"><h1 className="sr-only">Shanne Quitlong — portfolio</h1><div className="photo-world">
 <AboutVideo />
 <Portrait/>
 <Link className="photo-link contact-photo" href="/contact" aria-label="Contact Shanne"><img src={photos.contact} alt="Flowers — Contact photo placeholder"/><span className="photo-caption">say hello</span></Link>
 <div className="work-stack" aria-label="Selected sample projects">{projects.map((project,index)=><Link key={project.id} href={`/works/${project.id}`} className={`photo-link work-photo work-photo-${index}`} aria-label={`View ${project.title} — sample project`}><img src={workPhotos[project.id]} alt={`${project.title} project cover`}/><span className="photo-caption">{project.title}<small>sample project</small></span></Link>)}<Link href="/works" className="stack-label">my works <span>({projects.length})</span></Link></div>
 <span className="portrait-note">a face behind the pixels.</span>
 </div></main>;
}
