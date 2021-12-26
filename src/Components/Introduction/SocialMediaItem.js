import React from 'react'

const SocialMediaItem = (props) => {
    return (
        <a href={props.link} target="_blank">
            <img className="h-5 w-5 ml-3" src={props.img}/>
        </a>
    )
}

export default SocialMediaItem