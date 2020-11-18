import React from "react"
import Fade from 'react-reveal/Fade'
import tw from 'twin.macro'

import { Link } from "gatsby"

const Wrapper = tw.div `
    container
    mx-auto
    py-16 md:py-32
    md:grid
    grid-cols-12
    px-8 md:px-0
`

const ImageBlock = tw.div `

    justify-center
`
const Image = tw.img `
    object-cover
    w-1/2
    h-auto
    mx-auto
`

const TextBlock = tw.div `
    col-span-7
    col-start-6
`

const TextInnerWrap = tw.div `
    
`

const TitleBlock = tw.div `
    col-span-3
`
    
const Title = tw.div `
    text-blue
    font-sans 
    font-bold 
    text-2xl md:text-4xl 
    leading-tight
    mb-4 md:mb-0
`

const Body = tw.div `
    text-darkgrey
    text-xl md:text-2xl
    font-light
`

export default function BodyCopy ({data}) {
    return (

    <Fade>
    <Wrapper>

        <TitleBlock>
            <Title>{data.title}</Title>
        </TitleBlock>

            <TextBlock>
                <TextInnerWrap>
                    <Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut auctor turpis. Donec mattis convallis est, at tempor metus lobortis quis. Phasellus quis maximus nulla. Quisque nec metus ligula. Curabitur at urna a lectus pharetra dignissim.
                    </Body>
                </TextInnerWrap>
            </TextBlock>

    </Wrapper>
    </Fade>

    )
}