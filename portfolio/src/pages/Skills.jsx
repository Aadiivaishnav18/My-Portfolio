import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaUsers,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Languages",
      items: "JavaScript, SQL, C/C++, HTML, CSS",
    },
    {
      icon: <FaLayerGroup />,
      title: "Frameworks / Libraries",
      items: "React.js, Tailwind CSS",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      items: "MySQL",
    },
    {
      icon: <FaUsers />,
      title: "Soft Skills",
      items:
        "Effective Communication (English, Hindi), Teamwork, Leadership, Quick Learning",
    },
    {
      icon: <FaLaptopCode />,
      title: "CS Fundamentals",
      items:
        "DBMS, Object-Oriented Programming, Problem Solving",
    },
    {
      icon: <FaTools />,
      title: "Tools / Technologies",
      items:
        "Git/GitHub, VS Code, Vercel, Netlify, npm",
    },
  ];

  return (
    <section
      id="skills"
      className="pt-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-emerald-500 mb-14 relative z-10"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              group relative overflow-hidden
              bg-gray-100 dark:bg-gray-900
              p-8 rounded-3xl shadow-xl
              border border-gray-200 dark:border-gray-700
              hover:border-emerald-500
              hover:shadow-emerald-500/20
              transition-all duration-500 cursor-pointer
            "
          >
            {/* Glow Circle */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500 opacity-10 rounded-full group-hover:scale-150 transition duration-500"></div>

            {/* Icon */}
            <div className="text-emerald-500 text-4xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition duration-300">
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition">
              {skill.title}
            </h3>

            {/* Items */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {skill.items}
            </p>

            {/* Bottom Accent */}
            <div className="mt-6 h-1 w-12 bg-emerald-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}