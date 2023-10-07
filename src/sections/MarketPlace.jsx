import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const MarketPlace = () => {
    const {currCompanyInfos} = useContext(GlobalContext)
  return (
    <section id='market' className='grid grid-cols-1 w-full px-12 py-20 lg:py-0'>
        <div className='w-full'>
            <h1 className='text-white font-roboto text-3xl font-bold text-center lg:text-left lg:text-5xl my-4'>Market Update</h1>
        </div>
        <div className='flex w-full items-center justify-between  px-4 lg:px-12  tableBackground py-4'>
          <div className='w-full'>
                <h1 className='text-white font-roboto font-bold text-sm lg:text-xl'>Company Name</h1>
                </div>
                <div className='w-full max-sm:hidden'>
                <p className='text-white font-roboto font-bold text-sm lg:text-xl'>Industry</p>
                </div>
                <div className=''>
                <p className='text-white font-roboto font-bold text-sm lg:text-xl'>Price</p>
                </div>
        </div>
        {currCompanyInfos.map((company) => {
            return <div className='w-full lg:w-full px-4 lg:px-12 justify-between items-center flex  h-16 cursor-pointer hover:bg-[rgba(41,35,103,0.3)] duration-200'>
              <div className='text-left w-full'>
            <h4 className='font-roboto text-xs lg:text-xl lg:font-bold text-white '>{company[0].companyName}</h4>
            </div>
            <div className='w-full max-sm:hidden'>
            <p className='font-roboto text-xs text-white lg:text-lg lg:whitespace-nowrap w-40'>{company[0].industry}</p>
            </div>
            <div className=''>
            <p className='font-roboto lg:text-lg text-green-400 text-xs  whitespace-nowrap'>{company[0].price} $</p>
            </div>
    </div>
        })}
            
        
    </section>
  )
}

export default MarketPlace