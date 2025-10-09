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
        <div className="drawer mx-auto max-w-[100rem] lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col min-h-screen">
            <main className="p-6">{children}</main>
          </div>
          <div className="drawer-side bg-base-200">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-64 p-4">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
