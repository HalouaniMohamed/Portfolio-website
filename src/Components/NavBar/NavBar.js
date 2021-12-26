import React from 'react'
import List from "./List"

const NavBar = () => {
    return (
        <div className="flex bg-gray-900 justify-between px-20 h-20 flex-nowrap "> 
            <h1 className="text-white content-center my-auto text-3xl font-semibold  font-SecularOne " >Halouani Mohamed </h1>
            <List/>
        </div>
    )
}

export default NavBar
