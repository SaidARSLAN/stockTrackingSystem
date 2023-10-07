import React, { useContext } from 'react'
import GlobalInformationContext from '../context/InformationContext'

const Wallet = () => {

    const {data} = useContext(GlobalInformationContext)

  return (
    <div className='w-full h-screen'>
            <h1 className='text-white'>{data.nameSurname}</h1>
            <h1 className='text-white'>{data.email}</h1>
    </div>
  )
}

export default Wallet