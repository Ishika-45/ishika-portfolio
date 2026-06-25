import Link from "next/link"
import { FaMapMarkedAlt } from "react-icons/fa"
import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { LuSend } from "react-icons/lu"

const contactInfo = [
    {
        icon: <FaEnvelope className="w-6 h-6" />,
        title: "Email",
        value: "ishikabansal1109@gmail.com",
        link: "mailto:ishikabansal1109@gmail.com"
    },
    {
        icon: <FaPhone className="w-6 h-6" />,
        title: "Phone",
        value: "+91 8894116929",
        link: "tel: +8894116929",
    },
    {
        icon: <FaMapMarkedAlt className="w-6 h-6" />,
        title: "Location",
        value: "Remote . Global",
        link: "#"
    }
]
export default function ContactSection() {
    const InputStyles = "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400"
    return (
        <section id="contact" className="py-16 lg:py-30">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                <div>
                    <h2 className='py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300'>Ready to Collaborate?</h2>
                    <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
                        I&apos;m currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
                    </p>
                    <div className="space-y-5 mb-12">
                        {contactInfo.map((item, index) => {
                            return (
                                <Link href={item.link} key={index} className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg">
                                    <div className="h-15 w-15 rounded-full bg-white/5 text-white transition-transform group-hover:scale-105 grid place-items-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-md font-medium text-white">{item.title}</h4>
                                        <p className="text-md text-gray-400">{item.value}</p>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                </div>
                <div>
                    <form className="rounded-lg bg-slate-900 px-4 py-8">
                        <input type="text" placeholder="Your Name" className={InputStyles} required />
                        <input type="text" placeholder="Your Email" className={InputStyles} required />
                        <input type="text" placeholder="Subject of Message" className={`${InputStyles} resize-none`} required />
                        <textarea placeholder="Message" className={InputStyles} rows={5} required />
                        <button className="w-full bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
                            <LuSend size={20} />
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}
