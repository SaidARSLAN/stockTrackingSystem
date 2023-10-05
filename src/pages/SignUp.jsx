import React from 'react'
import signup from '../assets/signup.png'
import { motion } from 'framer-motion'

const SignUp = () => {
  return (
    <div className='flex flex-col  justify-center space-y-4 my-4 lg:px-12 px-4'>
      <motion.h1 initial={{y:"-100vw"}} animate={{y:0}} transition={{type:'spring', stiffness:50}} className='text-3xl  lg:text-6xl my-4 text-center lg:text-left font-roboto font-bold text-white tracking-widest lg:px-12'>Sign Up Free</motion.h1>
    <div className='flex items-center  justify-center w-full'>
      <motion.div initial={{x:"-100vw"}} animate={{x:0}} transition={{type:'tween'}} className=' flex items-center justify-center w-2/3'>
        <img src={signup}/>
      </motion.div>
        <motion.form initial={{x:"100vw"}} animate={{x:0}} transition={{type:'tween'}} className='w-full h-full flex items-center justify-start flex-col space-y-4'>
              <input className='w-[480px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' placeholder='Username'/>
              <input className='w-[480px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' placeholder='Email'/>
              <input className='w-[480px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' type='password' placeholder='Password'/>
              <input className='w-[480px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' type='password' placeholder='Password Confirm'/>
              <div className='w-[480px] flex items-center justify-center lg:justify-start'>
              <button className='w-[200px] customBG px-4 py-2 text-gray-400 font-bold font-roboto tracking-widest hover:text-white duration-200 text-lg'>Sign Up</button>
              </div>
        </motion.form>
    </div>
    </div>
  )
}

export default SignUp