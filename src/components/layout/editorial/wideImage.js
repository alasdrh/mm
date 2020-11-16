import React from "react"
import tw from 'twin.macro'

import { Link } from "gatsby"

const Wrapper = tw.div `
    max-h-screen80
    mb-8
    overflow-hidden
    flex
    relative
    items-center
`

const ImageBlock = tw.div `
    flex-1
`
const Image = tw.img `
    object-cover
    w-full
`

const TextBlock = tw.div `
    absolute
    mx-auto
`

const TextInnerWrap = tw.div `
    w-2/3
    mx-auto
    text-center
`

const Title = tw.div `
    text-white
    font-sans 
    font-bold 
    text-5xl 
    leading-tight
`

export default function wideImage (props) {
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