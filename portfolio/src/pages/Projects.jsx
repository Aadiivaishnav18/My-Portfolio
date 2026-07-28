import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projects = [
 {
   title: "Dream Miles",
   subtitle: "Interactive UI Platform",
   desc: [
     "Built a component-driven React frontend with Tailwind CSS and Framer Motion for polished micro-interactions.",
     "Implemented glassmorphism hero sections with responsive video backgrounds and lazy-loaded media to improve performance.",
     "Created reusable UI components (cards, modals, form elements) and a design system for consistency.",
     "Focused on accessibility improvements: semantic markup, keyboard navigation, and ARIA attributes where needed.",
   ],
   tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
   github: "https://github.com/Aadiivaishnav18/Dream-Miles",
   live: "https://dream-miles.netlify.app/",
 },

 {
   title: "NoteNest",
   subtitle: "Note Making App",
   desc: [
     "Developed a responsive React note-taking app with local persistence (localStorage).",
     "Implemented CRUD operations with instant UI feedback and optimistic updates.",
     "Added search and filter capabilities for quick note retrieval and a compact, accessible UI.",
     "Structured components to enable future sync/auth integration easily.",
   ],
   tech: ["React", "HTML", "CSS", "JavaScript"],
   github: "https://github.com/Aadiivaishnav18/NoteNest.git",
   live: "https://notenest-webapp.netlify.app/",
 },

 {
   title: "Venom-Dash",
   subtitle: "Interactive Browser Snake Game",
   desc: [
     "Classic Snake game implemented using canvas with smooth controls and responsive scaling.",
     "Built performant game loop with efficient rendering and collision detection.",
     "Added score tracking, difficulty progression, and mobile-friendly input handling.",
   ],
   tech: ["HTML", "CSS", "JavaScript"],
   github: "https://github.com/Aadiivaishnav18/Snake-Game",
   live: "https://venom-dash.netlify.app/signin.html",
 },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="
        pt-24 pb-24 px-6 md:px-16 min-h-screen
        bg-white dark:bg-black
        text-black dark:text-white
        transition-colors duration-500
        relative overflow-hidden flex flex-col items-center justify-center
      "
    >
    
      <div className="absolute top-10 left-[-10%] w-96 h-96 bg-purple-500 opacity-10 dark:opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-blue-500 opacity-10 dark:opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 relative z-10 text-transparent bg-clip-text bg-gradient-to-r  bg-emerald-500"
      >
        Projects
      </motion.h2>

  
      <div className="relative w-full max-w-5xl flex items-center justify-center z-10">

        {/* Left Arrow */}
        <button
          onClick={prevProject}
          className="
            hidden md:flex absolute -left-16 w-12 h-12
            bg-gray-200 dark:bg-zinc-800
            hover:bg-gray-300 dark:hover:bg-zinc-700
            text-black dark:text-white
            rounded-full items-center justify-center transition-all shadow-lg z-20
          "
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Card */}
        <div className="w-full overflow-hidden px-2 py-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="
                bg-gray-50 dark:bg-[#1a1a1a]
                rounded-3xl p-8 md:p-10
                border border-gray-200 dark:border-zinc-800
                shadow-2xl w-full
                transition-colors duration-500
              "
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shrink-0">
                  {currentIndex + 1}
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-1 tracking-wide">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {projects[currentIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Description: bullet list with staggered animation */}
              <motion.ul className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 space-y-2">
                {projects[currentIndex].desc.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.36 }}
                    className="list-disc pl-5"
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Tech tags + actions */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-gray-200 dark:border-zinc-800/50 pt-6">
                <div className="flex flex-wrap gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  {projects[currentIndex].tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-800 text-xs md:text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 px-6 py-3
                      bg-gray-200 dark:bg-zinc-800
                      hover:bg-gray-300 dark:hover:bg-zinc-700
                      text-black dark:text-white
                      rounded-full font-semibold transition-all shadow-md
                    "
                  >
                    <FaGithub size={18} /> GitHub
                  </a>

                  {projects[currentIndex].live && (
                    <a
                      href={projects[currentIndex].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2 px-6 py-3
                        bg-gradient-to-r from-emerald-600 to-emerald-500
                        hover:from-emerald-500 hover:to-emerald-400
                        text-white rounded-full font-semibold transition-all
                        shadow-[0_0_20px_rgba(16,185,129,0.18)]
                      "
                    >
                      Live Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextProject}
          className="
            hidden md:flex absolute -right-16 w-12 h-12
            bg-gray-200 dark:bg-zinc-800
            hover:bg-gray-300 dark:hover:bg-zinc-700
            text-black dark:text-white
            rounded-full items-center justify-center transition-all shadow-lg z-20
          "
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden items-center gap-6 mt-8 z-10">
        <button
          onClick={prevProject}
          className="w-10 h-10 bg-gray-200 dark:bg-zinc-800 text-black dark:text-white rounded-full flex items-center justify-center"
        >
          <FaChevronLeft size={14} />
        </button>

        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-gray-400 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextProject}
          className="w-10 h-10 bg-gray-200 dark:bg-zinc-800 text-black dark:text-white rounded-full flex items-center justify-center"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}