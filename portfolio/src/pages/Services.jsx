import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={22} />,
      title: "Frontend Development",
      desc: "Building modern, interactive, and high-performance web interfaces using React.js and latest frontend technologies.",
    },
    {
      icon: <FaPaintBrush size={22} />,
      title: "UI Implementation",
      desc: "Transforming creative designs into pixel-perfect, responsive, and visually appealing user interfaces.",
    },
    {
      icon: <FaMobileAlt size={22} />,
      title: "Responsive Web Design",
      desc: "Creating mobile-friendly layouts that adapt seamlessly across desktops, tablets, and smartphones.",
    },
    {
      icon: <FaCode size={22} />,
      title: "Reusable Components",
      desc: "Developing clean, scalable, and reusable frontend components for maintainable and efficient codebases.",
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
      id="services"
      className="pt-24 pb-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden flex flex-col justify-center"
    >
  
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 relative z-10"
      >
        What I{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
          Offer
        </span>
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
          >
           
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-[80px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

        
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 text-emerald-500 shadow-sm group-hover:shadow-emerald-500/20 group-hover:-translate-y-1 transition-all duration-300">
                {service.icon}
              </div>

              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-zinc-800 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500 transition-all duration-300">
                <FaArrowRight size={14} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 tracking-tight group-hover:text-emerald-500 transition-colors duration-300">
              {service.title}
            </h3>

        
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}