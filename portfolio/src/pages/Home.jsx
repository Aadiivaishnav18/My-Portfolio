import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import meImage from "../assets/me.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-24 bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full"></div>

      {/* Left Content */}
      <div className="max-w-xl z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-emerald-500 drop-shadow-lg">
            Aditya
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-400 font-medium"
        >
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
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        >
          I create modern, responsive and interactive web experiences
          with React.js, Tailwind CSS and smooth animations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mb-8 flex-wrap"
        >
          <button className="bg-emerald-500 hover:bg-emerald-400 hover:scale-105 text-black px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300">
            Hire Me
          </button>

          <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black hover:scale-105 px-6 py-3 rounded-xl transition-all duration-300">
            Download Resume
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 text-2xl text-emerald-500"
        >
          <a href="#" className="hover:scale-125 hover:text-emerald-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="#" className="hover:scale-125 hover:text-emerald-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:scale-125 hover:text-emerald-400 transition duration-300">
            <FaInstagram />
          </a>
        </motion.div>
      </div>

{/* Right Image */}
<motion.div
  className="relative z-10 mb-10 md:mb-0 flex justify-center items-center"
>
  {/* Moving Glow Rings */}
  <motion.div
    className="absolute w-96 h-96 md:w-[26rem] md:h-[26rem] rounded-full bg-emerald-500 opacity-20 blur-3xl"
    animate={{ rotate: [0, 360] }}
    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
  />
  <motion.div
    className="absolute w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full bg-emerald-400 opacity-30 blur-2xl"
    animate={{ rotate: [360, 0], scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-emerald-500 opacity-10 blur-xl"
    animate={{ rotate: [0, -360], scale: [1, 1.02, 1] }}
    transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
  />

  {/* Profile Image */}
  <motion.img
    src={meImage}
    alt="Profile"
    className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-emerald-500 relative z-10"
    whileHover={{ scale: 1.05 }}
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  />
</motion.div>
    </section>
  );
}