import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'

const containerVariant = {
  before : {
    x : "100vw"
  },
  after : {
    x : 0 
  }
}
const infoVariant = {
  before : {
    y : "-100vw"
  },
  after : {
    y : 0,
    transition : {
      type:"tween",
      duration : 0.4
    } 
  }

}

const Profile = () => {
  return (
    <div className='w-full h-full flex items-center justify-start px-12 flex-col'>
        <motion.h1 className='text-white text-center text-2xl font-roboto font-bold' initial={{scale:0}} animate={{scale:1}}>Welcome, Admin</motion.h1>
        <div className='w-full customBG h-[400px] px-2 my-4 rounded-lg flex items-start justify-start flex-col'>
            <motion.div className='px-4 py-4 flex w-full items-center justify-between' variants={infoVariant} initial="before" animate="after">
            <h1 className='text-white font-roboto font-bold'>Admin</h1>
            <h3 className='text-green-500 font-roboto'>720 $</h3>
            </motion.div>
            <motion.div className='flex w-full items-start justify-start flex-col space-y-2' variants={containerVariant} initial="before" animate="after">
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Open Expense Tracker</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Open Stock Tracker</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Connect Wallets</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Prediction System</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Company News</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Search Shares</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Your Situation</button>
                
            </motion.div>
            <div className='w-full flex items-center justify-end my-8'>
                        <NavLink to='/signin' className='bg-white text-black font-roboto font-bold tracking-wider hover:bg-black hover:text-white duration-200 px-4 py-2 rounded-lg'>logout</NavLink>
                </div>
        </div>
    </div>
  )
}

export default Profile