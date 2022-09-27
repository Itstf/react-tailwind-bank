import React from 'react'

const Loan = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'> Money in your account! </h2>
                    <p className='text-3xl py-6 text-gray-500'>
                                                            In need of that extra help? <br></br>
                                                            The credit you need, with the right security. </p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-500'> Both plans </p>
                        <p className='text-gray-400 mt-2'> Pay in 90 days </p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-500'> Automatic money </p>
                        <p className='text-gray-400 mt-2'> Money instantly drops into your account </p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-500'> Two planes </p>
                        <p className='text-gray-400 mt-2'> Personal loan and automatic credit </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loan