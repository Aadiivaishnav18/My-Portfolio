import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 relative overflow-hidden bg-white dark:bg-black text-black dark:text-white transition"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-emerald-500/20 rounded-2xl -z-10 translate-x-3 translate-y-3"></div>
            <div className="absolute inset-0 bg-emerald-500/10 rounded-xl -z-10 blur-xl"></div>
            
            <img
              src="https://images.pexels.com/photos/14553709/pexels-photo-14553709.jpeg"
              alt="About Me"
              className="rounded-xl shadow-lg w-full h-80 md:h-[26rem] object-cover border border-gray-200 dark:border-zinc-800 relative z-10"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-5 text-base lg:text-lg leading-relaxed">
              I am a passionate web developer focused on building scalable, performant frontend architectures. Currently pursuing my B.Tech in Computer Science & Engineering at Arya College of Engineering, I bridge the gap between design and solid engineering.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-8 text-base lg:text-lg leading-relaxed">
              I thrive on turning complex problems into beautiful, intuitive, and highly functional digital experiences. Let's build something amazing together.
            </motion.p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Projects Completed", value: "15+" },
                { label: "Years Experience", value: "2+" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-200 dark:border-zinc-800 text-center hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group cursor-default"
                >
                  <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-emerald-500 transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;