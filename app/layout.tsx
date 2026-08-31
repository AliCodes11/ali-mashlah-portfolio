import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  authors: [{ name: 'Ali Mashlah' }],
  icons: { icon: '/brand.svg', apple: '/brand.svg' },
  openGraph: { type: 'website', title: site.name, description: site.description, siteName: 'Ali Mashlah', locale: 'en_US', images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Ali Mashlah — Software & Interactive Graphics' }] },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description, images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Ali Mashlah', url: site.url, email: site.email, telephone: site.phone, jobTitle: 'Software Developer', knowsAbout: ['React', 'Laravel', 'Flutter', 'Three.js', 'OpenGL', 'Java'] }).replace(/</g, '\\u003c') }} />
        {children}
      </body>
    </html>
  );
}
