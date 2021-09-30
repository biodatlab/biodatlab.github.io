import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PublicationLink from "../components/publication-link"
import HelmetWrapper from "../components/helmetWrapper"

const PublicationPage = ({
  data: {
    allPublicationsYaml: { edges },
  }
}) => {

  const Publication = edges
    .filter(edge => !!edge.node.title)
    .map(edge => <PublicationLink key={edge.node.id} publication={edge.node} />)

  return (
    <Layout>
      <HelmetWrapper
        title="Publications"
      />
      <h1>Publications</h1>
      <div className="primary-content">
        Please see
        {' '}
        <a href="https://scholar.google.com/citations?user=L56sgUQAAAAJ">Titipat's Google scholar</a>
        {' '}
        for up-to-date publications or list of publications or below.
        If you do not have access to any publication, please email.
      </div>
      <div className="primary-content">
        {Publication}
      </div>
    </Layout>
  )
}

export default PublicationPage
export const pageQuery = graphql`
  query publicationPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPublicationsYaml(sort: {order: DESC, fields: [year]}) {
      edges {
        node {
          id
          title
          authors
          journal
          year
          url
          pdf
        }
      }
    }
  }
`