import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const centerLineVariant = {
  "open" : {
     opacity : 0
  },
  "closed" : {
    opacity : 1
  }
}
const topLineVariant = {
  "open" : {
    rotate : 45,
    translateY : 4
  },
  "closed" : {
    rotate : 0,
    translateY : 0
  }
}
const bottomLineVariant = {
  "open" : {
    rotate : -45,
    translateY : -20
  },
  "closed" : {
    rotate : 0,
    y : 0
  }
}


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full flex items-center justify-between py-12 px-12 max-[320px]:px-6'>

      {/* Navbar Header Section. Firstly I created general navbar after that I created logo which in header tag! */}
      <header className='flex items-center justify-center'>
      <NavLink to="/">
        <img src={logo} className='w-32'/>
      </NavLink>
      </header>

      {/* Hamburger Section with Motion! */}
      <motion.div className='lg:hidden grid grid-cols-1 gap-y-2 cursor-pointer' onClick={() => {setIsOpen(!isOpen)}}>
        <motion.div className='w-[35px] h-[4px] bg-white' variants={topLineVariant} animate={isOpen ? "open" : "closed"}></motion.div>
        <motion.div className='w-[35px] h-[4px] bg-white' variants={centerLineVariant} animate={isOpen ? "open" : "closed"}></motion.div>
        <motion.div className='w-[35px] h-[4px] bg-white' variants={bottomLineVariant} animate={isOpen ? "open" : "closed"}></motion.div>
      </motion.div>
    </nav>
  )
}

export default Nav