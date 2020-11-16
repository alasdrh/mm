import React from "react"

import Layout from "../../components/layout/layout"
import WideImage from "../../components/layout/editorial/wideImage"

import TitleBlock from "../../components/layout/styled/titleBlock"

import HeaderImage from "../../images/sample/mm-3.jpg"


export default function Contact() {
    return (
    <Layout>

      <WideImage image={HeaderImage} />

      <div class={'w-2/3 mx-auto pt-16 text-center'}>

      <TitleBlock title={'Contact'}></TitleBlock>

</div>

    </Layout>
    )
  }
  