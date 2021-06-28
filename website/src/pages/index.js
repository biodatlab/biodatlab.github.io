import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2>Research</h2>
      {/* <div className="grids 2">
        {Collaborator}
      </div> */}
      <h2>Funders</h2>
      <div className="primary-content">{site.siteMetadata.home.funders}</div>
      <h2>Collaborators</h2>
      <div className="primary-content">{site.siteMetadata.home.collaborators}</div>
      {/* <div className="grids 5">
        {Collaborator}
      </div> */}
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        home {
          title
          description
          interests
          funders
          collaborators
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
