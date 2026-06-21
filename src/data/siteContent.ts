export const siteContent = {
  profile: {
    name: 'Jun-Hee Kim',
    nameKo: '김준희',
    email: 'kimjunhee2483@gmail.com',
    affiliation: 'PRML Lab · Gacheon University',
    locationLabel: 'Based in Seoul',
    timezoneLabel: 'KST',
  },

  nav: [
    { href: '/#work', label: 'Work' },
    { href: '/#research', label: 'Research' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#publications', label: 'Publications' },
    { href: '/#stack', label: 'Stack' },
    { href: '/#writing', label: 'Writing' },
    { href: '/#contact', label: 'Contact' },
  ],

  header: {
    themeToggleLabel: 'Toggle dark mode',
  },

  hero: {
    eyebrow: 'AI Systems Portfolio',
    title: 'Building perception-to-action AI systems.',
    body:
      'I build systems that connect computer vision pipelines, LLM reasoning, and tool-based actions for real-world environments.',
    primaryLinkLabel: 'View systems',
    secondaryLinkLabel: 'Research direction',
    shortcutPrefix: 'Press',
    shortcutKey: 'c',
    shortcutSuffix: 'to copy email',
    stats: [
      { value: '92%', label: 'Crowd density accuracy' },
      { value: 'CV + LLM', label: 'Research direction' },
      { value: 'Agentic AI', label: 'Current focus' },
    ],
  },

  work: {
    label: 'Work',
    title: 'Featured systems',
    body:
      'The main work is system integration: perception pipelines, runtime state, decision logic, and deployable APIs.',
    pipelineLabel: 'System pipeline',
    statusLabels: {
      completed: 'validated',
      ongoing: 'in progress',
    },
    linkLabels: {
      github: 'GitHub ↗',
      paper: 'Paper ↗',
    },
    pipelines: {
      'indoor-congestion': ['Camera input', 'Head detection', 'Object tracking', 'Density estimate'],
      'agentic-ai-system': ['Perception', 'Runtime state', 'LLM reasoning', 'Tool action'],
    },
  },

  research: {
    label: 'Research',
    title: 'Research direction',
    body:
      'My work has moved from model-level experiments toward complete systems that can observe, reason, and trigger grounded actions.',
    timeline: [
      {
        label: '01 · Medical AI',
        title: 'Started from model-level experimentation',
        body:
          'Fine-tuning Transformer models for image classification helped me understand the model stack, but the work felt incomplete without a deployed system around it.',
      },
      {
        label: '02 · Crowd Density',
        title: 'Moved into real-time perception systems',
        body:
          'The indoor congestion project connected detection, tracking, density estimation, and API serving into one working pipeline in a real environment.',
      },
      {
        label: '03 · Agentic AI',
        title: 'Current focus: perception-to-action agents',
        body:
          'The research direction now is CV perception feeding LLM reasoning and tool use, so agents can respond to changing environments instead of fixed thresholds.',
        active: true,
      },
    ],
  },

  experience: {
    label: 'Experience',
    body: 'Academic and research background.',
  },

  publications: {
    label: 'Publications',
    externalLinkLabel: '↗',
  },

  stack: {
    label: 'Stack',
    items: [
      { name: 'Python', icon: 'Py' },
      { name: 'PyTorch', icon: 'PT' },
      { name: 'YOLOv8', icon: 'CV' },
      { name: 'LangGraph', icon: 'LG' },
      { name: 'Anthropic SDK', icon: 'AI' },
      { name: 'MCP', icon: 'TC' },
      { name: 'React', icon: 'UI' },
      { name: 'FastAPI', icon: 'API' },
    ],
  },

  writing: {
    label: 'Writing',
    body: 'Research notes and thoughts.',
    empty: 'No posts yet.',
    readTimeSuffix: 'min',
  },

  contact: {
    label: 'Contact',
    body: 'Interested in collaboration, research, or systems work? Send a message.',
    inputPlaceholder: 'your@email.com',
    buttonIdle: 'Send',
    buttonSent: 'Sent',
    links: [
      { label: 'Email', value: 'kimjunhee2483@gmail.com', href: 'mailto:kimjunhee2483@gmail.com' },
      { label: 'GitHub', value: 'github.com/jwhitekim', href: 'https://github.com/jwhitekim' },
      { label: 'LinkedIn', value: '/in/kim-jun-hee', href: '#' },
    ],
    externalSuffix: '↗',
  },

  post: {
    backLabel: '← Back',
    previousLabel: '← Previous',
    nextLabel: 'Next →',
    tagPrefix: '#',
  },

  footer: {
    copyright: '© 2025 Jun-Hee Kim',
    affiliation: 'PRML Lab · Gacheon University',
  },
}
