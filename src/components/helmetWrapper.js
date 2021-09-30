import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery } from 'gatsby'

const HelmetWrapper = ({
  title,
  description,
  slug,
  ogImage,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            ogImage
          }
        }
      }
    `
  )

  const structUrl = slug ? `${data.site.siteMetadata.siteUrl}${slug}` : data.site.siteMetadata.siteUrl

  return (
    <Helmet>
      <title>{title || data.site.siteMetadata.title}</title>
      {/* ---- FACEBOOK ---- */}
      {/* for post it must be siteUrl + slug */}
      <meta property="og:url" content={structUrl} />
      {/* only be article on blog url, otherwise website */}
      <meta property="og:type" content={slug ? 'article' : 'website'} />
      <meta property="og:title" content={title || data.site.siteMetadata.title} />
      <meta property="og:description" content={description || data.site.siteMetadata.description} />
      {/* siteUrl WITH ending /, ogImage WITHOUT starting / */}
      <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}${ogImage || data.site.siteMetadata.ogImage}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={title || data.site.siteMetadata.title} />
      {/* ---- TWITTER ---- */}
      <meta property="twitter:title" content={title || data.site.siteMetadata.title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={`${data.site.siteMetadata.siteUrl}${ogImage || data.site.siteMetadata.ogImage}`} />
      <meta property="twitter:description" content={description || data.site.siteMetadata.description} />
    </Helmet>
  )
}

export default HelmetWrapper