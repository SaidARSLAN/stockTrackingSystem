import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../contains'

const Footer = () => {
  return (
        <div className='w-full flex flex-col py-24 items-center justify-center lg:flex-row lg:px-12'>
        <div className='flex items-center flex-col justify-center'>
            <a href="/">
            <img src={logo} className='lg:w-72 w-36 cursor-pointer max-[320px]:w-36'/>
            </a>
            <p className='font-roboto text-white py-4'>Copyright © 2023. All rights are reserved</p>
            </div>
                <ul className='flex flex-1 items-center w-full justify-evenly my-4 lg:justify-center lg:space-x-12'>
          {navLinks.map((link,idx) => {
                  return <a href={link.link} key={idx} className='text-white font-bold text-xl  font-roboto'>{link.name}</a>
          })}
          </ul>
                    <div className='uppercase flex text-white font-roboto justify-evenly lg:justify-center space-x-12 my-2 lg:my-0'>
                        <h3 className='text-sm cursor-pointer lg:text-lg'>privacy</h3>
                        <h3 className='text-sm cursor-pointer lg:text-lg'>Terms of Use</h3>
                    </div>
</div>
  )
}

export default Footer