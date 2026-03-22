import { createContentLoader } from 'vitepress'

export default createContentLoader('./*.md', {
  excerpt: true,
  transform(raw) {
    return raw.map(post => ({
      title: post.frontmatter.title,
      url: post.url,
      date: post.frontmatter.date
    }))
  }
})