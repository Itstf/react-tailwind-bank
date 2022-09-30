import React from 'react'

import{CheckIcon} from '@heroicons/react/outline'

const AllInOne = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Quick access</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>Learn more about solutions and services that make your life easier. </p>
            
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Pix</h3>
                            <p className='text-lg pt-2 pb-4'>Now you can pay, receive and transfer from anywhere to whoever you want, wherever you want.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Payments</h3>
                            <p className='text-lg pt-2 pb-4'>Pay your bills with scheduling option and a practical way to speed up and facilitate your payments.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Support</h3>
                            <p className='text-lg pt-2 pb-4'>Exclusive digital service for your problems for those who have already activated our AI and the solution has not been found!</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>IA</h3>
                            <p className='text-lg pt-2 pb-4'>An exclusive chatBot for those who have an UNDA account! If you have any questions, just call it on whatsap and ask what you want to consult.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Renegotiation of debts</h3>
                            <p className='text-lg pt-2 pb-4'>In case of debts with UNDA, there is always a way to surf the wave and solve your problems! You can renegotiate account or credit card debts.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Investment</h3>
                            <p className='text-lg pt-2 pb-4'>Here your money becomes much more than it already is! Research your investor profile.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Card invoice</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Transactions</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllInOne