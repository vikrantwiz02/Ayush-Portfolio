"use client"

import { motion, type Variants } from "framer-motion"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" className="overflow-hidden">
      <Hero />
      <motion.section id="about" className="py-20 bg-secondary" variants={fadeInUp}>
        <About />
      </motion.section>
      <motion.section id="skills" className="py-20" variants={fadeInUp}>
        <Skills />
      </motion.section>
      <motion.section id="projects" className="py-20 bg-secondary" variants={fadeInUp}>
        <Projects />
      </motion.section>
      <motion.section id="contact" className="py-20" variants={fadeInUp}>
        <Contact />
      </motion.section>
    </motion.div>
  )
}

