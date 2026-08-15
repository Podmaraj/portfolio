'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { workExperience } from '@/data'
import { CheckCircle, MapPin, Calendar } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Experience() {
  return (
    <section id="experience" className="py-section relative overflow-hidden bg-[#09090e]/60">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="section-label">02 — Experience</span>
        </motion.div>

        <div className="max-w-4xl space-y-12">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              {...fadeUp(index * 0.08)}
              className="relative"
            >
              {/* Thin left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

              <div className="pl-8 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="font-heading font-bold text-[#f1f1f3]"
                        style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', letterSpacing: '-0.02em' }}
                      >
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/8 border border-emerald-500/20 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-indigo-400/80">{exp.company}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-[#5a5b66] shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#5a5b66] leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5">
                  <span className="section-label">Key Impact</span>
                  <div className="space-y-2.5 mt-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#5a5b66]">
                        <CheckCircle className="w-4 h-4 text-emerald-500/70 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-mono text-[#5a5b66] mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] text-[#5a5b66] border border-white/[0.05] hover:border-indigo-500/20 hover:text-indigo-400/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
