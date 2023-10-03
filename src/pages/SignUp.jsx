import React from 'react'
import signup from '../assets/signup.png'
const SignUp = () => {
  return (
    <div className='flex flex-col  justify-center space-y-4 my-4 px-12'>
      <h1 className='text-6xl my-4 font-roboto font-bold text-white tracking-widest px-12'>Sign Up For Free</h1>
    <div className='flex items-center  justify-center w-full'>
      <div className=' flex items-center justify-center w-2/3'>
        <img src={signup}/>
      </div>
        <form className='w-full h-full flex items-center justify-start flex-col space-y-4'>
              <input className='w-[420px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' placeholder='Name And Surname'/>
              <input className='w-[420px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' placeholder='Email'/>
              <input className='w-[420px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' placeholder='Password'/>
              <input className='w-[420px] px-4 py-4 border-2 border-gray-600 duration-200 hover:border-white customBG text-white' placeholder='Password Confirm'/>
              <button className='w-[200px] customBG px-4 py-2 text-white font-bold font-roboto tracking-widest'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default SignUp