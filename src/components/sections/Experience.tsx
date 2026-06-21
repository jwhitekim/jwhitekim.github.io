import FadeIn from '../FadeIn'
import { experience } from '../../data/experience'
import { siteContent } from '../../data/siteContent'

export default function Experience() {
  const { experience: content } = siteContent

  return (
    <section id="experience" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <p className="section-label">{content.label}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="mx-auto text-base mb-12 max-w-2xl" style={{ color: 'var(--muted)' }}>
          {content.body}
        </p>
      </FadeIn>

      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {experience.map((item, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.06}>
            <div
              className="py-8 px-6"
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--bdr)',
                borderRadius: '12px',
              }}
            >
              <span
                className="mb-3 block text-sm font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                {item.period}
              </span>
              <div>
                <p className="text-base font-semibold" style={{ color: 'var(--txt)' }}>
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-base mt-1" style={{ color: 'var(--muted)', lineHeight: '1.65' }}>
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
