import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add glassmorphism effect dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "services",
    "achievements",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-sm border-b border-gray-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Aditya
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true} // Enables active state highlighting
              smooth={true}
              duration={600}
              offset={-80} // Perfectly offsets the fixed navbar height
              activeClass="text-emerald-500 font-bold border-b-2 border-emerald-500 pb-1" // What it looks like when active
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-all duration-300 capitalize text-sm lg:text-base"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  activeClass="text-emerald-500 font-bold bg-emerald-500/10 rounded-xl"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-emerald-500 px-4 py-3 capitalize transition-all duration-300 block rounded-xl"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}