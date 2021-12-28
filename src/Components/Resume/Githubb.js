import React from "react";

const Githubb = (props) => {
    return (
        <div onClick={()=>window.open(props.linkToProject, '_blank')} className="border-black border p-2 rounded-md w-80 h-fit mr-4 hover:cursor-pointer hover:scale-105 ">
            <div>
                <div className="float-right border-black border text-[12px] px-1 rounded-md">public</div>
                
                    <img width={20} height={20} className="float-left mt-1" src="projecticon.png"/>
                    <h2 className=" text-[#0349b4] text-sm "> {props.name}</h2>
                
            </div>
            <h3 className="text-sosmall " >{props.description}</h3>
            <div className="flex flex-row mt-4">
                <div className={ `w-3 my-auto h-3 ${props.color} rounded-full`}></div>
                <p className="pl-1 text-xs  font-sans" >{props.language}</p>
                <img className="ml-4" width={20} height={20} src="/fork.png"/>
                <span className="text-sosmall ml-1 font-sans">{props.fork}</span>
                <img className="ml-4" width={18} height={18} src="/star.png" />
                <span className="text-sosmall ml-1 font-sans">{props.star}</span>
            </div> 
        </div>
    );
};

export default Githubb;
