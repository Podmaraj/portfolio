'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Code, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { githubData } from '@/data'

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 relative overflow-hidden bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
              <GithubIcon className="w-3.5 h-3.5" />
              Open Source
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900">
              Pinned <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Repositories</span>
            </h2>
          </div>

          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:text-white border border-zinc-800 light:border-slate-300 transition-all self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4" />
            View GitHub Profile (@{githubData.username})
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-zinc-500" />
          </a>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubData.pinnedRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/${githubData.username}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-xl p-6 flex flex-col justify-between group border-zinc-800/80 light:border-slate-200 hover:border-indigo-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors font-mono flex items-center gap-2">
                    <Code className="w-4 h-4 text-indigo-400" />
                    {repo.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-800/60 light:border-slate-200">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.language === 'TypeScript' ? 'bg-blue-500' : 'bg-amber-400'}`}></span>
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
