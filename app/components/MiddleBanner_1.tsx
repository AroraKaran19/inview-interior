import React from 'react'

const MiddleBanner_1 = () => {

  // const handleAppear = () => {
  //   const section = document.querySelectorAll('.middle-banner-1');
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('opacity-100');
  //         entry.target.classList.remove('translate-y-[50px]');
  //       }
  //     });
  //   }, {
  //     threshold: 0.5
  //   });
  //   observer.observe(section[0]);
  // }

  // useEffect(() => {
  //   handleAppear();
  // }, [])

  return (
    <>
      <div className="middle-banner-1 bg-banner-1 bg-fixed bg-no-repeat bg-cover bg-right-bottom w-full flex justify-center items-center'">
        <div className="middle-banner-1-container w-full flex flex-col justify-center items-center">

          <div className="middle-banner-1-container-content flex flex-col gap-2 justify-center items-center w-full">
            <h1 className='heading text-center'>Best Interior Designer in Delhi!</h1>
            <p className='subheading text-center'>Proudly transforming over 500 spaces into beautiful homes</p>
          </div>

          <div className="middle-banner-1-container-images flex justify-center items-center w-full">

          </div>

        </div>
      </div>
    </>
  )
}

export default MiddleBanner_1;