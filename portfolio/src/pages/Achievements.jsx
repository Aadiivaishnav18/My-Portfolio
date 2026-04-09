import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaStar } from "react-icons/fa";

export default function Achievements() {
  const data = [
    {
      icon: <FaTrophy />,
      title: "React Certification",
      desc: "Completed advanced React certification with modern frontend concepts.",
    },
    {
      icon: <FaMedal />,
      title: "Hackathon Participation",
      desc: "Successfully participated in national-level coding hackathon events.",
    },
    {
      icon: <FaAward />,
      title: "20+ Projects Built",
      desc: "Developed multiple responsive and real-world portfolio projects.",
    },
    {
      icon: <FaStar />,
      title: "Top Performer",
      desc: "Recognized as top performer in academic and technical activities.",
    },
  ];

  return (
    <section
      id="achievements"
      className="pt-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-emerald-500"
      >
        Achievements
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="
              relative overflow-hidden
              bg-gradient-to-br from-gray-100 to-gray-200
              dark:from-gray-900 dark:to-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-3xl p-8 shadow-lg
              hover:shadow-emerald-500/30
              transition-all duration-500
              group cursor-pointer
            "
          >
            {/* Glow Circle */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500 opacity-10 rounded-full group-hover:scale-150 transition duration-500"></div>

            {/* Icon */}
            <div className="text-4xl text-emerald-500 mb-5 group-hover:rotate-12 transition duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>

            {/* Bottom Glow Line */}
            <div className="mt-6 h-1 w-12 bg-emerald-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}