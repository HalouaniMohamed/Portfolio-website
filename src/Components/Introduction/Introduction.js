import React from "react";
import SocialMedia from "./SocialMedia";
import Buttons from "../Buttons.js";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
    return (
        <div className="w-screen bg-gray-900 ">
            
                <div className="zoro:grid 3xl:flex zoro:bg-gray-900  w-full  justify-center space-x-5 py-10 md:bg-yellow-500 3xl:bg-black ">
                    <div className="flex-nowrap space-y-4 py-auto ">
                        <SocialMedia />
                        <h1 className="text-white font-SecularOne text-xl w-fit mx-auto font-semibold ">
                            Hello i'm{" "}
                            <span className="text-emerald-700 font-SecularOne">
                                Mohamed Halouani
                            </span>
                        </h1>
                        <h2 className="text-white text-lg w-fit mx-auto">
                            <Typewriter
                                words={["Computer Science Student", "Full-Stack Developer", "Mern Stack", "Future Engineer"]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                                
                            />
                        </h2>
                        <h2 className="text-white w-fit mx-auto">
                            
                            Building  websites from concept all the way to completion
                        </h2>

                        <Buttons />
                    </div>
                    <img className="w-1/6 " src="/adult.png" />
                </div>
            
            <img
                src="/wave.png"
                className="w-full h-10  justify-self-start bg-gray-900"
            />
        </div>
    );
};

export default Introduction;
