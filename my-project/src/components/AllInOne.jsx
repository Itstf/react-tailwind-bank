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
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Payments</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Support</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>IA</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Renegotiation of debts</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Tickets</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, architecto.</p>
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