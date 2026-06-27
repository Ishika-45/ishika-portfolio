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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const navHandler = () => {
      setNavBackground(window.scrollY >= 90);
    };
    window.addEventListener("scroll", navHandler, { passive: true });
    return () => window.removeEventListener("scroll", navHandler);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.url.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`h-16 fixed z-50 w-full transition-all duration-300 ${
        navBackground
          ? "bg-slate-900/90 backdrop-blur-md shadow-md shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <Logo />

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const sectionId = link.url.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={`relative transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <LinkButton
            href="/documents/IshikaBansal.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label={navbarOpen ? "Close menu" : "Open menu"}
          aria-expanded={navbarOpen}
          className="w-8 h-8 cursor-pointer text-white z-50 lg:hidden flex items-center justify-center"
        >
          {navbarOpen ? <LuX size={26} /> : <LuMenu size={26} />}
        </button>
      </div>

      {/* MobileNav outside the constrained inner div so it can go full width */}
      <MobileNav navbarOpen={navbarOpen} onClose={() => setNavbarOpen(false)} />
    </nav>
  );
}
