import React from 'react'

import {
    ArrowSmRightIcon, CreditCardIcon, CurrencyDollarIcon, BriefcaseIcon
} from '@heroicons/react/outline'


import img from '../assets/3.jpg'

const About = () => {
    return (
       <div className='w-full mt-24' id='About'>
            <div className='w-full h-[700px] bg-gray-900/40 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt='/' />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'> Real-time responses, take advantage of botIA </h2>
                    <h3 className='text-5xl font-bold py-6 text-center'> IA </h3>
                    <p className='py-4 text-3xl text-slate-300 text-center'> An intelligence to help you in whatever you need! 
                    <br></br>
                    Answer your questions via whatsapp messages. </p>
                </div>


                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <CreditCardIcon className='w-16 p-4 bg-purple-500 text-white rounded-lg mt-[-4rem]'/>
                                <h3 className='font-bold text-2xl my-6 overline '> More experience </h3>
                                <p className='text-gray-600 text-xl'> Credits on the market? <br></br> Best solutions for more credit. <br></br> ! </p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4 shadow-lg shadow-purple-500/50'>
                                <p className='flex items-center text-purple-500 cursor-not-allowed '> Know more <ArrowSmRightIcon className='w-5 ml-2'/></p>
                            </div>
                        </div>
                    
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <CurrencyDollarIcon className='w-16 p-4 bg-purple-500 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6 overline'> More investments </h3>
                            <p className='text-gray-600 text-xl'> Invest through the app, your 100% virtual bank. Go where the wave takes you! </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 shadow-lg shadow-purple-500/50'>
                            <p className='flex items-center text-purple-500 cursor-not-allowed'> Know more <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <BriefcaseIcon className='w-16 p-4 bg-purple-500 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6 overline'> More joy </h3>
                            <p className='text-gray-600 text-xl'> Learn to save, organize finances and make much more of your money! </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 shadow-lg shadow-purple-500/50'>
                            <p className='flex items-center text-purple-500 cursor-not-allowed'> Know more <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default About