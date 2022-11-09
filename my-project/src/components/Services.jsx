import React from 'react'

import {BookmarkIcon} from '@heroicons/react/outline'

import img from '../assets/10.jpg'

const Services = () => {
    return (
       <div className='w-full mt-24' id='About'>
            <div className='w-full md:h-[1140px] bg-gray-900/40 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt="/" />
            </div>
        
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'> UNDA </h2>
                    <h3 className='text-5xl font-bold py-6 text-center'> Online in the app </h3>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='p-8'>
                            <BookmarkIcon className='w-5 mr-5 text-amber-500 hover:text-purple-500 transition duration-300 ease-in-out'/>
                            <h3 className='font-bold text-2xl my-6'> Pix </h3>
                            
                            <p className='text-gray-600 text-xl cursor-default'> Easy, fast, immediate. </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='p-8'>
                            <BookmarkIcon className='w-5 mr-5 text-amber-500 hover:text-purple-500 transition duration-300 ease-in-out'/>
                            <h3 className='font-bold text-2xl my-6'> Recharge </h3>
                            <p className='text-gray-600 text-xl cursor-default'> No card needed, just use your cell phone to recharge! </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='p-8'>
                            <BookmarkIcon className='w-5 mr-5 text-amber-500 hover:text-purple-500 transition duration-300 ease-in-out'/>
                            <h3 className='font-bold text-2xl my-6'> Tickets </h3>
                            <p className='text-gray-600 text-xl cursor-default'> Copy and billing slip update. </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='p-8'>
                            <BookmarkIcon className='w-5 mr-5 text-amber-500 hover:text-purple-500 transition duration-300 ease-in-out'/>
                            <h3 className='font-bold text-2xl my-6'> Loan </h3>
                            <p className='text-gray-600 text-xl cursor-default'> Easy online loan. </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='p-8'>
                            <BookmarkIcon className='w-5 mr-5 text-amber-500 hover:text-purple-500 transition duration-300 ease-in-out'/>
                            <h3 className='font-bold text-2xl my-6'> Cards </h3>
                            <p className='text-gray-600 text-xl cursor-default'> Apply through the app in just a few steps. </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='p-8'>
                            <BookmarkIcon className='w-5 mr-5 text-amber-500 hover:text-purple-500 transition duration-300 ease-in-out'/>
                            <h3 className='font-bold text-2xl my-6'> Help </h3>
                            <p className='text-gray-600 text-xl cursor-default'> Ask your questions and ask for our help. </p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Services