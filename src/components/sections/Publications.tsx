import { Fragment } from 'react'
import Section from '../Section'
import Entry from '../Entry'
import SlashLinks from '../SlashLinks'
import { publications, selfAuthor } from '../../data/publications'
import { siteContent } from '../../data/siteContent'

export default function Publications() {
  const { publications: content } = siteContent

  return (
    <Section id="publications" title={content.label}>
      <ul className="entries">
        {publications.map((pub) => {
          const links = [
            pub.url && { label: content.paperLabel, href: pub.url },
            pub.code && { label: content.codeLabel, href: pub.code },
          ].filter((link): link is { label: string; href: string } => Boolean(link))

          return (
            <Entry key={pub.title} image={pub.image} imageHover={pub.imageHover} highlight={pub.highlight}>
              <p className="entry-title">
                {pub.url ? <a href={pub.url} target="_blank" rel="noreferrer">{pub.title}</a> : pub.title}
              </p>
              {pub.titleKo && <p className="text-muted">{pub.titleKo}</p>}
              <p>
                {pub.authors.map((author, i) => (
                  <Fragment key={author}>
                    {i > 0 && ', '}
                    {author === selfAuthor ? <span className="entry-self">{author}</span> : author}
                  </Fragment>
                ))}
              </p>
              <p className="entry-meta">
                {pub.venue}, {pub.location}, {pub.date}, {pub.pages}
              </p>
              {links.length > 0 && <SlashLinks links={links} />}
            </Entry>
          )
        })}
      </ul>
    </Section>
  )
}
