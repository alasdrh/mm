import React from "react"
import tw from 'twin.macro'

import { Link } from "gatsby"

import MM from "../../images/sample/mm-2.jpg"

const Wrapper = tw.div `
    mx-auto
    py-32
    flex
    items-center
    space-x-4
`

const ImageBlock = tw.div `
    flex-1
    justify-center
`
const Image = tw.img `
    object-cover
    h-auto
    mx-auto
`

export default function Instagram (props) {
    return (

    <Wrapper>
        
    <ImageBlock>
        <Image src={MM} />
    </ImageBlock>

    <ImageBlock>
        <Image src={MM} />
    </ImageBlock>

    <ImageBlock>
        <Image src={MM} />
    </ImageBlock>

    <ImageBlock>
        <Image src={MM} />
    </ImageBlock>


    </Wrapper>

    )
}