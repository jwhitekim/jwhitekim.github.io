import { Link } from 'react-router-dom'
import Section from '../Section'
import Entry from '../Entry'
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
    <Section id="writing" title={writing.label} lede={writing.body}>
      {posts.length === 0 ? (
        <p className="section-text text-muted">{writing.empty}</p>
      ) : (
        <ul className="entries">
          {posts.map((post) => (
            <Entry key={post.slug}>
              <p className="entry-title">
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              </p>
              <p className="entry-meta">
                {new Date(post.date).toLocaleDateString('en-CA').replaceAll('-', '.')}, {post.readTime}
                {writing.readTimeSuffix}
              </p>
              <p className="entry-desc">{post.summary}</p>
            </Entry>
          ))}
        </ul>
      )}
    </Section>
  )
}
