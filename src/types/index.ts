export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  category: string
}

export interface Skill {
  name: string
  level: number
}

