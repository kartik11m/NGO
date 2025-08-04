import React from 'react'

const Section6 = () => {
  return (
    <div className='container mx-auto px-6 py-6 mt-10 xl:px-35 xl:py-10 xl:mt-20'>
        <div className=' bg-[url(/images/end.png)] bg-cover bg-center rounded-lg py-7 xl:py-15'>
            <div className='space-y-4 lg:space-y-8'>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl text-white text-center'>You can contribute to provide a place <br /> 
                for children with special needs!</h2>
                <div className='flex gap-8 justify-center'>
                    <button className='bg-[#f2c94c] px-4 py-2 rounded-md'>Join as a volunteer</button>
                    <button className='bg-white px-2 py-2 rounded-md'>Donate</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6