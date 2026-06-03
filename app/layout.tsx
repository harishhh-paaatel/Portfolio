import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'K G Harish Patel | Futuristic Full Stack Developer',
  description: 'K G Harish Patel - Full Stack Developer, AI Enthusiast, Cloud Engineer. Futuristic portfolio with cinematic UI, advanced animations, and premium motion design.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'K G Harish Patel | Futuristic Portfolio',
    description: 'Award-winning futuristic portfolio for a modern developer.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
