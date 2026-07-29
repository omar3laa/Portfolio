import {
  Brain,
  Server,
  Monitor,
  Wrench,
} from "lucide-react";
export const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,

    description:
        "Building intelligent systems using ML, Deep Learning and NLP.",

    skills: [
        "Python",
        "PyTorch",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "LLMs",
        "RAG",
    ],
 },

  {
    title: "Backend",
    icon: Server,
    description:"RESTful APIs and scalable backend services.",
    skills: [
      "Flask",
      "FastAPI",
      "Django",
      "REST API",
    ],
  },

  {
    title: "Frontend",
    icon: Monitor,
    description:"Modern responsive web applications with React.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "DevOps & Tools",
    icon: Wrench,
    description:"Deployment, automation and development tools.",
    skills: [
      "Docker",
      "Jenkins",
      "Git",
      "GitHub",
      "Linux",
      "MySQL",
    ],
  },
];