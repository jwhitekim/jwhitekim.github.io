import Section from '../Section'
import { siteContent } from '../../data/siteContent'

export default function Contact() {
  const { contact, profile, hero } = siteContent

  return (
    <Section id="contact" title={contact.label} lede={contact.body}>
      <p className="section-text">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p className="section-text text-muted">
        <kbd>{hero.shortcutKey}</kbd> {hero.shortcutSuffix}
      </p>
    </Section>
  )
}
