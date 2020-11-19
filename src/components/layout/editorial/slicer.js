import React from "react"

import BodyCopy from "./bodyCopy"
import Banner from "./banner"
import TwoCol from "./twoCol"
import Splitscreen from "./splitscreen"
import Gallery from "./gallery"

export default function Slicer ( {data} ) {

    if(data) {

        const blocks = data.map(function(block){

            switch (block.type) {

                case "ContentfulCopyBlock":
                    return(
                    <BodyCopy data={block} />
                    )
                break;

                case "ContentfulBanner":
                    return(
                        <Banner data={block}/>
                    )
                break;

                case "ContentfulTwoCol":
                    return(
                        <TwoCol data={block} />
                    )
                break;

                case "ContentfulSplitscreenBanner":
                    return(
                        <Splitscreen data={block} />
                    )
                break;


                case "ContentfulGallery":
                    return(
                        <Gallery data={block} />
                    )
                break;

                default:
                break;


            }

        })

        return (
            <>
            { blocks }
            </>
        
            )


    } else {
        return null
    }

}