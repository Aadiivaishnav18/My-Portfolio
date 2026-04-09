import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      msg: e.target.msg.value,
    };

    const old = JSON.parse(localStorage.getItem("messages")) || [];
    localStorage.setItem("messages", JSON.stringify([...old, data]));

    alert("Message Sent Successfully ✅");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="pt-24 px-6 md:px-16 min-h-screen 
      bg-white dark:bg-black text-black dark:text-white transition"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-emerald-500"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-900 p-8 rounded-3xl shadow-xl space-y-5"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none focus:border-emerald-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none focus:border-emerald-500"
          />

          <textarea
            name="msg"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl h-36 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none focus:border-emerald-500 resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Right Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Email */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-emerald-500/20 transition group">
            <div className="flex items-center gap-4">
              <div className="text-emerald-500 text-2xl group-hover:scale-110 transition">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-500">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  aditya@email.com
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-emerald-500/20 transition group">
            <div className="flex items-center gap-4">
              <div className="text-emerald-500 text-2xl group-hover:scale-110 transition">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-500">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +91 9876543210
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-emerald-500/20 transition group">
            <div className="flex items-center gap-4">
              <div className="text-emerald-500 text-2xl group-hover:scale-110 transition">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-500">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}