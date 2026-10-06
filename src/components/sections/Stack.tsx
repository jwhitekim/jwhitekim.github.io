import Section from '../Section'
import { siteContent } from '../../data/siteContent'

export default function Stack() {
  const { stack } = siteContent

  return (
    <Section id="stack" title={stack.label}>
      <p className="section-text">{stack.items.join(', ')}</p>
    </Section>
  )
}
