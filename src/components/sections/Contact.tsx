const socialLinks = [
  { href: 'https://github.com/podmaraj',    cls: 'soc-gh', icon: '🐙', label: 'github.com/podmaraj' },
  { href: 'https://linkedin.com/in/podmaraj', cls: 'soc-li', icon: '💼', label: 'linkedin.com/in/podmaraj' },
  { href: 'mailto:podmarajb@gmail.com',     cls: 'soc-em', icon: '✉️', label: 'podmarajb@gmail.com' },
  { href: 'https://twitter.com/podmaraj',   cls: 'soc-tw', icon: '🐦', label: '@podmaraj' },
]

const cards = [
  { label: 'Location',  val: 'Dibrugarh, Assam 🇮🇳',     green: false },
  { label: 'Email',     val: 'podmarajb@gmail.com',      green: false },
  { label: 'GitHub',    val: 'github.com/podmaraj',        green: false },
  { label: 'LinkedIn',  val: 'linkedin.com/in/podmaraj',   green: false },
  { label: 'Status',    val: '● Open to Work',             green: true  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="cta-icon rv">{'>'}_</div>
      <h2 className="cta-title rv d1">
        Let&apos;s Build<br /><span>Something Together</span>
      </h2>
      <p className="cta-sub rv d2">
        $ ssh podmaraj@connect — Open to collaborations, freelance projects, and any mission
        that pushes boundaries.
      </p>
      <div className="cta-btns rv d3">
        <a href="mailto:podmarajb@gmail.com" className="btn btn-fire">{'>'} send_mail</a>
        <a href="#" className="btn btn-ghost">{'>'} resume.pdf</a>
        <a href="#" className="btn btn-ghost" style={{ borderColor: 'rgba(0,229,255,.2)', color: 'var(--cyan)' }}>
          {'>'} schedule_call
        </a>
      </div>

      {/* Social links */}
      <div className="social-row rv d3">
        {socialLinks.map(s => (
          <a key={s.href} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className={`soc-link ${s.cls}`}>
            <span>{s.icon}</span> {s.label}
          </a>
        ))}
      </div>

      {/* Info cards */}
      <div className="contact-cards rv d4">
        {cards.map(c => (
          <div key={c.label} className="cc">
            <div className="cc-label">{c.label}</div>
            <div className={`cc-val${c.green ? ' green-val' : ''}`}>{c.val}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
