import Section from '../Section'
import Entry from '../Entry'
import SlashLinks from '../SlashLinks'
import { projects } from '../../data/projects'
import { siteContent } from '../../data/siteContent'

export default function Work() {
  const { work } = siteContent

  return (
    <Section id="work" title={work.label} lede={work.body}>
      <ul className="entries">
        {projects.map((project) => {
          const pipeline = work.pipelines[project.id as keyof typeof work.pipelines]
          const links = [
            project.paper && { label: work.linkLabels.paper, href: project.paper },
            project.github && { label: work.linkLabels.github, href: project.github },
          ].filter((link): link is { label: string; href: string } => Boolean(link))

          return (
            <Entry
              key={project.id}
              image={project.image}
              imageHover={project.imageHover}
              highlight={project.status === 'ongoing'}
            >
              <p>
                <span className="entry-title">{project.title}</span>
                {project.status === 'ongoing' && (
                  <span className="status-ongoing">{work.statusLabels.ongoing}</span>
                )}
              </p>
              {pipeline && <p className="entry-meta">{pipeline.join(' → ')}</p>}
              {links.length > 0 && <SlashLinks links={links} />}
              <p className="entry-desc">{project.description}</p>
              <p className="entry-desc">{project.stack.join(', ')}</p>
            </Entry>
          )
        })}
      </ul>
    </Section>
  )
}
