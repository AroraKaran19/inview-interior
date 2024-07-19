import React from 'react'
import Carousel from './Carousel'

const HomeSection2 = () => {

  const services = [
		{
			title: "Residential Designing",
			imageUrl: "/HomeHeroSection1.png",
		},
		{
			title: "Commercial Designing",
			imageUrl: "/HomeHeroSection1.png",
		},
		{
			title: "Interior Designing",
			imageUrl: "/HomeHeroSection1.png",
		},
		{
			title: "Exterior Designing",
			imageUrl: "/HomeHeroSection1.png",
		},
		{
			title: "Landscape Designing",
			imageUrl: "/HomeHeroSection1.png",
		},
		{
			title: "Furniture Designing",
			imageUrl: "/HomeHeroSection1.png",
		}
	]

  return (
    <>
      <section id='what-we-provide' className='home-second-section flex flex-col justify-center items-center w-full'>
        <h1 className='section-heading'>What We Provide</h1>
        <p className='section-sub-heading w-[35%] sm:w-full text-center'>We provide the best possible solution for your business. Here&apos;s what we provide:</p>
        <div className="home-second-section-content h-full w-full flex flex-col relative overflow-y-visible ">
          <Carousel items={services} />
        </div>
      </section>
    </>
  )
}

export default HomeSection2