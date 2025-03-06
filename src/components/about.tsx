"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full gradient-border"></div>
              <img
                src="/placeholder.svg?height=400&width=400&text=Ayush+Kumar"
                alt="Ayush Kumar"
                className="rounded-full object-cover w-full h-full relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">A passionate Full Stack Developer based in IIITDM Jabalpur, Madhya Pradesh, India</h3>

            <p className="text-muted-foreground">
              I am a full stack web developer with a passion for creating interactive and responsive web applications. I
              have experience working with JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and more.
            </p>

            <p className="text-muted-foreground">
              My journey in web development started 1 year ago, and since then, I've worked on numerous projects that
              have helped me refine my skills and stay up-to-date with the latest technologies and best practices.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>

            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

