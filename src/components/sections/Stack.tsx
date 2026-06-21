import FadeIn from '../FadeIn'
import { siteContent } from '../../data/siteContent'

export default function Stack() {
  const { stack } = siteContent

  return (
    <section id="stack" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <p className="section-label">{stack.label}</p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 mt-2">
          {stack.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 px-4 py-3 rounded text-sm"
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--bdr)',
                color: 'var(--txt)',
              }}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="font-semibold text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
