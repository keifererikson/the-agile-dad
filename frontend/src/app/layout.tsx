import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import TopNavbar from '@/components/TopNavbar';
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
  title: 'The Agile Dad',
  description: 'A no-nonsense fitness and weight loss tracker for busy dads.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid min-h-screen grid-rows-[auto_1fr_auto]`}
      >
        <TopNavbar />
        <main className="container mx-auto px-4">{children}</main>
        <footer className="flex flex-wrap items-center justify-center gap-[24px] p-4">
          theagiledad.dev 2025
        </footer>
      </body>
    </html>
  );
}
