import React from 'react'

const Breadcrumb = () => {
  return (
    <section className='overflow-hidden bg-[#0e0f11] h-screen w-full'>
        <div className="flex items-center gap-4 p-2">
            <a href="" className='text-white font-normal'>
                Homepage
            </a>
            <span className='text-white font-normal'>/</span>
            <a href="" className='text-white font-normal opacity-60'>
                Services
            </a>
        </div>
    </section>
  )
}

export default Breadcrumb
