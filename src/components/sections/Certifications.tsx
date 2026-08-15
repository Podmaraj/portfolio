'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications } from '@/data'
import { ShieldCheck, ChevronDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Certifications() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="certifications" className="py-section relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="section-label">05 — Certifications</span>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-px">
          {certifications.map((cert, idx) => {
            const isOpen = openId === cert.id
            return (
              <motion.div
                key={cert.id}
                {...fadeUp(idx * 0.07)}
                className="border border-white/[0.05] rounded-xl overflow-hidden"
              >
                {/* Row Header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : cert.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center shrink-0 group-hover:border-indigo-500/30 transition-colors">
                      <ShieldCheck className="w-4 h-4 text-indigo-400/70" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <h3 className="text-sm font-heading font-semibold text-[#f1f1f3] leading-tight">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="text-cyan-400/80">{cert.issuer}</span>
                        <span className="text-[#5a5b66]">·</span>
                        <span className="text-[#5a5b66]">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5a5b66] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-4 border-t border-white/[0.04] pt-4">
                        <p className="text-xs sm:text-sm text-[#5a5b66] leading-relaxed">
                          {cert.description}
                        </p>
                        <div className="space-y-2">
                          <span className="section-label">Skills Validated</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {cert.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-indigo-500/5 text-indigo-400/80 border border-indigo-500/15"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
