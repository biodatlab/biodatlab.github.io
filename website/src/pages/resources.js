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
    </Layout>
  )
}

export default ResourcePage
