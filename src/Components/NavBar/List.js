import React from 'react'
import Link from "./Link"

const List = () => {
    return (
        <ul className="flex space-x-12 my-auto text-lg">
            <Link content="Home" id="#"/>
            <Link content="About Me" id="#AboutMe"/>
            <Link content="Resume" id="#Resume"/>
           <Link content="Contact Me" id="#Contact Me"/>
        </ul>
    )
}

export default List
