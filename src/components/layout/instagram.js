import React from "react"
import tw from 'twin.macro'

import { Link } from "gatsby"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MM from "../../images/sample/mm-2.jpg"
import Plate from "../../images/designs/MM_Plate.jpg"
import Scarf from "../../images/designs/MM_Scarf.jpg"
import Lead1 from "../../images/sample/mm-1.jpg"
import Lead2 from "../../images/sample/mm-2.jpg"


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Wrapper = tw.div `
    mx-auto
    py-32
`

const Title = tw.div `
    text-4xl
    text-blue
    font-sans 
    font-bold 
    mb-8
    container
    mx-auto
`

const ImageBlock = tw.div `
    bg-red
    h-full
`
const Image = tw.img `
    object-cover
    mx-auto
`

export default function Instagram (props) {
    return (

    <Wrapper>

        <Title>
            Instagram
        </Title>

    <Carousel 
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
    >
        
    <ImageBlock>
        <Image src={MM} />
    </ImageBlock>

    <ImageBlock>
        <Image src={Lead1} />
    </ImageBlock>

    <ImageBlock>
        <Image src={Lead2} />
    </ImageBlock>

    <ImageBlock>
        <Image src={Plate} />
    </ImageBlock>

    <ImageBlock>
        <Image src={Scarf} />
    </ImageBlock>

        </Carousel>

    </Wrapper>

    )
}