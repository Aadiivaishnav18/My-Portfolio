import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and Tailwind CSS showcasing projects, skills, and animations.",
    img: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-commerce App",
    desc: "A fully functional e-commerce app using React, Redux, and Stripe API for payment integration.",
    img: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/ecommerce",
    live: "https://myecommerceapp.com",
  },
  {
    title: "Travel Blog",
    desc: "A travel blog created with Next.js and Tailwind CSS with CMS integration for easy content management.",
    img: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/travel-blog",
    live: "https://mytravelblog.com",
  },
  {
    title: "Chat App",
    desc: "Real-time chat application using React and Firebase, supporting multiple users and chat rooms.",
    img: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/chat-app",
    live: "https://mychatapp.com",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-6 md:px-20 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.desc}</p>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-xl font-semibold hover:bg-emerald-400 hover:text-white transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-xl font-semibold hover:bg-emerald-400 hover:text-white transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}