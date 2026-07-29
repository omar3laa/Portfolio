import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { contact } from "../../data/contact";

const cards = [
  {
    icon: Mail,
    title: "Email",
    value: contact.email,
    link: `mailto:${contact.email}`,
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Connect with me",
    link: contact.linkedin,
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/omar3laa",
    link: contact.github,
  },
  {
    icon: MapPin,
    title: "Location",
    value: contact.location,
    link: null,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-3xl mx-auto mt-6 leading-8"
        >
          I'm always interested in AI, Machine Learning, NLP,
          and Software Development opportunities.
          Feel free to reach out for collaboration,
          internships, or exciting projects.
        </motion.p>

        <div className="flex justify-center gap-10 md:gap-16 mt-16 flex-wrap">

        <a
            href={`mailto:${contact.email}`}
            target="_blank"x    
            className="group flex flex-col items-center"
        >
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition">
            <Mail
                size={24}
                className="text-cyan-400"
            />
            </div>

            <span className="text-sm text-gray-400 mt-3">
            Email
            </span>
        </a>

        <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
        >
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition">
            <FaLinkedin
                size={24}
                className="text-cyan-400"
            />
            </div>

            <span className="text-sm text-gray-400 mt-3">
            LinkedIn
            </span>
        </a>

        <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
        >
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition">
            <FaGithub
                size={24}
                className="text-cyan-400"
            />
            </div>

            <span className="text-sm text-gray-400 mt-3">
            GitHub
            </span>
        </a>

        <div className="flex flex-col items-center">

            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            <MapPin
                size={24}
                className="text-cyan-400"
            />
            </div>

            <span className="text-sm text-gray-400 mt-3">
            Asyut, Egypt
            </span>

        </div>

        </div>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-14"
        >

        <a
            href={`mailto:${contact.email}`}
            target="_blank"
            className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition hover:scale-105"
        >
            Let's Connect
        </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;