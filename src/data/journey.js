import {
  Smartphone,
  Code2,
  Trophy,
  Brain,
  Server,
  Bot,
} from "lucide-react";

export const journey = [
  {
    title: "Flutter Trainee",
    organization: "Information Technology Institute (ITI)",
    icon: Smartphone,

    description:
      "Completed Flutter training and gained a solid foundation in cross-platform mobile application development.",

    tech: ["Flutter", "Dart", "Mobile"],
    
    type: "Training",
  },

  {
    title: "Python Certificate",
    organization: "Mahara Tech",
    icon: Code2,

    description:
      "Completed Python programming training with hands-on practice in OOP, problem solving, and core programming concepts.",

    tech: ["Python", "OOP", "Problem Solving"],
  },

  {
    title: "ECPC Participant",
    organization: "Egyptian Collegiate Programming Contest",
    icon: Trophy,

    description:
      "Participated in competitive programming and strengthened algorithmic thinking and problem-solving skills.",

    tech: ["C++", "Algorithms", "Data Structures"],
  },

  {
    title: "AI & Machine Learning Summer Camp",
    organization: "Information Technology Institute (ITI)",  
    icon: Brain,

    description:
      "Studied Machine Learning fundamentals and implemented practical AI projects using Python.",

    tech: ["Python", "Machine Learning", "Scikit-learn"],
    type: "Training",
  },

  {
    title: "Python & DevOps Trainee",
    organization: "IdeaSpace",
    icon: Server,

    description:
      "Worked on backend development, Docker, Jenkins, Linux, Git, and CI/CD pipelines.",

    tech: ["Docker", "Jenkins", "Linux", "Git"],
  },

  {
    title: "NLP Trainee",
    organization: "National Telecommunication Institute (NTI)",
    icon: Bot,

    current: true,

    description:
      "Currently building AI-powered applications using NLP, LLMs, Sentence Transformers, and Google Gemini.",

    tech: [
      "NLP",
      "LLMs",
      "Gemini",
      "Sentence Transformers",
      "Streamlit",
    ],
  },
];