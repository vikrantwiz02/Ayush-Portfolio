import type { Project } from "../types"

export const projects: Project[] = [
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
  // Add more projects as needed
]

