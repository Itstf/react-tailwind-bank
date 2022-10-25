import React, {useState} from 'react'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-gradient-to-r from-zinc-600 to-zinc-900 text-gray-300 py-y px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-500 py-8'>
                
                <div>
                    <h6 className='font-bold uppercase pt-2 '>
                        About UNDA bank
                    </h6>
                    <ul>
                        <li> Common questions </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2 '>
                        Transparency
                    </h6>
                    <ul>
                        <li> Privacy policy </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2 '>
                        Talk to us
                    </h6>
                    <ul>
                        <li> Work with us </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2 '>
                        Services
                    </h6>
                    <ul>
                        <li> Cards </li>
                    </ul>
                </div>

                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase mb-1 '> send us an email </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" placeholder='Enter email' className='w-full p-2 mr-4 rounded-md mb-4'/>
                        <button className='p-2 mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300'> Send </button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-purple-500'>
                <p className='py-4 text-gray-500 cursor-no-drop'> @2022 UNDA. ALL rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/thaiza-favarelli-da-silva-082978220/" className='hover:text-purple-600 hover:rotate-45 transition ease-in-out delay-150 duration-300'> <FaLinkedin /> </a>
                    <a href="https://github.com/Itstf" className='hover:text-purple-600 hover:rotate-45 transition ease-in-out delay-150 duration-300'> <FaGithub /> </a>
                    <a href="https://www.instagram.com/tfavarelli" className='hover:text-purple-600 hover:rotate-45 transition ease-in-out delay-150 duration-300'> <FaInstagram /> </a>                
                </div>
            </div>

        </div>
    )
}
export default Footer