import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'




const Nav = () => {
  return (
    <nav className='w-full flex items-center py-12 px-12'>
      {/* Navbar Header Section. Firstly I created general navbar after that I created logo which in header tag! */}
      <header className='flex items-center justify-center'>
      <NavLink to="/">
        <img src={logo} className='w-32'/>
      </NavLink>
      </header>
    </nav>
  )
}

export default Nav