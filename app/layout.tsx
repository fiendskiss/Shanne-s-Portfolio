import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Your Name — Creative Developer', description: 'A fourth-year BSIT student’s digital workbench. Explore projects, experiments, and the ideas behind them.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
