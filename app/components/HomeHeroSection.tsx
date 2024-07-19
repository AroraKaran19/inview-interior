import React from 'react'
import HeroArrow from './HeroArrow'
import "../HomePage.css";

const HomeHeroSection = () => {
	return (
		<>
			<section id='hero-section' className='home-hero-section h-fit w-full flex'>

				<div className="left-images flex-1 flex flex-col justify-center items-center">
					<img src="/HomeHeroSection1.png" alt="Interior 1" />
					<img src="/HomeHeroSection2.png" alt="Interior 2" />
				</div>

				<div className="hero-text flex-1 flex flex-col gap-20">
					<div className="head-text justify-center flex w-full flex-wrap gap-2 items-center leading-none">
						<h1 className=''>Dream.</h1>
						<h1 className=''>Create.</h1>
						<h1 className=''>Live.</h1>
					</div>

					<div className="sub-text flex justify-center w-full">
						<p className='w-[80%] text-center'>Transform Your Space with Tailored Design Excellence</p>
					</div>

					<div className="arrow-down flex justify-center items-center">
						<HeroArrow />
					</div>
				</div>

				<div className="right-images flex-1 flex flex-col justify-center items-center">
					<img src="/HomeHeroSection3.png" alt="Interior 3" />
					<img src="/HomeHeroSection4.png" alt="Interior 4" />
				</div>

			</section>
		</>
	)
}

export default HomeHeroSection