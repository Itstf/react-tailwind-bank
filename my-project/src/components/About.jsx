import React from 'react'

import {
    PhoneIcon, ArrowSmRightIcon
} from '@heroicons/react/outline'

import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import img from '../assets/2.jpg'

const About = () => {
    return (
       <div className='w-full h-screen mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'> asdjsiadj </h2>
                    <h3 className='text-5xl font-bold py-6 text-center'> tittle </h3>
                    <p className='py-4 text-3xl text-slate-300'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of Lorem Ipsum </p>
                </div>


                <div className='grid grid-cols-1 lg:grid-cols3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <PhoneIcon className='w-16 p-4 bg-amber-500 text-white rounded-lg mt-[-4rem]'/>
                                <h3 className='font-bold text-2xl my-6'> Support </h3>
                                <p className='text-gray-600 text-xl'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of Lorem Ipsum </p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-purple-500'> Know more <ArrowSmRightIcon className='w-5 ml-2'/></p>
                            </div>
                        </div>
                    

                
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-amber-500 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'> abcc </h3>
                            <p className='text-gray-600 text-xl'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of Lorem Ipsum </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-purple-500'> Know more <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                

                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-amber-500 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'> cba </h3>
                            <p className='text-gray-600 text-xl'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of Lorem Ipsum </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-purple-500'> Know more <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default About