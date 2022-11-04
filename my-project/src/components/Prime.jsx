import React from 'react'

import {CheckIcon, CurrencyDollarIcon} from '@heroicons/react/solid'

import '../styles/prime.css'

const Prime = () => {
    return (
       <div className='w-full text-white my-24' id='Loan'>
            <div className='wallpaper w-full h-[800px] bg-gradient-to-r absolute mix-blend-overlay shadow-xl '></div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Loan</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>Money in your account!</h3>
                    <p className='text-3xl'>In need of that extra help? <br></br> The credit you need, with the right security.</p>
                </div>
                <div className='grid md:grid-cols-3'>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl relative shadow-lg shadow-purple-500/50 hover:scale-105 transition ease-in-out delay-150 duration-700'>
                        <div>
                            <p className='text-3xl font-bold py-4 flex'>72 months<span className='text-xl text-slate-500 flex flex-col justify-end'><CurrencyDollarIcon className='w-8 mr-5 text-green-600'/> to pay</span> </p>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Credit in installments</span>
                        </div>
                        <p className='text-2xl py-8 text-slate-500 text-center underline'>Subject to credit review </p>
                        <div className='text-2xl relative'>
                            <p className='flex py-4 text-xl'>- You can pay the 1st installment within 90 days </p>
                            <p className='flex py-4 text-xl'>- Does not affect credit card limit </p>
                            <p className='flex py-4 text-xl'>- The money immediately drops into your account </p>
                            <p className='flex py-4 text-xl'>- Approved amount according to monthly income </p>
                        </div>
                    </div>                
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl relative shadow-lg shadow-purple-500/50 hover:scale-105 transition ease-in-out delay-150 duration-700'>
                        <div>
                            <p className='text-3xl font-bold py-4 flex '>48 months <span className='text-xl text-slate-500 flex flex-col justify-end'><CurrencyDollarIcon className='w-8 mr-5 text-green-600'/> to pay</span> </p>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Personal loan</span>
                        </div>
                        <p className='text-2xl py-8 text-slate-500 text-center underline'>Subject to credit review</p>
                        <div className='text-2xl'>
                            <p className='flex py-4 text-xl'>- You can pay the 1st installment within 90 days</p>
                            <p className='flex py-4 text-xl'>- Installments paid via automatic debit</p>
                            <p className='flex py-4 text-xl'>- For those looking for loans to elevate or stabilize their situation</p>
                            <p className='flex py-4 text-xl'>- 25% discount at partner establishments</p>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl relative shadow-lg shadow-purple-500/50 hover:scale-105 transition ease-in-out delay-150 duration-700'>
                        <div>
                            <p className='text-3xl font-bold py-4 flex '>62 months <span className='text-xl text-slate-500 flex flex-col justify-end'><CurrencyDollarIcon className='w-8 mr-5 text-green-600'/> to pay</span> </p>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>For Your Business</span>
                        </div>
                        <p className='text-2xl py-8 text-slate-500 text-center underline'>Subject to credit review</p>
                        <div className='text-2xl'>
                            <p className='flex py-4 text-xl'>- Ease of choosing and changing the date of payment of charges</p>
                            <p className='flex py-4 text-xl'>- You can check the number of days you are using</p>
                            <p className='flex py-4 text-xl'>- Information on limits, fees and other contract conditions</p>
                            <p className='flex py-4 text-xl'>- The installments are debited from the current account on the date you choose</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Prime