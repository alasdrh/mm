import React from "react"
import { Link } from "gatsby"
import TitleBlock from "../../components/layout/styled/titleBlock"
import ProductIndexItem from "../../components/layout/styled/productIndexItem"
import Plant from "../../images/sample/hay1.jpg"
import Vase from "../../images/sample/hay2.jpg"
import Cups from "../../images/sample/hay3.jpg"


export default function CollectionBlock (props) {
    return (

<div class={'pt-16 mb-8'}>

        <div class={'container mx-auto grid grid-cols-3 gap-4'}>

            <TitleBlock title={props.title}></TitleBlock>

            <ProductIndexItem title={'Dream Plate'} image={Plant}></ProductIndexItem>

            <ProductIndexItem title={'Floral Tote'} image={Vase}></ProductIndexItem>

            <ProductIndexItem title={'Presidents Tablecloth'} image={Cups}></ProductIndexItem>

        </div>

    </div>


    )
}