"use client";
import React, { useState } from "react";
import "./navbar.css";
import NavLinks from "./components/NavLinks";
import Contact from "./components/Contact";
import Logo from "../Logo";
import HamburgerBtn from "./components/HamburgerBtn";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Working",
      url: "/working",
    },
    {
      name: "Categories",
      url: "/categories",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <div className="navbar bg-white sticky top-0 z-[1000] shadow-sm sm:px-5">
        <div className="mobile-wrapper hidden"></div>

        <div className="main-nav w-full h-full flex items-stretch gap-5">

          <div className="logo-container h-full flex justify-center items-center w-1/4 sm:w-1/2 sm:justify-start">
            <Logo />
          </div>

          <nav className="nav-links flex justify-evenly items-center w-2/4 flex-shrink-0 sm:hidden">
            {navLinks.map((navLink, index) => (
              <NavLinks key={index} index={index} {...navLink} />
            ))}
          </nav>

          <div className="cu-cta-container flex justify-center items-center w-1/4 sm:hidden">
            <Contact />
          </div>

          <div className="hamburger-btn hidden sm:flex w-1/2 justify-end items-center">
            <HamburgerBtn menuOpen={menuOpen} setMenu={setMenuOpen} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
