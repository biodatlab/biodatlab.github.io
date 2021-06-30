import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ResourceLink from "../components/resource-link"
import PostLink from "../components/post-link"
import HelmetWrapper from "../components/helmetWrapper"

const ResourcePage = ({
  data: {
    allResourcesYaml: { edges: yamlEdges },
    allMarkdownRemark: { edges: mdEdges },
  }
}) => {

  const Resources = yamlEdges
    .filter(edge => !!edge.node.name)
    .map(edge => <ResourceLink key={edge.node.id} resource={edge.node} />)

    const Posts = mdEdges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <HelmetWrapper
        title="Resources"
      />
      <h1>Resources</h1>
      <h2>Tools</h2>
      <div className="primary-content">
        Our lab built multiple tools which are available to use.
        You can check some of them below

        <div className="grids">
          {Resources}
        </div>
      </div>

      <h2>Resources</h2>
      <div className="primary-content">
        Curated some good resources when joining the lab.

        <div className="grids">
          {Posts}
        </div>
      </div>
    </Layout>
  )
}

export default ResourcePage
export const pageQuery = graphql`
  query resourcePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allResourcesYaml {
      edges {
        node {
          id
          description
          name
          url
        }
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {path: {regex: "/resources/"}}}) {
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