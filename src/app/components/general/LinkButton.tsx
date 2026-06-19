import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "right" | "left";
  rounded?: boolean;
  download?: boolean;
}

export default function LinkButton({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded,
  download = false,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className={`px-8 py-3 bg-linear-to-r from to-blue-900 to bg-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 ${rounded ? "rounded-full" : "rounded-lg"}`}
    >
      {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
      {text}
      {iconPosition === "right" && Icon && <Icon />}
    </Link>
  );
}
