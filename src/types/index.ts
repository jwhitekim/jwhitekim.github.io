export interface Project {
  id: string
  title: string
  tags: string[]
  description: string
  stack: string[]
  github?: string
  paper?: string
  status: 'active' | 'completed' | 'ongoing'
}

export interface PostFrontmatter {
  title: string
  date: string
  tags: string[]
  summary: string
}

export interface Post extends PostFrontmatter {
  slug: string
}
