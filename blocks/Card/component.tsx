import React from 'react'

const Card = () => {
  return (
    <section className='w-full h-screen bg-[#0e0f11] py-24'>
        <div className="container px-4 mx-auto">
            <div className="relative px-4 max-w-sm mx-auto pt-20 pb-16 text-center border border-gray-900 border-opacity-30 rounded-4xl">
                <img 
                    src="card/avatar1.png" 
                    alt=""
                    className='absolute -top-12 left-1/2 transform -translate-x-1/2'
                />
                <h2 className='mb-4 text-4xl text-white tracking-tighter md:max-w-sm mx-auto'>
                    Jane Doe
                </h2>
                <p className='mb-10 text-gray-300 md:max-w-xs mx-auto'>
                    Mr 30 th
                </p>
                <ul className='relative'>
                    <li className='flex flex-wrap justify-center mb-4'>
                        <img src="card/card1.png" alt=""  className='mr-4'/>
                        <span className='text-white'>
                            (205) 555-0100
                        </span>
                    </li>
                    <li className='flex flex-wrap justify-center'>
                        <img src="card/card2.png" alt=""  className='mr-4'/>
                        <span className='text-white'>
                            contact@Nightsableteam.co
                        </span>
                    </li>
                </ul>
                <img 
                    src="card/blur.svg" 
                    alt=""
                    className='absolute bottom-0 left-0' 
                />
            </div>
        </div>
    </section>
  )
}

export default Card
