import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopNavbar from '@/components/TopNavbar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Agile Dad",
  description: "A no-nonsense fitness and weight loss tracker for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
