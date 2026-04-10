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
      items: ["JavaScript", "SQL", "C/C++", "HTML", "CSS"],
    },
    {
      icon: <FaLayerGroup />,
      title: "Frameworks / Libraries",
      items: ["React.js", "Tailwind CSS"],
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      items: ["MySQL"],
    },
    {
      icon: <FaTools />,
      title: "Tools & Tech",
      items: ["Git/GitHub", "VS Code", "Vercel", "Netlify", "npm"],
    },
    {
      icon: <FaLaptopCode />,
      title: "CS Fundamentals",
      items: ["DBMS", "Object-Oriented Programming", "Problem Solving"],
    },
    {
      icon: <FaUsers />,
      title: "Soft Skills",
      items: ["Effective Communication", "Teamwork", "Leadership", "Quick Learning"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section
      id="skills"
      className="pt-24 pb-32 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-400 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-20 relative z-10"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Arsenal</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto relative z-10 w-full"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 text-2xl border border-emerald-500/20">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
                {skill.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 pl-4 md:pl-16 border-l-2 border-emerald-500/20">
              {skill.items.map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "#10b981", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm md:text-base font-medium rounded-full bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 transition-colors duration-300 cursor-default shadow-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}