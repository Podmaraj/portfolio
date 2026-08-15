'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '@/data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.04] py-8 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#5a5b66]">
          <span className="text-[#9fa0a8] font-semibold font-heading text-sm">{personalInfo.name}</span>
          <span>·</span>
          <span>Software Engineer</span>
          <span>·</span>
          <span>Dibrugarh, Assam</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#5a5b66]">
          <span>© {new Date().getFullYear()}</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 rounded-lg border border-white/[0.06] text-[#5a5b66] hover:text-[#f1f1f3] hover:border-white/[0.12] transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
