import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";
import { createContext } from "vm";

export const metadata: Metadata = {
  title: "Inview Interior",
  description: "Best interior interior designing company in Delhi NCR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AlertContext = createContext([]);

  return (
    <html lang="en">
      <meta name="trustpilot-one-time-domain-verification-id" content="3afbc132-fd64-43c6-9f8e-c3d6a825eb0d"/>
      <body className={`antialiased max-w-full`}>
        <Navbar />
        <main className="max-w-full w-full min-h-screen">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
