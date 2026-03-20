'use client'
import { useNavScroll } from '@/hooks'

const links = [
  { href: '#about', label: 'about' },
  { href: '#education', label: 'education' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#learning', label: 'learning' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  useNavScroll()
  return (
    <nav id="nb">
      <div className="nav-brand">
        <div className="live-dot" />
        PODMARAJ.DEV
      </div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
      <div className="nav-icons">
        <a href="https://github.com/podmaraj" target="_blank" rel="noreferrer" className="ni" title="GitHub">GH</a>
        <a href="https://linkedin.com/in/podmaraj" target="_blank" rel="noreferrer" className="ni" title="LinkedIn">in</a>
        <a href="mailto:podmarajb@gmail.com" className="ni" title="Email">@</a>
      </div>
    </nav>
  )
}
