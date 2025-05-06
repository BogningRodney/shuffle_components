import React from 'react'

const Banner = () => {
  return (
    <section className='py-8 bg-[#f1f4fb] h-screen'>
        <div className="px-4 mx-auto container">
            <div className="bg-[#392cdc] px-7 py-6 rounded">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
                        <h3 className="mb-1 text-2xl font-bold text-white">
                            <span className='text-[#77d0b2] me-2'>
                                Try For Free 
                            </span>
                            <span className=''>
                            New Features
                            </span>
                        </h3>
                        <p className='mb-8 md:mb-16 text-sm font-medium text-indigo-200'>
                            No charge for seven days
                        </p>
                        <a className='flex items-center text-white font-medium' href="">
                            <img src="banner/arrow-right-solid.svg" alt="" width={12} className='mr-1'/>
                            <span>Check demo</span>
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center">
                        <img 
                            src="banner/chart-folder.png" 
                            alt="" 
                            className='h-48 mx-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
