"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  index?: number;
}

export default function ProjectCard({
  imagePath,
  title,
  description,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover links overlay */}
        {(liveUrl || githubUrl) && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <LuExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <LuGithub size={16} />
                Code
              </a>
            )}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
