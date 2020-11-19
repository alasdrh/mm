import React from "react"
import Fade from 'react-reveal/Fade';
import tw from 'twin.macro'

const Wrapper = tw.div `
    container
    mx-auto
    grid
    grid-cols-12
    pt-12
    mb-16
`

const ImageBlock = tw.div `
    col-span-8
    col-start-5
`
const Image = tw.img `
    object-cover
    w-full
    h-auto
    mx-auto
`


export default function InlineGallery (props) {
    return (

<Fade>
<Wrapper>

    <ImageBlock>
        <Image src={props.image} />
    </ImageBlock>

</Wrapper>
</Fade>

    )
}