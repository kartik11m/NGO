import React from 'react'

const Section5 = () => {
  return (
    <div className=' px-6 py-10 mt-10 bg-black'>
        <div className='flex gap-20 '>
            <div className='text-justify text-white space-y-6 md:mt-12 md:ml-10'>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>How we spend your <br /> donations and where it goes</h2>
                <p>We understand that when you make a 
                 donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
                <img src="/images/Stats_row.png" alt="" />
            </div>
            <div>
                <img src="/images/chart.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section5