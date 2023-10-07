import React, { useContext, useState } from 'react'
import NameAndSurname from '../components/NameAndSurname';
import Mail from '../components/Mail';
import GlobalContext from '../context/MainContext';
import { FaSpinner } from 'react-icons/fa6';

const Create = () => {
    const {step,setStep} = useContext(GlobalContext)
  return (
    <section className='flex w-full items-center justify-center flex-col'>
        <h1 className='text-white font-roboto text-4xl font-bold tracking-wide text-center lg:text-7xl'>Create Your <span>Own Wallet</span></h1>
        <div className='flex w-full items-center justify-center my-8'>
            {step === 0 ? <button className='text-white tableBackground px-4 py-2 text-lg font-roboto font-bold tracking-wider' onClick={() => {setStep(step => step + 1)}}>Create</button> : step === 1 ? <NameAndSurname /> : step === 2 ? <Mail /> :<div className='flex flex-col items-center justify-center space-y-2'><FaSpinner className='animate-spin' color='white'/><h3 className='text-lg text-white font-roboto'>Creating...</h3></div>}
        </div>
    </section>
  )
}

export default Create