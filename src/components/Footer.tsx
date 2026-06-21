import { siteContent } from '../data/siteContent'

export default function Footer() {
  const { footer } = siteContent

  return (
    <footer style={{ borderTop: '1px solid var(--bdr)' }} className="mt-20">
      <div className="container-wide flex flex-col items-center gap-2 py-8 text-center">
        <span className="text-sm" style={{ color: 'var(--muted)' }}>
          {footer.copyright}
        </span>
        <span className="text-sm" style={{ color: 'var(--muted)' }}>
          {footer.affiliation}
        </span>
      </div>
    </footer>
  )
}
