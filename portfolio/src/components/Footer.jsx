import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm text-gray-400">
          © 2026 Aditya. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-emerald-400 transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-emerald-400 transition"
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-emerald-400 transition"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-emerald-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}