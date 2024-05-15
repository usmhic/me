import {
    type IconType,
    SiDocker,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiPython,
    SiDotnet,
    SiMicrosoftazure,
    SiAmazonaws,
    SiGooglecloud,
    SiDigitalocean,
    SiExpo,
    SiKubernetes,
    SiLinux,
  } from '@icons-pack/react-simple-icons'
  
import behance from '../../public/icons/behance.svg'
import github from '../../public/icons/github.svg'
import instagram from '../../public/icons/instagram.svg'
import linkedin from '../../public/icons/linkedin.svg'
import medium from '../../public/icons/medium.svg'
import x from '../../public/icons/x.svg'
import youtube from '../../public/icons/youtube.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'behance',
  'buymeacoffee',
  'dribbble',
  'figma',
  'github',
  'gumroad',
  'instagram',
  'kofi',
  'linkedin',
  'medium',
  'patreon',
  'producthunt',
  'readcv',
  'reddit',
  'tiktok',
  'twitch',
  'x',
  'youtube',
]

export const LINKS: { [key in SocialMedia]: Link } = {
  behance: {
    title: 'Behance',
    icon: behance,
    link: 'https://www.behance.net/usmhic',
    text: '@usmhic',
  },
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/usmhic',
    text: '@usmhic',
  },
  linkedin: {
    title: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/usmhic/',
    text: '@usmhic',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/usmhic/',
    text: '@usmhic',
  },
  youtube: {
    title: 'Youtube',
    icon: youtube,
    link: 'https://www.youtube.com/@usmhic',
    text: '@usmhic',
  },
  x: {
    title: 'X',
    icon: x,
    link: 'https://twitter.com/usmhic',
    text: 'usmhic',
  },
  medium: {
    title: 'Medium',
    icon: medium,
    link: 'https://medium.com/@usmhic',
    text: '@usmhic',
  },
}

export const EDUCATION: {
    company: string
    role: string
    description: string
    startDate: string
    endDate: string
  }[] = [
    {
      company: 'ENSA de Tanger, Abdelmalek Essaâdi University',
      role: 'Engineering Degree',
      description: 'Engineering degree (equivalent to MSE) in Computer Systems Networking and Telecommunications',
      startDate: '2018',
      endDate: '2024',
    }
  ]
  
export const EXPERIENCE: {
    company: string
    role: string
    description: string
    startDate: string
    endDate: string
  }[] = [
    {
      company: 'APM Terminals',
      role: 'IT/OT Engineering Intern',
      description:
        'Building and deploying a scalable AI-powered platform to optimize terminal operations using Python/FastAPI & NextJS.',
      startDate: 'Feb 2024',
      endDate: 'Present',
    },
    {
      company: 'Taliware™',
      role: 'Software Engineer',
      description:
        'Cordoba Layer-2 Blockchain Developer & Project Lead.',
      startDate: 'Aug 2023',
      endDate: 'Present',
    },
    {
      company: 'WinBooks',
      role: 'Software Developer',
      description:
        'Develop a full-stack Web3 app using .NET (Blazor & Core) and PostgreSQL.',
      startDate: 'Aug 2023',
      endDate: 'May 2023',
    },
    {
      company: 'FutureRoc',
      role: 'Cloud Consultante',
      description:
        'Design, secure, and optimize cloud solutions, migrate IT infrastructure to Azure, Provide M365 Training.',
      startDate: 'Apr 2023',
      endDate: 'Aug 2022',
    },
    {
      company: 'Search Engine Optimization Evaluator',
      role: 'iSoftStone',
      description:'',
      startDate: 'Sep 2019',
      endDate: 'Jun 2019',
    },
  ]


export  const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
    [
      {
        field: 'Frontend',
        skills: [
          { skill: 'javascript', icon: SiJavascript },
          { skill: 'tailwind', icon: SiTailwindcss },
          { skill: 'react', icon: SiReact },
          { skill: 'nextjs', icon: SiNextdotjs },
          { skill: 'reactnative/expo', icon: SiExpo },
        ],
      },
      {
        field: 'Backend',
        skills: [
          { skill: 'nodejs', icon: SiNodedotjs },
          { skill: 'python', icon: SiPython, },
          { skill: 'dotnet', icon: SiDotnet, },
          { skill: 'mysql', icon: SiMysql, },
          { skill: 'postgresql', icon: SiPostgresql, },
          { skill: 'mongodb', icon: SiMongodb, },
        ],
      },
      {
        field: 'System',
        skills: [
          { skill: 'linux', icon: SiLinux },
          { skill: 'nginx', icon: SiNginx },
          { skill: 'docker', icon: SiDocker },
          { skill: 'k8s', icon: SiKubernetes },
        ],
      },
      {
        field: 'Cloud',
        skills: [
          { skill: 'digitalocean', icon: SiDigitalocean },
          { skill: 'azure', icon: SiMicrosoftazure },
          { skill: 'aws', icon: SiAmazonaws },
          { skill: 'gcp', icon: SiGooglecloud }
        ],
      },
    ]

      
export const PROJECTS: {
    name: string
    description: string
    previewImage: string
    repoUrl: string
    liveLink: string
  }[] = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project1.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project2.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Project 3',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project3.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Project 4',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project4.png',
      repoUrl: 'https://github.com',
    },
  ]
  

    
export const ACTIVITIES: {
    name: string
    description: string
    previewImage: string
    repoUrl: string
    liveLink: string
  }[] = [
    {
      name: 'NetComDayz',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project1.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Leadership Lab',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project2.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'NASA SpaceApps Challenge',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project3.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Moonshot Morocco',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project4.png',
      repoUrl: 'https://github.com',
    },
  ]
  