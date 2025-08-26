# Elliott Schmechel's Portfolio

A modern, responsive portfolio website built with **Astro** and **Tailwind CSS**, showcasing game development and programming projects.

## 🚀 Features

- **Fast & Modern**: Built with Astro for optimal performance
- **Responsive Design**: Works efficiently on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Content Collections**: Markdown-powered blog with frontmatter
- **SEO Optimized**: Meta tags, Open Graph, and auto-generated sitemap
- **Accessible**: WCAG AA compliant with proper ARIA labels
- **Progressive Enhancement**: Works without JavaScript

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactive Components**: [Preact](https://preactjs.com/)
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   ```
   http://localhost:4321
   ```

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run Astro diagnostics

# Code Quality
npm run lint         # Lint code with ESLint
npm run format       # Format code with Prettier
```

## 🌐 Deployment

### Cloudflare Pages

1. **Connect your repository** to Cloudflare Pages
2. **Build settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `18`

### GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Create workflow** (`.github/workflows/deploy.yml`)

---

Built with ❤️ by Elliott Schmechel

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying

## TODO LIST
might need to replace og-image
`src/islands/MobileMenu.tsx` the js for scroll-locking when the menu is open could potentionally be replaced with pure react using react-aria/UsePreventScroll package