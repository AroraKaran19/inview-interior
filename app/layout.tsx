import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Inview Interior",
  description: "Best interior interior designing company in Delhi NCR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-full`}
      >
        <Navbar />
        <main className="max-w-full w-full min-h-screen">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
