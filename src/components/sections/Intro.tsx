import SlashLinks from '../SlashLinks'
import { siteContent } from '../../data/siteContent'

export default function Intro() {
  const { hero, profile, contact } = siteContent
  const links = [
    { label: hero.emailLabel, href: `mailto:${profile.email}` },
    ...contact.links.filter((link) => link.href !== '#'),
  ]

  return (
    <section id="intro" className={`intro${hero.photo ? ' has-photo' : ''}`}>
      <div>
        <h1 className="intro-name">
          {profile.nameKo} <span style={{ color: 'var(--subtle)' }}>{profile.name}</span>
        </h1>
        {hero.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <SlashLinks className="slash-links" links={links} />
      </div>
      {hero.photo && <img className="intro-photo" src={hero.photo} alt={profile.nameKo} />}
    </section>
  )
}
