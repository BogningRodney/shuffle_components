import React from 'react'

const Application = () => {

    const star_item = () => {
        return (
            <div className='w-auto p-0.5'>
                <img 
                    src="application/star.svg" 
                    alt="star" 
                    width={17}
                    height={16}
                />
            </div>
        )
    }
  return (
    <section className='pt-24 pb-28 bg-white overflow-hidden relative '>
        <img 
            src="application/gradient.svg" 
            alt="gradient" 
            className='hidden sm:absolute right-0 bottom-0 '
        />

        <div className='relative z-10 px-4 max-w-[1530px] mx-auto '>
            <div className='flex flex-wrap lg:items-center'>
                <div className='w-full md:w-1/2 p8'>
                    <div className='md:max-w-2xl'>
                        <p className='mb-7 text-sm text-indigo-600 font-semibold uppercase'>
                            👋 Meet new Flaro
                        </p>
                        <h2 className='mb-8 text-[42px] lg:text-[60px] leading-none font-bold'>
                            Start with ease, Grow your business
                        </h2>
                        <p className='mb-10 text-lg text-gray-600 font-medium leading-normal md:max-w-md'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.
                        </p>

                        <a className='mb-20 inline-block' 
                            href=""
                        >
                            <img 
                                src="application/app-store-round.png" 
                                alt="" 
                                className='h-12'
                            />
                        </a>

                        <h3 className='mb-3 text-gray-900 font-bold'>
                            Trusted by 1M+ customers
                        </h3>

                        <div className='flex flex-wrap items-center'>
                            <div className='w-auto p-1'>
                                <div className='flex flex-wrap '>
                                    { star_item() }
                                    { star_item() }
                                    { star_item() }
                                    { star_item() }
                                </div>
                            </div>
                            <div className='w-auto p-1'>
                                <div className="flex flex-wrap">
                                    <div className='w-auto p-0.5'>
                                        <p className=' font-bold'>
                                            4.2/5
                                        </p>
                                    </div>
                                    <div className='w-auto p-0.5'>
                                        <p className='text-gray-600 font-medium'>
                                            (45k Reviews)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 p8 self-end'>
                    <img 
                        src="application/iphone.png" 
                        alt="iphone" 
                        className='relative top-28 transform hover:scale-105 transition ease-in-out duration-1000'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Application
