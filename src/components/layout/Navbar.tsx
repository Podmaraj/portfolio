'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, Menu, X, Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
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
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/80 dark:bg-[#030712]/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-lg shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-zinc-100 dark:text-zinc-100 group-hover:text-indigo-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {personalInfo.company}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/60 dark:bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 dark:text-zinc-300 hover:text-white dark:hover:text-white hover:bg-zinc-800/80 dark:hover:bg-zinc-800/80 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switcher (Hydration-safe) */}
          {mounted ? (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex items-center p-1 rounded-full bg-zinc-900/80 dark:bg-zinc-900/80 border border-zinc-800/80 text-xs font-medium text-zinc-400 hover:border-zinc-700 transition-all"
            >
              <span
                className={`flex items-center justify-center p-1.5 rounded-full transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </span>
              <span
                className={`flex items-center justify-center p-1.5 rounded-full transition-all duration-200 ${
                  theme === 'light'
                    ? 'bg-white text-zinc-900 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Light Mode"
              >
                <Sun className="w-3.5 h-3.5" />
              </span>
            </button>
          ) : (
            <div className="w-14 h-7 rounded-full bg-zinc-900/80 border border-zinc-800/80" />
          )}

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all hover:scale-[1.02]"
          >
            Connect
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900/60 dark:bg-zinc-900/60 text-zinc-300 dark:text-zinc-300 border border-zinc-800/80"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 dark:bg-[#030712]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-300 dark:text-zinc-300 hover:bg-zinc-900 dark:hover:bg-zinc-900 hover:text-white dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-around">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white p-2">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white p-2">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-zinc-400 hover:text-white p-2">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
