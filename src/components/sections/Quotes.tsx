'use client'
import { useState, useEffect } from 'react'
import { quotes } from '@/data'

export default function Quotes() {
  const [active, setActive] = useState(0)

  // ✅ AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % quotes.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="quotes" className="w-full flex flex-col items-center">

      {/* Heading */}
      <div className="text-center mb-8 text-emerald-400 tracking-widest text-sm">
        // PHILOSOPHY
      </div>

      {/* Quotes */}
      <div className="relative w-full max-w-2xl min-h-[120px] flex items-center justify-center">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`absolute w-full text-center transition-all duration-700 ease-in-out ${
              active === i
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-95 z-0 pointer-events-none'
            }`}
          >
            <p
              className="text-slate-200 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: q }}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              active === i
                ? 'bg-emerald-400 scale-125'
                : 'bg-slate-600'
            }`}
          />
        ))}
      </div>

    </section>
  )
}