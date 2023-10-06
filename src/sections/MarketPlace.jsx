import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const MarketPlace = () => {
    const {currCompanyInfos} = useContext(GlobalContext)
  return (
    <section id='market' className='grid grid-cols-1 w-full px-12 gap-y-4 py-20 lg:py-0'>
        <div className='w-full'>
            <h1 className='text-white font-roboto text-3xl font-bold text-center lg:text-left lg:text-5xl my-4'>Market Update</h1>
        </div>
        <div className='flex w-full items-center justify-between  px-4 lg:px-12  tableBackground py-4'>
                <h1 className='text-white font-roboto font-bold text-sm lg:text-xl'>Company Name</h1>
                <p className='text-white font-roboto font-bold text-sm lg:text-xl'>Industry</p>
                <p className='text-white font-roboto font-bold text-sm lg:text-xl'>Price</p>
        </div>
        {currCompanyInfos.map((company) => {
            return <div className='w-[600px]  lg:w-full px-4 lg:px-12 justify-between items-center flex  h-16 cursor-pointer'>
              <div className='w-[50px] lg:w-full lg:flex items-center justify-start'>
            <h4 className='font-roboto text-sm lg:text-lg text-white'>{company[0].companyName}</h4>
            </div>
            <div className='w-[100px] lg:w-full lg:flex items-center lg:mr-24 justify-end'>
            <p className='font-roboto text-sm text-white w-40'>{company[0].industry}</p>
            </div>
            <div className='w-[270px] lg:w-full lg:flex items-center justify-end'>
            <p className='font-roboto lg:text-lg text-green-400 text-sm'>{company[0].price} $</p>
            </div>
    </div>
        })}
            
        
    </section>
  )
}

export default MarketPlace