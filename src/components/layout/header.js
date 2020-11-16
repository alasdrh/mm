import React from "react"
import tw from 'twin.macro'

import { Link } from "gatsby"
import HeaderNavItem from "../layout/styled/headerNavItem"
import MMLogo from "../../assets/MM_wordmark.svg"

const Block = tw.div `
    bg-white 
    w-full 
    border-b 
    border-lightgrey
`

const Container = tw.div `
    mx-auto
    flex
    mx-12
    py-6
    items-center
    w-auto
`

const Logo = tw.div `
    w-32
`

export default function Header () {
    return (
        
    <Block>

        <Container>

            <Logo>
                <Link to={'/'}>
                    <MMLogo css={tw`transition duration-100 ease-in-out fill-current text-grey hover:text-blue`} />
                </Link>  
            </Logo>

            <div class={'flex-1 flex justify-end space-x-8'}>

                <HeaderNavItem text={'About'} to={'/about'} ></HeaderNavItem>
                <HeaderNavItem text={'Collections'} to={'/collections'} ></HeaderNavItem>
                <HeaderNavItem text={'Contact'} to={'/contact'} ></HeaderNavItem>

                <HeaderNavItem text={'EN/JP'} to={'#'} ></HeaderNavItem>

            </div>

        </Container>

    </Block>  


    )
}