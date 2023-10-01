import React from 'react'
import people from '../assets/people.png'
import heroLogo from '../assets/heroLogo.png'
const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-2'>
        <div className='w-full h-full flex flex-col items-center justify-center space-y-4 lg:items-start lg:px-12'>
                <h3 className='text-white text-sm font-roboto text-center tracking-wide cursor-default italic lg:text-base lg:text-left'>Forging Your Financial Future from Ground Zero</h3>
                <h1 className='text-white text-5xl text-center font-roboto leading-snug tracking-widest cursor-default lg:text-left lg:text-7xl'>Digital Financial Wallet With Integrated Tracking System</h1>
                <p className='text-gray-500 text-sm text-center font-roboto px-12 leading-relaxed tracking-wide cursor-default lg:text-left lg:px-0 lg:text-base'>Create your own wallet and track your best values in so many countries stock markets, and then learn basic financial skills and use them. This is more than wallet and tracking system!</p>
                <div className='w-full flex items-center justify-center lg:justify-start'>
                <input className='w-[275px] lg:w-2/3 px-2 py-1 font-roboto bg-gray-600 text-white rounded-l-md' placeholder='Your E-Mail'/>
                <button className='bg-white px-4  py-1 font-roboto rounded-r-md ml-2'>Send</button>
                </div>
                <div className='flex items-center justify-center px-4 lg:justify-start lg:px-0 py-8'>
                    <img src={people} className='w-24 lg:w-36'/>
                    <p className='text-white text-xs px-2 font-roboto cursor-default lg:text-base'>More then 1600 people choose us. Why you are waiting for?</p>
                </div>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <img src={heroLogo} className='w-[720px] lg:w-[720px]'/>
                 </div>
    </div>
  )
}

export default Hero