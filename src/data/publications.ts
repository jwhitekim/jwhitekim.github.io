export interface Publication {
  year: string
  title: string
  titleKo: string
  tags: string[]
  url: string
}

export const publications: Publication[] = [
  {
    year: '2024',
    title: 'Real-time Indoor Crowd Density Analysis Using Head Detection and Line Density Estimation',
    titleKo: '사람 머리 탐지와 선 밀도 분석을 이용한 실시간 실내 혼잡도 분석 시스템',
    tags: ['CV', 'System Design', 'KINGPC'],
    url: '#',
  },
]
