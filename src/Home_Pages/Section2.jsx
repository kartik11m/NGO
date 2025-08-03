import React from 'react'

const Section2 = () => {
  return (
    <div className='container mx-auto px-4 mt-8 '>
        <div className="flex items-center justify-between max-sm:flex-col">
            <div className='space-y-10 ml-8 mr-12 w-[60%]'>
                <p className='max-sm:text-sm font-medium'>KNOW ABOUT US</p>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl'>We provide a place for children with special needs</h2>
                <div className='space-y-6 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et mollitia voluptate optio recusandae voluptas perferendis esse debitis quasi
                         ab corporis, tempora in. Explicabo fugit veniam aliquam tempora debitis libero deserunt.</p>
                    <p>‍cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet
                        . Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis rem 
                        reprehenderit quidem sit ipsa reiciendis. Eaque, ipsa earum porro, error libero cumque nulla, quae cupiditate consequatur maiores 
                        optio totam!</p>
                </div>
                <button className='bg-[#f2c94c] px-4 py-2 rounded-lg'>Learn More</button>
            </div>
            <div>
                <img src="/images/sec2.png" alt="" className='max-sm:mt-7'/>
            </div>
        </div>
    </div>
  )
}

export default Section2