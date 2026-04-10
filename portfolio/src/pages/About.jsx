import { motion } from "framer-motion";


export default function About() {
  const hobbies = [
    "Frontend Development",
    "DSA & Problem Solving",
    "Cricket",
    "Travelling",
    "Cooking"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };

  return (
    <section
      id="about"
      className="
        pt-24 pb-24 px-6 md:px-16 min-h-screen
        bg-white dark:bg-black
        text-gray-800 dark:text-gray-300
        transition-colors duration-500
        relative overflow-hidden flex items-center justify-center
      "
    >
    
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500 opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">
    
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            className="relative flex justify-center md:justify-end"
          >
            <div
              className="
                w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]
                relative rounded-2xl overflow-hidden
                bg-gray-100 dark:bg-zinc-900
                transition-colors duration-500 shadow-lg
              "
            >
              <img
                src="https://images.pexels.com/photos/36571389/pexels-photo-36571389.jpeg"
                alt="Aditya Avatar"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-emerald-500 mb-8"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-6"
            >
              I'm Aditya, a passionate{" "}
              <strong className="text-black dark:text-white">
                Frontend Developer
              </strong>{" "}
              focused on crafting modern, responsive, and user-friendly web
              interfaces using{" "}
              <strong className="text-black dark:text-white">
                React.js, JavaScript, and Tailwind CSS
              </strong>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed"
            >
              I enjoy turning ideas into visually appealing and functional
              digital experiences with clean design and smooth performance.
              Currently pursuing my{" "}
              <strong className="text-black dark:text-white">
                B.Tech in Computer Science
              </strong>{" "}
              with a{" "}
              <strong className="text-black dark:text-white">
                CGPA of 8.6/10
              </strong>
              , and actively improving my skills through projects, hackathons,
              and coding competitions.
            </motion.p>
          </motion.div>
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-5">
            Hobbies & Interests
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 max-w-full">
            {hobbies.map((hobby, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-3 py-1.5 md:px-4 md:py-2 rounded-full
                  bg-emerald-500/10 border border-emerald-500/20
                  text-emerald-500 dark:text-emerald-400
                  text-xs md:text-sm font-medium cursor-default shadow-sm
                  hover:bg-emerald-500/20 hover:border-emerald-500/40
                  transition-all duration-300
                "
              >
                {hobby}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}