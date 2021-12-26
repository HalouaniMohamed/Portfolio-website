import React from "react";
import EducationLink from "./EducationLink";
import InterestsLink from "./InterestsLink";
import ProgrammingLink from "./ProgrammingLink";
import ProjectsLink from "./ProjectsLink";

const NavigatableSideBar = () => {
    return (
        <div className="flex flex-col w-64 h-96 border-r-2">
            <div className="absolute w-6 z-0 h-96  bg-gray-900   "></div>
            <EducationLink />
            <ProgrammingLink />
            <ProjectsLink />
            <InterestsLink />
        </div>
    );
};

export default NavigatableSideBar;
