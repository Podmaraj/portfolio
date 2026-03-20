'use client'
import { useState, useEffect, useRef } from 'react'
import { skillPanels } from '@/data'

type TabKey = 'current' | 'backend' | 'database' | 'aiml' | 'mobile' | 'tools' | 'trading'

function drawCandleChart(canvas: HTMLCanvasElement) {
  const W = canvas.offsetWidth || 400
  const H = 200
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, W, H)

  // Grid lines
  ctx.strokeStyle = 'rgba(0,255,65,.06)'; ctx.lineWidth = 1
  for (let i = 0; i < 5; i++) {
    const y = H * .08 + (H * .82 / 4) * i
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
  }

  // Generate candles
  const candles: { o: number; c: number; h: number; l: number }[] = []
  let price = 100
  for (let i = 0; i < 28; i++) {
    const o = price
    const c = price + (Math.random() - .47) * 3
    candles.push({ o, c, h: Math.max(o, c) + Math.random() * 1.5, l: Math.min(o, c) - Math.random() * 1.5 })
    price = c
  }

  const allPrices = candles.flatMap(c => [c.h, c.l])
  const mn = Math.min(...allPrices), mx = Math.max(...allPrices), range = mx - mn
  const toY = (p: number) => H * .08 + ((mx - p) / range) * (H * .82)
  const cW = (W * .88) / candles.length
  const startX = W * .06

  candles.forEach((c, i) => {
    const x = startX + i * cW + cW * .5
    const isUp = c.c >= c.o
    const col = isUp ? '#00FF41' : '#FF3E3E'
    const bW = cW * .55
    const top = toY(Math.max(c.o, c.c))
    const bot = toY(Math.min(c.o, c.c))
    const ht = Math.max(bot - top, 1.5)

    // Wick
    ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.globalAlpha = 0.5
    ctx.beginPath(); ctx.moveTo(x, toY(c.h)); ctx.lineTo(x, toY(c.l)); ctx.stroke()
    ctx.globalAlpha = 1

    // Body
    ctx.fillStyle = col; ctx.globalAlpha = 0.8
    ctx.fillRect(x - bW / 2, top, bW, ht)
    ctx.globalAlpha = 1

    // Volume bar
    const vh = 6 + Math.random() * 10
    ctx.fillStyle = isUp ? 'rgba(0,255,65,.12)' : 'rgba(255,62,62,.1)'
    ctx.fillRect(x - cW * .25, H - vh - 2, cW * .5, vh)
  })
}

export default function Skills() {
  const [active, setActive] = useState<TabKey>('current')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (active === 'trading' && canvasRef.current) {
      setTimeout(() => { if (canvasRef.current) drawCandleChart(canvasRef.current) }, 80)
    }
  }, [active])

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'current', label: '⚡ current' },
    { key: 'backend', label: '🔧 backend' },
    { key: 'database', label: '🗄️ database' },
    { key: 'aiml', label: '🤖 ai/ml' },
    { key: 'mobile', label: '📱 android' },
    { key: 'tools', label: '🛠️ devops' },
    { key: 'trading', label: '📈 trading' },
  ]

  return (
    <section id="skills">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="sec-label rv">Skill Set</div>
        <h2 className="sec-title rv d1">Tech Stack &amp;<span> Tools</span></h2>
        <p className="sec-sub rv d2">$ ls ~/skills --categorized --verbose</p>

        {/* Tabs */}
        <div className="skills-tabs rv d2">
          {tabs.map(t => (
            <div
              key={t.key}
              className={`skill-tab${active === t.key ? ' active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </div>
          ))}
        </div>

        {/* Skill panels */}
        {(Object.keys(skillPanels) as TabKey[]).map(panelKey => (
          <div key={panelKey} className={`skills-panel${active === panelKey ? ' active' : ''}`}>
            <div className="skills-grid">
              {skillPanels[panelKey].map((card, i) => (
                <div key={card.name} className={`skill-card rv d${Math.min(i, 3)}`}>
                  <div className="sk-icon">{card.icon}</div>
                  <div className="sk-cat">{card.cat}</div>
                  <div className="sk-name">{card.name}</div>
                  <div className="sk-tags">
                    {card.tags.map(tag => <span key={tag} className="sk-tag">{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
            {panelKey === 'current' && (
              <div className="learning-row rv">
                <div className="learning-label">// also actively learning</div>
                <div className="learning-tags">
                  {['System Design', 'DSA', 'NestJS', 'Microservices', 'REST API Design', 'LangChain'].map(t => (
                    <span key={t} className="ltag">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Trading panel */}
        <div className={`skills-panel${active === 'trading' ? ' active' : ''}`}>
          <div className="trading-panel">
            <div className="trd-header">
              <div className="trd-logo">📈 Trading &amp; Financial Markets</div>
              <span style={{ fontSize: '.58rem', color: 'var(--dim)', marginLeft: 'auto' }}>
                // personal interest · not professional advice
              </span>
            </div>
            <div className="trd-body">
              <div className="trd-visual">
                <div style={{ fontSize: '.58rem', color: 'var(--dim)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.6rem' }}>
                  $ render --chart=candlestick
                </div>
                <canvas ref={canvasRef} style={{ width: '100%', height: 200, borderRadius: 4, background: 'rgba(0,0,0,.3)', display: 'block' }} />
                <div style={{ marginTop: '.6rem', fontSize: '.55rem', color: 'var(--dim)', textAlign: 'center' }}>
                  // learning chart patterns &amp; price action
                </div>
              </div>
              <div className="trd-skills">
                <div className="trd-skills-title">// market skills</div>
                <div className="trd-skill-items">
                  {[
                    { icon: '📊', label: 'Technical Analysis', sub: 'Chart patterns, support/resistance, indicators', w: 68 },
                    { icon: '🕯️', label: 'Candlestick Patterns', sub: 'Price action, candlestick formations', w: 60 },
                    { icon: '📰', label: 'Fundamental Analysis', sub: 'Reading financials, earnings, macroeconomics', w: 45 },
                    { icon: '⚖️', label: 'Risk Management', sub: 'Position sizing, stop-loss discipline', w: 55 },
                  ].map(item => (
                    <div key={item.label} className="trd-item">
                      <div className="trd-item-icon">{item.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div className="trd-item-label">{item.label}</div>
                        <div className="trd-item-sub">{item.sub}</div>
                        <div className="trd-bar-wrap">
                          <div className="trd-bar" data-w={item.w} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
