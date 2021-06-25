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
      <p>Please see Google scholar for list of publications or below.</p>
    </Layout>
  )
}

export default PublicationPage
