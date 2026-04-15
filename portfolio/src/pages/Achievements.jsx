import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaArrowRight } from "react-icons/fa";
import paranoxCert from "../assets/paranox.pdf";
import ibmCert from "../assets/ibm.pdf";

export default function Achievements() {
  const data = [
    {
      icon: <FaMedal size={22} />,
      title: "PARANOX Hackathon",
      desc: "Secured place in the PARANOX National Hackathon Event, showcasing advanced problem-solving and rapid development.",
      link: paranoxCert,
    },
    {
      icon: <FaTrophy size={22} />,
      title: "IBM SkillsBuild",
      desc: "Completed the IBM SkillsBuild Project-Based Learning Program, focusing on modern web technologies and component-based design.",
      link: ibmCert,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60 },
    },
  };

  return (
    <section
      id="achievements"
      className="pt-24 pb-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 relative z-10"
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
          Achievements
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full max-w-7xl mx-auto"
      >
        {data.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-[80px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 text-emerald-500 shadow-sm group-hover:shadow-emerald-500/20 group-hover:-translate-y-1 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-zinc-800 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500 transition-all duration-300">
                  <FaArrowRight size={14} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 tracking-tight group-hover:text-emerald-500 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <p className="mt-4 text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition">
                View Certificate →
              </p>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}