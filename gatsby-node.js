const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const peopleTemplate = path.resolve(`src/templates/peopleTemplate.js`)
  const resourceTemplate = path.resolve(`src/templates/resourceTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const root = node.frontmatter.path.split('/')[1];

    if (root === 'blog') {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    }

    if (root === 'people') {
      createPage({
        path: node.frontmatter.path,
        component: peopleTemplate,
        context: {}, // additional data can be passed via context
      })
    }

    if (root === 'resources') {
      createPage({
        path: node.frontmatter.path,
        component: resourceTemplate,
        context: {}, // additional data can be passed via context
      })
    }
  })
}