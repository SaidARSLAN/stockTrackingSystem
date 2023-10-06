import { motion } from 'framer-motion'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
const containerVariable = {
  before : {
    opacity : 0
  },
  after : {
    opacity : 1,
    transition : {
      delay : 1,
      ease : "easeOut"
    }
  }
}
const iconVariant = {
  "hidden" : {
    y : "100vw"
  },
  "visible" : {
    y : 0,
    transition : {
      type : "tween",
      duration : 0.75
    }
  }
}


const Hero = () => {
  
  return (
    <div className='flex flex-col items-center justify-between h-full w-full'>
        <motion.div className='w-full h-full flex flex-col items-center justify-center space-y-4 lg:py-16'  variants={containerVariable} initial="before" animate="after">
                <h3 className='text-white text-xs  font-roboto text-center tracking-wide lg:text-base cursor-default italic'>Forging Your Financial Future from Ground Zero</h3>
                <h1 className='text-white text-5xl text-center font-roboto leading-relaxed cursor-default lg:text-8xl  tracking-wide'>Digital Wallet</h1>
                <p className='text-gray-400 text-sm text-center font-roboto cursor-default px-12 tracking-wide lg:tracking-normal lg:px-96 lg:text-lg'>Introducing a revolutionary financial platform—tracking global stocks, mastering finance, managing portfolios seamlessly, and navigating international markets with ease in one interface.</p>
                </motion.div>
        <motion.a href='#market' className='hidden lg:block py-60 lg:py-28 max-[424px]:py-36 max-[500px]:py-44 cursor-pointer' variants={iconVariant} initial="hidden" animate="visible">
          <BsChevronDown color='white' size={50}/>
          </motion.a>
                </div>
        
  )
}

export default Hero