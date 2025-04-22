import React from 'react'
import { useForm } from "react-hook-form"
import { Input, Button, Logo} from "../"

function Login() {
	const {register, handleSubmit} = useForm();

	// function to handle the login data which needs to be implemented later on 
	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<div>
            <nav>
                <Logo/>
            </nav>
            <section className='flex justify-center items-center pt-4'>
                <div className='w-xl flex flex-col items-center gap-2'>
                    <h1>Login</h1>
                    <Input/>
                    <Input/>
                    <Button className='w-full'>Enter</Button>
                </div>
            </section>
		</div>
	)
}

export default Login
