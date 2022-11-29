import React, {useState, useEffect} from 'react'
import Sign_in from './Sign_in'

const User = () => { 

    //// objetivo: Puxar variavel para o campo da web
    const [items, setItems] = useState([])
    const [ld, setLd] = useState([])

    useEffect (() => {
        fetch('http://127.0.0.1:8000/conta/')
        .then(res => res.json())
        .then ((result) => {
            setLd(true);
            setItems(result);
        })
    })

  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg mx-auto py-24 px-14 lg:max-w-7xl'>
        <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Customer information</h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details</p>
        </div>
        <div className='border-t border-gray-200'>
            <dl>
                <div className='bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Full name</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>user_name</dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Email address</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>unda@example.com</dd>
                </div>
                <div className='bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Account</dt>
                    {items.map(item => (
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0' key={item.id}>{item.agencia}</dd>
                    ))}
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Card</dt>
                    {items.map(item => (
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0' key={item.id}>{item.tipo}</dd>
                    ))}
                </div>
                <div className='bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Value</dt>
                    {items.map(item => (
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0' key={item.id}>{item.saldo}</dd>
                    ))}
                </div>
            </dl>
        </div>
    </div>
  )
}
export default User