import Section from '../Section'
import Entry from '../Entry'
import { siteContent } from '../../data/siteContent'

export default function Research() {
  const { research } = siteContent

  return (
    <Section id="research" title={research.label} lede={research.body}>
      <ul className="entries">
        {research.timeline.map((item) => (
          <Entry key={item.step} highlight={item.active}>
            <p className="entry-title">{item.title}</p>
            <p className="entry-meta">
              {item.step}. {item.field}
            </p>
            <p className="entry-desc">{item.body}</p>
          </Entry>
        ))}
      </ul>
    </Section>
  )
}
