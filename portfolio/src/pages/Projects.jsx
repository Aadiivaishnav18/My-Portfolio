import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Elite-Crew",
    desc: "A comprehensive full-stack application built using the MERN stack, focusing on responsive design, secure authentication, and robust backend architecture.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "Note-Nest",
    desc: "A dynamic MERN stack note-taking application featuring modern UI aesthetics, seamless data flow, and highly optimized RESTful APIs.",
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "Dream Miles",
    desc: "An interactive web platform crafted with a modern glassmorphism UI, engaging video backgrounds, and smooth framer-motion animations.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "Live Weather App",
    desc: "A real-time weather forecasting application integrating external APIs to provide accurate data with a clean, mobile-first responsive layout.",
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="projects"
      className="pt-24 pb-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-10 left-[-10%] w-96 h-96 bg-emerald-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-emerald-400 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
      >
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Projects</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10 w-full"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-gray-50 dark:bg-zinc-900/50 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-48 md:h-52 w-full">
              <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <FaExternalLinkAlt size={14} /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-zinc-800 text-gray-800 dark:text-white border border-gray-200 dark:border-zinc-700 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-zinc-700 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}