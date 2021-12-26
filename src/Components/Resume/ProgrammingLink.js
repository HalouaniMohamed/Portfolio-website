import React from 'react'

function ProgrammingLink(){
    return (
        <div className="mb-20">
            <a href="#EducationContent"><span onClick={(e) =>{
                document.getElementById('educationLink').className = "link-not-clicked"
                document.getElementById('programmingLink').className="link-clicked"
                document.getElementById('projectsLink').className="link-not-clicked"
                document.getElementById('interestsLink').className="link-not-clicked"
                document.getElementById('resumeContent').scroll(0,480)
            }
            } className="link-not-clicked scroll-smooth" id="programmingLink">
                <img className="z-50 ml-1 pr-1 " src="/programming-skills.svg" />
                &nbsp;Skills
            </span>
            </a>
        </div>
    )
}

export default ProgrammingLink
