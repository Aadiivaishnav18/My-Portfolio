import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs 
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import meImage from "../assets/me.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-24 bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden"
    >
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-400 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl z-10 w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
        >
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 drop-shadow-sm">
            Aditya
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-3xl mb-6 text-gray-600 dark:text-gray-400 font-semibold h-10">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "UI/UX Designer",
              "Creative Coder",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-md"
        >
          I create modern, responsive, and interactive web experiences with React.js, Tailwind CSS, and smooth animations.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 mb-10 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-black px-8 py-3.5 rounded-full font-bold shadow-lg transition-all duration-300"
          >
            Hire Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-emerald-500 text-emerald-500 px-8 py-3.5 rounded-full font-bold transition-all duration-300 backdrop-blur-sm"
          >
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 text-3xl text-gray-400">
          {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, color: "#10b981", rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors duration-300"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 md:mb-0 flex justify-center items-center mt-10 md:mt-0 w-full md:w-1/2"
      >
        <motion.div
          className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full bg-emerald-500 opacity-20 blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-300 opacity-20 blur-2xl border border-emerald-500"
          animate={{ rotate: [360, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-10"
        >
          <img
            src={meImage}
            alt="Aditya"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-[0_0_40px_rgba(16,185,129,0.3)] border-4 border-emerald-500/50"
          />

          {/* --- 5 USEFUL TECH POPS (DIFFERENT SIZES, PLACED FURTHER AWAY) --- */}

          {/* Pop 1: Extra Large - React */}
          <motion.div
            className="absolute top-[-5%] -left-8 md:top-[5%] md:-left-28 bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 text-emerald-500 text-4xl md:text-6xl"
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaReact />
          </motion.div>

          {/* Pop 2: Large - JavaScript */}
          <motion.div
            className="absolute bottom-[5%] -right-6 md:bottom-[10%] md:-right-24 bg-white dark:bg-zinc-900 p-4 md:p-5 rounded-3xl shadow-xl border border-gray-200 dark:border-zinc-800 text-emerald-400 text-3xl md:text-5xl"
            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaJs />
          </motion.div>

          {/* Pop 3: Medium - Node.js */}
          <motion.div
            className="absolute top-[10%] -right-4 md:-top-[5%] md:-right-16 bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-full shadow-lg border border-gray-200 dark:border-zinc-800 text-emerald-500 text-2xl md:text-4xl"
            animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaNodeJs />
          </motion.div>

          {/* Pop 4: Small - HTML5 */}
          <motion.div
            className="absolute bottom-[20%] -left-10 md:bottom-[25%] md:-left-20 bg-white dark:bg-zinc-900 p-2 md:p-3 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 text-emerald-400 text-xl md:text-2xl"
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaHtml5 />
          </motion.div>

          {/* Pop 5: Extra Small - CSS3 */}
          <motion.div
            className="absolute top-[45%] -right-10 md:top-[40%] md:-right-32 bg-white dark:bg-zinc-900 p-1.5 md:p-2 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800 text-emerald-500 text-lg md:text-xl"
            animate={{ x: [0, -10, 0], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaCss3Alt />
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}