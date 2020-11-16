import React from "react"
import tw from 'twin.macro'

import { Link } from "gatsby"

const Wrapper = tw.div `
    container
    mx-auto
    grid
    grid-cols-12
    pt-12
    mb-16
`

const ImageBlock = tw.div `
    col-span-4
`
const Image = tw.img `
    object-cover
    w-1/2
    h-auto
    mx-auto
`

const TextBlock = tw.div `
    col-span-7
`

const TextInnerWrap = tw.div `
    
`

const Title = tw.div `
    text-blue
    font-sans 
    font-bold 
    text-5xl 
    leading-tight
`

const Body = tw.div `
    text-blue
    text-2xl
    font-light
`

export default function TwoCol (props) {
    return (

<Wrapper>

    <ImageBlock>
        <Image src={props.image} />
    </ImageBlock>

    <TextBlock>
        <TextInnerWrap>
            <Body>
                <p className={'mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut auctor turpis. Donec mattis convallis est, at tempor metus lobortis quis. Phasellus quis maximus nulla. Quisque nec metus ligula. Curabitur at urna a lectus pharetra dignissim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut auctor turpis. Donec mattis convallis est, at tempor metus lobortis quis. Phasellus quis maximus nulla. Quisque nec metus ligula. Curabitur at urna a lectus pharetra dignissim.</p>
            </Body>
        </TextInnerWrap>
    </TextBlock>

</Wrapper>

    )
}