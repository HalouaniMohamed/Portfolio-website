import React from "react";
import NavigatableContent from "./NavigatableContent";
import NavigatableSideBar from "./NavigatableSideBar";

const Resume = () => {
    return (
        <div className="w-full grid justify-center">
            <h1 className="w-fit font-SecularOne text-emerald-700 mx-auto text-3xl font-bold">
                Resume
            </h1>
            <h3 className="w-fit  text-gray-900 mx-auto ">
                {" "}
                My formal Bio Details
            </h3>
            <div className="flex w-11/12 mx-auto flex-row mt-20 mb-96">
                <NavigatableSideBar />
                <NavigatableContent />
            </div>
        </div>
    );
};

export default Resume;
