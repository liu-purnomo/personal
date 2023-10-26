import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/styles/tailwind.css";
import { Footer } from "./layout/footer";
import Header from "./layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liu Purnomo",
  description: "Blog tentang Web Development, Javascript, React, Drone dan GIS",
  keywords: "IT, React, Developer, Javascript, TypeScript, NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1b2951" />
      <meta name="msapplication-TileColor" content="#1b2951" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
