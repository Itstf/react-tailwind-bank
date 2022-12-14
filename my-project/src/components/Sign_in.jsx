import React, { useState, useEffect } from 'react'
import lg from '../assets/logotipo.png'
import {Link, useNavigate} from 'react-router-dom' 
import '../styles/login.css'
// importar config firebase.jsx 

const Sign_in = () => {
    const [emailUsuario, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const navigate = useNavigate();

    async function login()
    {
        let item={emailUsuario, senha}
        console.warn(item)

        if (!emailUsuario || !senha){
            console.log('Preencha todos os campos')
        } else {
            let enderecohttp = 'http://127.0.0.1:8000/login/'
            let result = await fetch(enderecohttp,{
                method: 'POST',
                body:JSON.stringify(item),
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            }).then(res => res.json())
            .then(dados => {
                console.log(dados)
                if (dados['auth'] == false) {
                    alert('Campo incorreto')
                }
                else {
                    navigate('/user')
                }
            }) 
            result = await result.json()
            localStorage.setItem('user-info',JSON.stringify(result))
            navigate('/user')
        }
    }

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
                                <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                                <input type='email' value={emailUsuario} onChange={(e)=>setEmail(e.target.value)} name='email' autoFocus required className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@unda.com'/>
                            </div>

                            <div>
                                <label for='password' className=' block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                                <input type='password' value={senha} onChange={(e)=>setSenha(e.target.value)} name='password' required placeholder='????????????????????????' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                            </div>
                            
                            <button type='button' onClick={login} className='w-full mt-9 dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-black'> Login </button> 

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


