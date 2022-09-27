import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import bgImg from '../assets/1.png'

const Hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'> Cards in your style! </p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'> Credit and Debit </h1>
                    <p className='text-2xl'> Making lives easier, worry-free and your way. Use, save and enjoy your card as you wish. </p>
                    <button className='py-2 px-6 sm:w-[60%] my-4'> Click </button>
                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p> ashduhdsa </p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'> <CloudUploadIcon className='h-6 text-purple-500'/> abc </p>
                        <p className='flex px-4 py-2 text-slate-500'> <CloudUploadIcon className='h-6 text-purple-500'/> abcc </p>
                        <p className='flex px-4 py-2 text-slate-500'> <CloudUploadIcon className='h-6 text-purple-500'/> abccc </p>
                        <p className='flex px-4 py-2 text-slate-500'> <CloudUploadIcon className='h-6 text-purple-500'/> abcccc </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero