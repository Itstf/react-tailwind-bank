import React, {useState} from 'react'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-white dark:bg-gradient-to-r from-zinc-600 to-zinc-900 text-gray-300 py-y px-2'>
            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-purple-500'>
                <p className='py-4 text-gray-500 cursor-no-drop'> @2022 UNDA. ALL rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <a href='https://www.linkedin.com/in/thaiza-favarelli-da-silva-082978220/' target='_blank' className='hover:text-amber-500 hover:rotate-45 transition ease-in-out delay-150 duration-700'> <FaLinkedin /> </a>
                    <a href='https://github.com/Itstf' target='_blank' className='hover:text-amber-500 hover:rotate-45 transition ease-in-out delay-150 duration-700'> <FaGithub /> </a>
                    <a href='https://www.instagram.com/tfavarelli' target='_blank' className='hover:text-amber-500 hover:rotate-45 transition ease-in-out delay-150 duration-700'> <FaInstagram /> </a>                
                    <a href='#' class='btntopo'></a>
                </div>
            </div>
        </div>
    )
}
export default Footer