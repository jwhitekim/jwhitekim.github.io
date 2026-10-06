import { Fragment } from 'react'

interface Link {
  label: string
  href: string
}

// "이메일 / GitHub / LinkedIn" 형태의 링크 줄
export default function SlashLinks({ links, className }: { links: Link[]; className?: string }) {
  return (
    <p className={className}>
      {links.map((link, i) => (
        <Fragment key={link.label}>
          {i > 0 && <span className="sep">/</span>}
          <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            {link.label}
          </a>
        </Fragment>
      ))}
    </p>
  )
}
