import React from 'react'

const Section4 = () => {
  return (
    <div>
        <div className='container mx-auto px-6 py-6 mt-10 xl:px-35 xl:py-10 xl:mt-20 '>
            <div className='flex gap-20 bg-[#f2c94c]  px-6 py-6 rounded-xl max-sm:flex-col'>
                <div className='text-justify space-y-6 md:mt-12 md:ml-10 md:mb-7 w-[60%]'>
                    <p>OUR JOURNEY</p>
                    <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>How we raised 34M</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                        varius enim in eros elementum tristique. Duis cursus, 
                        mi quis viverra ornare, eros dolor 
                        interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
                    </p>
                    <div className='flex gap-6'>
                        <div>
                            <h3 className='font-bold text-xl md:text-2xl'>34M+</h3>
                            <p className='text-sm'>Donation Received</p>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl md:text-2xl'>400+</h3>
                            <p className='text-sm'>Volunteers</p>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl md:text-2xl'>20+</h3>
                            <p className='text-sm'>Care homes</p>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] max-sm:w-full'>
                    <img src="/images/ab2.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4