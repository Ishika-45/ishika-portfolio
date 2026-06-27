"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LinkButton from "../general/LinkButton";
import { LuDownload, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "../general/Header";

const stats = [
  { value: "3+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "2025", label: "Graduating" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6} },
  };

  return (
    <section id="about" className="py-20 bg-slate-950">
      <Header title="About Me" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        {/* Image column */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-600/20 blur-xl" />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-40" />
            <Image
              src="/images/image.png"
              alt="Ishika Bansal"
              fill
              sizes="(max-width: 640px) 256px, 320px"
              className="rounded-2xl object-cover relative z-10"
            />
          </div>
        </motion.div>

        {/* Text column */}
        <div className="flex flex-col gap-6">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-gray-300"
          >
            Full-Stack Developer & AI Enthusiast
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-base lg:text-lg">
            I&apos;m a final-year Computer Science student at a B.Tech program, passionate about building
            products that sit at the intersection of clean engineering and thoughtful design. I care
            about code that&apos;s readable, interfaces that feel effortless, and systems that scale.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-base lg:text-lg">
            Outside of code I enjoy exploring how AI is reshaping what&apos;s possible in web products —
            which is why most of my recent projects have an intelligent layer baked in, from
            business-plan generators to AI-powered hiring tools.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-slate-800"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-indigo-400">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <LinkButton
              href="/documents/IshikaBansal.pdf"
              text="Download CV"
              icon={LuDownload}
              iconPosition="left"
              download
            />
            <a
              href="https://github.com/Ishika-45"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg border border-slate-700 text-gray-400 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ishika-bansal-3443a4250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg border border-slate-700 text-gray-400 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
