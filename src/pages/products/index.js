import React from "react"
import Layout from "../../components/layout/layout"
import CollectionBlock from "../../components/products/collectionBlock"


export default function Products() {
    return (
    <Layout>

        <CollectionBlock title={'MM Originals'}></CollectionBlock>
        
        <CollectionBlock title={'Typography Collection'}></CollectionBlock>

        <CollectionBlock title={'Flora Americana'}></CollectionBlock>

    </Layout>
    )
  }
  