'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Cpu, Brain } from 'lucide-react'
import { skillCategories, SkillGroup } from '@/data'

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-indigo-400" />,
  Layout: <Layout className="w-4 h-4 text-cyan-400" />,
  Server: <Server className="w-4 h-4 text-violet-400" />,
  Database: <Database className="w-4 h-4 text-emerald-400" />,
  Cpu: <Cpu className="w-4 h-4 text-amber-400" />,
  Brain: <Brain className="w-4 h-4 text-rose-400" />,
}

// Convert level (0-100) to dot count (1-5)
function levelToDots(level: number): number {
  if (level >= 92) return 5
  if (level >= 82) return 4
  if (level >= 72) return 3
  if (level >= 60) return 2
  return 1
}

function DotRating({ level }: { level: number }) {
  const filled = levelToDots(level)
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-1.5 h-1.5 rounded-full ${
            i < filled ? 'bg-indigo-500/80' : 'bg-white/[0.08] border border-white/[0.1]'
          }`}
        />
      ))}
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const displayedGroups = skillCategories.filter(
    (g) => activeTab === 'all' || activeTab === g.id
  )

  return (
    <section id="skills" className="py-section relative overflow-hidden bg-[#09090e]/60">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Label + Header */}
        <motion.div {...fadeUp(0)} className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="section-label">04 — Skills</span>
            <h2
              className="font-heading font-bold text-[#f1f1f3] leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.025em' }}
            >
              Technical{' '}
              <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          {/* Text tabs */}
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all duration-200 ${
                activeTab === 'all'
                  ? 'text-[#f1f1f3] bg-white/[0.06] border border-white/[0.1]'
                  : 'text-[#5a5b66] hover:text-[#9fa0a8]'
              }`}
            >
              All
            </button>
            {skillCategories.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveTab(g.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all duration-200 ${
                  activeTab === g.id
                    ? 'text-[#f1f1f3] bg-white/[0.06] border border-white/[0.1]'
                    : 'text-[#5a5b66] hover:text-[#9fa0a8]'
                }`}
              >
                {g.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className={`grid gap-4 ${
          displayedGroups.length === 1
            ? 'grid-cols-1 max-w-lg'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {displayedGroups.map((group: SkillGroup, idx: number) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="card-minimal p-5 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.04]">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  {categoryIcons[group.icon]}
                </div>
                <h3 className="text-sm font-heading font-semibold text-[#f1f1f3]">{group.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between group py-1 border-b border-white/[0.03] last:border-0"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-medium text-[#9fa0a8] group-hover:text-[#f1f1f3] transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {skill.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono text-[#5a5b66]"
                          >
                            {t}
                          </span>
                        )).reduce((acc: React.ReactNode[], el, i, arr) => {
                          acc.push(el)
                          if (i < arr.length - 1) acc.push(<span key={`dot-${i}`} className="text-[9px] text-[#5a5b66]/40">·</span>)
                          return acc
                        }, [])}
                      </div>
                    </div>
                    <DotRating level={skill.level} />
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
