import React, { useContext } from 'react'
import GlobalInformationContext from '../context/InformationContext'

const Wallet = () => {

    const {data} = useContext(GlobalInformationContext)

  return (
    <div className='w-full h-screen px-12'>
        <div className='w-full border-2 border-gray-500 px-4 py-4'>
            <h1 className='text-white font-roboto font-bold text-2xl tracking-wide'>{data.nameSurname}</h1>
            <h1 className='text-white font-roboto  text-sm tracking-wider'>{data.email}</h1>
            </div>
    </div>
  )
}

export default Wallet