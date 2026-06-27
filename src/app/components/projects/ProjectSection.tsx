import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <Header title="Projects" />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          index={0}
          title="EvolveWeb AI"
          imagePath="/images/projects/evolveweb-ai.png"
          description="An AI-powered platform that transforms startup ideas into actionable business plans, SWOT analyses, growth strategies, and landing page blueprints."
          // liveUrl="https://evolveweb-ai.vercel.app"
          githubUrl="https://github.com/Ishika-45/EvolveWebAI"
        />
        <ProjectCard
          index={1}
          title="JobGenie"
          imagePath="/images/projects/jobgenie.png"
          description="A full-stack recruitment platform connecting job seekers and recruiters with job posting, application management, authentication, and AI-powered hiring features."
          // liveUrl="https://jobgenie.vercel.app"
          githubUrl="https://github.com/Ishika-45/JobGenie"
        />
        <ProjectCard
          index={2}
          title="PlanPilot"
          imagePath="/images/projects/planpilot.png"
          description="A productivity and planning platform designed to help users organize tasks, goals, schedules, and project workflows efficiently."
          // liveUrl="https://planpilot.vercel.app"
          githubUrl="https://github.com/Ishika-45/PlanPilot"
        />
        <ProjectCard
          index={3}
          title="CureCrafter"
          imagePath="/images/projects/curecrafter.png"
          description="An intelligent healthcare assistant that suggests home remedies and wellness guidance for common health concerns."
          // liveUrl="https://curecrafter.vercel.app"
          githubUrl="https://github.com/Ishika-45/CureCrafter"
        />
      </div>
    </section>
  );
}
