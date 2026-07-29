import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Skills &  <span className="text-cyan-400">Technologies</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
          Technologies, frameworks, and tools I use to build AI
          applications and scalable software.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-20 items-stretch h-full">

          {skillCategories.map((category, index) => {

            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-slate-800/80
                  backdrop-blur
                  border
                  border-slate-700
                  p-6
                  transition-all
                  items-start
                  hover:-translate-y-2
                  hover:border-cyan-400
                  hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
                "
              >

                {/* Top Glow Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

                {/* Header */}
                <div className="flex items-start gap-4 mb-8">

                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon
                    size={34}
                    className="text-cyan-400"
                    />
                </div>

                <div>

                    <h3 className="text-2xl font-bold">
                    {category.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">

                    {category.description}

                    </p>

                </div>

                </div>
                {/* Skills */}
                <div className="flex flex-wrap gap-4">

                  {category.skills.map((skill) => (

                    <motion.div
                      key={skill}
                    whileHover={{
                    scale: 1.08,
                    rotate: -2,
                    }}
                      className="
                        px-4 
                        py-2
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/30
                        text-cyan-300
                        text-sm font-medium
                        transition
                        hover:bg-cyan-500
                        hover:text-white
                        cursor-default
                      "
                    >
                      {skill}
                    </motion.div>

                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;