import { projects } from '@/data'

export default function Projects() {
  return (
    <section id="projects">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="sec-label rv" style={{ textAlign: 'center' }}>Portfolio</div>
        <h2 className="sec-title rv d1" style={{ textAlign: 'center' }}>Projects &amp;<span> Work</span></h2>
        <p className="sec-sub rv d2" style={{ textAlign: 'center', margin: '0 auto 2.5rem', maxWidth: 520 }}>
          $ git log --projects --oneline --graph
        </p>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div key={p.id} className={`proj-card rv${i % 2 !== 0 ? ' d1' : ''}`}>
              <div className="proj-badges">
                <span className="proj-cat">{p.category}</span>
                <span className="proj-id">#{p.id}</span>
              </div>
              <div className="proj-head">
                <div className="proj-name">{p.name}</div>
                <div className="proj-type">{p.type}</div>
              </div>
              <div className="proj-body">
                <p className="proj-desc">{p.description}</p>
                <div className="proj-stack">
                  {p.stack.map(s => <span key={s} className="stk">{s}</span>)}
                </div>
                <div className="proj-btns">
                  <a href={p.archUrl} className="pbtn pbtn-a">📂 details</a>
                  <a href={p.demoUrl} className="pbtn pbtn-d">🐙 github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
