import React from 'react'

const AdvancedInput = () => {
  return (
    <section className='w-full h-screen bg-[#0c1524]'>
        <div className='relative py-4 overflow-hidden'>
            <div className='max-w-[78vw] mx-auto'>
                <div className='p-6 bg-white rounded-xl'>
                    <div className='flex flex-wrap justify-between -m-2'>
                        <div className='w-full sm:w-1/2 p-2'>
                            <h3 className='text-sm font-semibold'>
                                Username
                            </h3>
                            <p className='text-sm text-neutral-500'>
                                Enter your website url
                            </p>
                        </div>
                        <div className='w-full sm:w-1/2 p-2'>
                            <div className='sm:max-w-md ml-auto overflow-hidden border border-neutral-200 rounded-lg focus-within:border-neutral-600'>
                                <div className='flex flex-wrap sm:flex-nowrap sm:divide-x divide-neutral-200'>
                                    <div className='w-full sm:w-auto'>
                                        <div className='py-2 px-3.5 bg-[#f3f7fa]'>
                                            <span className='text-sm font-medium'>dasy.com/</span>
                                        </div>
                                    </div>
                                    <div className='w-full sm:flex-1'>
                                        <input 
                                            type="text"
                                            placeholder='username'
                                            className='outline-none text-sm py-3 px-3.5 w-full h-full hover:bg-gray-50 placeholder-neutral-400' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdvancedInput
