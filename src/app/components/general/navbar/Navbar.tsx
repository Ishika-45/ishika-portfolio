"use client";
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { useEffect, useState } from "react";
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
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const navHandler = () => {
            if (window.scrollY >= 90) {  
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };

        window.addEventListener("scroll", navHandler);

        return () => {
          return window.removeEventListener("scroll", navHandler);
        };
    }, []);

  return (
    <nav className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900/90 shadow-md" : "bg-transparent"}`}>
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

        <button onClick={() => setNavbarOpen(!navbarOpen)} className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden">
          {navbarOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>

        <MobileNav navbarOpen={navbarOpen} /> 
      </div>
    </nav>
  );
}
