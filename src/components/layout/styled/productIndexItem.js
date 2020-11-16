import React from "react"
import { Link } from "gatsby"
import Plant from "../../../images/sample/hay1.jpg"


export default function ProductIndexItem (props) {
    return (

        <Link to={'/'}>
        <div class={'hover:underline'}>

            <div class={'h-med bg-grey overflow-hidden relative'}>
                <img class={'h-full w-full h-auto w-auto object-cover'} src={props.image}></img>
                <div class={'absolute bg-white opacity-0 z-10 inset-0 flex items-center justify-center hover:opacity-25 transition duration-300 ease-in-out'}>
                    <div></div>
                </div>
            </div>
            
            <div class={'py-3 text-center text-lg font-light tracking-wide'}>{props.title}</div>

        </div>
        </Link>

    )
}