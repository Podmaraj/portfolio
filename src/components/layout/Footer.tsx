'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '@/data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-slate-200 py-12 bg-[#030712] dark:bg-[#030712] light:bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <span className="font-bold text-sm text-white dark:text-white light:text-slate-900">
            {personalInfo.name}
          </span>
          <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
            Software Engineer at <span className="text-indigo-400 font-medium">{personalInfo.company}</span> · Dibrugarh, Assam
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#github" className="hover:text-white transition-colors">GitHub</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-zinc-500">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-200 text-zinc-400 hover:text-white border border-zinc-800 light:border-slate-300 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}
