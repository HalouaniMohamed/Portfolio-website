

import React from 'react'


const Skill = (props) => {
    
    
    if(props.skillProgress ==="checked"){
        return (
            <div className="flex flex-row  w-40 mt-[5px] ml-14 pt-[10px]" id="programmingSkill">
                <div className="w-2 h-2 bg-gray-900 rounded-full my-auto"></div>
                <p className="font-secondary pl-3 w-24">{props.skill}</p>
                <img className="my-auto ml-4 m-[10px]" width={20} height={20} src="/checked.png"/>
            </div>
        )
    }
    else{
        return (
            <div className="flex flex-row  w-40 mt-[5px] ml-14 " id="programmingSkill">
                <div className="w-2 h-2 bg-gray-900 rounded-full my-auto"></div>
                <p className="font-secondary pl-3 pt-1 w-[110px] ">{props.skill}</p>
                <img  className="my-auto ml-4" width={40} height={40} src="/loading.gif" alt="loading"/>
            </div>
        )
    }
}
    
   


export default Skill
