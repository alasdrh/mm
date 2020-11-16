import React from "react"
import { Link } from "gatsby"
import TitleBlock from "../layout/styled/titleBlock"
import Stockist from "./stockist"


export default function StockistsBlock (props) {
    return (

        <div class={'w-2/3 mx-auto pt-16 grid gap-8 mb-16'}>

            <TitleBlock title={props.sectiontitle}></TitleBlock>

            <Stockist name={'Journal Standard'}></Stockist>

            <Stockist name={'Beams'}></Stockist>

            <Stockist name={'Actus'}></Stockist>

            <Stockist name={'United Arrows'}></Stockist>

            <Stockist name={'Journal Standard'}></Stockist>

            <Stockist name={'Unico'}></Stockist>

        </div>
        
    )
}