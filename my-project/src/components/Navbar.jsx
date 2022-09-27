// #323232
// #8a76d7 - purple-500
// #f67e09 - amber-500
// https://tailwindcss.com/docs/background-color |-> color
// https://heroicons.com/ 
// https://tailwindcss.com/docs/margin

// https://www.youtube.com/watch?v=TVQnhcVFTVs |-> 1:09;20

import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-10 ml-4 sm:text-4xl text-amber-500'>UNDA.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>abccc</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'> Sign In </button>
                    <button className='px-8 py-3'> Sign Up </button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    { !nav ? <MenuIcon className='w-10 mr-5'/> : <XIcon className='w-5 mr-5' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>abccc</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-purple-500 px-8 py-3 mb-4 hover:text-amber-500'> Sign In</button>
                    <button className='px-8 py-3'> Sign Up</button>
                </div>
            </ul>

        </div>
    )
}
export default Navbar