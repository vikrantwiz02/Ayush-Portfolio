"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 gradient-text"
          >
            Ayush Kumar
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            <span>{typedText}</span>
            <span className="animate-blink">|</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
          >
            I build exceptional and accessible digital experiences for the web.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button size="lg" className="gradient-bg text-white hover:opacity-90">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center space-x-4 mt-12"
        >
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-blue-400 hover:bg-white/10">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-blue-400 hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-blue-400 hover:bg-white/10">
            <Twitter className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

