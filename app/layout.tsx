import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inview Interior",
  description: "We help in creating your dream interior.",
};

export default function RootLayout({ children }: Readonly <{children: React.ReactNode;}>) {
  
  const is404Page = children === 'NotFound';
  console.log(children);

  return (
    <html lang="en">
      <body className={inter.className}>
        {!is404Page && <Navbar />}
        {children}
      </body>
    </html>
  );
}
