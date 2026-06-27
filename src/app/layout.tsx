import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/general/navbar/Navbar";
import Footer from "./components/general/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],

});

export const metadata = {
  title: "Ishika Bansal | Full-Stack Developer",
  description:
    "Portfolio of Ishika Bansal - Full-Stack Developer specializing in Next.js, React, TypeScript, AI-powered web applications, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased bg-slate-950 text-slate-300`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
