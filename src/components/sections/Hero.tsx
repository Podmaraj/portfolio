'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { personalInfo } from '@/data'

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python',
  'FastAPI', 'PostgreSQL', 'Prisma', 'Docker', 'Redis',
  'LangChain', 'AWS', 'GraphQL', 'Microservices', 'Express',
]

const terminalLines = [
  { prefix: '→', text: 'Engineered Sanvya HMS', accent: false },
  { prefix: '✓', text: 'EdgeCore API Gateway shipped', accent: true },
  { prefix: '→', text: 'Building AI-powered solutions', accent: false },
  { prefix: '✓', text: 'CarbonX marketplace live', accent: true },
]

function TerminalSnippet() {
  const [visibleLines, setVisibleLines] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < terminalLines.length) return prev + 1
        clearInterval(timer)
        return prev
      })
    }, 600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-sm rounded-xl border border-white/[0.06] bg-[#09090e] overflow-hidden font-mono text-xs">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-3 text-[10px] text-[#5a5b66]">podmaraj ~ portfolio</span>
      </div>
      <div className="p-4 space-y-2 min-h-[120px]">
        <div className="text-[#5a5b66] mb-3">$ git log --oneline --recent</div>
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex items-start gap-2.5 animate-fade-in">
            <span className={line.accent ? 'text-emerald-400' : 'text-indigo-400'}>
              {line.prefix}
            </span>
            <span className={line.accent ? 'text-[#9fa0a8]' : 'text-[#5a5b66]'}>
              {line.text}
            </span>
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <div className="flex items-center gap-1.5">
            <span className="text-indigo-400">→</span>
            <span className="w-2 h-3.5 bg-indigo-400/60 animate-blink inline-block" />
          </div>
        )}
      </div>
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Single restrained spotlight */}
      <div className="spotlight top-[-10%] left-[-15%] opacity-80" />
      <div className="spotlight bottom-[-20%] right-[-10%] opacity-40" />

      {/* Ultra-subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Main content ── */}
          <div className="space-y-8">

            {/* Status badge */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/15">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="text-xs font-mono text-emerald-400/90">Available for work</span>
                <span className="text-[10px] font-mono text-[#5a5b66] ml-1">·</span>
                <MapPin className="w-3 h-3 text-[#5a5b66]" />
                <span className="text-[10px] font-mono text-[#5a5b66]">Assam, India</span>
              </div>
            </motion.div>

            {/* Massive name */}
            <div className="space-y-2">
              <motion.div {...fadeUp(0.08)}>
                <span className="section-label">Software Engineer</span>
              </motion.div>
              <motion.h1
                {...fadeUp(0.14)}
                className="font-heading font-extrabold leading-none tracking-tight"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
              >
                <span className="text-[#f1f1f3]">Podmaraj</span>
                <br />
                <span className="text-gradient">Boruah.</span>
              </motion.h1>
            </div>

            {/* Short punchy bio */}
            <motion.p
              {...fadeUp(0.22)}
              className="text-base sm:text-lg text-[#5a5b66] leading-relaxed max-w-md font-body"
            >
              I engineer{' '}
              <span className="text-[#9fa0a8]">scalable microservices</span>,{' '}
              <span className="text-[#9fa0a8]">healthcare platforms</span>, and{' '}
              <span className="text-[#9fa0a8]">AI-driven applications</span> —
              built to last, designed to perform.
            </motion.p>

            {/* Minimal CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex items-center gap-6">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#f1f1f3] hover:text-indigo-400 transition-colors duration-200"
              >
                View Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5a5b66] hover:text-[#9fa0a8] transition-colors duration-200"
              >
                See My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#5a5b66] hover:text-[#9fa0a8] transition-colors duration-200"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Terminal snippet ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-end"
          >
            <TerminalSnippet />
          </motion.div>
        </div>

        {/* ── Technology Marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-white/[0.04]"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">Core Stack</span>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </div>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee w-max">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 mx-4 text-xs font-mono text-[#5a5b66] whitespace-nowrap"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500/50" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
