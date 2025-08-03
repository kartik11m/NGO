import React from 'react'

const Section4 = () => {
  return (
    <div className='container mx-auto px-4 mt-8'>
        <div className='space-y-4'>
            <p className='max-sm:text-sm font-medium'>Projects we have done</p>
            <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>We are creating a place <br /> where children with special <br /> needs can thrive</h2>
        </div>
        <div className='grid grid-cols-3 gap-4 relative max-sm:grid-rows-3 max-sm:grid-cols-1 mt-10'>
            <div className="relative bg-[url(/images/grid1.png)] bg-center bg-cover rounded-xl h-80 px-4">
                <div className='flex flex-col gap-10 items-center mt-10'>
                    <h3 className='text-white font-bold text-xl md:text-3xl'>Mission smile 1k: <br /> Outdoor charity</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Suspendisse varius enim in eros.
                    </p>
                    <button className='bg-white px-3 py-2 rounded-lg'>Learn more</button>
                </div>
            </div>
            <div className="relative bg-[url(/images/grid2.png)] bg-center bg-cover rounded-xl h-80 px-4">
                <div className='flex flex-col gap-10 items-center mt-10'>
                    <h3 className='text-white font-bold text-xl md:text-3xl'>Weekly excursions: <br /> Outdoor charity</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Suspendisse varius enim in eros.
                    </p>
                    <button className='bg-white px-3 py-2 rounded-lg'>Learn more</button>
                </div>
            </div>
            <div className="relative bg-[url(/images/grid3.png)] bg-center bg-cover rounded-xl h-80 px-4">
                <div className='flex flex-col gap-10 items-center mt-10'>
                    <h3 className='text-white font-bold text-xl md:text-3xl'>Monthly public <br /> awareness: <br /> Outdoor charity</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Suspendisse varius enim in eros.
                    </p>
                    <button className='bg-white px-3 py-2 rounded-lg'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4