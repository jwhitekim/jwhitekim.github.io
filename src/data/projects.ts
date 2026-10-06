export interface Project {
  id: string
  title: string
  tags: string[]
  description: string
  stack: string[]
  github?: string
  paper?: string
  // 160px 썸네일 (public/images/ 기준 경로). imageHover 는 마우스를 올렸을 때 바뀌는 이미지
  image?: string
  imageHover?: string
  status: 'completed' | 'ongoing'
}

export const projects: Project[] = [
  {
    id: 'agentic-ai-system',
    title: 'Agentic AI System',
    tags: ['Agentic AI', 'CV', 'LLM'],
    description:
      '실제 환경에서 인식부터 행동까지 이어지도록 CV 파이프라인과 LLM 에이전트를 통합합니다. LangGraph 기반 에이전트 루프와 MCP 도구 호출을 탐구하고 있습니다. (진행 중)',
    stack: ['Python', 'LangGraph', 'Anthropic SDK', 'PyTorch', 'MCP'],
    status: 'ongoing',
  },
]
