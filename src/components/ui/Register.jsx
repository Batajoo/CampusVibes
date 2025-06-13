import {useState, useRef, useEffect} from 'react'
import {Input, Logo, Button} from "../index"
import registerImg from "../../assets/registerBackground.png"
import AuthService from "../../appwrite/auth"
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/auth'

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const fullNameRef = useRef(null);
  const {noUse, setAuthStatus} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    fullNameRef.current.focus();
  },[])
  
  const onButtonSubmit = async (e)=>{
    e.preventDefault();
    // post request here
    setError("");
    try {
      await AuthService.logout();
      const session = await AuthService.createAccount(email, password, fullName);
      if(session){
        const userData = await AuthService.getCurrentAccount();
        if(userData){
          // setup the context state here
          setAuthStatus({
            userStatus: true,
            userData: userData
          });

          navigate("/");
        }
      }
    } catch(error){
      console.log(`Register Error: onButtonSubmit :: ${error}`);

      // need to use this error also 
      setError(error.message);
    }
  }
  return (
    <div className='bg-gray-200 w-screen h-screen p-6 overflow-hidden'>
      <section className='flex bg-white w-full h-full rounded-3xl shadow-purple-600/50 shadow-lg border-1 border-purple-700 min-w-md'>
        <div className='w-2/5 p-4'>
          <div className=' w-full h-full flex flex-col items-center justify-center gap-2'>
            <div className='px-auto'>
              <Logo className='text-shadow-lg text-shadow-purple-200'/>
            </div>
            <h1 className='font-semibold text-2xl'>Create Account</h1>
            <form className='w-3/4 flex flex-col gap-2'>
              <Input placeholder="Full Name"
                 type="text" 
                 className="my-2"
                 ref={fullNameRef}
                 value={fullName}
                 onChange={(e)=>setFullName(e.target.value)}
                />
              <Input 
                placeholder="Email"
                type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Input 
                placeholder="Password" 
                type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
              <Button 
                bgColor='bg-purple-600' 
                className='hover:bg-purple-500 hover:cursor-pointer'
                onClick={onButtonSubmit}>Register</Button>
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
