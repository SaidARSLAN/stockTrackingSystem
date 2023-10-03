import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const TopFiveCompanies = () => {
  return (
    <div className='px-12'>
        <div className='flex w-full items-center justify-between'>
        <div className='flex items-center justify-center bg-gray-700 px-4 py-2 hover:bg-gray-900 cursor-pointer rounded-md'>
            <h3 className='text-xl text-white font-roboto font-bold tracking-widest'>APPLE</h3>
        </div>
        <div className=''>
            <h3>APPLE</h3>
        </div>
        <div className=''>
            <h3>APPLE</h3>
        </div>
        <div className=''>
            <h3>APPLE</h3>
        </div>
        <div className=''>
            <h3>APPLE</h3>
        </div>
        </div>
    </div>
  )
}

export default TopFiveCompanies