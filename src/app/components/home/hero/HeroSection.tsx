"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "../../general/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Particles from './Particles';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen w-full relative flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* DotGrid as true background — absolutely positioned, no layout height */}
      <div className="absolute inset-0 z-0">

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
</div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Profile image */}
        <motion.div
          className="w-36 h-36 relative"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg animate-pulse opacity-50" />
          <Image
            src="/images/Image.png"
            alt="Ishika Bansal"
            className="rounded-full object-cover"
            fill
            sizes="144px"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 mb-3 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Hi, I&apos;m Ishika Bansal
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <AnimatedIntro />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-6"
        >
          <LinkButton
            href="#projects"
            text="See my work"
            icon={LuArrowRight}
            rounded
          />
        </motion.div>
      </div>
    </section>
  );
}
