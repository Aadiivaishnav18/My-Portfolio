import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = ["home", "about", "projects", "contact"];

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-zinc-800 py-10 relative overflow-hidden transition-colors duration-300 mt-auto">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-emerald-500 opacity-10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-2 cursor-pointer" onClick={() => scroll.scrollToTop()}>
            Aditya
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            © {currentYear} Aditya Vaishnav. All Rights Reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 capitalize transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-5">
          <div className="flex gap-4 border-r border-gray-300 dark:border-zinc-700 pr-5">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-400 hover:text-emerald-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" })}
            className="p-3 rounded-xl bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}