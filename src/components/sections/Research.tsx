import FadeIn from '../FadeIn'
import { siteContent } from '../../data/siteContent'

export default function Research() {
  const { research } = siteContent

  return (
    <section id="research" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <p className="section-label">{research.label}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 className="section-heading">{research.title}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted">
          {research.body}
        </p>
      </FadeIn>

      <div className="research-timeline max-w-3xl">
        {research.timeline.map((item, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.08}>
            <article className={`timeline-item ${item.active ? 'active' : ''}`}>
              <span className="eyebrow mb-2 block">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
