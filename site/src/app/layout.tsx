import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pranav-portfolio.vercel.app"),
  title: "Pranav Thatavarti — Product Manager",
  description:
    "Product Manager with 6+ years of experience in Data, Platform, and product industries. Building scalable, user-centric products.",
  openGraph: {
    title: "Pranav Thatavarti — Product Manager",
    description: "Building scalable products that users love — from 0 to 1 and beyond.",
    type: "website",
    url: "https://pranav-portfolio.vercel.app",
    images: [
      {
        url: "/pranav-formal.jpg",
        width: 800,
        height: 800,
        alt: "Pranav Thatavarti — Product Manager",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()` }} />
      </head>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
