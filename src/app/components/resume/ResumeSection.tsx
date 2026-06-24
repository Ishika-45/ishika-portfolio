import { LuBookOpen, LuGraduationCap, LuTrophy } from "react-icons/lu";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* Education */}
        <div>
          <Header title="Education" as="h2" />

          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Bachelor of Technology in Computer Science Engineering"
              description="Pursuing a B.Tech in Computer Science Engineering with a strong foundation in Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering."
              date="2022 - 2026"
            />

            <ResumeCard
              icon={LuBookOpen}
              role="Technical Learning & Continuous Growth"
              description="Actively learning and building projects using React, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, and modern software development practices."
              date="2023 - Present"
            />

            <ResumeCard
              icon={LuTrophy}
              role="Projects & Technical Achievements"
              description="Developed impactful projects including EvolveWeb AI, JobGenie, PlanPilot, AR-based applications, and participated in hackathons, collaborative development, and technical events."
              date="2024 - Present"
            />
          </div>
        </div>

        {/* Experience */}
        <div>
          <Header title="Experience" as="h2" />

          <div className="space-y-6">
            <ResumeCard
              icon={RiReactjsLine}
              role="ReactJS Intern | Celebal Technologies"
              description="Worked on React.js-based web applications, contributed to frontend development, implemented responsive user interfaces, collaborated with development teams, and gained hands-on experience with modern web development workflows."
              date="May 2025 - July 2025"
            />

            <ResumeCard
              icon={RiNextjsFill}
              role="Independent Full-Stack Developer"
              description="Designed and developed full-stack applications from concept to deployment, focusing on scalable architecture, user experience, authentication systems, and AI-powered solutions."
              date="2024 - Present"
            />
          </div>
        </div>

      </div>
    </section>
  );
}