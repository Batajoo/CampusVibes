import React from 'react'
import { useForm } from "react-hook-form"
import { Input, Button, Logo} from "../"
import loginPic from "../../assets/loginBackground.png"

function Login() {
	const {register, handleSubmit} = useForm();

	// function to handle the login data which needs to be implemented later on 
	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<div className='bg-gray-200 w-full h-screen p-6'>
            
            <section className='flex h-full w-full rounded-3xl bg-white shadow-purple-600/50 shadow-lg'>
                <div className='h-full'>
                    <img src={loginPic} className='box-border object-cover h-full rounded-l-3xl'/>
                </div>
                <div className='h-full'>
                    <div className='p-4'>
                        <div className='text-right relative right-6 top-5'>Not a member? Join now.</div>
                        
                        <div className='w-full p-15 flex flex-col gap-3'>
                        <div className='mx-auto block'>
                        <Logo/>
                        </div>
                            <div className='text-center'>
                                <h1 className='text-2xl font-semibold'>Let's Continue Our Journey!</h1>
                                <p className='text-md'>Welcome Back</p>
                            </div>
                            <Input placeholder="Email" type="email"/>
                            <Input placeholder="Password" type="password"/>
                            <div>
                                <p className='text-right'>Recover Password</p>
                            </div>
                            <Button bgColor='bg-purple-600' className='hover:bg-purple-500 hover:cursor-pointer'>Sign In</Button>
                        </div>
                        

                    </div>
                    
                </div>
            </section>
		</div>
	)
}

export default Login
