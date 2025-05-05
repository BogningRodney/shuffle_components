import React from 'react'

const Awards = () => {

    const awards = [
        { 
            date : "2014", 
            title : "Business Award", 
            description: "Physical space is often conceived in three linear dimensions"
        },
        { 
            date : "2016", 
            title : "Design Award", 
            description: "Maxwell's equations—the foundation of classical electromagnetism"
        },
        { 
            date : "2017", 
            title : "Best Renovation", 
            description: "The long barrow was built on land previously inhabited in the Mesolithic"
        },
        { 
            date : "2018", 
            title : "Innovation Award", 
            description: "Physiological respiration involves the mechanisms that ensure that"
        },
        { 
            date : "2019", 
            title : "Landscape Design", 
            description: "Maxwell's equations—the foundation of classical electromagnetism"
        },
    ]

    const  tr_item = (date:string,title:string, description:string, key:any) => {
        return(
            <tr key={key}>
            <td className='py-8 border-t border-gray-100 pr-8'>
                <p className='text-gray-500 tracking-tight whitespace-nowrap font-medium'>
                    {date}
                </p>
            </td>
            <td className='py-8 border-t border-gray-100 pr-8'>
                <h2 className='tracking-tight text-2xl whitespace-nowrap font-semibold'>
                    {title}
                </h2>
            </td>
            <td className='py-8 border-t border-gray-100 pr-8'>
                <p className='text-gray-500 tracking-tight whitespace-nowrap font-medium'>
                    {description}
                </p>
            </td>
            <td className='py-8 border-t border-gray-100 pr-8'>
                <div className='flex justify-end'>
                    <a 
                        href=""
                        className='text-gray-300 hover:text-black transition duration-200'
                    >
                        <img src="/awards/up.png" alt="up" />
                    </a>
                </div>
            </td>
        </tr>    
        )
    }


  return (
    <section className='relative py-32 px-[5%] font-[plus_jakarta_sans]'>
        <p className='text-gray-600 font-medium text-center mb-4 '>
            Awards & Recognitions
        </p>
        <h1 className='font-semibold text-4xl md:text-6xl text-center mb-20 '>
            Our Awards
        </h1>

        <div className='overflow-hidden'>
            <div className='overflow-x-auto'>
                <table className='table-auto w-full'>
                    <tbody>
                        { awards.map((item,index) => tr_item(item.date, item.title, item.description, index))}
                        {/* { awards.map(item => <tr_item date={item.date} title={item.date} description={item.date}/>} */}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default Awards
