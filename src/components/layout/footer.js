import React from "react"
import LogoImage from "../../images/brand/MargueritaMergentime_logo.svg"

export default function Footer () {
    return (
        
    <footer class={'border-t pt-8 pb-16 w-auto mt-32'}>

        <div class={'container mx-auto'}>

        <div class={'flex w-auto'}>

            <div class={'flex-1'}>
            </div>

            <div class={'flex flex-1 justify-center'}>
                <img src={LogoImage} className={'h-8'}></img> 
            </div>

            <div class={'flex-1'}></div>

        </div>
        </div>

    </footer>


    )
}