"use client";
import React, { useState } from "react";
import "./navbar.css";
import NavLinks from "./NavLinks";
import Contact from "./Contact";
import Logo from "../Logo";
import HamburgerBtn from "./HamburgerBtn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
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
      <nav className="navbar bg-white">
        <div className="mobile-wrapper hidden"></div>

        <div className="main-nav w-full h-full flex items-stretch gap-5">

          <div className="logo-container h-full flex justify-center items-center w-1/4 sm:w-1/2 sm:justify-start">
            <Logo />
          </div>

          <div className="nav-links flex justify-center items-center gap-5 w-2/4 flex-shrink-0 sm:hidden">
            {navLinks.map((navLink, index) => (
              <NavLinks key={index} index={index} {...navLink} />
            ))}
          </div>

          <div className="cu-cta-container flex justify-center items-center w-1/4 sm:hidden">
            <Contact />
          </div>

          <div className="hamburger-btn hidden sm:flex w-1/2 justify-end items-center">
            <HamburgerBtn menuOpen={menuOpen} setMenu={setMenuOpen} />
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
