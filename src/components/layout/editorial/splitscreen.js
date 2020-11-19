import React from "react"
import Fade from 'react-reveal/Fade';
import tw from 'twin.macro'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Wrapper = tw.div `
    md:max-h-screen80
    mb-8
    overflow-hidden
    md:flex
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
    text-blue
    font-sans 
    font-bold 
    text-3xl md:text-5xl 
    leading-tight
`

export default function Splitscreen ({data}) {
    return (

    <Fade>
    <Wrapper>

            <TextBlock>

                <TextInnerWrap>

                <Title>
                    {documentToReactComponents(data.copy.json)}
                </Title>

                </TextInnerWrap>

            </TextBlock>

            <ImageBlock>
                <Image src={data.image.file.url} />
            </ImageBlock>

    </Wrapper>
    </Fade>

    )
}