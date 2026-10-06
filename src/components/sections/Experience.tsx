import Section from '../Section'
import { experience } from '../../data/experience'
import { siteContent } from '../../data/siteContent'

export default function Experience() {
  return (
    <Section id="experience" title={siteContent.experience.label}>
      <ul className="plain-rows">
        {experience.map((item) => (
          <li key={item.title}>
            <span className="when">{item.period}</span>
            <div>
              <p>
                <strong>{item.title}</strong>
              </p>
              {item.subtitle && <p className="text-muted">{item.subtitle}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
