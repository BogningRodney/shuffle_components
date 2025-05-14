import React from 'react'

const CaseStudy = () => {
  return (
    <section className='px-8 md:px-24 py-40'>
      <div className='flex flex-wrap -m-4'>
        <div className="w-full lg:w-1/4 p-4">
          <img 
            src="caseStudy/case1.png" 
            alt=""
            className='mb-6 w-full object-cover rounded-2xl h-[375px]' 
          />
          <img 
            src="caseStudy/case2.png" 
            alt=""
            className='mb-6 w-full object-cover rounded-2xl h-[280px]' 
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className='relative h-[682px]'>
            <img 
              src="caseStudy/case3.png" 
              alt=""
              className='absolute inset-0 w-full h-full rounded-2xl'
            />
            <div className='absolute inset-0'>
              <div className="flex flex-col justify-between h-full p-8">
                <div>
                  <p className='text-white tracking-tight mb-4'>
                    Growth
                  </p>
                  <h1 className='tracking-tight text-white text-3xl font-medium max-w-md'>
                    We helped Flarezo to increase their website conversion rate by 310%
                  </h1>
                </div>
                <a 
                  href=""
                  className='tracking-tight bg-white px-5 py-3 w-full h-14 rounded-full hover:bg-gray-50 focus:bg-gray-50 focus:ring focus:ring-gray-300 font-medium transition duration-200 inline-flex items-center justify-center'>
                    Red Full Story
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 p-4">
          <img 
            src="caseStudy/case4.png" 
            alt=""
            className='mb-6 w-full object-cover rounded-2xl h-[375px]'
          />
          <img 
            src="caseStudy/case5.png" 
            alt=""
            className='mb-6 w-full object-cover rounded-2xl h-[280px]'
          />
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
