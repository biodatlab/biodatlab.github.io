import React from "react"

const ResourceLink = ({ resource }) => (
  <article className="card ">
    {/* <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link> */}
    <header>
      <h2 className="post-title">
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="post-link">
          {resource.name}
        </a>
      </h2>
      <div className="post-meta">{resource.description}</div>
    </header>
  </article>
)
export default ResourceLink
