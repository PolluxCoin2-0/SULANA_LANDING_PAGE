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
  title: "Sulana",
  description: "The Decentralized Knowledge Ecosystem for Blockchain and Cryptocurrency Powered by AI and Built on PolluxChain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <link rel="icon" href="/Logo.svg" type="image/*" />
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
