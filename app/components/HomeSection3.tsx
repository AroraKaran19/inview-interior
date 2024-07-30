import React from 'react';
import WorkingCards from './WorkingCards';

const HomeSection3 = () => {
	return (
		<>
			<section id='how-it-happens' className='home-third-section flex flex-col justify-center items-center w-full'>
				<h1 className='section-heading'>How It Happens</h1>
				<p className='section-sub-heading w-[35%] sm:w-full text-center'>We help you to get the best possible solution for your business. Here&apos;s how we do it:</p>
				<div className="home-third-section-content flex w-full sm:flex-col">

					<div className="section-card-container w-[55%] sm:w-full sm:flex sm:justify-center sm:items-center">
						<WorkingCards />
					</div>

					<div className="image-collage w-[45%] sm:hidden flex">

						<img src="/HomeThirdSection1.jpg" alt="Interior 1" className='flex-1 w-full h-full rounded-3xl' />

						<div className='dual-images flex flex-col flex-1 w-full h-full'>
							<img src="/HomeThirdSection2.jpg" alt="Interior 2" className='w-full h-[60%] sm:h-full rounded-3xl' />
							<img src="/HomeThirdSection3.jpg" alt="Interior 3" className='w-full h-[40%] rounded-3xl sm:hidden' />
						</div>

					</div>

				</div>
			</section>
		</>
	)
}

export default HomeSection3;