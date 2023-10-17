import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'
import {CgProfile} from 'react-icons/cg'
import Tracker from '../components/Tracker'
import ExpenseTrackerSystem from '../components/ExpenseTrackerSystem'
const Wallet = () => {
    const {data} = useContext(GlobalInformationContext)
  const [openTracker, setOpenTracker] = useState(false);
  return (
    <div className='w-full h-screen px-12'>
        <div className='w-full border-2 border-gray-500 px-4 py-4'>
          <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col w-3/4 items-start justify-center'>
            <h1 className='text-white font-roboto font-bold text-xl tracking-wide max-[320px]:text-[10px]'>{data.nameSurname}</h1>
            <h1 className='text-white font-roboto  text-sm tracking-wider max-[320px]:text-[10px]'>{data.email}</h1>
            </div>
            <div className='w-1/4 h-24 flex items-center justify-center'>
                <CgProfile color='white' size={60}/>
            </div>
            </div>
            <div className='flex w-full items-center justify-start py-4'>
            {openTracker ? <ExpenseTrackerSystem /> :  data.trackerStep === 0 ? <button className='bg-white px-2 py-2 font-roboto font-bold' onClick={() => {data.setTrackerStep(prevStep => prevStep + 1);setOpenTracker(true);localStorage.setItem("openTracker",true)}}>Start Tracker</button> : data.trackerStep === 1 ? <Tracker /> : <ExpenseTrackerSystem /> }
            </div>
            </div>
    </div>
  )
}

export default Wallet