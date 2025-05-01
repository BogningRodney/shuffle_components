import React from 'react'

const About = () => {

    const list_item = (text:string) => {
        return (
            <div className='flex gap-3 flex-wrap items-center'>
                <div className='bg-orange-500 border border-orange-600 rounded-full flex justify-center items-center h-4 w-4'>
                    <img 
                        src="/about/component1/check-solid.svg" 
                        alt="check" 
                        width={8}
                    />
                </div>
                <span className='text-lg text-gray-600'>
                    {text}
                </span>
            </div>
        )
    }

    const logo_item = (href:string) => {
        return (
            <div className='py-8 px-16 flex justify-center items-center md:w-1/2 lg:w-1/3'>
                <img src={href} alt="" />
            </div>
        )
    }

    const card_image = (name:string, role:string) => {
        return (
            <div className='w-full lg:w-1/3 p-4 '>
                <div className='relative bg-no-repeat bg-cover rounded-3xl max-w-sm bg-[url(/about/component1/about1.png)] mx-auto h-[440px]'>
                    <div className='absolute  bottom-0 left-0 bg-white rounded-tr-3xl px-6 py-3'>
                        <h2 className='text-2xl font-bold mb-2'>
                            {name}
                        </h2>
                        <p className='text-sm text-gray-600'>
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <section>

        <div className='max-w-[1536px] mx-auto'>

            <div className='w-full px-4'>

                <div className='mb-32 w-full relative'>

                    {/* title */}
                    <h1 className='font-bold text-5xl lg:text-7xl text-center pt-14 pb-32 max-w-[32rem] lg:max-w-3xl mx-auto'>
                        On a mission to make learning fun
                    </h1>

                    {/* stat informations */}
                    <div className='bg-white border-2 border-gray-200 rounded-3xl flex flex-wrap'>

                        {/* item1 */}
                        <div className='py-8 w-full md:w-1/2 lg:w-1/4 '>
                            <div className='px-12 md:border-e-2 md:border-gray-200'>
                                <p className='text-gray-600 mb-2 text-center'> 
                                    Founded 
                                </p>
                                <h2 className='text-4xl lg:text-5xl text-center font-semibold'>
                                    2023
                                </h2>
                            </div>
                        </div>
                        {/* item2 */}
                        <div className='py-8 w-full md:w-1/2 lg:w-1/4'>
                            <div className='px-12 lg:border-e-2 lg:border-gray-200'>
                                <p className='text-gray-600 mb-2 text-center'> 
                                    Total funding
                                </p>
                                <h2 className='text-4xl lg:text-5xl text-center font-semibold'>
                                    $9.6M
                                </h2>
                            </div>
                        </div>
                        {/* item3 */}
                        <div className='py-8 w-full md:w-1/2 lg:w-1/4'>
                            <div className='px-12 md:border-e-2 md:border-gray-200'>
                                <p className='text-gray-600 mb-2 text-center'> 
                                    Team members
                                </p>
                                <h2 className='text-4xl lg:text-5xl text-center font-semibold'>
                                    110
                                </h2>
                            </div>
                        </div>
                        {/* item4 */}
                        <div className='py-8 w-full md:w-1/2 lg:w-1/4'>
                            <div className='px-12'>
                                <p className='text-gray-600 mb-2 text-center'> 
                                    Nationalities
                                </p>
                                <h2 className='text-4xl lg:text-5xl text-center font-semibold'>
                                    24
                                </h2>
                            </div>
                        </div>

                    </div>

                </div>

                {/* title 2 */}
                <h2 className='font-semibold text-4xl text-center mb-14'> 
                    Dedicated to Infusing Joy into Education
                </h2>

                {/* Paragraphes */}
                <div className='flex flex-wrap mb-32'>
                    {/* item1 */}
                    <div className='p-4 w-full lg:w-1/2'>
                        <p className='text-gray-600 text-lg'>
                            We are driven to transform the landscape of learning into a captivating journey of excitement and discovery. Our aim is to infuse every educational experience with the essence of joy.
                        </p>
                    </div>
                    {/* item2 */}
                    <div className='p-4 w-full lg:w-1/2'>
                        <p className='text-gray-600 text-lg'>
                            We are driven to transform the landscape of learning into a captivating journey of excitement and discovery. Our aim is to infuse every educational experience with the essence of joy.
                        </p>
                    </div>
                </div>
                
                {/* company with values */}
                <div className='flex flex-wrap mb-32'>

                    <div className='px-8 w-full lg:w-1/2'>
                        <h2 className='text-3xl lg:text-5xl font-bold mb-20 max-w-xs lg:max-w-lg'>
                            A company with values
                        </h2>

                        <img 
                            src="/about/component1/about1.png" 
                            alt="about 1" 
                            className='w-full lg:w-auto rounded-3xl mb-8'
                        />

                        <img 
                            src="/about/component1/about2.png" 
                            alt="about 2" 
                            className='w-full lg:w-auto rounded-3xl mb-8'
                        />

                    </div>

                    <div className='px-8 w-full lg:w-1/2'>
                        <p className='text-gray-600 text-lg mb-6'>
                            Diversity, inclusion, and belonging are fundamental to our success. We believe the best solutions occur when a plurality of backgrounds, experiences, and identities work together.
                        </p>
                        <div className='flex flex-col gap-2 mb-14'>
                            {/* <div className='flex gap-3 flex-wrap items-center'>
                                <div className='bg-orange-500 border border-orange-600 rounded-full flex justify-center items-center h-4 w-4'>
                                    <img 
                                        src="/about/component1/check-solid.svg" 
                                        alt="check" 
                                        width={8}
                                    />
                                </div>
                                <span className='text-lg text-gray-600'>
                                    Trustworthy
                                </span>
                            </div> */}
                            { list_item("Trustworthy") }
                            { list_item("Reliable") }
                            { list_item("Compassionate") }
                            { list_item("Productive") }
                            { list_item("People-first") }
                        </div>
                        <img 
                            src="/about/component1/about3.png" 
                            alt="about 3" 
                            className='w-full lg:w-auto rounded-3xl'
                        />
                    </div>

                </div>

                {/* title3 */}
                <h2 className='font-semibold text-4xl lg:text-5xl text-center mb-14'> 
                    Our investors
                </h2>

                {/* Parteners */}
                <div className='bg-gray-100 py-8 rounded-3xl flex flex-wrap mb-32 justify-center'>
                    { logo_item("/about/component1/logo1.png")}
                    { logo_item("/about/component1/logo2.png")}
                    { logo_item("/about/component1/logo3.png")}
                    { logo_item("/about/component1/logo4.png")}
                    { logo_item("/about/component1/logo5.png")}
                    { logo_item("/about/component1/logo6.png")}
                </div>

                {/* title3 */}
                <h2 className='font-semibold text-4xl lg:text-5xl text-center mb-14'> 
                    Meet the team
                </h2>

                <p className='text-gray-600 text-lg text-center mb-4'>
                    A dynamic group of individuals united by passion and expertise
                </p>

                {/* button */}
                <div className='flex justify-center mb-16'>
                    <a 
                    href=""
                    className='w-full sm:w-auto text-center h-14 inline-flex items-center justify-center py-3 px-5 rounded-full bg-orange-500 border-orange-600 text-sm font-semibold text-white hover:bg-orange-600 focus:ring-orange-200 transition duration-200'>
                        Careers
                    </a>
                </div>

                {/* Images section */}
                <div className='flex flex-wrap mb-32'>
                    {/* <div className='w-full lg:w-1/3 p-4'>
                        <div className=''>

                        </div>
                    </div> */}
                    { card_image("David Petrucci","Founder & CEO") }
                    { card_image("David Petrucci","Founder & CEO") }
                    { card_image("David Petrucci","Founder & CEO") }
                </div>

            </div>

        </div>

    </section>
  )
}

export default About
