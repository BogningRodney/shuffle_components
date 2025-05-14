import React from 'react'

const career_item = (title:string, type:string, location:string, image:string, key:number) => {
    return (
        <div key={key} className='w-full md:w-1/3 p-3.5'>
            <a href="">
                <div className='relative p-6 h-full bg-white border border-gray-200 hover:border-gray-300 rounded-xl'>
                    <img 
                        src="career/gradient.svg" 
                        alt="" 
                        className='absolute top-0 left-0'
                    />
                    <div className='relative z-10 flex flex-col justify-between h-full'>
                        <div className='mb-24 flex-1'>
                            <h3 className='mb-2 text-lg font-bold leading-snug'>
                                {title}
                            </h3>
                            <p className='text-sm text-gray-500 font-medium'>
                                <span>{type}</span>
                                <span className='px-2'>.</span>
                                <span>{location}</span>
                            </p>
                        </div>

                        <div className="flex-1">
                            <img src={image} alt="test" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

const Career = () => {

    const career_array = [
            {
            title:"Senior UX Designer", 
            type:"Contract", 
            location:"New York, USA", 
            image:"career/career1.png"
            },
            {
            title:"Digital Marketer", 
            type:"Full Time", 
            location:"New York, USA", 
            image:"career/career2.png"
           },
           {
            title:"Junior JS Developer", 
            type:"Full Time", 
            location:"Remote", 
            image:"career/career3.png"
           },
           {
            title:"Senior Software Developer", 
            type:"Full Time", 
            location:"New York, USA", 
            image:"career/career4.png"
           },
           {
            title:"Product Designer", 
            type:"Full Time", 
            location:"Remote", 
            image:"career/career5.png"
           },
           {
            title:"Full-Stack Developer", 
            type:"Full Time", 
            location:"Texas, US", 
            image:"career/career6.png"
           }
    ]

  return (
    <section className='py-24 bg-[#f9fafc] overflow-hidden'>
        <h2 className='mb-5 text-[42px] md:text-6xl text-center font-bold leading-none'>
            Featured Jobs
        </h2>
        <p className='mb-16 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto'>
            Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum vitae vel purus.
        </p>
        <div className='md:max-w-6xl mx-auto'>
            <div className='flex flex-wrap mb-10'>
                {career_array.map((item,index) => career_item(item.title, item.type, item.location, item.image, index))}
            </div>
            <a 
                href=""
                className='flex justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal'
            >
                <span className='mr-2.5'> See all 8,849 jobs</span>
                <img 
                    src="career/career7.svg" 
                    alt=""
                    width={12} 
                />
            </a>
        </div>
    </section>
  )
}

export default Career
