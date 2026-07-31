'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, ArrowRight, MapPin } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { personalInfo } from '@/data'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Glow Effects */}
      <div className="ambient-glow glow-indigo w-[500px] h-[500px] top-1/4 -left-32 opacity-70" />
      <div className="ambient-glow glow-cyan w-[600px] h-[600px] top-1/3 -right-40 opacity-60" />
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status & Location Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Software Engineer at {personalInfo.company}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-200/80 border border-zinc-800 light:border-slate-300 text-zinc-400 dark:text-zinc-400 light:text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            {personalInfo.location}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 leading-[1.15] max-w-4xl mx-auto mb-6"
        >
          Engineering Scalable Systems &amp;{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AI-Driven Applications
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 dark:text-zinc-400 light:text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Hi, I&apos;m <strong className="text-zinc-200 dark:text-zinc-200 light:text-slate-900 font-semibold">{personalInfo.name}</strong>. {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons (Resume, GitHub, Contact) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] transition-all"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>

          {/* GitHub Button */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-slate-200 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 text-zinc-200 dark:text-zinc-200 light:text-slate-800 hover:scale-[1.02] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Profile
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 hover:scale-[1.02] transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact Me
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200/80 flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 light:text-slate-400 font-mono w-full mb-1">
            Core Engineering Stack
          </span>
          {['Next.js', 'React', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Prisma', 'Docker', 'Redis'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-700 border border-zinc-800/80 light:border-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
