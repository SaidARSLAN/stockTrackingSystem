import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
const CreateAccount = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
                setOpen(false)
        },200)
    },[])

  return (
    <>        
    {open ? <ClipLoader color={'white'} size={50}/> : 
        <form className='flex flex-col space-y-4 my-12'>        
        <div className='flex flex-col'>
        <h1 className='text-white font-roboto text-2xl mb-4 font-bold cursor-default'>Personal Information</h1>
        <div className='flex space-x-12 mb-4'>
            <input type="text" className='heroBackground border-[1px] text-white px-4 py-1' placeholder='First Name' />
            <input type="text" className='heroBackground border-[1px] text-white px-4 py-1' placeholder='Last Name' />
        </div>
        <div>
        <input type="text" className='heroBackground border-[1px] w-full mb-4 text-white px-4 py-1' placeholder='Email' />
        </div>
        <div className='w-full flex items-center justify-evenly my-4'>
            <div className='flex flex-col space-y-1'>
            <input type="radio"/>
            <label className='text-white font-roboto'>Male</label>
            </div>
            <div className='flex flex-col space-y-1'>
            <input type="radio"/>
            <label className='text-white font-roboto'>Female</label>
            </div>
        </div>
        </div>
        <div className='flex flex-col'>
        <h1 className='text-white font-roboto text-2xl mb-4 font-bold cursor-default'>Financial Information</h1>
        </div> 
        </form>
}
</>

  )
}

export default CreateAccount