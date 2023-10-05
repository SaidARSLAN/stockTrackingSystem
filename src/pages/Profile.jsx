import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='w-full h-full flex items-center justify-start px-12 flex-col'>
        <h1 className='text-white text-center text-2xl font-roboto font-bold'>Welcome, Admin</h1>
        <div className='w-full customBG h-[400px] px-2 my-4 rounded-lg flex items-start justify-start flex-col'>
            <div className='px-4 py-4 flex w-full items-center justify-between'>
            <h1 className='text-white font-roboto font-bold'>Admin</h1>
            <h3 className='text-green-500 font-roboto'>720 $</h3>
            </div>
            <div className='flex w-full items-start justify-start flex-col space-y-2'>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Open Expense Tracker</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Open Stock Tracker</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Connect Wallets</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Prediction System</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Company News</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Search Shares</button>
                <button className='text-gray-400 hover:text-white duration-200 text-base text-left font-roboto font-bold customBG px-4 py-2 w-52'>Your Situation</button>
                
            </div>
            <div className='w-full flex items-center justify-end my-8'>
                        <NavLink to='/signin' className='bg-white text-black font-roboto font-bold tracking-wider hover:bg-black hover:text-white duration-200 px-4 py-2 rounded-lg'>logout</NavLink>
                </div>
        </div>
    </div>
  )
}

export default Profile