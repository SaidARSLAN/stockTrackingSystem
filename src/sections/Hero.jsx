import React from 'react'
import people from '../assets/people.png'

const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-4'>
                <h3 className='text-white text-sm font-roboto text-center tracking-wide cursor-default'>Creating your financial future from zero</h3>
                <h1 className='text-white text-5xl text-center font-roboto leading-snug tracking-widest cursor-default'>Digital Financial Wallet With Tracking System</h1>
                <p className='text-gray-500 text-sm text-center font-roboto px-4 leading-relaxed tracking-wide cursor-default'>Create your own wallet and track your best values in so many countries stock markets, and then learn basic financial skills and use them. This is more than wallet and tracking system!</p>
                <div className='w-full flex items-center justify-center'>
                <input className='w-[275px] px-2 py-1 font-roboto bg-gray-600 text-white rounded-l-md' placeholder='Your E-Mail'/>
                <button className='bg-white px-4 py-1 font-roboto rounded-r-md ml-2'>Send</button>
                </div>
                <div className='flex items-center justify-center px-4'>
                    <img src={people} className='w-24'/>
                    <p className='text-white text-xs px-2 font-roboto cursor-default'>More then 1600 people choose us. Why you are waiting for?</p>
                </div>
                
    </div>
  )
}

export default Hero