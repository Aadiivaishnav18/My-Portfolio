import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode size={35} />,
      title: "Web Development",
      desc: "Modern responsive websites built with latest technologies and clean architecture.",
    },
    {
      icon: <FaPaintBrush size={35} />,
      title: "UI/UX Design",
      desc: "Creative and user-friendly interface designs focused on better user experience.",
    },
    {
      icon: <FaLaptopCode size={35} />,
      title: "Frontend Development",
      desc: "React.js based fast, scalable and modern frontend web applications.",
    },
    {
      icon: <FaMobileAlt size={35} />,
      title: "Responsive Design",
      desc: "Mobile-first layouts optimized beautifully across all screen sizes.",
    },
  ];

  return (
    <section
      id="services"
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
        My Services
      </motion.h2>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              y: -12,
              scale: 1.05,
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
            <div className="text-emerald-500 mb-5 text-4xl group-hover:scale-125 group-hover:rotate-6 transition duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-6 h-1 w-12 bg-emerald-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}