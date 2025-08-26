export type Project = {
  title: string;
  category: string;
  description: string;
  technologiesList: string[];
  projectPath?: string;
  githubLink?: string;
  externalLink?: string;
  image?: string;
  status?: "active" | "in-progress" | "planned" | "on-hold" | "archived";
  isFeatured?: true | false;
  siteStatus?: "live" | "unknown" | "down";
};

export const ProjectList: Project[] = [
  {
    title: "Home Lab",
    category: "Infrastructure",
    description:
      "Personal homelab running Proxmox with automated Docker containers, secure remote access via Wireguard subnet routing, and comprehensive monitoring setup.",
    technologiesList: [
      "Proxmox",
      "Docker",
      "Bash",
      "Cloudflare",
      "Wireguard",
      "Linux",
    ],
    projectPath: "/projects/homelab",
    externalLink: "sample.txt",
    image: "/images/projects/homelab-thumbnail.jpg",
    status: "active",
    isFeatured: true,
  },
  {
    title: "20 Games Challenge",
    category: "Website",
    description:
      "20 Games Challenge is a personal project where I aim to create 20 games in 1 year, showcasing my skills in game development and design.",
    technologiesList: [
      "Godot Engine",
      "Unity",
      "Unreal Engine",
      "WebAssembly",
      "C++",
      "C#",
    ],
    projectPath: "/projects/20-games-challenge",
    externalLink: "https://games.eschmechel.dev/",
    githubLink: "https://github.com/eschmechel/games-site",
    image: "/images/logos/",
    status: "in-progress",
    isFeatured: true,
    siteStatus: "live",
  },
  {
    title: "Langara French Club Website",
    category: "Website",
    description:
      "Maintaining the Langara French Club website as well as managing its communication and outreach.",
    technologiesList: [
      "EmailJS",
      "React",
      "Swiper",
      "Vercel",
      "Typescript",
      "NextJS",
      "TailwindCSS",
    ],
    projectPath: "/projects/langara-french-club",
    externalLink: "https://www.langarafr.com/",
    githubLink: "https://github.com/LMSAIH/langarafrenchclub",
    image: "/images/logos/LFC_LOGO.png",
    status: "active",
    isFeatured: true,
    siteStatus: "live",
  },
  {
    title: "Student Software Association",
    category: "Outreach",
    description:
      "Building a community for inter-uni collaboration and support.",
    technologiesList: ["Discord", "Cloudflare"],
    projectPath: "/projects/sample2",
    externalLink: "https://sample2.example.com",
    githubLink: "https://github.com/sample2",
    image: "/images/logos/",
    status: "on-hold",
    isFeatured: false,
  },
  {
    title: "Langara Course Scheduler",
    category: "Website",
    description:
      "A web application to help students schedule their courses effectively.",
    technologiesList: ["React", "Node.js", "Express", "MongoDB"],
    projectPath: "/projects/langara-course-scheduler",
    externalLink: "https://www.langaracoursescheduler.com/",
    githubLink: "https://github.com/LMSAIH/LangaraScraper",
    image: "/images/logos/",
    status: "in-progress",
    isFeatured: false,
    siteStatus: "unknown",
  },
];

export default ProjectList;
