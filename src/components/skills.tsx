"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3/SASS", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Redux", level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 70 },
    { name: "REST API", level: 90 },
    { name: "Firebase", level: 78 },
    { name: "AWS", level: 65 },
  ]

  const otherSkills = [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "Jest", level: 80 },
    { name: "Figma", level: 85 },
    { name: "Responsive Design", level: 95 },
    { name: "Performance Optimization", level: 85 },
    { name: "SEO", level: 75 },
  ]

  const techLogos = {
    "React": "/react.png",
    "Next.js": "/next.js.svg",
    "Node.js": "/nodejs.png",
    "TypeScript": "/typescript.png",
    "Tailwind": "/tailwind.png",
    "MongoDB": "/mongodb.svg",
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <motion.div initial="initial" animate="animate" variants={fadeInUp} className="container mx-auto">
      <div className="flex flex-col space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and expertise in various technologies.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-8"
        >
          {(["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "MongoDB"] as (keyof typeof techLogos)[]).map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img
                      src={techLogos[tech]}
                      alt={tech}
                      className="max-w-full max-h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="font-medium">{tech}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  )
}