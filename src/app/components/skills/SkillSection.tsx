import { DiJavascript } from "react-icons/di";
import Header from "../general/Header";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGitAlt, FaGithub, FaJava, FaNodeJs, FaReact, FaRobot } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const skill = [
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    skillLevel: 85,
  },
  {
    name: "React",
    icon: <FaReact />,
    skillLevel: 90,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    skillLevel: 85,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    skillLevel: 85,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    skillLevel: 85,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    skillLevel: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    skillLevel: 90,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    skillLevel: 85,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    skillLevel: 90,
  },
  {
    name: "AI Integration",
    icon: <FaRobot />,
    skillLevel: 75,
  },
  {
    name: "Java",
    icon: <FaJava />,
    skillLevel: 80,
  },
];


export default function SkillSection() {
  return (
    <section id="skills " className="py-16">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-6">
        {skill.map((skill, index) => {
          return (
            <div key={index} className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
              <div className="text-5xl text-gray-300">
              {skill.icon}
              </div>
              <p className="text-2xl font-semibold my-4 text-gray-200">
                {skill.skillLevel}%
              </p>
              <p className="text-indigo-500 font-semibold">{skill.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
