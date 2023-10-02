import React, { useState } from 'react'
import learn from '../assets/learn.png'
const Learn = () => {
    const [toggleOne, setToggleOne] = useState(false)
    const [toggleTwo, setToggleTwo] = useState(false)
    const [toggleThree, setToggleThree] = useState(false)
    const [toggleFour, setToggleFour] = useState(false)

  return (
    <div className='flex flex-col justify-center items-center  space-y-12 customBG w-2/3 py-12'>
                    <h1 className='text-white font-roboto text-3xl font-bold lg:text-6xl'>More Than A Wallet</h1>
                <div className='flex flex-col justify-center items-center lg:flex-row'>
                <ul className='flex flex-col items-center justify-center space-y-4 w-full px-12 lg:w-2/3'>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-base font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200' onClick={() => setToggleOne(!toggleOne)}>Create Your Own Digital Wallet</li>
                    <p className={toggleOne ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-base font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200' onClick={() => setToggleTwo(!toggleTwo)}>Digital Wallet Can Track Stock Markets</li>
                    <p className={toggleTwo ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-base font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200' onClick={() => setToggleThree(!toggleThree)}>Shares, Values, and more than everything</li>
                    <p className={toggleThree ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-base font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200' onClick={() => setToggleFour(!toggleFour)}>Security And Privacy</li>
                    <p className={toggleFour ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                </ul>
        <div className='flex items-center justify-center'>
                <img src={learn} className='w-80 lg:w-full'/>
        </div>
        </div>
    </div>
  )
}

export default Learn