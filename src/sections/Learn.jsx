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
    <img src={coin}/>
    <div className='flex flex-col justify-center items-center  space-y-12 customBG w-full py-12 rounded-lg'>
                    <h1 className='text-white font-roboto text-3xl font-bold lg:text-6xl'>More Than A Wallet</h1>
                <div className='flex flex-col justify-center items-center lg:flex-row'>
                <ul className='flex flex-col items-center justify-center space-y-4 w-full px-12 lg:w-3/3'>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleOne(!toggleOne)}>{toggleOne ? <AiOutlineMinus /> :  <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Would you like to establish your own digital wallet?</span></li>
                    <p className={toggleOne ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>It facilitates seamless and secure transactions, allowing your customers to make purchases with ease. Additionally, it enables you to efficiently manage payments, track transactions, and enhance overall financial transparency. </p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleTwo(!toggleTwo)}>{toggleTwo ? <AiOutlineMinus /> : <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>A digital wallet has the capability to track stock markets</span></li>
                    <p className={toggleTwo ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>
A digital wallet, in addition to its primary function as a secure and convenient tool for financial transactions, possesses the capability to extend its utility to tracking stock markets. This added feature enhances the overall financial management experience for users.</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleThree(!toggleThree)}>{toggleThree ? <AiOutlineMinus /> : <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Shares, values, and more—what else do you need?</span></li>
                    <p className={toggleThree ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Shares, values, and more—this comprehensive package encapsulates everything you need for a robust and informed approach to financial management. In this inclusive framework.</p>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                    <li className='text-xs lg:text-lg font-roboto font-bold bg-gray-300 w-full text-center cursor-pointer border-[2px] border-gray-800 shadow-lg shadow-black px-2 py-2 hover:bg-white duration-200 flex items-center' onClick={() => setToggleFour(!toggleFour)}>{toggleFour ? <AiOutlineMinus /> : <AiOutlinePlus />}<span className='flex flex-1 items-center justify-center'>Ensuring security and privacy.</span></li>
                    <p className={toggleFour ? 'text-sm px-4  font-roboto  text-white h-20 overflow-hidden duration-200 my-4' : 'h-0 duration-200'}>Ensuring security and privacy is paramount in any digital undertaking. A robust security framework safeguards sensitive information and transactions from unauthorized access.</p>
                    </div>
                </ul>
        </div>
    </div>
    <img src={coin} />
    </div>
  )
}

export default Learn