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
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl '>
                        <p className='text-2xl font-bold text-amber-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 cursor-default transition duration-300 ease-in-out'> Login </p>                        
                        <div className='w-48 ml-24 lg:ml-28 shadow-2xl items-center mt-5'>
                            <img className='w-full hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-purple-500/50 grayscale hover:grayscale-0' src={imgApp} alt="/" />
                        </div>
                    </div>
                    <div className='border py-8 rounded-xl shadow-lg shadow-purple-500/50'>
                        <p className='text-2xl font-bold text-amber-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 cursor-default transition duration-300 ease-in-out'> Extract </p>
                        <div className='w-48 ml-24 lg:ml-28 shadow-2xl items-center mt-5'>
                            <img className='w-full hover:scale-105 transition duration-300 ease-in-out grayscale hover:grayscale-0' src={imgExtract} alt="/" />
                        </div>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-2xl font-bold text-amber-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 cursor-default transition duration-300 ease-in-out'> Profile </p>
                        <div className='w-48 ml-24 lg:ml-28 shadow-2xl items-center mt-5'>
                            <img className='w-full hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-purple-500/50 grayscale hover:grayscale-0' src={imgProfile} alt="/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Application