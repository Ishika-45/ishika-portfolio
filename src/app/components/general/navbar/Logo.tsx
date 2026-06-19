import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";


export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full grid place-items-center text-slate-950">
            <LuCodeXml />
        </div>
        <p className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-bold text-lg hidden md:text-2xl sm:block">
            Ishika Bansal
        </p>
    </Link>
  )
}


