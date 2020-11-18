import React from "react"
import Layout from "../../components/layout/layout"

import Portrait from "../../images/brand/MM_Portrait.jpg"


export default function Old() {
    return (
    <Layout>

        <div class={'w-auto py-16'}>

            <div class={'container mx-auto font-light'}>

            <div class={'grid gap-12 grid-cols-3 leading-tight'}>

                <div class={'col-span-1'}>
                    <img class={'h-med'} src={Portrait}></img>
                </div>

                <div class={'col-span-2 text-5xl text-black'}>
                    <h1 class={'mb-6'}>It all starts with Marguerita. A forgotten master of the twentieth century.</h1>
                    <h1>We're here to continue the original modern designs of Marguerita Mergentime.</h1>
                    <h2 class={'text-2xl mt-8 text-grey'}>Discover her story &darr;</h2>
                </div>
           
            </div>

            </div>

            <div class={'h-screen bg-lightgrey mt-8'}>

                <div class={'container w-1/2 mx-auto py-16'}>
                    <div class={'font-serif text-6xl text-center leading-none mb-6'}>Ahead of her time</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis porta suscipit. Cras fermentum, lorem eu blandit faucibus, ipsum justo malesuada ligula, ac interdum dolor dui quis justo. Curabitur sit amet rutrum lectus.</div>
                </div>
            </div>

            <div class={'h-screen bg-blue text-white'}>

            <div class={'container w-1/2 mx-auto py-16'}>
                    <div class={'font-serif text-6xl text-center leading-none mb-6'}>Interested in ideas</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis porta suscipit. Cras fermentum, lorem eu blandit faucibus, ipsum justo malesuada ligula, ac interdum dolor dui quis justo. Curabitur sit amet rutrum lectus.</div>
                </div>
            </div>

            <div class={'h-screen bg-lightgrey mt-8'}>

            <div class={'container w-1/2 mx-auto py-16'}>
                <div class={'font-serif text-6xl text-center leading-none mb-6'}>Reimagined for today</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis porta suscipit. Cras fermentum, lorem eu blandit faucibus, ipsum justo malesuada ligula, ac interdum dolor dui quis justo. Curabitur sit amet rutrum lectus.</div>
            </div>
            
            </div>

        </div>

    </Layout>
    )
  }
  