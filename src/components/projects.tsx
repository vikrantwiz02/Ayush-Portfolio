"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600&text=Portfolio",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#",
    category: "frontend",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600&text=Task+App",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    category: "frontend",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging, group chats, and file sharing.",
    image: "/placeholder.svg?height=400&width=600&text=Chat+App",
    tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+App",
    tags: ["React", "OpenWeather API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    category: "frontend",
  },
  {
    id: 6,
    title: "RESTful API Service",
    description: "A RESTful API service for a blog platform with authentication and authorization.",
    image: "/placeholder.svg?height=400&width=600&text=API+Service",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "#",
    liveUrl: "#",
    category: "backend",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "gradient-bg text-white" : "text-white border-white hover:bg-white/10"}
          >
            All
          </Button>
          <Button
            variant={filter === "frontend" ? "default" : "outline"}
            onClick={() => setFilter("frontend")}
            className={filter === "frontend" ? "gradient-bg text-white" : "text-white border-white hover:bg-white/10"}
          >
            Frontend
          </Button>
          <Button
            variant={filter === "backend" ? "default" : "outline"}
            onClick={() => setFilter("backend")}
            className={filter === "backend" ? "gradient-bg text-white" : "text-white border-white hover:bg-white/10"}
          >
            Backend
          </Button>
          <Button
            variant={filter === "fullstack" ? "default" : "outline"}
            onClick={() => setFilter("fullstack")}
            className={filter === "fullstack" ? "gradient-bg text-white" : "text-white border-white hover:bg-white/10"}
          >
            Full Stack
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg glass-effect">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {hoveredId === project.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" className="gradient-bg" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="gradient-text">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="gradient-bg text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

