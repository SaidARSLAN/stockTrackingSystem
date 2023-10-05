import { motion } from 'framer-motion'
import React from 'react'
import {BsChevronCompactDown} from 'react-icons/bs'
const containerVariable = {
  before : {
    y : 100,
    opacity : 0
  },
  after : {
    y : 0,
    opacity : 1,
    transition : {
      type : "tween",
      duration : 0.55,
      ease : "easeOut"
    }
  }
}


const Hero = () => {
  return (
    <div className='w-full h-full flex items-center justify-between flex-col'>
        <motion.div className='w-full h-full flex flex-col items-center justify-center space-y-4'  variants={containerVariable} initial="before" animate="after">
                <h3 className='text-white text-sm  font-roboto text-center tracking-wide lg:text-lg cursor-default italic'>Forging Your Financial Future from Ground Zero</h3>
                <h1 className='text-white text-5xl text-center font-roboto leading-relaxed cursor-default lg:text-7xl font-bold tracking-wide'>Digital Wallet</h1>
                <p className='text-gray-400 text-sm text-center font-roboto leading-relaxed tracking-wide cursor-default px-12 lg:px-80 lg:text-lg'>Introducing a revolutionary financial platform—tracking global stocks, mastering finance, managing portfolios seamlessly, and navigating international markets with ease in one interface.</p>
                </motion.div>
        <div className='flex items-center justify-center mb-12 lg:mb-0'>
          <a href="#about"><BsChevronCompactDown size={50} color='white' className='cursor-pointer'/></a>
        </div>
    </div>

  )
}

export default Hero