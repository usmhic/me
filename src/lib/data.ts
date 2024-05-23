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
      role: 'Software Engineering Intern',
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
    }
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
      previewImage: 'https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/391708608_2649208488566374_2022014855297659293_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHOo6T5tIZZFaBr9GkOzIRckjntKzL8qfeSOe0rMvyp92LT4-cIP3KyxLcTubtuAMvag3sXxqal0wR0OHfEy3xB&_nc_ohc=YeBC7BI9gMsQ7kNvgEjWR_K&_nc_ht=scontent.frba2-1.fna&oh=00_AYDN_jc21u2ybkbJ041lh4UKZFaclzNsjru3dcSsWV157A&oe=664AE4DF',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Leadership Lab',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: 'https://media.licdn.com/dms/image/D4E22AQEWh-frm3vqgA/feedshare-shrink_2048_1536/0/1684348090191?e=1718841600&v=beta&t=chvfE41gmHKxWigI03Mr0vJKFkZy5BpJ5N7AxsVuRGM',
      repoUrl: 'https://github.com',
    },
    {
      name: 'NASA SpaceApps Challenge',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: 'https://scontent.frba3-2.fna.fbcdn.net/v/t1.6435-9/73159524_1408679059285996_5073601474710208512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGRrGXgP1pm-0lnfzyVn8nHn_KeXMNcV0uf8p5cw1xXS9S_KqRsI8xqBL8S5WjYFYklFdoPhMkAkrnf8W_eViSd&_nc_ohc=3j3J4-gJIacQ7kNvgF00121&_nc_ht=scontent.frba3-2.fna&oh=00_AYA0YWCu80pNxu3GxoqZq-b4trXOVJnoh4VKbvbIwiSe7w&oe=666C6E67',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Moonshot Morocco',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: 'https://scontent.frba3-2.fna.fbcdn.net/v/t1.6435-9/52594339_1229376293882941_7422181027721773056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEVi7sd0ibpXiwDLgCe1xSIaiM4DJLDLt9qIzgMksMu3zfvh4NrFdxo208bLl1VQGYMW-51fDDl3IENKU60reKi&_nc_ohc=7gBoNfxGFSUQ7kNvgGegOkD&_nc_ht=scontent.frba3-2.fna&oh=00_AYC4sgh1IaYFqZD1Z3xkvwCfQH4xgKGOkDhPTtZIwb2VJQ&oe=666C7958',
      repoUrl: 'https://github.com',
    },
  ]
  