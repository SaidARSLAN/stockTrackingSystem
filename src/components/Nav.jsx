import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {GrMenu} from 'react-icons/gr'
import { navLinks } from '../contains'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  const [toggle, setToggle] = useState(false)

  // Each click will change toggle condition.
  const handleToggle = () => {
        setToggle(!toggle);
  }

  return (
    <div className='w-full flex px-12 py-12 items-center justify-between relative'>
        <div className='flex items-center justify-center'>
            <NavLink to="/main">
            <img src={logo} className='lg:w-72 w-48 cursor-pointer max-[320px]:w-36'/>
            </NavLink>
            </div>
        <div className='hidden lg:flex  w-full'>
          <ul className='flex flex-1 items-center justify-center'>
          {navLinks.map((link,idx) => {
                  return <a href={link.link} key={idx} className='text-white mr-12 font-bold text-xl  font-roboto'>{link.name}</a>
          })}
          </ul>
        </div>
        <div className='flex items-center flex-col space-y-[8px] justify-center cursor-pointer lg:hidden' onClick={handleToggle}>
              <div className='w-[30px] h-[3px] bg-white'></div>
              <div className='w-[30px] h-[3px] bg-white'></div>
              <div className='w-[30px] h-[3px] bg-white'></div>
        </div>
        <div className={toggle ? 'flex bg-white px-8 py-4 absolute right-8 rounded-md top-24 lg:hidden scale-up-center' : "hidden"}>
          <ul className='flex flex-col items-start justify-center space-y-4'>
            {navLinks.map((link,idx) => {
                    return <a href={link.link} key={idx} className='font-roboto text-xl'>{link.name}</a>
            })}
            </ul>
        </div>
        <div className='hidden lg:flex items-center flex-1 space-x-8 w-full whitespace-nowrap px-4'>
              <p className='text-white cursor-pointer font-roboto text-lg font-bold'>Sign In</p>
              <NavLink to="/signup" className='bg-white text-black px-4 py-2 font-bold text-lg rounded-md'>Sign Up</NavLink>
        </div>
    </div>
  )
}

export default Nav