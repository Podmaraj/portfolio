'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Code } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { githubData } from '@/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

const langColor: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  Python: 'bg-amber-400',
  JavaScript: 'bg-yellow-400',
}

export default function GitHubSection() {
  return (
    <section id="github" className="py-section relative overflow-hidden bg-[#09090e]/60">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="section-label">06 — Open Source</span>
            <h2
              className="font-heading font-bold text-[#f1f1f3] leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.025em' }}
            >
              Pinned{' '}
              <span className="text-gradient">Repositories</span>
            </h2>
          </div>

          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#5a5b66] hover:text-[#9fa0a8] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            @{githubData.username}
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.06)} className="flex items-center gap-8 mb-10">
          <div>
            <div className="text-xl font-heading font-bold text-[#f1f1f3]">{githubData.totalRepositories}</div>
            <div className="text-[10px] font-mono text-[#5a5b66]">Repositories</div>
          </div>
          <div className="h-8 w-px bg-white/[0.06]" />
          <div>
            <div className="text-xl font-heading font-bold text-[#f1f1f3]">{githubData.totalContributions}+</div>
            <div className="text-[10px] font-mono text-[#5a5b66]">Contributions</div>
          </div>
          <div className="h-8 w-px bg-white/[0.06]" />
          <div>
            <div className="text-xl font-heading font-bold text-emerald-400">Active</div>
            <div className="text-[10px] font-mono text-[#5a5b66]">Status</div>
          </div>
        </motion.div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubData.pinnedRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/${githubData.username}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="card-minimal p-5 flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-semibold text-[#f1f1f3] flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                    <Code className="w-3.5 h-3.5 text-indigo-400/60" />
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5a5b66] group-hover:text-[#9fa0a8] transition-colors" />
                </div>
                <p className="text-xs text-[#5a5b66] leading-relaxed">{repo.desc}</p>
              </div>

              <div className="flex items-center gap-4 text-[10px] font-mono text-[#5a5b66] pt-3 border-t border-white/[0.04]">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${langColor[repo.language] ?? 'bg-gray-400'}`} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400/70" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3 text-indigo-400/70" />
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
