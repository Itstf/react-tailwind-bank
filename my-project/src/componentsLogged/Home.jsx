import React from 'react'
import img from '../assets/9.jpg'

const Home = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between'>
            <div className='w-full h-screen absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt="/" />
            </div>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto' id='#About'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 sm:mt-10'>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-white cursor-default'> Discover our app. </h1>
                    <h1 className='py-3 text-5xl md:text-5xl font-bold text-white cursor-default'> More options! </h1>
                </div>
            </div>
        </div>
    )
}
export default Home