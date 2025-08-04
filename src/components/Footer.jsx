import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
<>
    <div className='container mx-auto px-6 py-6 mt-10 xl:px-35 xl:py-10 xl:mt-20'>
        <div className=' bg-[url(/images/end.png)] bg-cover bg-center rounded-lg py-7 xl:py-15 mb-15'>
            <div className='space-y-4 lg:space-y-8'>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl text-white text-center'>You can contribute to provide a place <br /> 
                for children with special needs!</h2>
                <div className='flex gap-8 justify-center'>
                    <button className='bg-[#f2c94c] px-4 py-2 rounded-md'>Join as a volunteer</button>
                    <button className='bg-white px-2 py-2 rounded-md'>Donate</button>
                </div>
            </div>
        </div>
        <div className='space-y-5'>
            <p className='max-sm:text-sm font-medium text-lg'>Our Events</p>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-[#f2c94c] rounded-lg flex items-center gap-4 pl-4 max-sm:flex-col'>
                    <div className='mb-19 lg:mb-10 max-sm:mb-10 max-sm:mt-9'>
                        <h2 className='font-medium text-4xl lg:text-5xl'>15</h2>
                        <p className='text-sm text-center'>AUG</p>
                    </div>
                    <div className='flex items-center gap-10 py-5 justify-evenly max-sm:flex-col'>
                        <div className='space-y-1'>
                            <p className='font-medium text-md border-b-1'>Next Events </p>
                            <h2 className='font-medium max-sm:text-xl max-md:text-2xl md:text-3xl md:font-normal'>A day with our wonderfull <br /> children </h2>
                        </div>
                        <div className='md:ml-15'>
                            <button className='bg-white rounded-[50%] px-2 py-1'><i class="ri-arrow-right-long-line text-2xl text-gray-500"></i></button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f2c94c] rounded-lg flex items-center gap-4 pl-4 max-sm:flex-col'>
                    <div className='mb-19 lg:mb-10 max-sm:mb-10 max-sm:mt-9'>
                        <h2 className='font-medium text-4xl lg:text-5xl'>25</h2>
                        <p className='text-sm text-center'>AUG</p>
                    </div>
                    <div className='flex items-center gap-10 py-5 justify-evenly max-sm:flex-col'>
                        <div className='space-y-1'>
                            <p className='font-medium text-md border-b-1'>Next Events </p>
                            <h2 className='font-medium max-sm:text-xl max-md:text-2xl md:text-3xl md:font-normal'>Seminar: Caring for children<br />with autism  </h2>
                        </div>
                        <div className='md:ml-15'>
                            <button className='bg-white rounded-[50%] px-2 py-1'><i class="ri-arrow-right-long-line text-2xl text-gray-500"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=' bg-black px-6 py-6 mt-10 xl:px-35 xl:py-10 xl:mt-20'>
        <div className='grid grid-row-3 gap-6 lg:grid-cols-3'>
            <div className='flex items-center'>
                <Link to="/" className='flex  gap-2 text-center'>
                    {/* <img src="/images/logo.png" alt="" /> */}
                        <p className='font-modern-negra text-3xl text-white'>Largerthan<span className='italic'>i</span></p>
                </Link>
            </div>
            <div className='flex gap-6 md:gap-20 max-md:gap-15'>
                <ul className='space-y-4 text-white text-sm'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Team</li>
                    <li>What we do</li>
                    <li>Contact</li>
                </ul>

                <ul className='space-y-4 text-white text-sm'>
                    <li>More</li>
                    <li>Projects</li>
                    <li>Events</li>
                    <li>Donate</li>
                    <li>Blog</li>
                </ul>

                <ul className='space-y-4 text-white text-sm'>
                    <li>Connect</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>
            <div className='space-y-3 flex flex-col justify-center lg:items-center'>
                <h2 className='text-white max-sm:text-xl max-md:text-2xl md:text-3xl font-medium'>Subscribe to get latest <br />updates</h2>
                <div className='flex'>
                    <input type="text" placeholder='Your email' className='text-white placeholder-gray-300 border-1 rounded-sm'/>
                    <button className='bg-white px-4 py-2 rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Footer;