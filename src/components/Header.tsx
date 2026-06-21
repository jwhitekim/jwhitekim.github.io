import { useEffect, useRef } from 'react'
import { siteContent } from '../data/siteContent'

interface Props {
  dark: boolean
  onToggle: () => void
}

export default function Header({ dark, onToggle }: Props) {
  const clockRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tick = () => {
      if (!clockRef.current) return
      const now = new Date()
      const kst = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now)
      clockRef.current.textContent = `${kst} ${siteContent.profile.timezoneLabel}`
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === siteContent.hero.shortcutKey) {
        navigator.clipboard.writeText(siteContent.profile.email)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header
      style={{ borderBottom: '1px solid var(--bdr)', background: 'var(--bg)' }}
      className="sticky top-0 z-50"
    >
      {/* Top bar: name + clock + dark toggle */}
      <div className="container-wide">
        <div className="relative flex items-center justify-center py-5">
          <a
            href="/#intro"
            style={{ color: 'var(--txt)' }}
            className="font-sans text-sm font-medium no-underline"
          >
            {siteContent.profile.nameKo}
          </a>
          <div className="absolute right-0 flex items-center gap-4">
            <span
              ref={clockRef}
              className="text-sm"
              style={{ color: 'var(--muted)' }}
            />
            <button
              onClick={onToggle}
              aria-label={siteContent.header.themeToggleLabel}
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={{
                background: 'var(--bg2)',
                color: 'var(--muted)',
                border: '1px solid var(--bdr)',
              }}
            >
              {dark ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Nav strip */}
      <div className="container-wide" style={{ borderTop: '1px solid var(--bdr)' }}>
        <nav className="flex justify-center gap-8 py-3.5 overflow-x-auto">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap transition-colors"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--txt)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--muted)')}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
