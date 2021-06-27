import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const PublicationPage = ({
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <h1>Publications</h1>
      <div className="primary-content">
        Please see Google scholar for list of publications or below.
      </div>
    </Layout>
  )
}

export default PublicationPage
