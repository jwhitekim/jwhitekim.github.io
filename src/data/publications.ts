export interface Publication {
  year: string
  title: string
  titleKo?: string
  authors: string[]
  venue: string
  location: string
  date: string
  pages: string
  tags: string[]
  code?: string
  url?: string
  // 160px 썸네일 (public/images/ 기준 경로). imageHover 는 마우스를 올렸을 때 바뀌는 이미지
  image?: string
  imageHover?: string
  highlight?: boolean
}

// 본인 이름 표기 (저자 목록에서 굵게 표시)
export const selfAuthor = 'J.-H. Kim'

export const publications: Publication[] = [
  {
    year: '2026',
    title: 'Rule-Gated Selective LLM Invocation for Indoor Congestion Monitoring',
    authors: ['J.-H. Kim', 'S.-W. Lee'],
    venue: 'Proc. of 2026 NCISS Summer Conference',
    location: 'Seongnam, Korea',
    date: 'Aug 2026',
    pages: 'pp. 72-75',
    tags: ['LLM', 'Agentic AI', '혼잡도 분석'],
    code: 'https://github.com/jwhitekim/congestion-llm-gating',
  },
  {
    year: '2026',
    title: 'Real-time Indoor Congestion Analysis System Using Head Detection and Line Density Analysis',
    titleKo: '사람 머리 탐지와 선 밀도 분석을 이용한 실시간 실내 혼잡도 분석 시스템',
    authors: ['J.-H. Kim', 'S.-W. Lee'],
    venue: 'Proc. of 2026 KING Spring Conference',
    location: 'Gwangju, Korea',
    date: 'May 2026',
    pages: 'pp. 224-227',
    tags: ['CV', '시스템 설계'],
    code: 'https://github.com/jwhitekim/indoor-congestion-analysis',
  },
]
