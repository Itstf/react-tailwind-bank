import React from 'react'
import lg from '../assets/logotipo.png'
import {Link} from 'react-router-dom' 
import '../styles/login.css'

// https://www.youtube.com/watch?v=cFgoSrOui2M / 21:20min - firebase

const Sign_in = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, } = props;

    return (
        <section className='fundo1'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <Link to='/'> 
                    <a href='#' className='font-bold flex items-center mb-6 text-2xl text-white dark:text-white hover:scale-125 transition duration-300 ease-in-out'>
                        <img src={lg} alt='logo' className='w-12 h-8 mr-2'/>
                        UNDA
                    </a>
                </Link>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Login to yout account
                        </h1>
                        <form className='space-y-4 md:space-y-6' action='#'>
                            
                            <div>
                                <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
                                <input type='email' name='email' autoFocus required value={email} onChange={(e) => setEmail(e.target.Value)} id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@unda.com'/>
                                <p>{emailError}</p>
                            </div>

                            <div>
                                <label for='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                                <input type='password' name='password' required value={password} onChange={(e) => setPassword(e.target.Value)} id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                                <p>{passwordError}</p>
                            </div>

                            <div class='flex items-start'>
                                <div class='flex items-center h-5'>
                                    <input id='terms' aria-describedby='terms' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' required=''/>
                                </div>
                                <div class='ml-3 text-sm'>
                                    <label for='terms' className='font-light text-gray-500 dark:text-gray-300'>Remember-me</label>
                                </div>
                            </div>

                            <button type='submit' className='w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-black '>Login</button>
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                    <Link to='/sign_up' className='font-medium text-primary-600 hover:underline dark:text-primary-500'> Sign Up </Link>
                            </p> 
                                                 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sign_in


