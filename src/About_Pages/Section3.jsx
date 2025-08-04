import React from 'react'

const Section3 = () => {
  return (
    <div>
        <div className='container mx-auto px-6 py-6 mt-10 xl:px-35 xl:py-10 xl:mt-20'>
            <h2 className='text-center font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>Awards & Recognitions</h2>
            <div className='grid sm:grid-cols-4 gap-10 sm:gap-6 mt-15'>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/images/Award1.png" alt="" className='lg:h-30 lg:w-40'/>
                    <p className='font-extrabold text-xl'>2020</p>
                    <p className='font-bold text-md'>Best NGO Award</p>
                    <p className='font-extralight text-sm'>BERLIN, GERMANY</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/images/Award2.png" alt="" className='lg:h-30 lg:w-40'/>
                    <p className='font-extrabold text-xl'>2018</p>
                    <p className='font-bold text-md'>Global Award</p>
                    <p className='font-extralight text-sm'>NEW YORK,USA</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/images/Award4.png" alt="" className='lg:h-30 lg:w-40'/>
                    <p className='font-extrabold text-xl'>2017</p>
                    <p className='font-bold text-md'>CSN Award</p>
                    <p className='font-extralight text-sm'>NEW Delhi</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/images/Award3.png" alt="" className='lg:h-30 lg:w-40'/>
                    <p className='font-extrabold text-xl'>2023</p>
                    <p className='font-bold text-md'>NGO of the year Award</p>
                    <p className='font-extralight text-sm'>VIENNA,AUSTRIA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3