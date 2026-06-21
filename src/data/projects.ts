export interface Project {
  id: string
  title: string
  tags: string[]
  description: string
  stack: string[]
  github?: string
  paper?: string
  status: 'completed' | 'ongoing'
}

export const projects: Project[] = [
  {
    id: 'indoor-congestion',
    title: '실시간 실내 혼잡도 분석 시스템',
    tags: ['CV', 'System Design'],
    description:
      'Real-time indoor crowd density analysis using YOLOv8m object detection, OC-SORT multi-object tracking, and Edge Density estimation — achieving 92% accuracy in real environments.',
    stack: ['Python', 'YOLOv8m', 'OC-SORT', 'FastAPI', 'OpenCV'],
    status: 'completed',
  },
  {
    id: 'agentic-ai-system',
    title: 'Agentic AI System',
    tags: ['Agentic AI', 'CV', 'LLM'],
    description:
      'Integrating CV pipelines with LLM agents for perception-to-action in real environments. Exploring LangGraph-based agent loops with MCP tool calling. (In progress)',
    stack: ['Python', 'LangGraph', 'Anthropic SDK', 'PyTorch', 'MCP'],
    status: 'ongoing',
  },
]
