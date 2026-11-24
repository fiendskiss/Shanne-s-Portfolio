import Link from 'next/link';
import { photos } from '@/lib/photos';
export default function About(){return <main id="main" className="inner-page"><Link href="/" className="back-link">back to the photos</Link><article className="glass-page about-layout">
    <img className="about-portrait" src={photos.portrait} alt="Placeholder for Shanne’s portrait"/>
    <div><span className="eyebrow">a little about me</span>
    <h1>Hello, I’m Shanne.</h1>
    <p>I help create your vision into reality.</p>
    <p>This is my space for the things I build, the ideas I explore, and the work I’m learning from along the way.</p>
    <p className="placeholder-note">Information Technology | Creative Developer | UI/UX Designer</p>
    <Link className="text-link" href="/works">Explore my works</Link>
  </div>
</article>
</main>
}
