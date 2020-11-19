import React from "react"
import tw from 'twin.macro'

import Layout from "../components/layout/layout"
import TitleBlock from "../components/layout/styled/titleBlock"

import Splitscreen from "../components/layout/editorial/splitscreen"
import Editorial from "../components/layout/editorial/editorial"
import Instagram from "../components/layout/instagram"

import Plate from "../images/designs/MM_Plate.jpg"
import Scarf from "../images/designs/MM_Scarf.jpg"

import Lead1 from "../images/sample/mm-1.jpg"
import Lead2 from "../images/sample/mm-2.jpg"
import MM from "../images/sample/marguerita.jpg"


const Test = tw.div`
    bg-red
    w-full
    h-screen mb-12
`

export default function Home() {
  return (
  <Layout>

    <Instagram />

  </Layout>
  )
}
