'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react'
import { workExperience } from '@/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-4">
            Professional <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Contributions</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
            Engineering scalable healthcare software and production microservices.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border-indigo-500/20 dark:border-indigo-500/20 light:border-indigo-200"
            >
              {/* Highlight Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-base font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-200/80 border border-zinc-800 light:border-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-200/80 border border-zinc-800 light:border-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-400 dark:text-zinc-400 light:text-slate-500">
                  Key Responsibilities &amp; Impact
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Used */}
              <div className="pt-4 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 light:text-slate-400 mr-2">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
