'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, CheckCircle2, Calendar, Sparkles } from 'lucide-react'
import { certifications } from '@/data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            Certifications &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-4">
            Verified <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
            Technical certifications and computer science academic credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border-zinc-800/80 light:border-slate-200 group hover:border-indigo-500/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-mono text-indigo-400 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 px-2.5 py-1 rounded-full border border-zinc-800 light:border-slate-200">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-cyan-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verified Skills Tags */}
              <div className="pt-4 mt-6 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  Skills Validated:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {skill}
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
