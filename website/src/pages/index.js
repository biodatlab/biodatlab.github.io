import React, { useEffect } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import { useThemeContext } from "../contexts/theme-context";

const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        home
      }
    },
  },
}) => {
  const { theme } = useThemeContext()

  useEffect(() => {
    console.log('current theme', theme)
  }, [theme])

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <HeroHeader/>
      <h2>Research-{theme}</h2>
      {/* <div className="grids 2">
        {Collaborator}
      </div> */}
      <h2>Funders</h2>
      <div className="primary-content">{home.funders}</div>
      <h2>Collaborators</h2>
      <div className="primary-content">{home.collaborators}</div>
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
  }
`
