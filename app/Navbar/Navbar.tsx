"use client";
import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css";
import NavContent from './NavContent';

const Navbar = () => {

  const [isSticky, setIsSticky] = useState<boolean>(false);
  let lastScrollY = useRef<number>(0);

  const handleScroll = () => {
    if (window.scrollY > 0 && window.scrollY < lastScrollY.current) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`navbar max-h-[120px] max-w-screen flex sm:pb-4 ${isSticky ? 'sticky' : ''}`}>
      <NavContent />
    </div>
  )
}

export default Navbar