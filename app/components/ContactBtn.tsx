"use client";
import TiltedArrow from '@/public/TiltedArrow';
import Link from 'next/link';
import React from 'react'

const ContactBtn = () => {
  return (
    <>
    <Link href="/" className="flex items-center justify-center border-[#303030] border-[1px] max-h-[43px] rounded-3xl">
          <TiltedArrow className='' />
          <span>Contact Us</span>
    </Link>
    </>
  )
}

export default ContactBtn;