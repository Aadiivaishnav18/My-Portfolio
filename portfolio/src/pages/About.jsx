import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary-light dark:bg-primary-dark mx-auto rounded"></div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  src="https://images.pexels.com/photos/14553709/pexels-photo-14553709.jpeg"
  alt="About"
  className="rounded-xl shadow-lg w-full h-80 md:h-96 lg:h-[28rem] object-cover"
/>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            I am a passionate web developer focused on building scalable, performant frontend architectures. Currently pursuing my B.Tech in Computer Science & Engineering at Arya College of Engineering, I bridge the gap between design and solid engineering.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[ { label: "Projects Completed", value: "15+" }, { label: "Years Experience", value: "2+" } ].map((stat, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                <h4 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-2">{stat.value}</h4>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;