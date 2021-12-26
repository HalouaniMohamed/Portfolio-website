import React from 'react'
import SocialMediaItem from './SocialMediaItem'


const SocialMedia = () => {
    return (
        <div className="flex flex-row w-fit mx-auto">
            <SocialMediaItem img="/linkedin.png" link="https://www.linkedin.com/in/mohamed-halouani/" />
            <SocialMediaItem img="/facebook.png" link="https://www.facebook.com/Halouani.m/" />
            <SocialMediaItem img="/github.png" link="https://github.com/HalouaniMohamed" />
            
        </div>
    )
}

export default SocialMedia



