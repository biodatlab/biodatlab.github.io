import React from "react";
import { FaGithub } from "react-icons/fa";

const PublicationLink = ({ publication }) => {
  const secondLineInfo = publication.journal
    ? publication.year
      ? `${publication.journal}, ${publication.year}`
      : publication.journal
    : publication.year;

  const secondLinePdf = publication.pdf ? (
    <>
      &nbsp;&#183;&nbsp;
      <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
        [PDF]
      </a>
    </>
  ) : null;

  const secondLineGitHub = publication?.github ? (
    <>
      &nbsp;&#183;&nbsp;
      <a href={publication.github} target="_blank" rel="noopener noreferrer">
        [
        <span className="github-icon">
          <FaGithub className="github-icon" />
          {" GitHub"}
        </span>
        ]
      </a>
    </>
  ) : null;

  return (
    <div className="publication-item">
      <h2 className="publication-title">
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="post-link"
        >
          {publication.title}
        </a>
      </h2>
      <div className="publication-meta">{publication.authors}</div>
      <div className="publication-meta">
        {secondLineInfo}
        {secondLinePdf}
        {secondLineGitHub}
      </div>
    </div>
  );
};

export default PublicationLink;
