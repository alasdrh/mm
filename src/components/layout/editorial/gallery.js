import React from "react"
import Fade from 'react-reveal/Fade';
import tw from 'twin.macro'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "gatsby"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
    mb-8
    overflow-hidden
    md:flex
`

const Container = tw.div `
    container
    mx-auto
`

const ImageBlock = tw.div `
    px-6
`
const Image = tw.img `
    object-cover
    w-full
`

export default function Gallery (props) {
    return (

    <Fade>
    <Wrapper>

        <Container>

            <Carousel 
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            >

            <ImageBlock>
                <Image src={props.image} />
            </ImageBlock>

            <ImageBlock>
                <Image src={props.image} />
            </ImageBlock>

            <ImageBlock>
                <Image src={props.image} />
            </ImageBlock>

            <ImageBlock>
                <Image src={props.image} />
            </ImageBlock>

            <ImageBlock>
                <Image src={props.image} />
            </ImageBlock>

            </Carousel>

        </Container>

    </Wrapper>
    </Fade>

    )
}