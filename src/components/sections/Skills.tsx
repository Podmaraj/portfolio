'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Cpu, Brain, CheckCircle2, Sparkles } from 'lucide-react'
import { skillCategories, SkillGroup } from '@/data'

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-violet-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  Brain: <Brain className="w-5 h-5 text-rose-400" />,
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all')

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Skills &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
            Structured into 6 specialized engineering domains without clutter.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-200/80 text-zinc-400 dark:text-zinc-400 light:text-slate-700 hover:text-white border border-zinc-800 light:border-slate-300'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === group.id
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-200/80 text-zinc-400 dark:text-zinc-400 light:text-slate-700 hover:text-white border border-zinc-800 light:border-slate-300'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .filter((group) => activeTab === 'all' || activeTab === group.id)
            .map((group, idx) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 border-zinc-800/80 light:border-slate-200 space-y-5"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/60 light:border-slate-200">
                  <div className="p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 light:border-slate-200">
                    {categoryIcons[group.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
                    {group.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-zinc-200 dark:text-zinc-200 light:text-slate-800">
                          {skill.name}
                        </span>
                        <span className="text-indigo-400 font-mono text-[11px]">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="h-1.5 w-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Subtags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {skill.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-600 border border-zinc-800/60 light:border-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
