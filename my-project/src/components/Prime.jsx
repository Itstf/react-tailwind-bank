import React from 'react'

import {CheckIcon} from '@heroicons/react/solid'

const Prime = () => {
    return (
       <div className='w-full text-white my-24' id='Loan'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Loan</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>Money in your account!</h3>
                    <p className='text-3xl'>In need of that extra help? <br></br> The credit you need, with the right security.</p>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Credit in installments</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>72 months<span className='text-xl text-slate-500 flex flex-col justify-end'> to pay</span> </p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500 text'>Subject to credit review</p>
                        <div className='text-2xl relative'>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> You can pay the 1st installment within 90 days</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Does not affect credit card limit </p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> The money immediately drops into your account </p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Valor aprovado conforme renda mensal </p>
                            {/* <button className='w-full py-4 my-4'>paypay</button> */}
                        </div>
                    </div>                
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Personal loan</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>48 months <span className='text-xl text-slate-500 flex flex-col justify-end'>to pay</span> </p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500 text-center'>Subject to credit review</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> You can pay the 1st installment within 90 days </p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Installments paid via automatic debit </p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> For those looking for loans to elevate or stabilize their situation </p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> 25% discount at partner establishments </p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Prime