import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
const Join = () => {
  const [color, setColor] = useState("#ffffff")
  

  const [controlCreate,setControlCreate] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setControlCreate(true)
    setTimeout(() => {
      setControlCreate(false)
      navigate("/register")
    },3000)
  }

  return (
    <div className='w-full h-full flex items-center justify-start flex-col py-24'>
        <h1 className='text-white text-6xl font-roboto text-center lg:text-8xl px-24 lg:px-0 font-extrabold leading-tight tracking-wider'>CREATE YOUR OWN<span className='block tableBackground bg-clip-text text-transparent'>WALLET</span></h1>
        <p className='text-white font-roboto  text-xl lg:px-0 px-20 text-center lg:text-xl font-semibold tracking-wide my-4'>Invest and manage all your invests at one place</p>
        {
        controlCreate  
        ? 
        <ClipLoader color={color} size={30}/> 
        : 
        <button className='text-white font-roboto mt-12  tracking-widest rounded-xl tableBackground px-6 py-4  text-xl font-bold' onClick={handleClick}>Start with Stking</button>
        }
    </div>
  )
}

export default Join