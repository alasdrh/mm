import React from "react"
import Layout from "../../components/layout/layout"
import StockistsBlock from "../../components/stockists/stockistsBlock"


export default function Stockists() {
    return (
    <Layout>

        <StockistsBlock sectiontitle={'Japan'}></StockistsBlock>

        <StockistsBlock sectiontitle={'USA'}></StockistsBlock>

        <StockistsBlock sectiontitle={'Europe'}></StockistsBlock>

    </Layout>
    )
  }
  