import React from "react"
import Layout from "../../components/layout/layout"

import Slicer from "../../components/layout/editorial/slicer"


export const ContactQuery = graphql`{
  contentfulPage(title: {eq: "Contact"}, node_locale: {eq: "en-GB"}) {
    id
    title
    ...contentBlocks
  }
}`

export default function Contact({data}) {

  const title = data.contentfulPage.title
  const blocks = data.contentfulPage.blocks

    return (
    <Layout>

      <Slicer data={blocks} />

    </Layout>
    )
  }
  