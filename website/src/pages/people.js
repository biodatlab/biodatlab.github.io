import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const PeoplePage = ({
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Lab blogs</title>
      </Helmet>
      <h1>People</h1>
    </Layout>
  )
}

export default PeoplePage