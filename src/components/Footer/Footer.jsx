import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-2xl font-bold text-center text-white">
          Omar <span className="text-cyan-400">Alaa</span>
        </h3>

        <p className="text-gray-400 text-center mt-3">
          AI Engineer • Machine Learning • NLP
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://github.com/omar3laa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={24}
              className="text-gray-400 hover:text-cyan-400 transition"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/omar-alaa-62a0262a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={24}
              className="text-gray-400 hover:text-cyan-400 transition"
            />
          </a>

          <a href="mailto:omaralaa4526@gmail.com">
            <Mail
              size={24}
              className="text-gray-400 hover:text-cyan-400 transition"
            />
          </a>

        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Omar Alaa.
          Built with React, Tailwind CSS & Framer Motion.
        </p>

      </div>

    </footer>
  );
};

export default Footer;