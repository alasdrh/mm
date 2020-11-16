import React from "react"
import { Link } from "gatsby"


export default function HeaderNavItem (props) {
    return (

            <div class={'text-xl text-grey font-light'}>
                <Link class={'hover:text-blue'} activeClassName={'text-blue'} to={props.to}>{props.text}</Link>
            </div>

    )
}