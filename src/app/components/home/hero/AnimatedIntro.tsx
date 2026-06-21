"use client";
import Typewriter  from 'typewriter-effect';

export default function AnimatedIntro() {
  return (
    <div>
      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl h-30 px-8 text-center font-medium text-gray-400">
        Hi, I&apos;m Ishika Bansal - A passionate
        <span className = "text-indigo-400 font-bold">
            <Typewriter
          options={{
            strings: [
  "Full-Stack Developer.",
  "Next.js Developer.",
  "AI-Powered Builder.",
  "Open Source Enthusiast.",
  "Problem Solver."
],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName: "inline-block py-6",
            cursorClassName: "typewriter-cursor",

          }}
        />
        </span>
      </div>
    </div>
  )
}
