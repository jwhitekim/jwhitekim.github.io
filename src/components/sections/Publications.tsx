import FadeIn from '../FadeIn'
import { publications } from '../../data/publications'
import { siteContent } from '../../data/siteContent'

export default function Publications() {
  return (
    <section id="publications" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <p className="section-label">{siteContent.publications.label}</p>
      </FadeIn>

      <div className="mx-auto flex max-w-4xl flex-col gap-5">
        {publications.map((pub, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.06}>
            <div
              className="px-6 py-8"
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--bdr)',
                borderRadius: '12px',
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-3">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {pub.year}
                  </span>
                  <div>
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold transition-colors"
                      style={{ color: 'var(--txt)', textDecoration: 'none' }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = 'var(--muted)')
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = 'var(--txt)')
                      }
                    >
                      {pub.titleKo}
                    </a>
                    <p
                      className="text-sm mt-2"
                      style={{ color: 'var(--muted)', lineHeight: '1.55' }}
                    >
                      {pub.title}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {pub.url !== '#' && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold"
                    style={{ color: 'var(--muted)', textDecoration: 'none' }}
                  >
                    {siteContent.publications.externalLinkLabel}
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
