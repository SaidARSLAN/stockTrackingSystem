import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'
import {CgProfile} from 'react-icons/cg'
import Tracker from '../components/Tracker'
const Wallet = () => {
    const [toggle, setToggle] = useState(false)
    const {data} = useContext(GlobalInformationContext)

  return (
    <div className='w-full h-screen px-12'>
        <div className='w-full border-2 border-gray-500 px-4 py-4'>
          <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col w-3/4 items-start justify-center'>
            <h1 className='text-white font-roboto font-bold text-xl tracking-wide'>{data.nameSurname}</h1>
            <h1 className='text-white font-roboto  text-sm tracking-wider'>{data.email}</h1>
            </div>
            <div className='w-1/4 h-24 flex items-center justify-center'>
                <CgProfile color='white' size={60}/>
            </div>
            </div>
            <div className='flex w-full items-center justify-start py-4'>
            {toggle ? <Tracker/> : <button className='bg-white px-2 py-2 font-roboto font-bold' onClick={() => {setToggle(true)}}>Start Tracker</button>}
            </div>
            </div>
    </div>
  )
}

export default Wallet