import React from 'react'
import { gridData } from '../../constants'

const Section5 = () => {
  return (
    <div>
        <div className='container mx-auto px-6 py-6 mt-10 xl:px-35 xl:py-10 xl:mt-20'>
            <div>
                <h2 className='font-bold max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl text-center'>Meet our team</h2>
                <p className='text-center text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='grid grid-cols-0 sm:grid-cols-4 gap-4 mt-8 md:mt-16'>
                {gridData.map((user, index) => (
                <div key={index} className="bg-white p-4 rounded shadow space-y-2 border-gray-300 hover:shadow-2xl hover:border-l-2 hover:border-b-2">
                <img src={user.img} alt={user.name} className='max-sm:mx-auto'/>
                <h3 className="text-center font-semibold">{user.name}</h3>
                <p className="text-center text-sm text-gray-500">{user.pos}</p>
                <div className="flex justify-center gap-2 text-xl text-black">
                    <i className={user.face}></i>
                    <i className={user.tweet}></i>
                    <i className={user.linked}></i>
                </div>
                </div>
            ))}

            </div>
        </div>
    </div>
  )
}

export default Section5