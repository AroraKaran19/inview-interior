"use client";
import Link from 'next/link';
import React, { useEffect } from 'react'

const HeroArrow = () => {

    useEffect(() => {

        // Window scroll to top
        // window.scrollTo(0, 0);

        setTimeout(() => {
			const firstText = document.querySelector(".animate-fadeIn") as HTMLElement;
			firstText?.classList.remove("animate-fadeIn");
			firstText?.classList.add("animate-jumpUpDown");
		}, 2700);
    }, [])

    return (
        <Link href="#how-it-happens">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-fadeIn">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
        </Link>
    )
}

export default HeroArrow