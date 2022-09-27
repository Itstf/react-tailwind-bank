import React from 'react'

const Loan = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'> abhaushdasj </h2>
                    <p className='text-3xl py-6 text-gray-500'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of Lorem Ipsum</p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-500'> 1,49% </p>
                        <p className='text-gray-400 mt-2'> taxa </p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-500'> X tempo </p>
                        <p className='text-gray-400 mt-2'> emprestimo </p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-500'> 2 </p>
                        <p className='text-gray-400 mt-2'> planos </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loan