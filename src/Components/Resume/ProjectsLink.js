import React from 'react'

function ProjectsLink(){
    return (
        <div className="mb-20">
            <a href="#EducationContent"><span onClick={(e) =>{
                document.getElementById('educationLink').className = "link-not-clicked"
                document.getElementById('programmingLink').className="link-not-clicked"
                document.getElementById('projectsLink').className="link-clicked"
                document.getElementById('interestsLink').className="link-not-clicked"
                document.getElementById('resumeContent').scroll(0,480+480)
            }
            } className="link-not-clicked scroll-smooth" id="projectsLink">
                <img className="z-50 ml-1 pr-1 " src="/projects.svg" />
                &nbsp;Projects
            </span>
            </a>
        </div>
    )
}

export default ProjectsLink
