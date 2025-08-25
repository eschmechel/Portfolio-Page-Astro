// src/utils/personalData.ts
export const personalData = {
  name: "Elliott Schmechel",
  title: "Game Programmer & Developer",
  email: "elliottschmechel@gmail.com",
  location: "Vancouver, BC",
  timezone: "UTC-8",
  age: "19y/o",
  languages: ["English"],

  resume: "/resume.pdf",

  status: {
    available: true,
    message: "Available to work",
  },


  skills: {
    primary: [ "Bash", "C++", "C#", "Java", "Python", "Typescript"],
    tools: [ "Cloudflare","Git", "Godot", "Linux", "Proxmox"],
  },

  meta: {
    siteName: "Elliott Schmechel",
    siteUrl: "https://eschmechel.dev",
    description:
      "Game programmer and developer passionate about creating engaging experiences through code.",
    keywords: [
      "Elliott Schmechel",
      "game programmer",
      "software engineer",
      "portfolio",
      "game design",
      "Godot Engine",
      "C++",
      "C#",
      "Python",
    ],
    author: "Elliott Schmechel",
    ogImage: "/images/og-image.png",
  },
};

export default personalData;
