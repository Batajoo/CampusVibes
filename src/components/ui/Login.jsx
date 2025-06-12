import {useState, useEffect, useRef} from 'react'
import { Input, Button, Logo} from ".."
import { Link } from 'react-router';
import loginPic from "../../assets/loginBackground.png"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef(null);

    useEffect(()=>{
        emailRef.current.focus();
    },[])

	const onBtnClick = (e) => {
		e.preventDefault();
	}

	return (
		<div className='bg-gray-200 w-full h-screen p-6'>
            
            <section className='flex h-full w-full rounded-3xl bg-white shadow-purple-600/50 shadow-lg'>
                <div className='h-full'>
                    <img src={loginPic} className='box-border object-cover h-full rounded-l-3xl'/>
                </div>
                <div className='h-full w-1/2'>
                    <div className='text-right pr-4 pt-4'>Not a member? 
                        <Link to={"/register"} className='text-purple-700'> Join now.</Link>
                    </div>
                        
                    <div className='p-4 flex justity-center items-center h-full'>
                        <div className='w-full px-15 flex flex-col gap-3'>
                            <div className='mx-auto block'>
                            <Logo/>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-2xl font-semibold'>Let's Continue Our Journey!</h1>
                                <p className='text-md'>Welcome Back</p>
                            </div>
                            <form className='flex flex-col gap-2'>
                                <Input placeholder="Email" 
                                    type="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    ref={emailRef}
                                    />
                                <Input placeholder="Password" 
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.password)}
                                    />
                                <div>
                                    <p className='text-right'>Recover Password</p>
                                </div>
                                <Button bgColor='bg-purple-600' 
                                    className='hover:bg-purple-500 hover:cursor-pointer'
                                    onClick={onBtnClick}>Sign In</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
		</div>
	)
}

export default Login
