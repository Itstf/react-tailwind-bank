import React from 'react'
import img from '../assets/card.png'
import logoMastercard from '../assets/MastercardLogo.png'
import logoVisa from '../assets/VisaLogo.png'
import logoElo from '../assets/EloLogo.png'
import '../styles/aboutCard.css'

const AboutCard = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between'>
            <div className='w-full h-screen absolute  object-cover mix-blend-overlay'></div>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto' id='#Card'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 sm:mt-10'>
                    <p className="relative group">
                        <span className='py-3 text-5xl font-bold cursor-default text-zinc-400 hover:text-amber-500 duration-500 delay-150 ease-in-ou'>UNDAbank Active Cash® Card</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-2 bg-purple-500 transition-all group-hover:w-full duration-500 ease-in-ou"></span>
                    </p>
                    <h1 className='py-3 text-5xl md:text-4xl font-bold cursor-default text-black'>$0 annual fee.</h1>
                    <img src={img} alt="" className='mt-10 grayscale hover:grayscale-0 transition duration-700 ease-in-out' />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='rainbow-text py-3 text-5xl md:text-5xl font-bold cursor-default text-black ml-60'>Discover our best cards</h1>
                    <img src={logoMastercard} alt="" className='mt-10 ml-60 w-20 grayscale hover:grayscale-0 transition duration-700 ease-in-out'/>
                    <img src={logoVisa} alt="" className='mt-10 ml-60 w-20 grayscale hover:grayscale-0 transition duration-700 ease-in-out'/>
                    <img src={logoElo} alt="" className='mt-10 ml-60 w-16 grayscale hover:grayscale-0 transition duration-700 ease-in-out'/>                
                </div>
            </div> 
        </div>
    )
}
export default AboutCard