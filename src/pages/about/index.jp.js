import React from "react"
import Layout from "../../components/layout/layout"

import Slicer from "../../components/layout/editorial/slicer"

export const AboutQuery = graphql`{
  contentfulPage(title: {eq: "About"}, node_locale: {eq: "ja-JP"}) {
    id
    title
    ...contentBlocks
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
  