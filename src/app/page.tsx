import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/home/hero/HeroSection";
import ServiceSection from "./components/home/services/ServiceSection";
import ProjectSection from "./components/projects/ProjectSection";
import ResumeSection from "./components/resume/ResumeSection";
import SkillSection from "./components/skills/SkillSection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ResumeSection />
    <ProjectSection />
    <SkillSection />
    <ContactSection />
    </>
  );
}
