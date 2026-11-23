import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
export const metadata: Metadata = { title: 'Shanne Quitlong — Portfolio', description: 'The personal portfolio of Shanne Quitlong, a fourth-year BSIT student. A collection of projects, ideas, and explorations.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>; }
