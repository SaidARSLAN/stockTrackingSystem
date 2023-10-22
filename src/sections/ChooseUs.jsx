import React from 'react'
import { AiOutlineWallet } from 'react-icons/ai'
import {FaSackDollar} from 'react-icons/fa6'
import {AiOutlineTransaction} from 'react-icons/ai'
import {GiReceiveMoney} from 'react-icons/gi'
import chooseLogo from '../assets/chooseLogo.png'
import {SiCoinmarketcap}  from 'react-icons/si'
import {GiPlatform} from 'react-icons/gi'
const ChooseUs = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center px-4'>
        <h1 className='text-white text-4xl lg:py-28  py-12 px-12 leading-snug font-roboto font-bold lg:text-8xl'><span className='block text-center lg:inline'>Why </span>Choose Us</h1>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:px-12'>
        <div className='flex flex-col space-y-4 items-center justify-center lg:w-1/3'>
            <div className='tableBackground px-4 py-8 text-white h-[175px] font-roboto rounded-xl flex items-center space-x-8  w-full'>
                <AiOutlineWallet size={60}/>
                <div className='flex flex-col space-y-2 items-start justify-center'>
                <h3 className='lg:text-2xl text-lg font-bold'>Connect Your Wallet</h3>
                <p className='text-sm'>Use Trust Wallet, Metamask, Bank Account or to connect to the app.</p>
                </div>
            </div>
            <div className='tableBackground px-4 py-8 text-white h-[175px] rounded-xl font-roboto flex items-center space-x-8  w-full'>
                <FaSackDollar size={60}/>
                <div className='flex flex-col space-y-2 items-start justify-center'>
                <h3 className='lg:text-2xl text-lg font-bold'>SELECT YOUR QUANTITY</h3>
                <p className='text-sm'>Upload your crypto and set a title, description and price.</p>
                </div>
            </div>
            <div className='tableBackground px-4 py-8 text-white h-[175px] rounded-xl font-roboto flex items-center space-x-8  w-full'>
                <AiOutlineTransaction size={60}/>
                <div className='flex flex-col space-y-2 items-start justify-center'>
                <h3 className='lg:text-2xl text-lg font-bold'>CONFIRM TRANSACTION</h3>
                <p className='text-sm'>Earn by selling your crypto on our marketplace.</p>
                </div>
            </div>
        </div>
        <div className='lg:w-1/3'>
        <img src={chooseLogo} />
        </div>
        <div className='flex flex-col space-y-4 items-center justify-center lg:w-1/3'>
            <div className='tableBackground px-4 py-8 text-white h-[175px] rounded-xl font-roboto flex items-center space-x-8  w-full'>
                <GiReceiveMoney size={60}/>
                <div className='flex flex-col space-y-2 items-start justify-center'>
                <h3 className='lg:text-2xl text-lg font-bold'>RECEIVE YOUR OWN VALUES</h3>
                <p className='text-sm'>Invest all your money at one place on one platform.</p>
                </div>
            </div>
            <div className='tableBackground px-4 py-8 text-white h-[175px] rounded-xl font-roboto flex items-center space-x-8  w-full'>
                <SiCoinmarketcap size={60}/>
                <div className='flex flex-col space-y-2 items-start justify-center'>
                <h3 className='lg:text-2xl text-lg font-bold'>TAKE A MARKET TO SELL OR TRACK</h3>
                <p className='text-sm'>Discover, collect the right values collections to buy or sell.</p>
                </div>
            </div>
            <div className='tableBackground px-4 py-8 text-white h-[175px] rounded-xl font-roboto flex items-center space-x-8 w-full'>
                <GiPlatform size={60}/>
                <div className='flex flex-col space-y-2 items-start justify-center'>
                <h3 className='lg:text-2xl text-lg font-bold'>DRIVE YOUR COLLECTION</h3>
                <p className='text-sm'>We make it easy to Discover, Invest and manage.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ChooseUs