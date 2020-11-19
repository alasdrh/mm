import React from "react"
import Fade from 'react-reveal/Fade';
import tw from 'twin.macro'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Wrapper = tw.div `
    md:max-h-screen80
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
    md:w-2/3
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

export default function Banner ({data}) {
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
                <Image src={data.mainImage.file.url} />
            </ImageBlock>

    </Wrapper>
    </Fade>

    )
}