import React from 'react'
import NavLinks from './NavLinks'
import ContactBtn from '../components/ContactBtn'

const Navbar = () => {

  return (
    <div className='navbar max-h-[120px] max-w-screen flex'>

      <div className="logo-box flex-1">
        <a href="/">
        <img src="/full-logo.png" alt="InviewInterior Logo" />
        </a>
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