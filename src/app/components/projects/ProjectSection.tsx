import React from 'react'
import Header from '../general/Header'
import ProjectCard from './ProjectCard'

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Projects" as='h1'/>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
       <ProjectCard
  title="EvolveWeb AI"
  imagePath="/images/projects/evolveweb-ai.png"
  description="An AI-powered platform that transforms startup ideas into actionable business plans, SWOT analyses, growth strategies, and landing page blueprints."
/>
<ProjectCard
  title="JobGenie"
  imagePath="/images/projects/jobgenie.png"
  description="A full-stack recruitment platform connecting job seekers and recruiters with job posting, application management, authentication, and AI-powered hiring features."
/>
<ProjectCard
  title="PlanPilot"
  imagePath="/images/projects/planpilot.png"
  description="A productivity and planning platform designed to help users organize tasks, goals, schedules, and project workflows efficiently."
/>
<ProjectCard
  title="CureCrafter"
  imagePath="/images/projects/curecrafter.png"
  description="An intelligent healthcare assistant that suggests home remedies and wellness guidance for common health concerns."
/>
      </div>
    </section>
  )
}
