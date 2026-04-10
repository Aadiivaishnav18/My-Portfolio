import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-24 px-6 md:px-16 min-h-screen bg-white dark:bg-black text-black dark:text-white transition relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 opacity-10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
      >
        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Touch</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          className="bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-lg space-y-6"
        >
          <div>
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm md:text-base"
            />
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm md:text-base"
            />
          </div>

          <div>
            <textarea
              name="msg"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl h-36 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none text-sm md:text-base"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
          >
            Send Message <FaPaperPlane size={14} />
          </motion.button>
        </motion.form>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {[
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "aditya@email.com",
            },
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              value: "+91 9876543210",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              value: "Jaipur, India",
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 group flex items-center gap-5"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-zinc-800 text-emerald-500 text-xl shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                {info.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-emerald-500 transition-colors">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-1">
                  {info.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}