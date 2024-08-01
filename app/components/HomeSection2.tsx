import React from 'react'
import Carousel from './Carousel'

const HomeSection2 = () => {

	const services = [
		{
			title: "Residential Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "residential-designing",
		},
		{
			title: "Commercial Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "commercial-designing",
		},
		{
			title: "Interior Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "interior-designing",
		},
		{
			title: "Exterior Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "exterior-designing",
		},
		{
			title: "Landscape Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "landscape-designing",
		},
		{
			title: "Furniture Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "furniture-designing",
		},
		{
			title: "Exterior Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "exterior-designing",
		},
		{
			title: "Landscape Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "landscape-designing",
		},
		{
			title: "Furniture Designing",
			imageUrl: "/HomeHeroSection1.png",
			redirectUrl: "furniture-designing",
		}
	]

	return (
		<>
			<section id='what-we-provide' className='home-second-section flex flex-col justify-center items-center w-full'>
				<h1 className='section-heading'>What We Provide</h1>
				<p className='section-sub-heading w-[35%] sm:w-full text-center'>We provide the best possible solution for your business. Here&apos;s what we provide:</p>
				<div className="home-second-section-content h-full w-full flex flex-col relative ">
					<Carousel items={services} autochange={true} />
				</div>
			</section>
		</>
	)
}

export default HomeSection2