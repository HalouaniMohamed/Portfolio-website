import React from "react";
import Githubb from "./Githubb";

import Skill from "./Skill";


const NavigatableContent = () => {
    return (
        
            <div
                className="overflow-y-hidden h-96  w-fit pl-3"
                id="resumeContent"
            >
                <div className="h-96 w-9/12">
                    <p className="bg-emerald-700 float-right rounded-2xl p-1 text-white">
                        2018-2019
                    </p>
                    <h1 className="text-emerald-700 font-primary font-bold text-base mb-3">
                        High school Hammam sousse II
                    </h1>
                    <p className="text-black font-secondary mb-10">
                        Baccalaureate in Experimental Sciences{" "}
                    </p>

                    <p className="bg-emerald-700 float-right rounded-2xl p-1 text-white" >
                        2018-2019
                    </p>
                    <h1 className="text-emerald-700 font-primary font-bold text-base  mb-3">
                        Higher Institute of Applied Science and Technology of
                        Sousse
                    </h1>
                    <p className="text-black font-secondary mb-3">
                        Computer science degree
                    </p>
                </div>
                <div className="h-96 space-y-2 flex flex-row">
                    <div className="pt-[10px]">
                        <Skill skill="HTML5" skillProgress="checked" />
                        <Skill skill="CSS3" skillProgress="checked" />
                        <Skill skill="Tailwind" skillProgress="checked" />
                        <Skill skill="JavaScript" skillProgress="checked" />
                        <Skill skill="ReactJS" skillProgress="checked" />
                        <Skill skill="Firebase" skillProgress="checked" />
                        <Skill skill="Python" skillProgress="checked" />
                    </div>
                    <div className="">
                        <Skill skill="PHP" skillProgress="loading" />
                        <Skill skill="TypeScript" skillProgress="loading" />
                        <Skill skill="NodeJS" skillProgress="loading" />
                        <Skill skill="ExpressJS" skillProgress="loading" />
                        <Skill skill="MongoDB" skillProgress="loading" />
                        <Skill skill="NextJS" skillProgress="loading" />
                    </div>
                </div>
                <div className="h-96  flex flex-wrap w-5/6 pt-4">
                        <Githubb 
                        name="My-Products" 
                        description="Applying my HTML / CSS / JS and firebase knowledge to build an e-commerce admin panel" 
                        color="bg-yellow-400"
                        language="JavaScript"
                        linkToProject="https://github.com/HalouaniMohamed/My-Products"
                        />
                        
                        <Githubb 
                        name="Portfolio-website" 
                        description="This is my portfolio website created using ReactJS, TailwindCSS, Node.js, MongoDB." 
                        color="bg-yellow-400"
                        language="JavaScript "
                        linkToProejct="https://github.com/HalouaniMohamed/Portfolio-website"
                        />
                        <Githubb 
                        name="Machine-learning-from-disaster" 
                        description="using machine learning to create a model that predicts which passengers survived the Titanic shipwreck" 
                        color="bg-orange-500"
                        language="Jupyter Notebook "
                        linkToProejct="https://github.com/HalouaniMohamed/Machine-learning-from-disaster"
                        />
                        
                    
                </div>
                <div className="h-96"></div>
            </div>
        
    );
};

export default NavigatableContent;
