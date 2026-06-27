"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HeaderProps {
  title: string;
  as?: "h1" | "h2" | "h3";
  subtitle?: string;
}

export default function Header({ title, as: Tag = "h1", subtitle }: HeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Tag className="text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-gray-300 inline-block pb-1">
          {title}
        </Tag>
        <div className="mt-3 mx-auto h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        {subtitle && (
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
