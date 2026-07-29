import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../../data/certificates";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto"
        >
          Professional certifications that reflect my continuous learning journey.
        </motion.p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {certificates.map((certificate) => {

            const Icon = certificate.icon;

            return (

              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.15)] transition-all"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                    <Icon
                      size={34}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {certificate.title}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      {certificate.issuer}
                    </p>

                    <p className="text-cyan-400 text-sm mt-1">
                      {certificate.date}
                    </p>

                  </div>

                </div>

                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500 transition"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Certificates;