// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#9333ea',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(51 65 85)', // secondary-700
            '--tw-prose-headings': 'rgb(15 23 42)', // secondary-900
            '--tw-prose-lead': 'rgb(100 116 139)', // secondary-500
            '--tw-prose-links': 'rgb(147 51 234)', // primary-600
            '--tw-prose-bold': 'rgb(15 23 42)', // secondary-900
            '--tw-prose-counters': 'rgb(100 116 139)', // secondary-500
            '--tw-prose-bullets': 'rgb(203 213 225)', // secondary-300
            '--tw-prose-hr': 'rgb(226 232 240)', // secondary-200
            '--tw-prose-quotes': 'rgb(51 65 85)', // secondary-700
            '--tw-prose-quote-borders': 'rgb(147 51 234)', // primary-600
            '--tw-prose-captions': 'rgb(100 116 139)', // secondary-500
            '--tw-prose-code': 'rgb(30 41 59)', // secondary-800
            '--tw-prose-pre-code': 'rgb(226 232 240)', // secondary-200
            '--tw-prose-pre-bg': 'rgb(15 23 42)', // secondary-900
            '--tw-prose-th-borders': 'rgb(203 213 225)', // secondary-300
            '--tw-prose-td-borders': 'rgb(226 232 240)', // secondary-200
            '--tw-prose-invert-body': 'rgb(203 213 225)', // secondary-300
            '--tw-prose-invert-headings': 'rgb(248 250 252)', // secondary-50
            '--tw-prose-invert-lead': 'rgb(148 163 184)', // secondary-400
            '--tw-prose-invert-links': 'rgb(168 85 247)', // primary-400
            '--tw-prose-invert-bold': 'rgb(248 250 252)', // secondary-50
            '--tw-prose-invert-counters': 'rgb(148 163 184)', // secondary-400
            '--tw-prose-invert-bullets': 'rgb(100 116 139)', // secondary-500
            '--tw-prose-invert-hr': 'rgb(51 65 85)', // secondary-700
            '--tw-prose-invert-quotes': 'rgb(241 245 249)', // secondary-100
            '--tw-prose-invert-quote-borders': 'rgb(168 85 247)', // primary-400
            '--tw-prose-invert-captions': 'rgb(148 163 184)', // secondary-400
            '--tw-prose-invert-code': 'rgb(226 232 240)', // secondary-200
            '--tw-prose-invert-pre-code': 'rgb(203 213 225)', // secondary-300
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0)', // black
            '--tw-prose-invert-th-borders': 'rgb(100 116 139)', // secondary-500
            '--tw-prose-invert-td-borders': 'rgb(51 65 85)', // secondary-700
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
