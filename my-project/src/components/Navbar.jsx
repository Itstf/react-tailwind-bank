// #323232
// #8a76d7 - purple-500
// #f67e09 - amber-500
// https://tailwindcss.com/docs/background-color |-> color
// https://heroicons.com/ 

import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    // const [color, setColor] = useState(false)
    // const changeColor = () => {
    //     if (window.scrollY >= 90) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }
    // window.addEventListener('scroll', changeColor)   

    return (
        <div className='w-screen h-[65px] z-10 fixed bg-slate-100 dark:bg-gray-800 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='cursor-not-allowed text-3xl font-bold mr-10 ml-4 sm:text-4xl text-amber-500'>UNDA.</h1>
                    <ul className='hidden md:flex'>
                        <li className='hover:text-amber-500 no-underline transition duration-300 ease-in-out dark:text-white'> <a href="#"> Home </a> </li>
                        <li className='hover:text-amber-500 no-underline transition duration-300 ease-in-out dark:text-white'> <a href="#About"> About </a> </li>
                        <li className='hover:text-amber-500 no-underline transition duration-300 ease-in-out dark:text-white'> <a href="#App"> App </a> </li>
                        <li className='hover:text-amber-500 no-underline transition duration-300 ease-in-out dark:text-white'> <a href="#Loan"> Loan </a> </li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <Link to='/sign_in' className='mt-2'>
                        <button to='/sign_in' className='border-none bg-transparent text-black mr-4 dark:text-white'> Login </button>
                    </Link>
                    <Link to='/sign_up'>
                        <button className='px-6 py-2 mr-4'> Sign Up </button>
                    </Link>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    { !nav ? <MenuIcon className='w-10 mr-5'/> : <XIcon className='w-5 mr-5' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-slate-100 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full hover:text-amber-500 no-underline transition duration-300 ease-in-out'> <a href="#"> Home </a></li>
                <li className='border-b-2 border-zinc-300 w-full hover:text-amber-500 no-underline transition duration-300 ease-in-out'> <a href="#About"> About </a></li>
                <li className='border-b-2 border-zinc-300 w-full hover:text-amber-500 no-underline transition duration-300 ease-in-out'> <a href="#App"> App </a></li>
                <li className='border-b-2 border-zinc-300 w-full hover:text-amber-500 no-underline transition duration-300 ease-in-out'> <a href="#Loan"> Loan </a></li>
                <div className='flex flex-col my-4'>
                    <Link to='/sign_in' className='flex flex-col my-4'>
                        <button className='bg-transparent text-purple-500 px-8 py-3 mb-4 hover:text-amber-500'>Login</button>
                    </Link>
                    <Link to='/sign_up' className='flex flex-col my-4'>
                        <button className='px-8 py-3'> Sign Up</button>
                    </Link>
                </div>
            </ul>
        </div>
    )
}
export default Navbar