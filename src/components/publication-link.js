import React from "react"

const PublicationLink = ({ publication }) => {

  const secondLineInfo = publication.journal
    ? publication.year
      ? `${publication.journal}, ${publication.year}`
      : publication.journal
    : publication.year

  const secondLinePdf = publication.pdf
    ? (
      <>
        &nbsp;&#183;&nbsp;
        <a
          href={publication.pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          [PDF]
        </a>
      </>
    )
    : null

  return (
  <div className="publication-item">
    <h2 className="publication-title">
      <a href={publication.url} target="_blank" rel="noopener noreferrer" className="post-link">
        {publication.title}
      </a>
    </h2>
    <div className="publication-meta">{publication.authors}</div>
    <div className="publication-meta">
      {secondLineInfo}
      {secondLinePdf}
    </div>
  </div>
)}

export default PublicationLink
