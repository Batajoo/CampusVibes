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
		<div className='bg-gray-100 w-full h-screen p-6'>
            
            <section className='grid grid-cols-2 h-full w-full rounded-3xl bg-white'>
                <div>
                    <img src={loginPic} className='object-cover h-full rounded-l-3xl'/>
                </div>
                <div>
                    <div className='text-right'>Not a member? Join now.</div>
                    <div className='w-full p-25 flex flex-col gap-3'>
                        <div className='text-center'>
                            <h1>Let's Continue Our Journey!</h1>
                            <p>Welcome Back</p>
                        </div>
                        <Input/>
                        <Input/>
                        <div>
                            <p className='text-right'>Recover Password</p>
                        </div>
                        <Button>Sign In</Button>
                    </div>
                    
                </div>
            </section>
		</div>
	)
}

export default Login
