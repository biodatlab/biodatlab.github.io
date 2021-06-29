import React from "react"

const PublicationLink = ({ publication }) => {

  const secondLine = publication.journal
    ? publication.year
      ? `${publication.journal}, ${publication.year}`
      : publication.journal
    : publication.year

  return (
  <div className="publication-item">
    <h2 className="publication-title">
      <a href={publication.url} target="_blank" rel="noopener noreferrer" className="post-link">
        {publication.title}
      </a>
    </h2>
    <div className="publication-meta">{publication.authors}</div>
    <div className="publication-meta">{secondLine}</div>
  </div>
)}
export default PublicationLink
