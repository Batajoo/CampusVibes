import React from 'react'
import {Input, Logo, Button} from "../index"
import registerImg from "../../assets/registerBackground.png"

function Register() {
  return (
    <div className='bg-gray-200 w-screen h-screen p-6'>
      <section className='flex bg-white w-full h-full rounded-3xl shadow-purple-600/50 shadow-lg border-1 border-purple-700 min-w-md'>
        <div className='w-2/5 p-4'>
          <div className=' w-full h-full flex flex-col items-center justify-center gap-2'>
            <div className='px-auto'>
              <Logo className='text-shadow-lg text-shadow-purple-200'/>
            </div>
            <h1 className='font-semibold text-2xl'>Create Account</h1>
            <form className='w-3/4 flex flex-col gap-2'>
              <Input placeholder="Full Name" type="text" className="my-2"/>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Password" type="password" />
              <Button bgColor='bg-purple-600' className='hover:bg-purple-500 hover:cursor-pointer'>Register</Button>
            </form>

          </div>
        </div>
        <div className='w-3/5  border-purple-700'>
        <img src={registerImg} className='object-cover h-full rounded-r-3xl'/>
        </div>
      </section>
    </div>
  )
}

export default Register
