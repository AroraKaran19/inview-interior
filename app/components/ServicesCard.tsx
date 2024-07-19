import React from 'react';

interface ServicesCardProps {
	title: string,
	description?: string
	imageUrl?: string
}

const ServicesCard = ({ title, description, imageUrl }: ServicesCardProps) => {

	return (
		<>
			<div key={title} style={{ backgroundImage: `url('${imageUrl}')` }} className={`relative bg-cover bg-center home-section-services-card flex w-[calc((100%-4.1rem*2)/3)] sm:w-full flex-shrink-0 flex-col items-center border-[#D4D4D4] border-[1px] rounded-3xl`}>
				<h2 className='home-section-services-card-title leading-none h-full flex justify-center gap-2'>
					<span className='text-center h-fit'>{title}</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex justify-center items-center">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
					</svg>
				</h2>
				<p className='home-section-services-card-description text-center w-[50%]'>{description}</p>
			</div>
		</>
	)
}

export default ServicesCard;