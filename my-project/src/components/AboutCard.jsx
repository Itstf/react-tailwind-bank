import React from 'react'
import img from '../assets/card.png'
import '../styles/aboutCard.css'

const AboutCard = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between' id='Card'>
            <div className='w-full mt-32'> 
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex'>
                        <div>
                            <h3 className='text-3xl font-bold pt-6 text-center text-purple-500'> Order your card now! </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen absolute object-cover mix-blend-overlay'></div>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto' id='#Card'>
                <div className='flex flex-col justify-center md:items-start w-full px-4 sm:mt-10'>
                    <p className="relative group">
                        <span className='text-5xl font-bold cursor-default text-zinc-400 hover:text-amber-500 duration-500 delay-150 ease-in-ou'>UNDAbank Active Cash® Card</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-2 bg-purple-500 transition-all group-hover:w-full duration-500 ease-in-ou"></span>
                    </p>
                    <h1 className='py-3 text-5xl md:text-4xl font-bold cursor-default text-purple-500'>$0 annual fee.</h1>
                    <img src={img} alt="" className='mt-10 grayscale hover:grayscale-0 transition duration-700 ease-in-out' />
                </div>
            </div> 
        </div>
    )
}
export default AboutCard