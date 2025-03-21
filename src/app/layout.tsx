import type { Metadata } from "next";
import Navbar from "./Navbar/page";
import Footer from "../app/Footer/page";
import localFont from "next/font/local";
import './globals.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: " Sulaana | AI-Powered Blockchain Encyclopedia & Knowledge Hub",
  description:
  "Discover Sulaana, the AI-driven blockchain encyclopedia offering decentralized, accurate knowledge for all. Join our community today!",
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: 'Sulaana, AI-powered, Blockchain, Knowledge',
  openGraph: {
    type: 'website',
    title: 'Sulaana | AI-Powered Blockchain Encyclopedia & Knowledge Hub',
    description: 'Discover Sulaana, the AI-driven blockchain encyclopedia offering decentralized, accurate knowledge for all. Join our community today!',
    url: 'https://sulaana.com/',
    images: [
      {
        url: 'https://sulaana.com/Logo.svg', 
        width: 1200,
        height: 630,
        alt: 'sulaana-logo-image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sulaana | AI-Powered Blockchain Encyclopedia & Knowledge Hub',
    description: 'Discover Sulaana, the AI-driven blockchain encyclopedia offering decentralized, accurate knowledge for all. Join our community today!',
    images: [
      {
        url: 'https://sulaana.com/Logo.svg', 
        alt: 'sulaana-logo-image',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <link rel="icon" href="/Logo.svg" type="image/*" />
         <link rel="canonical" href="https://www.sulaana.com/" />
       <link rel="alternate"  href="https://www.sulaana.com/" />
       <head>
        {/* Twitter Card Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SulaanaDao" /> {/* Replace with your Twitter handle */}
        <meta name="twitter:title" content="Sulaana | AI-Powered Blockchain Encyclopedia & Knowledge Hub" />
        <meta name="twitter:description" content="Discover Sulaana, the AI-driven blockchain encyclopedia offering decentralized, accurate knowledge for all. Join our community today!" />
        <meta name="twitter:image" content="https://sulaana.com/Logo.svg" /> {/* Full URL for the image */}

        {/* <meta name="google-site-verification" content="LiiyqTZPc3uXRtlUbkiZHfJKHDgAnOeBUDnl4YRduFM" /> */}
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sulaana | AI-Powered Blockchain Encyclopedia & Knowledge Hub" />
        <meta property="og:description" content="Discover Sulaana, the AI-driven blockchain encyclopedia offering decentralized, accurate knowledge for all. Join our community today!" />
        <meta property="og:url" content="https://sulaana.com/" />
        <meta property="og:image" content="https://sulaana.com/Logo.svg" />

        {/* JSON-LD Schema Markup for WebPage */}
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Sulaana | AI-Powered Blockchain Encyclopedia & Knowledge Hub",
            "url": "https://sulaana.com/",
            "description": "Discover Sulaana, the AI-driven blockchain encyclopedia offering decentralized, accurate knowledge for all. Join our community today!",
            "potentialAction": {
              "@type": "Action",
              "name": "AI-driven blockchain encyclopedia",
              "target": "https://sulaana.com/"
            }
          }
          `}
        </script>
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  pt-4 bg-[#FFFFFF]`}
      >
        <Navbar/>
        {children}
      <Footer />
      </body>
    </html>
  );
}
