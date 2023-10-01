import React from 'react'
import logo from '../assets/logo.png'
import {GrMenu} from 'react-icons/gr'
import { navLinks } from '../contains'
const Nav = () => {
  return (
    <div className='w-full flex px-8 py-12 items-center justify-between'>
        <div className='flex items-center justify-center'>
            <a href="/">
            <img src={logo} className='w-60 cursor-pointer'/>
            </a>
            </div>
        <div className='hidden lg:flex  w-full'>
          <ul className='flex flex-1 items-center justify-center'>
          {navLinks.map((link,idx) => {
                  return <a href={link.link} key={idx} className='text-white mr-24 text-xl font-roboto'>{link.name}</a>
          })}
          </ul>
        </div>
        <div className='flex items-center flex-col space-y-[8px] justify-center cursor-pointer lg:hidden'>
              <div className='w-[30px] h-[3px] bg-white'></div>
              <div className='w-[30px] h-[3px] bg-white'></div>
              <div className='w-[30px] h-[3px] bg-white'></div>
        </div>
        <div className='hidden lg:flex items-center flex-1 space-x-8 w-full whitespace-nowrap px-4'>
              <p className='text-white cursor-pointer font-roboto text-lg'>Sign In</p>
              <button className='bg-white text-black px-4 py-2'>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav