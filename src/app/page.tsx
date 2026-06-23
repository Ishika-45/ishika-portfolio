import HeroSection from "./components/home/hero/HeroSection";
import ServiceSection from "./components/home/services/ServiceSection";
import ProjectSection from "./components/projects/ProjectSection";
import ResumeSection from "./components/resume/ResumeSection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <ServiceSection />
    <ResumeSection />
    <ProjectSection />
    </>
  );
}
