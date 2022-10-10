import React, {useState} from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                
                <div>
                    <h6 className='font-bold uppercase pt-2'>
                        escrever um titulo sla
                    </h6>
                    <ul>
                        <li> Aaa </li>
                        <li> xagsdsa </li>
                        <li> AaA </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>
                        escrever um titulo sla
                    </h6>
                    <ul>
                        <li> Aaa </li>
                        <li> xagsdsa </li>
                        <li> AaA </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>
                        escrever um titulo
                    </h6>
                    <ul>
                        <li> Aaa </li>
                        <li> Aaa </li>
                        <li> Aaa </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>
                        escrever um titul
                    </h6>
                    <ul>
                        <li> Aaa </li>
                        <li> Aaa </li>
                        <li> Aaa </li>
                    </ul>
                </div>

                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'> aiaiai teste </p>
                    <p className='py-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eligendi! </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" placeholder='Enter email' className='w-full p-2 mr-4 rounded-md mb-4'/>
                        <button className='p-2 mb-4'> send </button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'> 2022 UNDA. ALL rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitch />
                    <FaTwitter />
                    <FaGithub />
                </div>
            </div>

        </div>
    )
}
export default Footer