import React from 'react'

const Section3 = () => {
  return (
    <div className='container mx-auto px-4 mt-8 bg-[#fcedc6]'>
        <div className="flex items-center justify-between max-sm:flex-col pb-5">
            <div className='space-y-10 ml-8 mr-12 w-[60%] mt-8'>
                <p className='max-sm:text-sm font-medium'>WHAT WE DO</p>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>Some services we provide for our children</h2>
                <div className='space-y-6 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et mollitia voluptate optio recusandae voluptas perferendis esse debitis quasi
                         ab corporis, tempora in. Explicabo fugit veniam aliquam tempora debitis libero deserunt.</p>
                    <div className='space-y-3 md:w-[60%] ml-[5%] border-l-2 border-l-gray-200 px-5'>
                        <div className='text-justify'>
                            <h2 className='font-bold text-xl md:text-2xl mb-2'><i class="ri-building-4-fill"></i> Family support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus voluptatum iste rem explicabo neque a 
                                molestiae, quos voluptas unde facilis sequi accusantium, veniam inventore suscipit iusto temporibus ab aliquid!</p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='font-bold text-xl md:text-2xl mb-2 '><i className="ri-hand-heart-fill"></i> Health benefits</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus voluptatum iste rem explicabo neque a 
                                molestiae, quos voluptas unde facilis sequi accusantium, veniam inventore suscipit iusto temporibus ab aliquid!</p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='font-bold text-xl md:text-2xl mb-2'><i class="ri-wallet-3-fill"></i> Scholarships</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus voluptatum iste rem explicabo neque a 
                                molestiae, quos voluptas unde facilis sequi accusantium, veniam inventore suscipit iusto temporibus ab aliquid!</p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='font-bold text-xl md:text-2xl mb-2'><i class="ri-psychotherapy-fill"></i> Therapy</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus voluptatum iste rem explicabo neque a 
                                molestiae, quos voluptas unde facilis sequi accusantium, veniam inventore suscipit iusto temporibus ab aliquid!</p>
                        </div>
                    </div>
                </div>
                <button className='bg-[#f2c94c] px-4 py-2 rounded-lg'>Learn More</button>
            </div>
            <div>
                <img src="/images/sec3_home.png" alt="" className='max-sm:mt-7'/>
            </div>
        </div>
    </div>
  )
}

export default Section3