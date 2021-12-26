import React from 'react'
import SocialMedia from './SocialMedia'
import Buttons from '../Buttons.js'


const Introduction = () => {
    return (
        <div>
            <div className="flex w-screen bg-gray-900 item-center justify-center py-20">
                <div className="flex bg-gray-900    justify-center" >
                    <div className="flex-nowrap space-y-3" >
                        <SocialMedia/>
                        <h1 className="text-white font-SecularOne text-xl w-fit mx-auto font-semibold">Hello i'm <span className="text-emerald-700">Mohamed Halouani</span></h1>
                        <h2 className="text-white text-xl w-fit mx-auto">Full Stack developper</h2>
                        <h2 className="text-white w-fit mx-auto"> Translate Ambigious Business Problems into Actionalbe Insights</h2>
                        
                        <Buttons/>
                    </div>
                    <img className="ml-20" src="/adult.png"/>
                </div>
                
            </div>
            <img src="/wave.png" className="w-full h-10  justify-self-start bg-gray-900"/>
        </div>
        
    )
}

export default Introduction
