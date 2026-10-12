export interface IExperience {
  role: string
  company: string
  period: string
  summary: string
  points?: string[]
  stack: string[]
}

export const experience: IExperience[] = [
  {
    role: 'CTO',
    company: 'TrafficJet',
    period: 'Apr 2025 – Present',
    summary:
      'Lead the development team and own the full development lifecycle: architecture, planning, code review, releases, infrastructure and tech budget.',
    points: [
      'Built a corporate CRM from scratch used by ~100 employees across 6 departments: Kanban boards, RBAC, department dashboards, finance, payroll and task analytics',
      'Integrated Zeus, Keitaro and Cloudflare API; automated daily profit reports to Telegram',
      'Shipped internal products: OctoBot, HR CRM with a browser extension, Farm CRM, URL shortener',
      'Built a crypto exchange platform with remote server infrastructure managed by a Telegram bot',
      'Set up tracking (Keitaro, Meta Pixel, Google Ads GCLID, AppsFlyer) and published Android apps to Google Play',
      'Run Docker, Nginx, VPS, GitHub Actions CI/CD, JWT/RBAC, Cloudflare protection, backups and monitoring',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'Playwright', 'Claude AI'],
  },
  {
    role: 'Frontend Developer',
    company: 'ASPIN',
    period: 'Jun 2024 – Feb 2025',
    summary: 'Built a custom CRM from scratch based on an individual UI/UX design, with forms, validation and backend integration.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'Formik', 'MongoDB'],
  },
  {
    role: 'React Native Developer',
    company: 'WD Studio',
    period: 'Feb 2024 – May 2024',
    summary: 'Developed complete mobile applications from design layouts to ready-to-ship builds.',
    stack: ['React Native', 'JavaScript'],
  },
  {
    role: 'Frontend Developer',
    company: 'BIMP',
    period: 'Nov 2023 – Feb 2024',
    summary: 'Built and styled ERP components, fixed bugs and worked with designers, QA, PMs and backend developers.',
    stack: ['React', 'Redux', 'Git'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: 'Feb 2023 – Nov 2023',
    summary: 'Delivered full-stack tasks on schedule with regular code reviews by middle and senior developers.',
    stack: ['React', 'Node.js', 'JavaScript'],
  },
]
