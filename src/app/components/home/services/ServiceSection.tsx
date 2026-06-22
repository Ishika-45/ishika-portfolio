import Header from "../../general/Header";
import ServiceCard from "./ServiceCard";

import {
  SquareCode,
  Database,
  Layers3,
  Bot,
} from "lucide-react";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="w-full py-20 bg-slate-900 text-white"
    >
      <Header title="What I Build" />

      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
        <ServiceCard
          icon={
            <SquareCode
              size={64}
              color="#818CF8"
              strokeWidth={2}
            />
          }
          name="Frontend Development"
          description="Building responsive, modern, and user-friendly interfaces using React, Next.js, TypeScript, and Tailwind CSS."
        />

        <ServiceCard
          icon={
            <Database
              size={64}
              color="#818CF8"
              strokeWidth={2}
            />
          }
          name="Backend Development"
          description="Developing scalable APIs, authentication systems, and server-side applications with Node.js, Express, and databases."
        />

        <ServiceCard
          icon={
            <Layers3
              size={64}
              color="#818CF8"
              strokeWidth={2}
            />
          }
          name="Full-Stack Applications"
          description="Creating complete web applications from frontend to backend with a focus on performance, scalability, and user experience."
        />

        <ServiceCard
          icon={
            <Bot
              size={64}
              color="#818CF8"
              strokeWidth={2}
            />
          }
          name="AI-Powered Solutions"
          description="Integrating AI capabilities into web applications using modern AI APIs, intelligent workflows, and automation."
        />
      </div>
    </section>
  );
}