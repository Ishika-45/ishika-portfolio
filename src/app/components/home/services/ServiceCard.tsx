"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, name, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center text-center hover:border-indigo-500/50 transition-colors duration-300"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative mb-5 p-4 rounded-xl bg-slate-900/80 group-hover:bg-indigo-500/10 transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-100 mb-3">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
