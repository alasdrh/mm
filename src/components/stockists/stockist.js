import React from "react"
import { Link } from "gatsby"


export default function Stockist (props) {
    return (

        <div class={'mb-4'}>

        <div class={'font-light text-base tracking-wider uppercase'}>
            Tokyo
        </div>

        <div class={'font-normal text-lg tracking-wide'}>
            {props.name}
        </div>

        <div class={'font-light text-lg tracking-wide text-grey'}>
            www.acme.co.jp
        </div>

        </div>

    )
}