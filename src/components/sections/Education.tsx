'use client'
import { useReveal } from '@/hooks'
import { education } from '@/data'

const terminalLog = [
  { cmd: '$ git log --education --format=timeline', output: '' },
  { cmd: '', output: 'commit a1b2c3d — Academic History' },
  { cmd: '', output: '────────────────────────────────' },
  { cmd: '', output: '* 2022-2025  BCA · Dibrugarh University' },
  { cmd: '', output: '  └── Software Engineering, Databases, Web Dev' },
  { cmd: '', output: '* 2020-2022  RD Junior College · Digboi' },
  { cmd: '', output: '  └── Science Stream, Programming Logic' },
  { cmd: '', output: '* 2008-2020  Montfort High School · Chabua' },
  { cmd: '', output: '  └── Mathematics, Logical Thinking' },
  { cmd: '', output: '' },
  { cmd: '$ _', output: '' },
]

export default function Education() {
  useReveal()

  return (
    <section id="education">
      <div className="edu-layout">
        <div>
          <div className="sec-label rv">Academic Journey</div>
          <h2 className="sec-title rv d1">Roots in<br /><span>Assam</span></h2>
          <p className="sec-sub rv d2" style={{ marginBottom: '1.5rem' }}>
            From the tea gardens of Chabua to Dibrugarh — each place forged the builder.
          </p>
          <div className="edu-cards">
            {education.map((e, i) => (
              <div key={e.name} className={`edu-card rv d${i + 2}`}>
                <div className="edu-year">{e.year}</div>
                <div className="edu-name">{e.name}</div>
                <div className="edu-loc">{e.location}</div>
                <div className="edu-detail">{e.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal replacing the Assam Map */}
        <div className="edu-terminal rv d3">
          <div className="edu-term-bar">
            <div className="tdot tr" /><div className="tdot ty" /><div className="tdot tg" />
            <span style={{ marginLeft: 'auto' }}>education.log</span>
          </div>
          <div className="edu-term-body">
            {terminalLog.map((line, i) => (
              <div key={i}>
                {line.cmd && <span className="cmd">{line.cmd}</span>}
                {line.output && (
                  <span className={
                    line.output.includes('commit') ? 'path' :
                    line.output.includes('*') ? 'date' : ''
                  }>{line.output}</span>
                )}
                {!line.cmd && !line.output && <br />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
