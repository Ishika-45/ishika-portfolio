import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div
        className="
          w-12 h-12
          rounded-full
          overflow-hidden
          border border-indigo-500/50
          shadow-[0_0_18px_rgba(99,102,241,0.35)]
          transition-all duration-300
          group-hover:scale-105
          group-hover:shadow-[0_0_25px_rgba(99,102,241,0.55)]
        "
      >
        <Image
          src="/images/logo.png"
          alt="Ishika Bansal Logo"
          width={48}
          height={48}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <span className="hidden sm:block text-xl md:text-2xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-white">
        Ishika Bansal
      </span>
    </Link>
  );
}