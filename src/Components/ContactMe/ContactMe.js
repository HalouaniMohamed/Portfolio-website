import React from 'react'
import Form from './Form'
import Info from './Info'

const ContactMe = () => {
    return (
        <div>
        <div className="flex mx-auto bg-[#fafafa] rounded-sm  w-5/6 shadow-3xl" >
            
            <Info/>
            <Form/>
            
            
        </div>
        <div className="h-96 w-96"></div>
        </div>
    )
}

export default ContactMe
