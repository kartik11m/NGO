import React from 'react'

const Section1 = () => {
  return (
    <div className='flex flex-col justify-center '>
        <div className='xl:container px-4 pt-20 max-md:pt-40 space-y-3 xl:ml-29'>
                <div className=''>
                    <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl text-center'>We are a non-governmental <br /> organization</h2>
                    <p className='max-sm:text-sm font-medium text-center mt-5'>Volunteer Form</p>
                </div>
        </div>
        <div className="flex justify-center items-center px-4 py-8 w-full">
        <div className="w-full max-w-4xl">
            <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdc1db3oEzTvOsWTEqf0VQnjo9vcx25fqRk8M62QAhpO4c7pg/viewform?embedded=true"
            className="w-full h-[800px] sm:h-[900px] md:h-[1000px] lg:h-[1094px] rounded-lg shadow-md"
            title="Volunteer Form"
            >
            Loading…
            </iframe>
        </div>
        </div>
    </div>
  )
}

export default Section1