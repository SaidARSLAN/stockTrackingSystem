import React from 'react'

const Create = () => {
  return (
    <section className='flex w-full items-center justify-center flex-col'>
        <h1 className='text-white font-roboto text-4xl font-bold tracking-wide'>Create Your <span>Own Wallet</span></h1>
        <div className='flex w-full items-center justify-center my-12'>
            <form className='flex items-center justify-center space-x-4 w-full'>
                <input className='text-black px-4 py-2 font-roboto tracking-wide w-[280px]' placeholder='Your name And Surname'></input>
                <button className='tableBackground text-white px-4 py-2 font-roboto font-bold tracking-wide'>Continue</button>
            </form>
        </div>
    </section>
  )
}

export default Create