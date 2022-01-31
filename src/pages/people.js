import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PeopleLink from "../components/people-link";
import HelmetWrapper from "../components/helmetWrapper";

const PeoplePage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const currentPeople = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position !== "alumni"
    )
    .map(edge => <PeopleLink key={edge.node.id} data={edge.node} />);

  const prevPeople = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "alumni"
    )
    .map(edge => <PeopleLink key={edge.node.id} data={edge.node} />);

  console.log(edges);

  return (
    <Layout>
      <HelmetWrapper title="People" />
      <h1>People</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {currentPeople}
      </div>
      <h2>Previous lab members</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {prevPeople}
      </div>
    </Layout>
  );
};

export default PeoplePage;
export const pageQuery = graphql`
  query peoplePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { path: { regex: "/people/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            metaDescription
            position
            endYear
          }
        }
      }
    }
  }
`;
