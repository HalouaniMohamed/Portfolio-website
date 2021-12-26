import React from 'react'

function EducationLink(){
    return (
        <div className="mb-20 mt-5">
            <a href="#EducationContent"><span onClick={(e) =>{
                document.getElementById('educationLink').className = "link-clicked"
                document.getElementById('programmingLink').className="link-not-clicked"
                document.getElementById('projectsLink').className="link-not-clicked"
                document.getElementById('interestsLink').className="link-not-clicked"
                document.getElementById('resumeContent').scroll(0,0)
            }
            } className="link-clicked  scroll-smooth" id="educationLink">
                <img className="z-50 ml-1 pr-1 " src="/education.svg" />
                &nbsp;&nbsp;&nbsp;Education
            </span>
            </a>
        </div>
    )
}

export default EducationLink
