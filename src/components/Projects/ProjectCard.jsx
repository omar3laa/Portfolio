import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Brain } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.15)] transition-all duration-300 h-full flex flex-col"
    >
      {/* Image */}

      {project.image ? (
        <div className="overflow-hidden">

          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-contain bg-white"
          />

        </div>

      ) : (

        <div className="h-44 flex flex-col items-center justify-center bg-slate-900 border-b border-slate-700">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4">
            <Brain
              size={36}
              className="text-cyan-400"
            />
          </div>

          <h4 className="text-lg font-semibold text-cyan-400">
            {project.title}
          </h4>

          <p className="text-sm text-gray-500 mt-2">
            {project.type}
          </p>

        </div>

)}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-gray-400 leading-6 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech?.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-4 py-2 text-sm rounded-xl transition"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-5 py-3 rounded-xl transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;