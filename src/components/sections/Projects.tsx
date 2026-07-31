'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, ExternalLink, Sparkles, X, Check, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { projects, Project } from '@/data'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const categories = ['All', 'Featured', 'Healthcare SaaS', 'Enterprise / Backend', 'AI & ML', 'Full-Stack SaaS']

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Featured') return p.isFeatured
    return p.category === selectedCategory
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio &amp; Engineering Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
            High-performance API gateways, healthcare suites, ML models, and full-stack SaaS platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-200/80 text-zinc-400 dark:text-zinc-400 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-950 border border-zinc-800 light:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card rounded-2xl flex flex-col justify-between overflow-hidden group border-zinc-800/80 light:border-slate-200"
            >
              {/* Card Header Illustration / Gradient Preview */}
              <div className="h-44 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-slate-900 p-5 relative flex flex-col justify-between overflow-hidden border-b border-zinc-800/60">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="ambient-glow glow-indigo w-32 h-32 -top-10 -right-10 opacity-40 group-hover:opacity-70 transition-opacity" />
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 font-mono">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-700 border border-zinc-800/80 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-400">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-300 light:text-indigo-600 flex items-center gap-1 group/btn"
                  >
                    View Project Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-700 hover:text-white dark:hover:text-white hover:bg-zinc-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-zinc-800 light:border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Modal Header */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-950/60 via-zinc-900 to-slate-900 border-b border-zinc-800 flex items-start justify-between relative">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {activeModalProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                      {activeModalProject.name}
                    </h3>
                    <p className="text-sm font-mono text-zinc-400 mt-1">
                      {activeModalProject.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-indigo-400 mb-2">
                      System Overview
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed">
                      {activeModalProject.overview || activeModalProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {activeModalProject.keyFeatures && activeModalProject.keyFeatures.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-indigo-400 mb-3">
                        Key Engineering Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeModalProject.keyFeatures.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800/80 light:border-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-800">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stack */}
                  <div>
                    <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-indigo-400 mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-zinc-800 flex items-center justify-end gap-3">
                    {activeModalProject.githubUrl && (
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        View Code on GitHub
                      </a>
                    )}
                    {activeModalProject.demoUrl && activeModalProject.demoUrl !== '#' && (
                      <a
                        href={activeModalProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
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
