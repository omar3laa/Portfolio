import pythonCertificate from "../assets/certificates/python-mahara.pdf";
import nvidiaCertificate from "../assets/certificates/nvidia-deep-learning.pdf";
import iotCertificate from "../assets/certificates/iot-certificate.pdf";
import pythonDevopsCertificate from "../assets/certificates/python-devops-certificate.pdf";
import {
  Code2,
  Brain,
  Cpu,
  ServerCog,
} from "lucide-react";

export const certificates = [
  {
    id: 1,
    title: "Python Programming Basics",
    issuer: "Mahara Tech",
    date: "June 2025",
    icon: Code2,
    pdf: pythonCertificate,
    color: "from-cyan-500 to-blue-500",
  },

  {
    id: 2,
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "August 2025",
    icon: Brain,
    pdf: nvidiaCertificate,
    color: "from-green-500 to-emerald-500",
  },

  {
    id: 3,
    title: "Internet of Things (IoT)",
    issuer: "Egypt Makes Electronics (EME) • ITIDA",
    date: "Jan 2024",
    icon: Cpu,
    pdf: iotCertificate,
    color: "from-orange-500 to-red-500",
  },

  {
    id: 4,
    title: "Python & DevOps Development",
    issuer: "Ideaspace • ITIDA • Assiut Oil Refining Company",
    date: "2026",
    icon: ServerCog,
    pdf: pythonDevopsCertificate,
    color: "from-indigo-500 to-cyan-500",
  },
];