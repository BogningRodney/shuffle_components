import React from 'react'

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
        <img 
            src="CallToAction/CTA3.png" 
            alt="" 
            className='absolute top-0 left-0'
        />
        <img 
            src="CallToAction/CTA1.png" 
            alt="" 
            className='absolute top-0 right-0'
        />

        <div className="relative container mx-auto px-4">
          <div className='max-w-2xl lg:max-w-3xl xl:max-w-5xl xl:pr-20'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-10'>
              <span>Build stunning websites are going easy with </span>
              <span className='font-serif  italic'>saturn </span>
              <span>ui library</span>
            </h1>
            <p className='max-w-xl text-base sm:text-xl text-gray-500 font-semibold mb-10'>
              Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae fames vestibulum urna vel odio mauris urna orci est. Eget amet elementum fames nisl eu.
            </p>

            <div className='lg:flex items-center'>
              <a href="" className='relative group inline-block mb-12 lg:mb-0 md:mr-10 lg:mr-18 py-4 px-6 text-white font-semibold bg-orange-600 overflow-hidden rounded-full'>
                <div className='absolute top-0 right-full group-hover:scale-105 transition duration-500'></div>
                <div className='relative flex items-center justify-center'>
                  <span className='mr-4'>Learn More</span>
                  <img src="CallToAction/chevron-right-solid.svg" alt=""width={8} />
                </div>
              </a>
              <div className='flex items-center '>
                <img 
                  src="CallToAction/CTA2.png" 
                  alt=""
                  className='block w-24 md:w-32 lg:w-auto mr-6' 
                />
                <p className='text-sm text-gray-600'>
                  Our office is always open to having you anytime
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CallToAction
