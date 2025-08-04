import React from 'react'

const Section1 = () => {
  return (
    <div className='md:container px-4 pt-20 max-md:pt-40 space-y-3 md:ml-29'>
            <p className='max-sm:text-sm font-medium'>KNOW ABOUT US</p>
        <div className='flex gap-10'>
            <div className=''>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>We are a non-governmental <br /> organization</h2>
            </div>
            <div className='text-justify md:w-[50%]'>
                <h3 className='font-bold'>Aenean faucibus nibh et justo cursus id 
                    rutrum lorem imperdiet. Nunc ut sem vitae 
                    risus tristique posuere.
                </h3>
                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus tempore debitis id pariatur 
                     suscipit at esse, soluta porro officiis Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     reprehenderit corporis, consequuntur a quasi. Accusantium aspernatur voluptate odit ipsa consequatur
                     asperiores tenetur? Consequuntur ut numquam alias illum, nam necessitatibus quisquam, assumenda 
                    doloremque voluptatem dicta repudiandae vero, architecto placeat!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section1