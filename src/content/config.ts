// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    isPinned: z.boolean().default(false),
  }),
});

// Projects: data collection matching exact Project type from projectsData.ts
const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    technologiesList: z.array(z.string()),
    projectPath: z.string().optional(),
    githubLink: z.string().optional(),
    externalLink: z.string().optional(),
    image: z.string().optional(),
    status: z
      .enum(["active", "in-progress", "planned", "on-hold", "archived"])
      .optional(),
    isFeatured: z.boolean().optional(),
    siteStatus: z.enum(["live", "unknown", "down"]).optional(), // For website projects
  }),
});

export const collections = { blog, projects };
