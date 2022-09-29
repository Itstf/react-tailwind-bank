import React from 'react'

import imgApp from '../assets/loginApp.png'
import imgExtract from '../assets/extract.png'
import imgProfile from '../assets/profile.png'

const Application = () => {
    return (
        <div className='w-full my-32 ' id='App'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'> Want to surf the wave of digital? </h2>
                    <p className='text-3xl py-6 text-gray-500 mb-20'> Download the Unda bank app and have your account. </p>
                    {/* <div className='w-48'>
                        <img className='w-full' src={imgApp} alt="/" />
                        <img className='w-full' src={imgExtract} alt="/" />
                    </div> */}
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl '>
                        <p className='text-2xl font-bold text-amber-500'> Login </p>                        
                        <div className='w-48 ml-28 shadow-2xl items-center mt-5'>
                            <img className='w-full' src={imgApp} alt="/" />
                        </div>
                        {/* <p className='text-gray-400 mt-2 text-2xl'> Pay in 90 days </p> */}
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-2xl font-bold text-amber-500'> Extract </p>
                        <div className='w-48 ml-28 shadow-2xl items-center mt-5'>
                            <img className='w-full ' src={imgExtract} alt="/" />
                        </div>
                        {/* <p className='text-gray-400 mt-2 text-2xl'> Money instantly drops into your account </p> */}
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-2xl font-bold text-amber-500'> Profile </p>
                        <div className='w-48 ml-28 shadow-2xl items-center mt-5'>
                            <img className='w-full ' src={imgProfile} alt="/" />
                        </div>
                        {/* <p className='text-gray-400 mt-2 text-2xl'> Personal loan and automatic credit </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Application