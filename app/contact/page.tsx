import Link from 'next/link';
import { profile } from '@/lib/content';
import { photos } from '@/lib/photos';
export default function Contact(){return <main id="main" className="inner-page">
    <Link href="/" className="back-link">back to the photos</Link><article className="glass-page contact-layout"><div>
        <span className="eyebrow">say hello</span><h1>Good things start<br/>with a conversation.</h1>
<p>For projects, opportunities, or a friendly hello.</p><div className="contact-details">{profile.email?<a href={`mailto:${profile.email}`}>{profile.email}</a>:<p className="placeholder-note">quitlong.shanne.r@gmail.com | +63 995 418 5159</p>}<div className="contact-socials">{profile.github&&<a href={profile.github}>GitHub</a>}{profile.facebook&&<a href={profile.facebook}>Facebook</a>}{profile.linkedin&&<a href={profile.linkedin}>LinkedIn</a>}</div></div></div><img src={photos.contact} alt="Flowers — contact photo placeholder"/></article></main>}