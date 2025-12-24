"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/iacharuka",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ishanka-charuka",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ishankacharuka4336@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            © {new Date().getFullYear()} Ishanka Charuka. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg bg-accent border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            Built with Next.js & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

