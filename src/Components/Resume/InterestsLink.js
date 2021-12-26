import React from 'react'


function InterestsLink(){
    return (
        <div className="mb-20">
            <a href="#EducationContent"><span onClick={(e) =>{
                document.getElementById('educationLink').className = "link-not-clicked"
                document.getElementById('programmingLink').className="link-not-clicked"
                document.getElementById('projectsLink').className="link-not-clicked"
                document.getElementById('interestsLink').className="link-clicked"
                document.getElementById('resumeContent').scroll(0,480+480+480)
            }
            } className="link-not-clicked scroll-smooth" id="interestsLink">
                <img className="z-50 ml-1 pr-1 " src="/interests.svg" />
                &nbsp;Interests
            </span>
            </a>
        </div>
    )
}

export default InterestsLink
