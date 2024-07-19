import React from 'react';

interface ServicesCardProps {
	title: string,
	description?: string
	imageUrl?: string
}

const ServicesCard = ({ title, description, imageUrl }: ServicesCardProps) => {

	return (
		<>
			<div key={title} style={{backgroundImage: `url('${imageUrl}')`}} className={`relative bg-cover bg-center home-section-services-card flex w-[calc((100%-4.1rem*2)/3)] sm:w-full flex-shrink-0 flex-col justify-end items-center border-[#D4D4D4] border-[1px] rounded-3xl transition-all duration-500 ease-in-out`}>
				<h2 className='home-section-services-card-title leading-none'>{title}</h2>
				<p className='home-section-services-card-description text-center w-[50%]'>{description}</p>
			</div>
		</>
	)
}

export default ServicesCard;