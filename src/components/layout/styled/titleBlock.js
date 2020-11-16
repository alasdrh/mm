import React from "react"

export default function TitleBlock (props) {
    return (

        <div class={'col-span-3 text-center font-serif font-normal text-4xl mb-4'}>
            <div>{props.title}</div>
            <div class={'text-2xl text-grey'}>{props.subheading}</div>
            <div class={'text-lg font-sans font-light tracking-wide'}>{props.summary}</div>
        </div>

    )
}