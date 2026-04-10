import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "SYNILOGIC TECH PRIVATE LIMITED",
      role: "Full Stack Web Developer Intern",
      date: "May 2025 - Jul 2025",
      desc: "Developed backend modules and conducted RESTful API testing for robust web applications.",
    },
    {
      company: "IBM Skills Build & CSRBOX",
      role: "Project Based Learning Trainee",
      date: "Jul 2025 - Aug 2025",
      desc: "Trained in modern web technologies and component-based design to build scalable applications.",
    },
    {
      company: "DOOPER HEALTH TECHNOLOGY",
      role: "Frontend Web Developer Intern",
      date: "Jul 2024 - Aug 2024",
      desc: "Built responsive healthcare web pages and dynamic forms focusing on seamless UI/UX.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="experience"
      className="pt-24 pb-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Experience</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-4xl mx-auto w-full z-10"
      >
        <div className="absolute left-[39px] md:left-[43px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-400/50 to-transparent rounded-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-24 md:pl-28 mb-10 group"
          >
            <div className="absolute left-[20px] md:left-[24px] top-4 w-10 h-10 bg-white dark:bg-zinc-900 border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 shadow-md group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 z-10">
              <FaBriefcase size={16} />
            </div>

            <motion.div
              whileHover={{ y: -3 }}
              className="bg-gray-50 dark:bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-emerald-500 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit">
                  <FaCalendarAlt size={12} />
                  <span>{exp.date}</span>
                </div>
              </div>

              <h4 className="text-base md:text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                {exp.company}
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}