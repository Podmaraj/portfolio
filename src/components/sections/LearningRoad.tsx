'use client'
import { useProgressBars } from '@/hooks'
import { roadmap } from '@/data'

const statusConfig = {
  active:  { cls: 'st-active',  label: '[ACTIVE]' },
  next:    { cls: 'st-next',    label: '[QUEUED]' },
  horizon: { cls: 'st-horizon', label: '[PLANNED]' },
}

export default function LearningRoad() {
  useProgressBars('learning')

  return (
    <section id="learning">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="sec-label rv" style={{ textAlign: 'center' }}>Roadmap</div>
        <h2 className="sec-title rv d1" style={{ textAlign: 'center' }}>
          Learning to Be a<br /><span>Better Engineer</span>
        </h2>
        <p className="sec-sub rv d2" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 520 }}>
          $ cat ~/roadmap.yml --status=all
        </p>
        <div className="learning-grid">
          {roadmap.map((item, i) => {
            const sc = statusConfig[item.status]
            return (
              <div key={item.title} className={`road-card rv${i % 2 !== 0 ? ' d1' : ''}`}>
                <span className={`road-status ${sc.cls}`}>{sc.label}</span>
                <div className="road-title">{item.title}</div>
                <div className="road-desc">{item.desc}</div>
                <div className="road-items">
                  {item.items.map(t => <span key={t} className="ri-tag">{t}</span>)}
                </div>
                {item.progress !== undefined && (
                  <div className="road-progress">
                    <div className="rp-label">
                      <span>progress</span><span>{item.progress}%</span>
                    </div>
                    <div className="rp-track">
                      <div
                        className={`rp-fill${item.fillClass ? ` ${item.fillClass}` : ''}`}
                        data-w={item.progress}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
