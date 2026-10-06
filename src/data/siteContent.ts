export const siteContent = {
  profile: {
    name: 'Jun-Hee Kim',
    nameKo: '김준희',
    email: 'kimjunhee2483@gmail.com',
    affiliation: '가천대학교 PRML 연구실',
    role: '석사과정',
    locationLabel: '서울 거주',
    timezoneLabel: 'KST',
  },

  nav: [
    { href: '/#work', label: 'Work' },
    { href: '/#research', label: 'Research' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#publications', label: 'Publications' },
    { href: '/#stack', label: 'Stack' },
    { href: '/#contact', label: 'Contact' },
  ],

  header: {
    themeToggleLabel: 'Toggle dark mode',
  },

  hero: {
    // 프로필 사진: public/images/ 에 넣고 경로를 적으면 오른쪽에 원형으로 표시된다 (예: '/images/profile.jpg')
    photo: undefined as string | undefined,
    bio: [
      '가천대학교 PRML 연구실 석사과정생입니다. 컴퓨터 비전 파이프라인, LLM 추론, 도구 기반 행동을 실제 환경에서 하나로 연결하는 시스템을 만듭니다.',
      '실시간 실내 혼잡도 분석 시스템을 만들었고, 지금은 인식 결과를 바탕으로 LLM이 판단하고 도구를 실행하는 에이전트를 연구하고 있습니다.',
    ],
    emailLabel: '이메일',
    shortcutKey: 'c',
    shortcutSuffix: '키를 누르면 이메일 주소가 복사됩니다',
  },

  work: {
    label: '작업',
    body:
      '주된 작업은 시스템 통합입니다. 인식 파이프라인, 런타임 상태, 의사결정 로직, 배포 가능한 API를 하나로 묶습니다. 진행 중인 작업은 강조 표시했습니다.',
    statusLabels: {
      completed: '검증 완료',
      ongoing: '진행 중',
    },
    linkLabels: {
      github: '코드',
      paper: '논문',
    },
    pipelines: {
      'indoor-congestion': ['카메라 입력', '머리 탐지', '객체 추적', '밀도 추정'],
      'agentic-ai-system': ['인식', '런타임 상태', 'LLM 추론', '도구 실행'],
    },
  },

  research: {
    label: '연구',
    body:
      '모델 단위 실험에서 출발해, 환경을 관찰하고 추론하며 실제 행동을 일으키는 완결된 시스템으로 작업을 넓혀 왔습니다.',
    timeline: [
      {
        step: '01',
        field: '의료 AI',
        title: '모델 단위 실험에서 시작',
        body:
          '이미지 분류를 위해 Transformer 모델을 파인튜닝하며 모델 스택을 이해했지만, 배포된 시스템 없이는 작업이 미완성처럼 느껴졌습니다.',
      },
      {
        step: '02',
        field: '혼잡도 분석',
        title: '실시간 인식 시스템으로 이동',
        body:
          '실내 혼잡도 프로젝트에서 탐지, 추적, 밀도 추정, API 서빙을 실제 환경에서 동작하는 하나의 파이프라인으로 연결했습니다.',
      },
      {
        step: '03',
        field: 'Agentic AI',
        title: '인식에서 행동까지 잇는 에이전트',
        body:
          '현재 연구는 CV 인식이 LLM 추론과 도구 사용으로 이어지게 하여, 에이전트가 고정된 임계값 대신 변화하는 환경에 대응하도록 하는 것입니다.',
        active: true,
      },
    ],
  },

  experience: {
    label: '경력',
  },

  publications: {
    label: '논문',
    paperLabel: '논문 보기',
    codeLabel: '코드',
  },

  stack: {
    label: '기술 스택',
    items: ['Python', 'PyTorch', 'YOLOv8', 'LangGraph', 'Anthropic SDK', 'MCP', 'React', 'FastAPI'],
  },

  writing: {
    label: '글',
    body: '연구 노트와 생각을 기록합니다.',
    empty: '아직 글이 없습니다.',
    readTimeSuffix: '분',
  },

  contact: {
    label: '연락',
    body: '협업, 연구, 시스템 작업에 관심이 있으시면 메일을 보내 주세요.',
    links: [
      { label: 'GitHub', value: 'github.com/jwhitekim', href: 'https://github.com/jwhitekim' },
      { label: 'LinkedIn', value: '/in/kim-jun-hee', href: '#' },
    ],
  },

  post: {
    backLabel: '← 목록으로',
    previousLabel: '← 이전 글',
    nextLabel: '다음 글 →',
    tagPrefix: '#',
  },

  footer: {
    copyright: '© 2025 김준희',
    affiliation: '가천대학교 PRML 연구실',
    credit: { label: '디자인 참고: Jon Barron', href: 'https://github.com/jonbarron/website' },
  },
}
