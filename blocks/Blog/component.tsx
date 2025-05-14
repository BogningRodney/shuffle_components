import React from 'react'

const blog_card = (tag:string, description:string, href:string, key:number) => {
  return (
    <div key={key} className='py-12 border-t-2 border-gray-100'>
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <div className='w-full lg:w-auto px-4 mb-8 lg:mb-0'>
          <img  
            className='block w-44 h-30' 
            src={href} 
            alt="" 
          />
        </div>
        <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
          <div className="max-w-2xl">
            <span className='block text-gray-400 mb-1'>
              {tag}
            </span>
            <p className='text-2xl font-semibold text-gray-900'>
              {description}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto px-4 ml-auto text-right">
          <a className='inline-flex items-center text-xl font-semibold text-orange-600 hover:text-gray-900' href="">
            <span className='mr-2'>Read</span>
            <img src="blog/blog_arrow.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {

  const blog_card_array = [
    { 
      tag: "Jul 20, 2025", 
      description: "Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing", 
      href: "blog/blog1.png" 
    },
    { 
      tag: "Jul 20, 2025", 
      description: "Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing", 
      href: "blog/blog2.png" 
    },
    { 
      tag: "Jul 20, 2025", 
      description: "Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing", 
      href: "blog/blog3.png" 
    },
  ]


  return (
    <section className='overflow-hidden py-20'>
      <img 
        src="blog/star-circle-right.svg" 
        alt="float"
        className='hidden sm:block absolute top-0 right-0 xl:mt-10 -mr-10 lg:-mr-0' 
      />
      <img 
        src="blog/blog_float2.png" 
        alt="float"
        className='hidden sm:block absolute bottom-0 left-0 -mb-48 lg:mb-0' 
      />

      <div className="container relative px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-15 text-center items-center">
          <span className='inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-600 bg-orange-50 rounded-full'>
            Our blog
          </span>
          <h1 className='text-5xl xs:text-6xl md:text-7xl font-bold'>
            <span>New &</span>
            <span className='font-serif italic'>Article</span>
          </h1>
        </div>

        <div className="max-w-5xl mx-auto">
            { blog_card_array.map((item,index) => blog_card(item.tag, item.description, item.href, index))  }

            <div className='pt-12 border-t-2 border-gray-100 text-center'>
              <a href="" className='relative group inline-block py-4 px-7 font-semibold text-orange-600 transition hover:text-orange-50 rounded-full bg-orange-50 duration-300 overflow-hidden'>
                <div className='absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500'></div>
                <span className='relative'>See More Articles</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
