'use client'
import { useState, useEffect } from 'react'
import { quotes } from '@/data'

export default function Quotes() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % quotes.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="quotes">
      <div className="sec-label rv" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Philosophy
      </div>
      <div className="quotes-wrap rv d1">
        {quotes.map((q, i) => (
          <div key={i} className={`qt${active === i ? ' on' : ''}`}>
            <p
              className="qt-text"
              dangerouslySetInnerHTML={{ __html: q }}
            />
          </div>
        ))}
      </div>
      <div className="qt-dots rv d2">
        {quotes.map((_, i) => (
          <div
            key={i}
            className={`qd${active === i ? ' on' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
