import React from "react"
import Layout from "../../components/layout/layout"

import WideImage from "../../components/layout/editorial/wideImage"
import TwoCol from "../../components/layout/editorial/twoCol"
import InlineGallery from "../../components/layout/editorial/inlineGallery"


import Portrait from "../../images/brand/MM_Portrait.jpg"
import Milky from "../../images/designs/457.jpg"
import VB from "../../images/sample/virginia.jpg"


export default function About() {
    return (
    <Layout>

      <TwoCol />

      <WideImage image={Portrait} />

      <TwoCol image={Milky} />

      <InlineGallery image={VB} />

      <TwoCol image={Milky} />

    </Layout>
    )
  }
  