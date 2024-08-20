import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PublicationLink from "../components/publication-link";
import HelmetWrapper from "../components/helmetWrapper";

const PublicationPage = ({
  data: {
    allPublicationsYaml: { edges },
  },
}) => {
  const Publication = edges
    .filter(edge => !!edge.node.title)
    .map(edge => (
      <PublicationLink key={edge.node.id} publication={edge.node} />
    ));

  return (
    <Layout>
      <HelmetWrapper title="Publications" />
      <h1>Publications</h1>
      <div className="primary-content">
        Please see{" "}
        <a href="https://scholar.google.com/citations?user=L56sgUQAAAAJ">
          Titipat's Google scholar
        </a>{" "}
        for up-to-date publications or list of publications or below. If you do
        not have access to any publication, please email.
      </div>
      <div className="primary-content">{Publication}</div>
      <hr />
      <div className="primary-content">
        Copyright notice. The documents listed here are available for downloading and have been
        provided as a means to ensure timely dissemination of scholarly and
        technical work on a noncommercial basis. Copyright and all rights therein
        are maintained by the authors or by other copyright holders, notwithstanding
        that they have offered their works here electronically. It is understood that
        all persons copying this information will adhere to the terms and constraints
        invoked by each author’s copyright. These works may not be re-posted without
        the explicit permission of the copyright holder.
      </div>
    </Layout>
  );
};

export default PublicationPage;
export const pageQuery = graphql`
  query publicationPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPublicationsYaml(sort: { order: DESC, fields: [year] }) {
      edges {
        node {
          id
          title
          authors
          journal
          year
          url
          pdf
          github
        }
      }
    }
  }
`;
