'use client'
import { useTerminalAnimation, useReveal } from '@/hooks'

export default function About() {
  useReveal()
  useTerminalAnimation(10)

  return (
    <section id="about">
      <div className="about-grid">
        {/* Left */}
        <div className="rv">
          <div className="sec-label">About Me</div>
          <h2 className="sec-title">Building Systems.<br />Building <span>Solutions.</span></h2>
          <p className="about-sub">
            I&apos;m Podmaraj Boruah — a BCA graduate from <strong>Dibrugarh, Assam</strong>. I build
            full-stack web applications, AI-powered systems, and I learn something new every
            single day. I believe progress is not linear, but it compounds.
          </p>
          <div className="about-mission">
            <p>
              <strong>My mission:</strong> Ship real products, contribute to open source, and 
              help build the <strong>Northeast India tech ecosystem</strong> — one project at a time.
            </p>
          </div>
          <div className="about-badges">
            {['⚡ Full-Stack Dev', '🤖 AI/ML Explorer', '📱 Android Dev', '📈 Trader', '🌏 Open Source', '🎓 BCA — Dibrugarh'].map(b => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal rv d2">
          <div className="term-bar">
            <div className="tdot tr" /><div className="tdot ty" /><div className="tdot tg" />
            <span className="term-title">podmaraj@dev:~$</span>
          </div>
          <div className="term-body" id="term">
            <div><span className="tp">podmaraj</span><span className="tc">:~$</span> cat about.json</div>
            <span className="tline" id="t1">&nbsp;</span>
            <span className="tline" id="t2"><span className="thi">&quot;name&quot;</span>{': "Podmaraj Boruah",'}</span>
            <span className="tline" id="t3"><span className="thi">&quot;from&quot;</span>{': '}<span className="tgo">&quot;Dibrugarh, Assam 🇮🇳&quot;</span>,</span>
            <span className="tline" id="t4"><span className="thi">&quot;education&quot;</span>{': '}<span className="tgo">&quot;BCA Graduate · Dibrugarh&quot;</span>,</span>
            <span className="tline" id="t5"><span className="thi">&quot;role&quot;</span>{': '}<span className="tfi">&quot;Full-Stack Developer&quot;</span>,</span>
            <span className="tline" id="t6"><span className="thi">&quot;stack&quot;</span>{': ['}<span className="tfi">&quot;React&quot;</span>{', '}<span className="tfi">&quot;Next.js&quot;</span>{', '}<span className="tfi">&quot;Python&quot;</span>{'],'}</span>
            <span className="tline" id="t7"><span className="thi">&quot;interests&quot;</span>{': ['}<span className="tfi">&quot;AI/ML&quot;</span>{', '}<span className="tfi">&quot;RAG Systems&quot;</span>{', '}<span className="tfi">&quot;System Design&quot;</span>{'],'}</span>
            <span className="tline" id="t8"><span className="thi">&quot;mission&quot;</span>{': '}<span className="tfi">&quot;Build. Ship. Learn. Repeat. 🔥&quot;</span>,</span>
            <span className="tline" id="t9"><span className="thi">&quot;status&quot;</span>{': '}<span className="tgo">&quot;Always learning, always building&quot;</span></span>
            <span className="tline" id="t10">&nbsp;</span>
            <div><span className="tp">podmaraj</span><span className="tc">:~$</span><span className="tcursor" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
