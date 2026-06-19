"use client";
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload } from "react-icons/lu";
import { useState } from "react";
import MobileNav from "./MobileNav";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#about", label: "About" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="h-18 fixed z-50 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-700/50 flex items-center justify-between px-6">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <Logo />
        <ul className="hidden md:flex gap-6 text-lg font-medium space-x-10">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                  href={link.url}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/*{button}*/}
        <div className="hidden lg:block">
          <LinkButton
            href="/documents/IshikaBansal.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        <MobileNav navbarOpen = {navbarOpen} onClose = {() => setNavbarOpen(false)} />
      </div>
    </nav>
  );
}
