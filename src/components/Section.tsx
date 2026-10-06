import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  lede?: ReactNode
  children?: ReactNode
}

export default function Section({ id, title, lede, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {lede && <p>{lede}</p>}
      </div>
      {children}
    </section>
  )
}
