import FadeIn from '../FadeIn'
import { projects } from '../../data/projects'
import { siteContent } from '../../data/siteContent'

export default function Work() {
  const { work } = siteContent

  return (
    <section id="work" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <div className="section-intro">
          <p className="section-label">{work.label}</p>
          <h2 className="section-title">{work.title}</h2>
          <p className="section-copy">{work.body}</p>
        </div>
      </FadeIn>

      <div className="featured-systems">
        {projects.map((project, i) => {
          const pipeline = work.pipelines[project.id as keyof typeof work.pipelines] ?? project.stack.slice(0, 4)
          const statusLabel = work.statusLabels[project.status]

          return (
            <FadeIn key={project.id} delay={0.08 + i * 0.08}>
              <article className="project-card featured-project">
                <div className="project-visual">
                  <div className="mb-6 flex flex-col items-center gap-2">
                    <span className="eyebrow">{work.pipelineLabel}</span>
                    <span className="project-status">{statusLabel}</span>
                  </div>
                  <div className="pipeline">
                    {pipeline.map((step, index) => (
                      <div className="pipeline-step" key={step}>
                        <span>0{index + 1}</span>
                        <strong>{step}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-body">
                  <div className="mb-5 flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                    {project.status === 'ongoing' && <span className="tag">{statusLabel}</span>}
                  </div>

                  <div className="project-summary">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          {work.linkLabels.github}
                        </a>
                      )}
                      {project.paper && (
                        <a href={project.paper} target="_blank" rel="noreferrer">
                          {work.linkLabels.paper}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap justify-center gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
