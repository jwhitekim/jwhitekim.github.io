import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }
}

export default function Intro() {
  const { hero, profile } = siteContent

  return (
    <section id="intro" className="container-wide hero-section">
      <div className="hero-grid">
        <div>
          <motion.p className="eyebrow mb-5" {...fade(0)}>
            {hero.eyebrow}
          </motion.p>

          <motion.h1 className="hero-title mb-7" {...fade(0.06)}>
            {hero.title}
          </motion.h1>

          <motion.p className="hero-copy mb-8" {...fade(0.12)}>
            {hero.body}
          </motion.p>

          <motion.div className="mb-9 flex flex-wrap justify-center gap-3" {...fade(0.16)}>
            <a className="hero-button hero-button-primary" href="#work">
              {hero.primaryLinkLabel}
            </a>
            <a className="hero-button" href="#research">
              {hero.secondaryLinkLabel}
            </a>
          </motion.div>

          <motion.div className="stat-grid mb-8" {...fade(0.2)}>
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p className="text-sm text-muted" {...fade(0.26)}>
            {profile.name} · {profile.nameKo} · {profile.affiliation} · {hero.shortcutPrefix}{' '}
            <kbd
              className="px-1.5 py-0.5 text-xs rounded"
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--bdr)',
                color: 'var(--txt)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {hero.shortcutKey}
            </kbd>{' '}
            {hero.shortcutSuffix}
          </motion.p>
        </div>

      </div>
    </section>
  )
}
