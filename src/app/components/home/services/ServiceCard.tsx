import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export default function ServiceCard({
  icon,
  name,
  description,
}: ServiceCardProps) {
  return (
    <div>
      <div className="mb-5">
        {icon}
      </div>

      <h3 className="my-4 text-xl md:text-2xl font-bold text-gray-200">
        {name}
      </h3>

      <p className="text-gray-400 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}