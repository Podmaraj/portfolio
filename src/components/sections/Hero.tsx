'use client'
import { useMatrixRain } from '@/hooks'
import { useState, useEffect } from 'react'

export default function Hero() {
  useMatrixRain('matrix-c')
  const [bootDone, setBootDone] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Boot sequence fades out after 2.5s, then main content appears
    const bootTimer = setTimeout(() => setBootDone(true), 2800)
    const contentTimer = setTimeout(() => setShowContent(true), 3200)
    return () => { clearTimeout(bootTimer); clearTimeout(contentTimer) }
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg" />
      <canvas id="matrix-c" />

      <div className="hero-content">
        {/* Boot sequence — fades out */}
        <div className={`boot-sequence${bootDone ? ' boot-done' : ''}`}>
          <BootLine delay={0}  text="> Initializing system..." />
          <BootLine delay={300} text="> Loading modules: [react, next.js, typescript]" ok />
          <BootLine delay={700} text="> Connecting to portfolio_db..." ok />
          <BootLine delay={1100} text="> Mounting components..." ok />
          <BootLine delay={1500} text="> Building portfolio..." ok />
          <BootLine delay={2000} text="> System ready. Welcome." highlight />
        </div>

        {/* Main content — fades in after boot */}
        <div className={`hero-main${showContent ? ' hero-visible' : ''}`}>
          <p className="hero-eyebrow">whoami</p>
          <h1 className="hero-title">
            <span className="t-name">Podmaraj Boruah</span>
            <span className="t-role">Full-Stack Developer · AI Enthusiast · Builder</span>
          </h1>
          <p className="hero-sub">
            Building full-stack systems, AI-powered applications, and learning every day from{' '}
            <strong>Dibrugarh, Assam.</strong> Shipping code, solving problems, growing constantly.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-fire">{'>'} view_projects</a>
            <a href="#contact" className="btn btn-ghost">{'>'} connect</a>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}

function BootLine({ delay, text, ok, highlight }: { delay: number; text: string; ok?: boolean; highlight?: boolean }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  if (!visible) return null
  return (
    <div className="boot-line" style={{ animation: 'termIn .25s forwards' }}>
      <span className={highlight ? 'info' : ''}>{text}</span>
      {ok && <span className="ok"> [OK]</span>}
    </div>
  )
}
