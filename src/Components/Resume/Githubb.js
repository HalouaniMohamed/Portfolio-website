import React from "react";

const Githubb = (props) => {
    return (
        <div onClick={()=>window.open(props.linkToProject, '_blank')} className="border-black border p-2 rounded-md w-80 h-fit mr-4 hover:cursor-pointer hover:scale-105 ">
            <div>
                <div className="float-right border-black border text-[12px] px-1 rounded-md">public</div>
                <h2 className=" text-[#0349b4] text-sm "> {props.name}</h2>
            </div>
            <h3 className="text-sosmall " >{props.description}l</h3>
            <div className="flex flex-row mt-4">
                <div className={ `w-3 my-auto h-3 ${props.color} rounded-full`}></div>
                <p className="pl-1 text-sosmall " >{props.language}</p>
            </div>
        </div>
    );
};

export default Githubb;
