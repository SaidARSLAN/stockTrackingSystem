import React from 'react'
import people from '../assets/people.png'
import heroLogo from '../assets/heroLogo.png'
import { motion } from 'framer-motion'

const imageVariant = {
  before : {
    opacity : 0
  },
  after : {
    opacity : 1,
    transition : {
      delay : 1.3,
      duration : 1
    }
  }
}
const inputVariant = {
  before : {
    opacity : 0
  },
  after : {
    opacity : 1,
    transition : {
        duration : 2
    }
  }
}

const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-2'>
        <motion.div className='w-full h-full flex flex-col items-center justify-center space-y-4 lg:items-start lg:px-12' variants={inputVariant} initial="before" animate="after">
                <h3 className='text-white text-sm font-roboto text-center tracking-wide cursor-default lg:px-3 italic lg:text-base lg:text-left'>Forging Your Financial Future from Ground Zero</h3>
                <h1 className='text-white text-5xl text-center font-roboto leading-relaxed -tracking-wide cursor-default lg:text-left lg:text-7xl px-2'>Digital Wallet Integrated Tracking System</h1>
                <p className='text-gray-500 text-sm text-center font-roboto px-12 leading-relaxed tracking-wide cursor-default lg:text-left lg:px-0 lg:text-base'>Create your own wallet and track your best values in so many countries stock markets, and then learn basic financial skills and use them. This is more than wallet and tracking system!</p>
                <div className='w-full flex items-center justify-center lg:justify-start'>
                <input className='w-[275px] lg:w-2/3 px-2 py-2 font-roboto bg-gray-600 text-white rounded-md' placeholder='Your E-Mail'/>
                <button className='bg-white px-4  py-2 font-roboto ml-2 rounded-md font-bold customBG text-white tracking-wider'>Send</button>
                </div>
                <div className='flex items-center justify-center px-4 lg:justify-start lg:px-0 py-8'>
                    <img src={people} className='w-24 lg:w-36'/>
                    <p className='text-white text-xs px-2 font-roboto cursor-default lg:text-base'>More than 1600 people choose us</p>
                </div>
                </motion.div>
                <motion.div className='lg:flex items-center justify-center w-full hidden' variants={imageVariant} initial="before" animate="after">
                    <img src={heroLogo} className='w-[720px]'/>
                 </motion.div>
    </div>
  )
}

export default Hero