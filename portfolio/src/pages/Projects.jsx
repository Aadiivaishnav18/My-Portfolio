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
    desc: "An interactive web platform crafted with a modern glassmorphism UI, engaging video backgrounds, and smooth framer-motion animations to deliver a premium user experience.",
    tech: "React, Tailwind CSS, Framer Motion",
    github: "https://github.com/Aadiivaishnav18/Dream-Miles",
    live: "#",
  },

 {
    title: "SkyCast",
    subtitle: "Weather Forecasting App",
    desc: "A responsive weather web app that displays real-time and forecast weather data, including air quality, UV index, and astronomy details, using WeatherAPI.",
    tech: "HTML, CSS, JS, React",
    github: "https://github.com/Aadiivaishnav18/SkyCast",
    live: "#",
  },

  {
  title: "Snake Game",
  subtitle: "Interactive Browser Game",
  desc: "A classic Snake Game built using HTML, CSS, and JavaScript with smooth controls, score tracking, and responsive gameplay for an engaging user experience.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/Aadiivaishnav18/Snake-Game",
  live: "#",
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

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                {projects[currentIndex].desc}
              </p>

              {/* Footer */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-gray-200 dark:border-zinc-800/50 pt-8">
                <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <span className="font-bold text-black dark:text-white">
                    Tech Stack:
                  </span>{" "}
                  {projects[currentIndex].tech}
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

                  <a
                    href={projects[currentIndex].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 px-6 py-3
                      bg-gradient-to-r from-indigo-600 to-blue-500
                      hover:from-indigo-500 hover:to-blue-400
                      text-white rounded-full font-semibold transition-all
                      shadow-[0_0_20px_rgba(79,70,229,0.3)]
                    "
                  >
                    Live Website
                  </a>
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