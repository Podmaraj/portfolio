'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, CheckCircle2, Send, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import { personalInfo } from '@/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitting(true)
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name}`)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      window.location.href = mailto
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }, 600)
  }

  return (
    <section id="contact" className="py-section relative overflow-hidden">
      <div className="spotlight bottom-0 left-1/2 -translate-x-1/2 opacity-40" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="section-label">07 — Contact</span>
        </motion.div>

        {/* Big email focal point */}
        <motion.div {...fadeUp(0.06)} className="mb-16 space-y-4">
          <h2
            className="font-heading font-bold text-[#f1f1f3] leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Let&apos;s Build{' '}
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-base text-[#5a5b66] max-w-xl">
            Open to work, collaborations, and interesting engineering ideas. Send me a message
            directly.
          </p>

          {/* Email display */}
          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-3 mt-2"
            title="Copy email"
          >
            <span
              className="font-heading font-bold text-[#f1f1f3] group-hover:text-indigo-400 transition-colors"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', letterSpacing: '-0.02em' }}
            >
              {personalInfo.email}
            </span>
            {copied ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-[#5a5b66] group-hover:text-indigo-400 shrink-0 transition-colors" />
            )}
          </button>

          {/* Social links */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5b66] hover:text-[#9fa0a8] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5b66] hover:text-[#9fa0a8] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5b66] hover:text-[#9fa0a8] transition-colors"
            >
              Resume
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/[0.04] mb-12" />

        {/* Minimal Contact Form */}
        <motion.div {...fadeUp(0.12)} className="max-w-xl">
          <div className="mb-6">
            <h3 className="text-sm font-heading font-semibold text-[#9fa0a8]">
              Or send a message directly
            </h3>
          </div>

          {submitted && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-xs font-mono text-emerald-400 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Opening your mail app...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-[#5a5b66] uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#f1f1f3] text-sm placeholder-[#5a5b66] focus:outline-none focus:border-indigo-500/40 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-[#5a5b66] uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#f1f1f3] text-sm placeholder-[#5a5b66] focus:outline-none focus:border-indigo-500/40 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-[#5a5b66] uppercase tracking-wider">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or idea..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#f1f1f3] text-sm placeholder-[#5a5b66] focus:outline-none focus:border-indigo-500/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Opening mail...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
