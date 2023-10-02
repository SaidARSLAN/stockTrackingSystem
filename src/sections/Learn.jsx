import React, { useState } from 'react'
import learn from '../assets/learn.png'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import coin from '../assets/coin.png'
const Learn = () => {
    const [toggleOne, setToggleOne] = useState(false)
    const [toggleTwo, setToggleTwo] = useState(false)
    const [toggleThree, setToggleThree] = useState(false)
    const [toggleFour, setToggleFour] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center lg:flex-row'>
    <img src={coin} />
    <div className='flex flex-col justify-center items-center  space-y-12 customBG w-2/3 py-12 rounded-lg'>
                    <h1 className='text-white font-roboto text-3xl font-bold lg:text-6xl'>More Than A Wallet</h1>
                <div className='flex flex-col justify-center items-center lg:flex-row'>
                <ul className='flex flex-col items-center justify-center space-y-4 w-full px-12 lg:w-3/3'>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleOne(!toggleOne)}>{toggleOne ? <AiOutlineMinus /> :  <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Create Your Own Digital Wallet</span></li>
                    <p className={toggleOne ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleTwo(!toggleTwo)}>{toggleTwo ? <AiOutlineMinus /> : <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Digital Wallet Can Track Stock Markets</span></li>
                    <p className={toggleTwo ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleThree(!toggleThree)}>{toggleThree ? <AiOutlineMinus /> : <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Shares, Values, and more than everything</span></li>
                    <p className={toggleThree ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleFour(!toggleFour)}>{toggleFour ? <AiOutlineMinus /> : <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Security And Privacy</span></li>
                    <p className={toggleFour ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque incidunt, sint provident nisi tempore modi rerum ratione voluptatibus. Tempore vel, commodi neque incidunt placeat voluptate asperiores nostrum quod soluta!</p>
                    </div>
                </ul>
        </div>
    </div>
    <img src={coin} />
    </div>
  )
}

export default Learn