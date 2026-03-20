import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fire: '#FF5722',
        ember: '#FF8C00',
        gold: '#FFB74D',
        neon: { cyan: '#00E5FF', cyan2: '#64FFDA', green: '#69FF47' },
        space: { 900: '#05070E', 800: '#080C16', 700: '#0B111E' },
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
