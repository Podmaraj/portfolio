'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { personalInfo } from '@/data'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Detect active section
      const sectionIds = navLinks.map(l => l.href.slice(1))
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/95 backdrop-blur-xl border-b border-white/[0.06] py-4'
          : 'bg-[#050508]/40 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Monogram Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3"
          aria-label="Podmaraj Boruah — Home"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0e0e16] border border-white/[0.12] flex items-center justify-center font-heading font-800 text-sm text-white group-hover:border-indigo-500/50 transition-colors">
            <span className="font-heading font-bold text-sm text-gradient">PB</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-heading font-semibold text-white leading-tight">
              {personalInfo.name}
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="text-[10px] font-mono text-[#5a5b66]">{personalInfo.company}</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                className={`relative text-sm font-body font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-[#9fa0a8] hover:text-white'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/80 to-transparent" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Connect CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-white/[0.08] text-[#9fa0a8] hover:text-[#f1f1f3] hover:border-white/[0.15] transition-all duration-200"
          >
            Connect
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-white/[0.07] text-[#5a5b66] hover:text-[#f1f1f3] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050508]/98 backdrop-blur-xl border-t border-white/[0.04] px-6 py-5 mt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-[#9fa0a8] hover:text-[#f1f1f3] hover:bg-white/[0.04] transition-all"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/5 transition-all"
            >
              Connect →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
