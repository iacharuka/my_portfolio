"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ChoconutZ E-Commerce",
    description:
      "A full-featured e-commerce platform with interactive product catalog, advanced filtering, shopping cart, and complete inventory management admin dashboard.",
    tech: ["React.js", "Node.js", "Firebase"],
    github: "https://github.com/iacharuka/choconutz",
    live: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Yan Travel Website",
    description:
      "The official digital presence for my travel business. A responsive, multi-page site featuring package listings, service details, and interactive contact forms.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/iacharuka",
    live: null,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Derana Agri",
    description:
      "An agricultural web platform connecting local farmers with consumers. Features include product listing, order management, and responsive interface for accessible trading.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/iacharuka",
    live: null,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Travel Guide App",
    description:
      "A Flutter-based mobile application providing destination information and travel tips. Implements state management (GetX) and RESTful API integration.",
    tech: ["Flutter", "Dart", "GetX", "HTTP"],
    github: "https://github.com/iacharuka",
    live: null,
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-gradient-to-b from-background to-accent/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
            My Work
          </motion.span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background to-accent/50 border border-border hover:border-primary/50 transition-all duration-500 backdrop-blur-sm"
              whileHover={{ y: -12, scale: 1.01 }}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-5xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent opacity-20`}>
                    #{project.id}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-accent/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-accent/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm rounded-lg bg-accent/80 border border-border text-foreground/80 hover:border-primary hover:text-primary transition-all duration-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}