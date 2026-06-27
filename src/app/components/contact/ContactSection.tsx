"use client";
import Link from "next/link"
import { FaMapMarkedAlt } from "react-icons/fa"
import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { LuSend } from "react-icons/lu"
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../general/Header";

const contactInfo = [
    {
        icon: <FaEnvelope className="w-5 h-5" />,
        title: "Email",
        value: "ishikabansal1109@gmail.com",
        link: "mailto:ishikabansal1109@gmail.com"
    },
    {
        icon: <FaPhone className="w-6 h-6" />,
        title: "Phone",
        value: "+91 8894116929",
        link: "tel: +918894116929",
    },
    {
        icon: <FaMapMarkedAlt className="w-6 h-6" />,
        title: "Location",
        value: "Remote . Global",
        link: "#"
    }
]
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const inputStyles =
    "px-4 py-3.5 bg-slate-800 outline-none rounded-lg w-full text-gray-200 placeholder-gray-500 border border-slate-700 focus:border-indigo-500 transition-colors duration-200";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Wire up to your email service here (Resend, Formspree, EmailJS, etc.)
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <Header title="Get In Touch" />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-gray-300">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
            I&apos;m currently available for freelance work and full-time opportunities. Whether you
            have a project in mind or just want to connect, feel free to reach out.
          </p>

          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className="group flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-slate-800/60 transition-colors duration-200"
              >
                <div className="h-12 w-12 rounded-full bg-slate-800 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors duration-300 grid place-items-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-slate-800/40 border border-slate-700/50 px-6 py-8 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className={inputStyles}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={inputStyles}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className={inputStyles}
              required
            />
            <textarea
              placeholder="Message"
              className={`${inputStyles} resize-none`}
              rows={5}
              required
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full bg-gradient-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 hover:scale-[1.01] active:scale-[0.99]"
            >
              <LuSend size={18} />
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Message Sent ✓"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}