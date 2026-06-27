"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ResumeCardProps {
  icon: IconType;
  role: string;
  description: string;
  date: string;
  index?: number;
}

export default function ResumeCard({ icon: Icon, role, description, date, index = 0 }: ResumeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group relative pl-10 border-l-2 border-slate-700 hover:border-indigo-500 transition-colors duration-300"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-indigo-500 group-hover:bg-indigo-500/20 transition-all duration-300" />

      <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 group-hover:border-slate-600 transition-colors duration-300">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-slate-900/80 text-indigo-400 mt-0.5 shrink-0">
            <Icon size={18} />
          </div>
          <div>
            <h3 className="text-gray-100 font-semibold text-sm leading-snug">{role}</h3>
            <span className="text-indigo-400 text-xs font-medium mt-1 inline-block">{date}</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
