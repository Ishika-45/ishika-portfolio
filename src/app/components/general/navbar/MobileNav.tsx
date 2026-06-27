"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./Navbar";

interface MobileNavProps {
  navbarOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ navbarOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {navbarOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="lg:hidden w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 shadow-xl"
        >
          <ul className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.url}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  href={link.url}
                  onClick={onClose}
                  className="block px-8 py-3 text-gray-300 hover:text-white hover:bg-slate-800/60 transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
