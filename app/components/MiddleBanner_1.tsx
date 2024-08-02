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

  const items = [
    {
      title: "On-Going Projects",
      count: "10",
    },
    {
      title: "Completed Projects",
      count: "200",
    },
    {
      title: "Happy Clients",
      count: "134",
    },
    {
      title: "Team Members",
      count: "20+",
    }
  ]

  return (
    <>
      <div className="middle-banner-background-wrapper bg-banner-1 w-full">
        <div className="middle-banner-1 bg-fixed bg-no-repeat bg-cover bg-right-bottom w-full flex justify-center items-center backdrop-blur-sm">
          <div className="middle-banner-1-container w-full flex justify-center items-center">

            <div className="middle-banner-1-sub-container flex flex-col justify-center items-center gap-10 w-fit bg-white/20 rounded-2xl ">
              <div className="middle-banner-1-container-content flex flex-col gap-2 justify-center items-center w-full mx-8 sm:mx-4 my-8 sm:my-4">
                <h1 className='heading text-center'>Best Interior Designer in Delhi!</h1>
                <p className='subheading text-center'>Proudly transforming over 500 spaces into beautiful homes</p>
              </div>

              <div className="middle-banner-1-container-content-2 flex justify-center items-center w-full gap-3 mx-8 sm:mx-4 my-8 sm:my-4">
                {
                  items.map((item) => (
                    <div className="content-2-item" key={item.title}>
                      <h1 className='heading text-center'>{item.count}</h1>
                      <p className='subheading text-center'>{item.title}</p>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default MiddleBanner_1;