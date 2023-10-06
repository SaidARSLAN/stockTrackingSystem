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
        <h1 className='text-white text-7xl py-28 px-12 leading-snug font-roboto font-bold lg:text-8xl'><span className='block text-center lg:inline'>Why </span>Choose Us</h1>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:px-12'>
        <div className='flex flex-col space-y-4 items-center justify-center lg:w-1/3'>
            <div className='heroBackground px-4 py-8 text-white h-[175px] font-roboto flex items-center space-x-8 rounded-lg'>
                <AiOutlineWallet size={60}/>
                <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl font-bold'>Connect Your Wallet</h3>
                <p className='text-lg'>Use Trust Wallet, Metamask, Bank Account or to connect to the app.</p>
                </div>
            </div>
            <div className='heroBackground px-4 py-8 text-white h-[175px] font-roboto flex items-center space-x-8 rounded-lg'>
                <FaSackDollar size={60}/>
                <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl font-bold'>SELECT YOUR QUANTITY</h3>
                <p className='text-lg'>Upload your crypto and set a title, description and price.</p>
                </div>
            </div>
            <div className='heroBackground px-4 py-8 text-white h-[175px] font-roboto flex items-center space-x-8 rounded-lg'>
                <AiOutlineTransaction size={60}/>
                <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl font-bold'>CONFIRM TRANSACTION</h3>
                <p className='text-lg'>Earn by selling your crypto on our marketplace.</p>
                </div>
            </div>
        </div>
        <div className='lg:w-1/3'>
        <img src={chooseLogo} />
        </div>
        <div className='flex flex-col space-y-4 items-center justify-center lg:w-1/3'>
            <div className='heroBackground px-4 py-8 text-white h-[175px] font-roboto flex items-center space-x-8 rounded-lg'>
                <GiReceiveMoney size={60}/>
                <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl font-bold'>RECEIVE YOUR OWN VALUES</h3>
                <p className='text-lg'>Invest all your money at one place on one platform.</p>
                </div>
            </div>
            <div className='heroBackground px-4 py-8 text-white h-[175px] font-roboto flex items-center space-x-8 rounded-lg'>
                <SiCoinmarketcap size={60}/>
                <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl font-bold'>TAKE A MARKET TO SELL OR TRACK</h3>
                <p className='text-lg'>Discover, collect the right values collections to buy or sell.</p>
                </div>
            </div>
            <div className='heroBackground px-4 py-8 text-white h-[175px] font-roboto flex items-center space-x-8 rounded-lg'>
                <GiPlatform size={60}/>
                <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl font-bold'>DRIVE YOUR COLLECTION</h3>
                <p className='text-lg'>We make it easy to Discover, Invest and manage.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ChooseUs