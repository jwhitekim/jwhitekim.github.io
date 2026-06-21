import { Link } from 'react-router-dom'
import FadeIn from '../FadeIn'
import type { PostFrontmatter } from '../../types'
import { siteContent } from '../../data/siteContent'

const postModules = import.meta.glob<{ frontmatter: PostFrontmatter }>(
  '../../content/posts/*.mdx',
  { eager: true },
)

interface PostMeta extends PostFrontmatter {
  slug: string
  readTime: number
}

function estimateReadTime(wordCount = 400) {
  return Math.max(1, Math.round(wordCount / 200))
}

const posts: PostMeta[] = Object.entries(postModules)
  .map(([path, mod]) => ({
    slug: path.replace('../../content/posts/', '').replace('.mdx', ''),
    ...mod.frontmatter,
    readTime: estimateReadTime(mod.frontmatter.summary?.split(' ').length ?? 0),
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function Writing() {
  const { writing } = siteContent

  return (
    <section id="writing" className="container-wide section-block">
      <hr className="divider section-divider" />

      <FadeIn>
        <p className="section-label">{writing.label}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="mx-auto max-w-2xl text-base mb-12" style={{ color: 'var(--muted)' }}>
          {writing.body}
        </p>
      </FadeIn>

      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={0.1 + i * 0.06}>
            <Link
              to={`/posts/${post.slug}`}
              className="group flex flex-col items-center gap-3 px-6 py-7 no-underline"
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--bdr)',
                borderRadius: '12px',
                color: 'inherit',
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <span
                  className="text-sm font-medium shrink-0"
                  style={{ color: 'var(--muted)' }}
                >
                  {new Date(post.date).toLocaleDateString('en-CA').replaceAll('-', '/')}
                </span>
                <span
                  className="text-base font-semibold transition-colors"
                  style={{ color: 'var(--txt)' }}
                >
                  {post.title}
                </span>
              </div>
              <span
                className="text-sm shrink-0"
                style={{ color: 'var(--muted)' }}
              >
                {post.readTime} {writing.readTimeSuffix}
              </span>
            </Link>
          </FadeIn>
        ))}

        {posts.length === 0 && (
          <p className="text-sm py-4" style={{ color: 'var(--muted)' }}>
            {writing.empty}
          </p>
        )}
      </div>
    </section>
  )
}
