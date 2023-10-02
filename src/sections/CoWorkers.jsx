import React from 'react'
import apple from '../assets/apple.png'
import tesla from '../assets/tesla.png'
import audi from '../assets/audi.png'
import space from '../assets/space.png'
import samsung from '../assets/samsung.png'
const CoWorkers = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full lg:py-24'>
        <h1 className='font-roboto text-white text-3xl font-bold lg:text-7xl lg:mb-24 mb-12'>Our Partners and Co-Workers</h1>
    <div className='flex flex-wrap items-center justify-center gap-8 py-24 w-full lg:justify-between lg:px-12 customBG '>
        <div>
            <img src={apple} className='w-32'/>
        </div>
        <div>
            <img src={tesla} className='w-32'/>
        </div>
        <div>
            <img src={samsung} className='w-32'/>
        </div>
        <div>
            <img src={audi} className='w-32'/>
        </div>
        <div>
            <img src={space} className='w-32'/>
        </div>
    </div>
    </div>
  )
}

export default CoWorkers