'use client'
import { useEffect, useRef, useState } from 'react'

/* ─── useCursor ─── */
export function useCursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const curR = document.getElementById('cur-r')
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px' }
    }
    document.addEventListener('mousemove', onMove)
    let raf: number
    const anim = () => {
      rx += (mx - rx) * .13; ry += (my - ry) * .13
      if (curR) { curR.style.left = rx + 'px'; curR.style.top = ry + 'px' }
      raf = requestAnimationFrame(anim)
    }
    anim()
    const hoverEls = document.querySelectorAll('a,button,.btn,.term-tab,.edu-entry,.road-card,.skill-card,.proj-card,.soc-link,.qd,.trd-item')
    const onEnter = () => {
      if (cur) { cur.style.width='14px'; cur.style.height='14px'; cur.style.background='var(--green)' }
      if (curR) curR.style.transform='translate(-50%,-50%) scale(1.5)'
    }
    const onLeave = () => {
      if (cur) { cur.style.width='8px'; cur.style.height='8px'; cur.style.background='var(--green)' }
      if (curR) curR.style.transform='translate(-50%,-50%) scale(1)'
    }
    hoverEls.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}

/* ─── useNavScroll ─── */
export function useNavScroll() {
  useEffect(() => {
    const nav = document.getElementById('nb')
    const handler = () => nav?.classList.toggle('stuck', window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
}

/* ─── useReveal ─── */
export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: .1 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ─── useTerminalAnimation ─── */
export function useTerminalAnimation(lineCount = 10) {
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        for (let i = 1; i <= lineCount; i++) {
          const el = document.getElementById(`t${i}`)
          if (el) setTimeout(() => el.classList.add('show'), i * 210 + 300)
        }
      }
    }, { threshold: .2 })
    const el = document.querySelector('.terminal')
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [lineCount])
}

/* ─── useProgressBars ─── */
export function useProgressBars(sectionId: string) {
  useEffect(() => {
    const animate = () => {
      document.querySelectorAll('.rp-fill, .trd-bar').forEach(bar => {
        const w = (bar as HTMLElement).dataset.w
        if (w) setTimeout(() => { (bar as HTMLElement).style.width = w + '%' }, 100)
      })
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) animate()
    }, { threshold: .15 })
    const el = document.getElementById(sectionId)
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [sectionId])
}

/* ─── useMatrixRain ─── */
export function useMatrixRain(canvasId: string) {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]()=+-*&^%$#@!'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * -100)

    let raf: number
    const draw = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize

        // Lead character (bright)
        ctx.fillStyle = '#00FF41'
        ctx.globalAlpha = 0.9
        ctx.fillText(char, x, y * fontSize)

        // Trail (dimmer)
        ctx.globalAlpha = 0.04
        ctx.fillStyle = '#00FF41'
        ctx.fillRect(x, (y - 15) * fontSize, fontSize, fontSize * 15)
        ctx.globalAlpha = 1

        if (y * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i] += 0.4 + Math.random() * 0.3
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [canvasId])
}

/* ─── useTypingEffect ─── */
export function useTypingEffect(text: string, speed = 50, startDelay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setIsDone(false)
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          setIsDone(true)
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, isDone }
}

/* ─── useBootSequence ─── */
export function useBootSequence(lines: string[], lineDelay = 120) {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setVisibleLines(0)
    setIsDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= lines.length) {
        setIsDone(true)
        clearInterval(interval)
      }
    }, lineDelay)
    return () => clearInterval(interval)
  }, [lines.length, lineDelay])

  return { visibleLines, isDone }
}
