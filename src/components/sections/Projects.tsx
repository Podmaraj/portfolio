'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/data'
import { GithubIcon } from '@/components/ui/Icons'
import { ExternalLink, X, Check } from 'lucide-react'

const categories = ['All', 'Featured', 'Healthcare SaaS', 'Enterprise / Backend', 'AI & ML', 'Full-Stack SaaS']

const categoryAccent: Record<string, string> = {
  'Enterprise / Backend': 'border-t-violet-500/60',
  'Healthcare SaaS': 'border-t-cyan-500/60',
  'AI & ML': 'border-t-emerald-500/60',
  'Full-Stack SaaS': 'border-t-amber-500/60',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeModal, setActiveModal] = useState<Project | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered = projects.filter((p) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Featured') return p.isFeatured
    return p.category === selectedCategory
  })

  return (
    <section id="projects" className="py-section relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.div {...fadeUp(0)} className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="section-label">03 — Projects</span>
            <h2
              className="font-heading font-bold text-[#f1f1f3] leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.025em' }}
            >
              Featured{' '}
              <span className="text-gradient">Work</span>
            </h2>
          </div>

          {/* Text-style category tabs */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-all duration-200 rounded-md ${
                  selectedCategory === cat
                    ? 'text-[#f1f1f3] bg-white/[0.06] border border-white/[0.1]'
                    : 'text-[#5a5b66] hover:text-[#9fa0a8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`card-minimal flex flex-col overflow-hidden cursor-pointer border-t-[2px] ${
                  categoryAccent[project.category] ?? 'border-t-indigo-500/40'
                }`}
                onClick={() => setActiveModal(project)}
              >
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-mono text-[#5a5b66] leading-none">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 shrink-0">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className="font-heading font-bold text-[#f1f1f3] leading-snug text-base group-hover:text-indigo-300 transition-colors"
                    >
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-[#5a5b66] line-clamp-1">{project.tagline}</p>
                  </div>

                  {/* Description — revealed on hover */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="text-xs text-[#5a5b66] leading-relaxed overflow-hidden"
                      >
                        {project.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-[#5a5b66] border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] font-mono text-[#5a5b66]">+{project.stack.length - 4}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div
                    className="pt-3 border-t border-white/[0.04] flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setActiveModal(project)}
                      className="text-[10px] font-mono text-[#5a5b66] hover:text-indigo-400 transition-colors"
                    >
                      Details →
                    </button>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#5a5b66] hover:text-[#f1f1f3] transition-colors p-1"
                          title="GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#5a5b66] hover:text-[#f1f1f3] transition-colors p-1"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
                className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#09090e] border border-white/[0.07] rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
              >
                {/* Top accent */}
                <div className={`h-[2px] w-full rounded-t-2xl ${categoryAccent[activeModal.category] ?? 'bg-indigo-500/60'}`}
                  style={{ background: '' }}
                />

                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-white/[0.05]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#5a5b66]">{activeModal.category}</span>
                      <h3 className="font-heading font-bold text-[#f1f1f3] text-xl sm:text-2xl leading-tight">
                        {activeModal.name}
                      </h3>
                      <p className="text-xs font-mono text-[#5a5b66]">{activeModal.tagline}</p>
                    </div>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="p-1.5 rounded-lg border border-white/[0.07] text-[#5a5b66] hover:text-[#f1f1f3] transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="section-label">Overview</span>
                    <p className="text-sm text-[#5a5b66] leading-relaxed mt-2">
                      {activeModal.overview || activeModal.description}
                    </p>
                  </div>

                  {activeModal.keyFeatures?.length > 0 && (
                    <div className="space-y-2">
                      <span className="section-label">Key Features</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {activeModal.keyFeatures.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <Check className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                            <span className="text-xs text-[#5a5b66] leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <span className="section-label">Stack</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activeModal.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-indigo-500/5 text-indigo-400/80 border border-indigo-500/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] flex items-center justify-end gap-3">
                    {activeModal.githubUrl && (
                      <a
                        href={activeModal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-white/[0.08] text-[#9fa0a8] hover:text-[#f1f1f3] hover:border-white/[0.14] transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        View Code
                      </a>
                    )}
                    {activeModal.demoUrl && activeModal.demoUrl !== '#' && (
                      <a
                        href={activeModal.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
