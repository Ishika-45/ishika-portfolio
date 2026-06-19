import Logo from "./Logo";

const navLinks = [
    {url: "#home", label: "Home"},
    {url: "#about", label: "About"},
    {url: "#services", label: "Services"},
    {url: "#resume", label: "Resume"},
    {url: "#projects", label: "Projects"},
    {url: "#skills", label: "Skills"},
    {url: "#contact", label: "Contact"},
]

export default function Navbar() {
  return (
    <nav className="h-18 fixed z-50 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-700/50 flex items-center justify-between px-6">
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            <Logo />
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index} className="inline-block ml-6">
                        <a href={link.url} className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-medium text-sm md:text-base"> 

{link.label}</a>
                    </li>
                ))}
            </ul>
            Ishika Bansal 
        </div>
      
    </nav>
  )
}


