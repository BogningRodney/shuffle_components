import React from 'react'

const Benefit = () => {

  const benef_array = [
    { href:"benefit/svg1.png", description:"Free Standard Shipping" },
    { href:"benefit/svg2.png", description:"Secure Shopping Guarantee"},
    { href:"benefit/svg3.png", description:"Secure Shopping Guarantee" },
    { href:"benefit/svg4.png", description:"Product Guarantee"}
  ]

  const benef_item = (key:number, href: string, description: string) => {
    return (
      <div 
        className='w-full md:w-1/2 lg:w-1/4 px-4 mb-12'
        key={key}
      >
        <div className="text-center">
          <img 
            src={href} 
            alt="machin" 
            className='inline-block mb-4'
          />
          <h4 className='font-bold'>
            {description}
          </h4>
        </div>
      </div>
    )
  }


  return (
    <section className='content py-12 bg-white'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-6xl mx-auto'>
          <div className="flex flex-wrap items-center -mx-4 -mb-12">
            {benef_array.map((item, index) => benef_item(index, item.href, item.description))  }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit
