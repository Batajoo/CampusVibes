import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router'

function Logo({
    className="",
    headTitle="Campus Vibes",
    fontClass="",

}) {
  return (
    <Link className={`flex gap-1 px-3 py-2 items-center ${className}`}
      to="/"
    >
            <FontAwesomeIcon icon={faGraduationCap} className={`text-purple-800 text-4xl `}/>
            {headTitle && <h1 className={` font-poppins text-3xl font-bold text-purple-800 ${fontClass}`} >
                {headTitle}</h1>}
        
    </Link>
  )
}

export default Logo
