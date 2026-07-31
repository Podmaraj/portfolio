'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText, Send, CheckCircle2, Copy } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import { personalInfo } from '@/data'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    setIsSubmitting(true)

    const subject = formState.subject || `Portfolio Inquiry from ${formState.name}`
    const body = `Name: ${formState.name}\nSender Email: ${formState.email}\n\nMessage:\n${formState.message}`
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      window.location.href = mailtoUrl
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }, 600)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-4">
            Let&apos;s Build <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Something Great</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
            Have a project in mind, engineering inquiry, or collaboration idea? Send me a message directly to my email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800 light:border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800 light:border-slate-200 flex items-center justify-between group hover:border-indigo-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">LinkedIn Profile</span>
                      <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        linkedin.com/in/podmaraj
                      </span>
                    </div>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800 light:border-slate-200 flex items-center justify-between group hover:border-indigo-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-800 text-white">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">GitHub Profile</span>
                      <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        github.com/podmaraj
                      </span>
                    </div>
                  </div>
                </a>

                {/* Resume Download Card */}
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-violet-950/40 to-slate-900 border border-indigo-500/30 flex items-center justify-between group hover:border-indigo-500 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-wider block">Download Resume</span>
                      <span className="text-sm font-semibold text-white">
                        Podmaraj_Boruah_Resume.pdf
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Contact Form - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 mb-1">
                Send Direct Email Message
              </h3>
              <p className="text-xs text-indigo-400 font-mono mb-6">
                Direct recipient: {personalInfo.email}
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Opening your mail app to send directly to {personalInfo.email}...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 border border-zinc-800 light:border-slate-300 text-zinc-100 dark:text-zinc-100 light:text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 border border-zinc-800 light:border-slate-300 text-zinc-100 dark:text-zinc-100 light:text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Engineering Role"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 border border-zinc-800 light:border-slate-300 text-zinc-100 dark:text-zinc-100 light:text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, system requirements, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 border border-zinc-800 light:border-slate-300 text-zinc-100 dark:text-zinc-100 light:text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Direct Email ({personalInfo.email})
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
