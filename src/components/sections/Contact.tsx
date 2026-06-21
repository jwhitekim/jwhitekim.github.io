import { useState, type FormEvent } from 'react'
import FadeIn from '../FadeIn'
import { siteContent } from '../../data/siteContent'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const { contact, profile } = siteContent

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    window.location.href = `mailto:${profile.email}?subject=Hello from ${email}`
    setSent(true)
    setEmail('')
  }

  return (
    <section id="contact" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <p className="section-label">{contact.label}</p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <p className="mx-auto text-base mb-12 max-w-md" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
          {contact.body}
        </p>
      </FadeIn>

      {/* Email form */}
      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3 mb-14">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={contact.inputPlaceholder}
            required
            className="flex-1 px-4 py-3 text-sm rounded outline-none transition-colors font-sans"
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--bdr)',
              color: 'var(--txt)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--txt)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--bdr)')}
          />
          <button
            type="submit"
            className="px-5 py-3 text-sm font-medium rounded transition-colors"
            style={{
              background: 'var(--txt)',
              color: 'var(--bg)',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.8')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
          >
            {sent ? `${contact.buttonSent} ✓` : contact.buttonIdle}
          </button>
        </form>
      </FadeIn>

      {/* Links */}
      <FadeIn delay={0.14}>
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
          {contact.links.map((link) => (
            <div
              key={link.label}
              className="flex flex-col items-center justify-center gap-2 px-5 py-6"
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--bdr)',
                borderRadius: '12px',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-base font-semibold transition-colors"
                style={{ color: 'var(--txt)', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--muted)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--txt)')}
              >
                {link.value} {contact.externalSuffix}
              </a>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
