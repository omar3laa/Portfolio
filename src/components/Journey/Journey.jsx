import { motion } from "framer-motion";
import { journey } from "../../data/journey";

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto"
        >
          My continuous learning journey in Artificial Intelligence,
          software development, and modern technologies.
        </motion.p>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {journey.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  border
                  transition-all
                  ${
                    item.current
                      ? "border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,.2)]"
                      : "border-slate-700"
                  }
                  bg-slate-900
                `}
              >

                {/* Top Line */}

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>

                {/* Current Badge */}

                {item.current && (
                  <span className="absolute right-6 top-6 px-3 py-1 rounded-full bg-cyan-500 text-sm font-semibold">
                    Current
                  </span>
                )}

                {/* Header */}

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-cyan-400">
                      {item.organization}
                    </p>

                  </div>

                </div>

                {/* Description */}

                <p className="text-gray-400 leading-8 mt-8">
                  {item.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {item.tech.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        rotate: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                    >
                      {tech}
                    </motion.span>

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

export default Journey;