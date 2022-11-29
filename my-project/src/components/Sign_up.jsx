import React , {useState} from 'react'
import lg from '../assets/logotipo.png'
import {Link, useNavigate} from 'react-router-dom' 
import '../styles/login.css'

const Sign_up = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function signUp()
    {
        // aparecer no console
        let item={'nomeUsuario': name, 'emailUsuario': email, 'senha': password, 'bloqueio_acesso':true}
        console.warn(item)

        let endereco = 'http://127.0.0.1:8000/usuarios/'
        let result = await fetch(endereco,{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
        navigate('/sign_in')
    }

    return (
        <section className='fundo2 bg-gray-50 dark:bg-gray-900'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <Link to='/'> 
                    <a href='#' className='flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white hover:scale-125 transition duration-300 ease-in-out'>
                        <img src={lg} alt='logo' className='w-12 h-8 mr-2'/>
                        UNDA
                    </a>
                </Link>
                    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                                Create and account
                            </h1>
                            <form className='space-y-4 md:space-y-6' action='#'>
                                <div>
                                    <label for='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                                    <input type='name' value={name} onChange={(e)=>setName(e.target.value)} name='name' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name' required=''/>
                                </div>
                                <div>
                                    <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
                                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@unda.com' required=''/>
                                </div>
                                <div>
                                    <label for='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required=''/>
                                </div>                                
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input id='terms' aria-describedby='terms' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' required=''/>
                                    </div>
                                    <div className='ml-3 text-sm'>
                                        <label for='terms' className='font-light text-gray-500 dark:text-gray-300'>I accept the <a className='font-medium text-primary-600 hover:underline dark:text-primary-500' href='#'>Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type='button' onClick={signUp} className='w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-black '>Create an account</button>
                                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                    Already have an account? <Link to='/sign_in' className='font-medium text-primary-600 hover:underline dark:text-primary-500'> Login here </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                 </div>
            </section>
    )
}
export default Sign_up


