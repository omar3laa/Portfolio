import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { featuredProject } from "../../data/projects";

const FeaturedProject = () => {
  return (
    <section className="mb-24">

      <div className="flex items-center gap-3 mb-6">
        <span className="bg-cyan-500 text-slate-950 px-4 py-1 rounded-full text-sm font-bold">
          ⭐ Featured Project
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid lg:grid-cols-2 gap-12 items-center bg-slate-800 rounded-3xl p-8 border border-slate-700"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={featuredProject.image}
            alt={featuredProject.title}
            className="w-full rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>

          <h3 className="text-4xl font-bold">
            {featuredProject.title}
          </h3>

          <p className="text-gray-400 leading-8 mt-6">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {featuredProject.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-10">

            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl transition"
            >
              <FaGithub />
              GitHub
            </a>

            {featuredProject.live !== "#" && (
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;