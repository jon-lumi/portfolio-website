import type { Metadata } from "next";
import { Providers } from "./providers";
import Footer from "./components/Footer";
import "./globals.css";


import { Inter } from "next/font/google";
const font = Inter({subsets: ['latin']});


export const metadata: Metadata = {
  title: "Jon Lumi",
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
            className="flex flex-col min-h-screen w-max-screen bg-background text-text"
          >
            {children}
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
