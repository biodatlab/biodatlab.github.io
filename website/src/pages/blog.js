import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const BlogPage = ({
}) => {

  return (
    <Layout>
      <Helmet>
        <title>Lab blogs</title>
      </Helmet>
      <h1>Blogs</h1>
    </Layout>
  )
}

export default BlogPage
