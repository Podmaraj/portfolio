'use client'

import React from 'react'
import { education } from '@/data'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        <div className="space-y-4">
          {education.map((e, i) => (
            <div key={i} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs font-mono text-indigo-400">{e.year}</div>
              <div className="text-lg font-bold text-white">{e.degree}</div>
              <div className="text-sm text-zinc-400">{e.institution} · {e.location}</div>
              <div className="text-xs text-zinc-500 mt-2">{e.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
