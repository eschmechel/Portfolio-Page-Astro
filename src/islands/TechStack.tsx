// src/islands/TechStack.tsx
import type { JSX } from "preact";
import {
  SiPython,
  SiCplusplus,
  SiSharp,
  SiUnity,
  SiUnrealengine,
  SiGit,
  SiLinux,
  SiBlender,
  SiCloudflare,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAstro,
  SiGodotengine,
  SiProxmox,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: JSX.Element;
  color: string;
  url: string;
}

const techStack: TechItem[] = [
  {
    name: "Python",
    icon: <SiPython />,
    color: "#3776ab",
    url: "https://docs.python.org/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "#00599c",
    url: "https://en.cppreference.com/",
  },
  {
    name: "C#",
    icon: <SiSharp />,
    color: "#239120",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "#61dafb",
    url: "https://react.dev/",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "#339933",
    url: "https://nodejs.org/en/docs/",
  },
  {
    name: "Astro",
    icon: <SiAstro />,
    color: "#ff5d01",
    url: "https://docs.astro.build/",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "#06b6d4",
    url: "https://tailwindcss.com/docs",
  },
  {
    name: "Unity",
    icon: <SiUnity />,
    color: "#000000",
    url: "https://docs.unity3d.com/",
  },
  {
    name: "Unreal",
    icon: <SiUnrealengine />,
    color: "#0E1128",
    url: "https://docs.unrealengine.com/",
  },
  {
    name: "Godot",
    icon: <SiGodotengine />,
    color: "#478cbf",
    url: "https://docs.godotengine.org/",
  },
  {
    name: "Proxmox",
    icon: <SiProxmox />,
    color: "#e57000",
    url: "https://pve.proxmox.com/wiki/Main_Page",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#f05032",
    url: "https://git-scm.com/doc",
  },
  {
    name: "Linux",
    icon: <SiLinux />,
    color: "#fcc624",
    url: "https://www.kernel.org/doc/",
  },
  {
    name: "Blender",
    icon: <SiBlender />,
    color: "#f5792a",
    url: "https://docs.blender.org/",
  },
  {
    name: "Cloudflare",
    icon: <SiCloudflare />,
    color: "#f38020",
    url: "https://developers.cloudflare.com/",
  },
];

export default function TechStack(): JSX.Element {
  return (
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p class="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div class="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              class="tech-stack-pill animate-slide-up group hover:scale-105 transition-all duration-200 flex items-center no-underline"
              style={`animation-delay: ${index * 0.1}s;`}
              aria-label={`View ${tech.name} documentation`}
            >
              <div
                class="flex-shrink-0 transition-colors duration-200 flex items-center justify-center"
                style={`color: ${tech.color};`}
              >
                <div class="w-5 h-5 flex items-center justify-center -mt-0.5">
                  {tech.icon}
                </div>
              </div>
              <span class="font-medium">{tech.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
