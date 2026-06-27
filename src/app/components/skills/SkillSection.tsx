"use client";
import { motion } from "framer-motion";
import { DiJavascript } from "react-icons/di";
import Header from "../general/Header";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGitAlt, FaGithub, FaJava, FaNodeJs, FaReact, FaRobot } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { name: "JavaScript", icon: <DiJavascript />, skillLevel: 90 },
  { name: "TypeScript", icon: <SiTypescript />, skillLevel: 85 },
  { name: "React", icon: <FaReact />, skillLevel: 90 },
  { name: "Next.js", icon: <RiNextjsFill />, skillLevel: 85 },
  { name: "Node.js", icon: <FaNodeJs />, skillLevel: 85 },
  { name: "Express.js", icon: <SiExpress />, skillLevel: 85 },
  { name: "MongoDB", icon: <SiMongodb />, skillLevel: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, skillLevel: 90 },
  { name: "Git", icon: <FaGitAlt />, skillLevel: 85 },
  { name: "GitHub", icon: <FaGithub />, skillLevel: 90 },
  { name: "AI Integration", icon: <FaRobot />, skillLevel: 75 },
  { name: "Java", icon: <FaJava />, skillLevel: 80 },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-5 w-[90%] sm:w-[80%] mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/50 text-center w-36 h-44 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-colors duration-300 cursor-default"
          >
            <div className="text-5xl text-gray-400 group-hover:text-indigo-400 transition-colors duration-300">
              {skill.icon}
            </div>
            <p className="text-xl font-bold my-2 text-gray-200">{skill.skillLevel}%</p>
            <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wide px-2">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
