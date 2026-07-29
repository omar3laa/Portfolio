import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Brain,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Badr University\nFaculty of Artificial Intelligence\nExpected Graduation: 2027",
  },
  {
    icon: Briefcase,
    title: "Focus Areas",
    text: "Machine Learning\nDeep Learning\nNLP\nDevOps",
  },
  {
    icon: Brain,
    title: "Interests",
    text: "LLMs\nRAG Systems\nComputer Vision\nMLOps",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Asyut, Egypt\nAvailable for Internships & Remote Work",
  },
];
const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-8 leading-8 text-lg"
        >
          I'm Omar Alaa, an Artificial Intelligence student passionate about designing and deploying AI-powered applications.
          My interests span Machine Learning, Deep Learning, Natural Language Processing, Large Language Models, and DevOps.
          I enjoy transforming ideas into practical solutions while continuously learning modern AI technologies.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.2)] transition-all duration-300"
              >

                <Icon
                  size={38}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-400 whitespace-pre-line leading-7">
                  {card.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default About;