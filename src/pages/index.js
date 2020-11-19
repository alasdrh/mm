import React from "react"
import tw from 'twin.macro'

import Layout from "../components/layout/layout"
import Instagram from "../components/layout/instagram"
import Slicer from "../components/layout/editorial/slicer"


export const HomeQuery = graphql`{
  contentfulPage(title: {eq: "Homepage"}, node_locale: {eq: "en-GB"}) {
    id
    title
    ...contentBlocks
  }
}`

export default function Home( {data} ) {

  const title = data.contentfulPage.title
  const blocks = data.contentfulPage.blocks

  return (
  <Layout>

    <Slicer data={blocks} />

    <Instagram />

  </Layout>
  )
}
