import React from "react"
import Layout from "../../components/layout/layout"

import Slicer from "../../components/layout/editorial/slicer"


export const AboutQuery = graphql`{
  contentfulPage(title: {eq: "About"}) {
    id
    title
    blocks {
      type: __typename
      ... on ContentfulBanner {
        id
        title
        mainImage {
          file {
            url
          }
        }
      }
      ... on ContentfulCopyBlock {
        id
        title
      }
      ... on ContentfulTwoCol {
        id
        title
        image {
          file {
            url
          }
        }
      }
    }
  }
}`

export default function About({data}) {

  const title = data.contentfulPage.title

  const blocks = data.contentfulPage.blocks

    return (
    <Layout>

      <Slicer data={blocks} />

    </Layout>
    )
  }
  