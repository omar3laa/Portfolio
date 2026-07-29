  import profile from "../../assets/images/profile.jpeg";
  import { FaGithub, FaLinkedin } from "react-icons/fa";
  import { motion } from "framer-motion"
  import { TypeAnimation } from "react-type-animation";
  import { personalInfo } from "../../data/portfolio";

  const Hero = () => {
    return (
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Side */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-cyan-400 text-xl mb-4">
          Hello, I'm
        </p>

        <h1 className="text-7xl font-extrabold leading-tight">
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="text-cyan-400">
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "AI Engineer",
            2000,
            "Machine Learning Engineer",
            2000,
            "NLP Engineer",
            2000,
            "Python Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-3xl mt-6 text-gray-300 font-semibold"
        />

        <p className="text-cyan-400 mt-2">
          Machine Learning • NLP • LLMs
        </p>

        <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
          {personalInfo.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-10">

          <a
            href="/Omar_Alaa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-cyan-500 hover:bg-cyan-500 hover:scale-105 transition duration-300"

          >
            View Resume
          </a>

          <a
            href="https://github.com/omar3laa"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl border border-cyan-500 hover:bg-cyan-500 hover:scale-105 transition duration-300"
          >
            GitHub
          </a>

      </div>

        {/* Icons */}
      <div className="flex gap-6 mt-10 text-3xl">

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-cyan-400 transition duration-300" />
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
        </a>

      </div>

      </motion.div>

          {/* Right Side */}

          <div className="relative flex justify-center items-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

            <motion.img
              src={profile}
              alt="Omar Alaa"
              initial={{ opacity: 0, x: 100 }}
              animate={{opacity: 1,x: 0, y: [0, -10, 0],}}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1, ease: "easeOut", }}
              className="relative z-10 w-[430px] h-[430px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,.35)]"
            />

          </div>

        </div>
      </section>
    );
  };

  export default Hero;