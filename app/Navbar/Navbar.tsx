import React from 'react'
import NavLinks from './NavLinks'
import ContactBtn from '../components/ContactBtn'
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className='navbar max-h-[120px] max-w-screen flex sm:pb-4'>

      <div className="logo-box flex-1">
        <a href="/">
          <img src="/full-logo.png" alt="InviewInterior Logo" />
        </a>
      </div>

      <div className="menu-btn flex-1 hidden sm:flex justify-end items-center">
        {/* Need to make this! */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <div className="nav-links sm:hidden flex-auto flex justify-center">
        <NavLinks />
      </div>

      <div className="contact-btn sm:hidden flex-1 flex justify-end">
        <ContactBtn />
      </div>

    </div>
  )
}

export default Navbar