import React from "react"
import Fade from 'react-reveal/Fade'
import tw from 'twin.macro'

const Wrapper = tw.div `
    container
    mx-auto
    py-32
    flex
    items-center
`

const ImageBlock = tw.div `
    flex-1
    justify-center
`
const Image = tw.img `
    object-cover
    w-1/2
    h-auto
    mx-auto
`

const TextBlock = tw.div `
    flex-1
`

const TextInnerWrap = tw.div `
    w-3/4
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

export default function Editorial (props) {
    return (

    <Fade>
    <Wrapper>

    <ImageBlock>
        <Image src={props.image} />
    </ImageBlock>

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