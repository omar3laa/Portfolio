import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-wide"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Omar</span>
          <span className="text-white"> Alaa </span>
          <span className="text-cyan-400">/&gt;</span>
        </motion.a>

        <ul className="flex items-center gap-10">

          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative group transition duration-300 ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;