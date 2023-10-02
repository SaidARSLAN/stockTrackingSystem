import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
        <div className='w-full flex flex-col px-12 py-12 items-center justify-between relative'>
        <div className='flex items-center flex-col justify-center'>
            <a href="/">
            <img src={logo} className='lg:w-72 w-36 cursor-pointer max-[320px]:w-36'/>
            </a>
            <p className='font-roboto text-white py-4'>Copyright © 2023. All rights are reserved</p>
            </div>
            <div>
    
                <div className='flex flex-wrap text-white font-roboto font-bold space-x-2'>
                <p className='text-sm'>TESLA</p>
                <p className='text-sm'>APPLE</p>
                <p className='text-sm'>SPACE-X</p>
                <p className='text-sm'>AUDI</p>
                <p className='text-sm'>SAMSUNG</p>
                </div>
                <div className='uppercase flex text-white font-roboto w-full justify-evenly font-bold my-2'>
                    <h3 className='text-sm cursor-pointer'>privacy</h3>
                    <h3 className='text-sm cursor-pointer'>Terms of Use</h3>
                </div>
            </div>
        
</div>
  )
}

export default Footer