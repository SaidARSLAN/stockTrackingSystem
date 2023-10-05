import React, { useState } from 'react'
import signup from '../assets/signup.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const userInfo = {
    "username" : "admin",
    "password" : "admin"
}

const SignUp = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loginControl, setLoginControl] = useState(false)
    const handleClick = (event) => {
        event.preventDefault();
            if (username === userInfo.username && password === userInfo.password) {
                setLoginControl(true);
                navigate('/profile');
            }
    }

  return (
    <div className='flex flex-col  justify-center space-y-4 my-4 lg:px-12 px-4'>
      <motion.h1 className='text-3xl  lg:text-6xl my-4 text-center lg:text-left font-roboto font-bold text-white tracking-widest lg:px-12' initial={{y:"-100vw"}} animate={{y:"0"}}>Sign In</motion.h1>
    <div className='flex items-center  justify-center w-full'>
      <motion.div className=' flex items-center justify-center w-2/3' initial={{x:"-100vw"}} animate={{x:0}}>
        <img src={signup}/>
      </motion.div>
        <motion.form initial={{x:"100vw"}} animate={{x:0}} transition={{type:'spring', stiffness:120}} className='w-full h-full flex items-center justify-start flex-col space-y-4'>
              <input className='w-[480px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
              <input type='password' className='w-[480px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' value={password} onChange={e => setPassword(e.target.value)}  placeholder='Password'/>
              <div className='w-[480px] flex items-center justify-center lg:justify-start'>
              <button className='w-[200px] customBG px-4 py-2 text-gray-400 font-bold font-roboto tracking-widest hover:text-white duration-200 text-lg' onClick={handleClick}>Login</button>
              </div>
        </motion.form>
    </div>
    </div>
  )
}

export default SignUp