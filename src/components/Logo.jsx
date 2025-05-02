import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"

function Logo({
    className="",
    headTitle="Campus Vibes",
    fontClass="",

}) {
  return (
    <div className={`flex gap-1 px-3 py-2 items-center ${className}`}>
            <FontAwesomeIcon icon={faGraduationCap} className={`text-purple-800 text-4xl ${fontClass}`}/>
            {headTitle && <h1 className='font-poppins font-bold text-3xl text-purple-800' >
                {headTitle}</h1>}
        
    </div>
  )
}

export default Logo
