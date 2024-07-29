"use client";
import { redirect } from 'next/navigation';
import React from 'react';
import { Redirection } from './Redirection';

interface ServicesCardProps {
	title: string
	description?: string
	imageUrl?: string
	redirectUrl?: string
}

const ServicesCard = ({ title, description, imageUrl, redirectUrl }: ServicesCardProps) => {

	return (
		<>
			<div key={title} onClick={() => { redirectUrl && Redirection(redirectUrl) }} style={{ backgroundImage: `url('${imageUrl}')` }} className={`relative bg-cover bg-center home-section-services-card flex w-[calc((100%-4.1rem*2)/3)] sm:w-full flex-shrink-0 flex-col items-center border-[#D4D4D4] border-[1px] rounded-3xl`}>
				<h2 className='home-section-services-card-title leading-none h-full flex justify-center gap-4 hover:gap-2'>
					<span className='text-center h-fit select-none'>{title}</span>
					<svg viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.3641 9.49997H22.5773M22.5773 9.49997L14.6224 1.54502M22.5773 9.49997L14.6224 17.4549" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</h2>
				<p className='home-section-services-card-description text-center w-[50%]'>{description}</p>
			</div>
		</>
	)
}

export default ServicesCard;