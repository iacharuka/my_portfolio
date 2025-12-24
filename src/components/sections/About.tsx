"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary mb-4 uppercase tracking-wider"
          >
            About Me
          </motion.span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-lg sm:text-xl text-foreground/80 leading-relaxed">
            <p className="text-foreground/90">
              I&apos;m a <strong className="text-primary font-semibold">Software Engineering undergraduate</strong> at{" "}
              <strong className="font-semibold">NSBM Green University, Sri Lanka</strong>, passionate about building full-stack
              applications that solve real-world problems.
            </p>
            <p className="text-foreground/80">
              I focus on creating fast, scalable, and impactful systems - combining clean architecture,
              real-time features, and smooth, user-friendly experiences across web and mobile platforms.
            </p>
            <p className="text-foreground/80">
              Driven by curiosity and a desire to make technology meaningful, I&apos;m constantly
              sharpening my skills in performance optimization and end-to-end development - always
              prioritizing intuitive, polished UX that users love.
            </p>
            <p className="text-lg font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent pt-2">
              Always learning, always building - ready for high-impact software engineering roles.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Projects", value: "10+", icon: "🚀" },
              { label: "Technologies", value: "15+", icon: "⚡" },
              { label: "Experience", value: "2+ Years", icon: "💼" },
              { label: "Education", value: "BSc (Hons)", icon: "🎓" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-accent to-background border border-border hover:border-primary/50 transition-all duration-500 backdrop-blur-sm"
                whileHover={{ scale: 1.03, y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}