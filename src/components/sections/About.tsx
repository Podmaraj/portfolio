'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Code2, Rocket, GraduationCap, MapPin, CheckCircle2, HeartHandshake, Shield, Building2 } from 'lucide-react'
import { personalInfo, education } from '@/data'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-4">
            Building Systems. <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Solving Problems.</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
            A developer mindset focused on scalability, performance, and continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-indigo-400" />
                Engineering &amp; Problem Solving
              </h3>
              <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
                I am <strong className="text-white dark:text-white light:text-slate-950 font-semibold">{personalInfo.name}</strong>, a BCA graduate based in <span className="text-indigo-400 font-medium">Dibrugarh, Assam 🇮🇳</span>. As a Software Engineer at <strong className="text-white dark:text-white light:text-slate-950 font-semibold">{personalInfo.company}</strong>, I architect full-stack web applications, microservices, and AI-powered systems.
              </p>
              <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether designing high-throughput API gateways, patient management microservices, or RAG-based LLM applications, my approach centers on write-clean-code principles, strict type safety, modular microservices, and database query optimization.
              </p>

              {/* Core Philosophy Box */}
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 dark:text-indigo-200 light:text-indigo-900 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm">
                  <Rocket className="w-4 h-4 text-indigo-400" />
                  Mission Statement
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                  Ship high-impact production software, contribute back to open source, and actively foster the growing tech ecosystem in Northeast India — one engineered product at a time.
                </p>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-xl text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 block mb-1">10+</span>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-400 light:text-slate-600">Projects Shipped</span>
              </div>
              <div className="glass-card p-5 rounded-xl text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block mb-1">Production</span>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-400 light:text-slate-600">Healthcare Apps</span>
              </div>
              <div className="glass-card p-5 rounded-xl text-center col-span-2 sm:col-span-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-violet-400 block mb-1">Daily</span>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-400 light:text-slate-600">Learning &amp; Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Background - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Education Background
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-zinc-800 light:before:bg-slate-200">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1 group">
                    <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    </span>
                    <span className="text-xs font-mono font-medium text-indigo-400">{item.year}</span>
                    <h4 className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-slate-900">{item.degree}</h4>
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {item.institution} · {item.location}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-slate-500 pt-1 leading-normal">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
