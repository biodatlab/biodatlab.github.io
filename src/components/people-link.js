import React from "react";
import { Link } from "gatsby";

const PeopleLink = ({ data }) => (
  <article className="card ">
    <Link to={data.frontmatter.path}>
      {!!data.frontmatter.thumbnail && (
        <img
          className="people-avatar"
          src={data.frontmatter.thumbnail}
          alt={data.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={data.frontmatter.path} className="post-link">
          {data.frontmatter.title}
        </Link>
      </h2>
      {data.frontmatter.position !== "alumni" ? (
        <div className="post-meta">{data.frontmatter.metaDescription}</div>
      ) : (
        <div className="post-meta">
          {`Joined as ${data.frontmatter.metaDescription}, ${data.frontmatter.endYear}`}
        </div>
      )}
    </header>
  </article>
);
export default PeopleLink;
