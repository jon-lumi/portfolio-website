import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Inter } from "next/font/google";
const font = Inter({subsets: ['latin']});


export const metadata: Metadata = {
  title: "Portfolio | Jon Lumi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className}`}>
        <Providers>
          <div 
            className="flex flex-col h-min-screen w-max-screen bg-background text-text 
                       py-unit-lg px-unit-md 
                       md:py-unit-lg md:px-unit-xl"
          >
            <Navbar/>
            {children}
            <Footer/>
          </div>

        </Providers>
      </body>
    </html>
  );
}
