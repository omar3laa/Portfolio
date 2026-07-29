import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { otherProjects } from "../../data/projects";


const Projects = () => {
  return (
      <section
      id="projects"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          A selection of projects in AI, Machine Learning, Deep Learning, NLP, and DevOps.
        </p>

        <FeaturedProject />

        <h3 className="text-3xl font-bold mb-10">
          Other Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;