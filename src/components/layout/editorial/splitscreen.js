import React from "react"
import tw from 'twin.macro'

import { Link } from "gatsby"

const Wrapper = tw.div `
    md:max-h-screen80
    mb-8
    overflow-hidden
    md:flex
    bg-blue
`

const ImageBlock = tw.div `
    flex-1
`
const Image = tw.img `
    object-cover
    w-full
`

const TextBlock = tw.div `
    flex-1
    flex
    items-center
`

const TextInnerWrap = tw.div `
    md:mx-16
    text-center
`

const Title = tw.div `
    text-white 
    font-sans  
    text-3xl md:text-6xl 
    leading-tight
`

export default function Splitscreen (props) {
    return (

    <Wrapper>

            <TextBlock>

                <TextInnerWrap>

                <Title>
                    &ldquo;You can be daring, provocative and pioneer with new symbols&rdquo;
                </Title>

                </TextInnerWrap>

            </TextBlock>

            <ImageBlock>
                <Image src={props.image} />
            </ImageBlock>

    </Wrapper>

    )
}