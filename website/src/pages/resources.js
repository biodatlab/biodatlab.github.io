import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ResourcePage = ({
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <h1>Resources</h1>
      <h2>Tools</h2>
      <div className="primary-content">
        Our lab built multiple tools which are available to use.
        You can check some of them below
      </div>

      <h2>Resources</h2>
      <div className="primary-content">
        Curated some good resources when joining the lab.
      </div>
    </Layout>
  )
}

export default ResourcePage
