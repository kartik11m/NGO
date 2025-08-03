import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='pt-20 max-md:pt-40'>
        <img src="/images/bg.png" alt=""  className='relative bg-center bg-cover lg:w-full'/>
        <div className='absolute lg:top-[20%] md:top-[15%] sm:top-[25%] max-sm:top-[20%] max-sm:mt-3 left-8'>
            <h2 className='text-white font-bold max-sm:text-xl max-md:text-2xl max-lg:text-4xl lg:text-6xl xl:text-8xl'>Inclusive care for children <br />with special <br /> needs</h2>
            <div className='flex mt-8'>
                <button className=' bg-white rounded px-4 py-2 font-medium hover:bg-black hover:text-white md:text-2xl max-sm:px-2 max-sm:py-0'>What we do</button>
                <button className='text-white ml-8 px-4 py-2 font-medium'><i className="ri-play-circle-line text-xl md:text-2xl">Play video</i> </button>
            </div>
        </div>
        <div className='hidden md:flex justify-between absolute   md:top-[45%] lg:top-[60%] xl:top-[75%] 2xl:top-[87%]  text-white w-full'>
            <p>230 children under our care </p>
            <div className='w-[46%] bg-white h-0.5 mt-3 '></div>
            <p>58 donations collected</p>
        </div>
    </div>
  )
}

export default Hero