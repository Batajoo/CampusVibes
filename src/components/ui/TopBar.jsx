import React, { useState } from 'react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router"

function TopBar() {
  const [universityName, changeUniversityName] = useState("University Of SomeWhere");
  return (
    <header className="flex justify-between text-2xl p-2 items-center border-b-2 border-[#DAD2FF]">
        <Logo fontClass='text-xl' headTitle=''/>
        <h1 className='font-semibold text-[#493D9E]'>
          {universityName}
        </h1>
        <Link to="/">
          <FontAwesomeIcon icon={faMessage}  className='p-2.5 border-2 rounded-4xl text-[#493D9E] hover:text-[#493D9E95] hover:shadow-md hover:shadow-purple-300'/>
        </Link>
        
    </header>
  )
}

export default TopBar
