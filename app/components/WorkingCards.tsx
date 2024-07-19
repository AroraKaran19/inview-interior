import React from 'react';

const WorkingCards = () => {

	const cards = [
		{
			title: 'Consultation',
			description: 'We provide a free consultation to understand your business needs and requirements.'
		},
		{
			title: 'Planning',
			description: 'We plan the best possible solution for your business to help you grow.'
		},
		{
			title: 'Development',
			description: 'We develop the solution as per the plan and keep you updated throughout the process.'
		},
		{
			title: 'Testing',
			description: 'We test the solution to make sure it is bug-free and works perfectly.'
		}
	]

	return (
		<>
			{cards.map((card, index) => (
				<div key={index} className="working-section-card flex flex-col justify-center items-center border-[#D4D4D4] border-[1px] rounded-3xl">
					<h2 className='working-section-card-index leading-none'>{index+1}.</h2>
					<h2 className='working-section-card-title leading-none'>{card.title}</h2>
					<p className='working-section-card-description text-center'>{card.description}</p>
				</div>
			))}
		</>
	)
}

export default WorkingCards;