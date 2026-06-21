import { useParams, Link, Navigate } from 'react-router-dom'
import type { ComponentType } from 'react'
import { MDXProvider } from '@mdx-js/react'
import type { PostFrontmatter } from '../types'
import { siteContent } from '../data/siteContent'

const postModules = import.meta.glob<{
  frontmatter: PostFrontmatter
  default: ComponentType
}>(
  '../content/posts/*.mdx',
  { eager: true },
)

interface PostMeta extends PostFrontmatter {
  slug: string
  Content: ComponentType
}

const allPosts: PostMeta[] = Object.entries(postModules)
  .map(([path, mod]) => ({
    slug: path.replace('../content/posts/', '').replace('.mdx', ''),
    Content: mod.default,
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const components = {
  h1: (p: object) => <h1 style={{ color: 'var(--txt)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', marginTop: '2.5rem' }} {...p} />,
  h2: (p: object) => <h2 style={{ color: 'var(--txt)', fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', marginTop: '2rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--bdr)' }} {...p} />,
  h3: (p: object) => <h3 style={{ color: 'var(--txt)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', marginTop: '1.5rem' }} {...p} />,
  p: (p: object) => <p style={{ color: 'var(--muted)', lineHeight: '1.75', marginBottom: '1rem', fontSize: '0.9375rem' }} {...p} />,
  a: (p: object) => <a style={{ color: 'var(--txt)', textDecorationColor: 'var(--bdr)' }} {...p} />,
  code: ({ children, ...p }: { children?: React.ReactNode } & object) =>
    'data-language' in p
      ? <code {...p}>{children}</code>
      : <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', background: 'var(--bg2)', border: '1px solid var(--bdr)', padding: '0.125rem 0.375rem' }} {...p}>{children}</code>,
  blockquote: (p: object) => <blockquote style={{ borderLeft: '2px solid var(--bdr)', paddingLeft: '1rem', color: 'var(--muted)', fontStyle: 'italic', margin: '1.5rem 0' }} {...p} />,
  ul: (p: object) => <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.7' }} {...p} />,
  ol: (p: object) => <ol style={{ color: 'var(--muted)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.7' }} {...p} />,
  hr: () => <hr style={{ border: 'none', borderTop: '1px solid var(--bdr)', margin: '2rem 0' }} />,
  strong: (p: object) => <strong style={{ color: 'var(--txt)', fontWeight: 600 }} {...p} />,
}

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = allPosts.find((item) => item.slug === slug)
  const { post: postContent } = siteContent

  if (!post) return <Navigate to="/" replace />

  const postIndex = allPosts.findIndex((p) => p.slug === slug)
  const prev = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null
  const next = postIndex > 0 ? allPosts[postIndex - 1] : null

  const date = new Date(post.date).toLocaleDateString('en-CA').replaceAll('-', '/')
  const PostContent = post.Content

  return (
    <article className="container pt-24 pb-32">
      {/* Back */}
      <Link
        to="/"
        className="text-sm font-medium mb-12 inline-block transition-colors"
        style={{ color: 'var(--muted)', textDecoration: 'none' }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--txt)')}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--muted)')}
      >
        {postContent.backLabel}
      </Link>

      {/* Header */}
      <div className="mb-14" style={{ borderBottom: '1px solid var(--bdr)', paddingBottom: '2.5rem' }}>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {postContent.tagPrefix}{tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-semibold mb-3" style={{ color: 'var(--txt)' }}>
          {post.title}
        </h1>
        <time className="text-sm" style={{ color: 'var(--muted)' }}>{date}</time>
      </div>

      {/* Content */}
      <MDXProvider components={components}>
        <PostContent />
      </MDXProvider>

      {/* Prev/Next */}
      <div
        className="mt-20 pt-10 grid grid-cols-2 gap-6"
        style={{ borderTop: '1px solid var(--bdr)' }}
      >
        <div>
          {prev && (
            <Link to={`/posts/${prev.slug}`} className="group block" style={{ textDecoration: 'none' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>{postContent.previousLabel}</p>
              <p className="text-base font-semibold transition-colors" style={{ color: 'var(--txt)' }}>{prev.title}</p>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link to={`/posts/${next.slug}`} className="group block" style={{ textDecoration: 'none' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>{postContent.nextLabel}</p>
              <p className="text-base font-semibold transition-colors" style={{ color: 'var(--txt)' }}>{next.title}</p>
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
