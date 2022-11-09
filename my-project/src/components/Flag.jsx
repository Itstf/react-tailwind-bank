import React from 'react'
import logoMastercard from '../assets/MastercardLogo.png'
import logoVisa from '../assets/VisaLogo.png'
import logoElo from '../assets/EloLogo.png'

const Flag = () => {
    return (
        <div className='w-full text-gray-300 flex flex-col'>
            <h1 className='rainbow-text text-5xl md:text-5xl font-bold cursor-default text-black'>Discover our best cards</h1>
            <p className='text-2xl pt-4 first-letter:text-3xl first-letter:font-bold first-letter:text-black text-black'> Discover our best cards </p>
            <div className='flex flex-col max-w-[1240px] py-4 mx-auto justify-between sm:flex-row text-black'>
                <div className='flex justify-around sm:w-[300px] text-2xl items-center flex-auto'>
                    <img src={logoMastercard} alt="" className='w-20 grayscale hover:grayscale-0 transition duration-700 ease-in-out'/>
                    <img src={logoVisa} alt="" className='w-20 ml-10 mr-3 grayscale hover:grayscale-0 transition duration-700 ease-in-out'/>
                    <img src={logoElo} alt="" className='w-16 ml-10 grayscale hover:grayscale-0 transition duration-700 ease-in-out'/>
                </div>
            </div>
        </div>
    )
}
export default Flag