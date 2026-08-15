'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, education } from '@/data'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Projects Shipped', color: 'text-indigo-400' },
  { value: '1yr+', label: 'Production Experience', color: 'text-violet-400' },
  { value: '2', label: 'Live Healthcare Apps', color: 'text-cyan-400' },
  { value: '480+', label: 'GitHub Contributions', color: 'text-emerald-400' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  return (
    <section id="about" className="py-section relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="section-label">01 — About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Narrative ── */}
          <div className="space-y-10">
            <motion.div {...fadeUp(0.06)} className="space-y-3">
              <h2
                className="font-heading font-bold text-[#f1f1f3] leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                Building Systems.{' '}
                <span className="text-gradient">Solving Problems.</span>
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.12)} className="space-y-5 text-[#5a5b66] leading-relaxed text-sm sm:text-base line-accent">
              <p>
                I&apos;m{' '}
                <span className="text-[#9fa0a8] font-medium">{personalInfo.name}</span>, a Software
                Engineer at{' '}
                <span className="text-[#9fa0a8] font-medium">{personalInfo.company}</span>. I
                architect full-stack web applications, enterprise microservices, and AI-powered
                systems from Dibrugarh, Assam 🇮🇳.
              </p>
              <p>
                My approach centers on <span className="text-[#9fa0a8]">clean code</span>,{' '}
                <span className="text-[#9fa0a8]">strict type safety</span>, modular microservice
                design, and database query optimization — shipping software that is built to survive
                production.
              </p>
              <p className="text-xs font-mono text-indigo-400/80 border-l-2 border-indigo-500/30 pl-4 py-1">
                &ldquo;Ship high-impact production software, contribute to open source, and
                foster the tech ecosystem in Northeast India — one product at a time.&rdquo;
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              {...fadeUp(0.18)}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-minimal p-5 space-y-1"
                >
                  <div className={`font-heading font-extrabold text-2xl sm:text-3xl ${stat.color} leading-none`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#5a5b66] font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.24)}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5a5b66] hover:text-[#f1f1f3] transition-colors duration-200"
              >
                See my experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Education Timeline ── */}
          <motion.div {...fadeUp(0.1)} className="space-y-2">
            <div className="mb-8">
              <span className="section-label">Education</span>
            </div>

            <div className="space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/[0.05]" />

              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0 group"
                >
                  {/* Dot */}
                  <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-indigo-500/30 bg-[#050508] flex items-center justify-center group-hover:border-indigo-500/60 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                  </span>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-indigo-400/70">{item.year}</span>
                    <h4 className="text-sm font-heading font-semibold text-[#f1f1f3] leading-snug">
                      {item.degree}
                    </h4>
                    <p className="text-xs text-[#5a5b66]">
                      {item.institution} · {item.location}
                    </p>
                    <p className="text-xs text-[#5a5b66]/70 leading-relaxed pt-1 max-w-xs">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
