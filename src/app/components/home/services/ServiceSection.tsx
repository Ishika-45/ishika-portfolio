"use client";
import Header from "../../general/Header";
import ServiceCard from "./ServiceCard";
import { SquareCode, Database, Layers3, Bot } from "lucide-react";

export default function ServiceSection() {
  return (
    <section id="services" className="w-full py-20 bg-slate-900 text-white">
      <Header title="What I Build" />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <ServiceCard
          index={0}
          icon={<SquareCode size={48} color="#818CF8" strokeWidth={1.5} />}
          name="Frontend Development"
          description="Building responsive, modern, and user-friendly interfaces using React, Next.js, TypeScript, and Tailwind CSS."
        />
        <ServiceCard
          index={1}
          icon={<Database size={48} color="#818CF8" strokeWidth={1.5} />}
          name="Backend Development"
          description="Developing scalable APIs, authentication systems, and server-side applications with Node.js, Express, and databases."
        />
        <ServiceCard
          index={2}
          icon={<Layers3 size={48} color="#818CF8" strokeWidth={1.5} />}
          name="Full-Stack Applications"
          description="Creating complete web applications from frontend to backend with a focus on performance, scalability, and user experience."
        />
        <ServiceCard
          index={3}
          icon={<Bot size={48} color="#818CF8" strokeWidth={1.5} />}
          name="AI-Powered Solutions"
          description="Integrating AI capabilities into web applications using modern AI APIs, intelligent workflows, and automation."
        />
      </div>
    </section>
  );
}