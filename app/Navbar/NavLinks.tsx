"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLinks = () => {

	const currentPath = usePathname();
	console.log(currentPath);

	const navMenu = [
    { 
      name: 'Home', 
      link: '/' 
    },
    { 
      name: 'About Us', 
      link: '/about' 
    },
    { 
      name: 'Working', 
      link: '/working' 
    },
    { 
      name: 'Categories', 
      link: '/categories',
			submenu: [
				{
					name: 'Living Room',
					link: '/categories/living-room'
				},
				{
					name: 'Bedroom',
					link: '/categories/bedroom'
				},
				{
					name: 'View More',
					link: '/categories/all'
				}
			]
    },
    { 
      name: 'Pricing', 
      link: '/pricing' 
    }
  ]

	return (
		<>
			{navMenu.map((menu, index) => (
				<Link href={menu.link} key={index} className={`relative ${currentPath == menu.link && "active" } `}>
					{menu.name}
					{/* {menu.submenu && (
						<ul className='absolute gap-3 top-full right-0 w-screen flex'>
							{menu.submenu.map((sub, index) => (
								<li key={index}> {sub.name} </li>
							))}
						</ul>
					)} */}
				</Link>
			))}
		</>
	)
}

export default NavLinks