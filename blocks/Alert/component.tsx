import React from 'react'

const Alert = () => {
  return (
    <div className='w-full h-screen bg-[#f1f4fb]'>
      <div className='py-8 px-6'>
        <div className='p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg'>
            <div className='flex items-center '>
                <h3 className='text-orange-900 font-medium '>
                    Example for banner
                </h3>
                <button className='ml-auto cursor-pointer'>
                    <img 
                        src="/alert/xmark.svg" 
                        alt="xmark" 
                        width={12}
                        height={12}
                    />
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
