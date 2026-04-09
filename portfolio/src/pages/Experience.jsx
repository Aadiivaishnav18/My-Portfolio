import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Tech Solutions Pvt Ltd",
      role: "Frontend Developer Intern",
      date: "Jan 2025 - Apr 2025",
      desc: "Worked on React-based web applications and responsive UI design.",
    },
    {
      company: "Creative Web Studio",
      role: "React Developer",
      date: "May 2025 - Present",
      desc: "Developing scalable portfolio and business websites using React & Tailwind.",
    },
  ];

  return (
    <section
      id="experience"
      className="pt-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-emerald-500 mb-16"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-emerald-500 rounded-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="relative pl-20 mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-2 top-6 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-lg">
              <FaBriefcase size={16} />
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="
                bg-gray-100 dark:bg-gray-900
                p-6 rounded-3xl shadow-xl
                border border-gray-200 dark:border-gray-700
                hover:shadow-emerald-500/20
                transition-all duration-500
              "
            >
              {/* Role */}
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                {exp.role}
              </h3>

              {/* Company */}
              <h4 className="text-lg font-semibold mb-3">
                {exp.company}
              </h4>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <FaCalendarAlt className="text-emerald-500" />
                <span>{exp.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-5 h-1 w-16 bg-emerald-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}