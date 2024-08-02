import React from 'react'
import NavLinks from './NavLinks'
import ContactBtn from '../components/ContactBtn'

const NavContent = () => {
    return (
        <>
            <div className="logo-box flex-1">
                <div className='w-fit h-full'>
                    <img src="/full-logo.png" alt="InviewInterior Logo" onClick={() => document.location.href = "/"} />
                </div>
            </div>

            <div className="menu-btn flex-1 hidden sm:flex justify-end items-center">
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
        </>
    )
}

export default NavContent