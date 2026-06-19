import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/general/navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],

});

export const metadata: Metadata = {
  title: "Ishika Bansal | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and AI-powered web applications. Explore my projects, skills, and experience.",
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
      </body>
    </html>
  );
}
