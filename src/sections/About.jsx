import React from 'react'
import aboutLogo from '../assets/aboutLogo.png'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div className='flex items-center justify-center w-full h-full flex-col lg:flex-row-reverse py-24 lg:px-12 '>
        <div className='flex items-center justify-center w-full h-full flex-col space-y-8 lg:items-start'>
            <h3 className='text-base font-roboto text-white tracking-wide px-4 lg:text-lg'>About Us</h3>
            <h1 className='text-white font-roboto text-3xl text-center px-4 lg:text-6xl lg:text-left'>What is Financial Wallet and Tracking? What are we providing?</h1>
            <p className='text-gray-400 font-roboto text-center text-sm px-4 lg:text-left lg:text-xl'>Establish your own financial wallet, enabling you to monitor optimal values across various stock markets globally. In addition to serving as a wallet and tracking system, this platform offers an opportunity to acquire fundamental financial skills and apply them effectively.Embark on the journey of creating your personalized financial wallet, a sophisticated tool designed not only for tracking values in diverse global stock markets but also for cultivating essential financial skills. This comprehensive system goes beyond simple tracking; it empowers you to learn and apply fundamental financial principles, elevating your understanding and engagement with the dynamic world of finance.</p>
            <div className='w-full flex items-center justify-center lg:justify-start ml-4'>
            <a className='bg-white p-2 font-roboto text-sm rounded-md lg:p-4 lg:text-lg'>Explore Now</a>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <img src={aboutLogo} className='w-80 lg:w-[720px]'/>
        </div>
    </div>
  )
}

export default About