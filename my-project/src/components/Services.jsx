import photo1 from '../assets/1.jpg'
import photo2 from '../assets/2.jpg'
import photo3 from '../assets/4.jpg'
import photo4 from '../assets/8.jpg'

const features = [
    // 'titulo' e escrita
    { name: 'Pix', description: 'Easy, fast, immediate.' },
    { name: 'Recharge', description: 'No card needed, just use your cell phone to recharge!' },
    { name: 'Tickets', description: 'Copy and billing slip update.' },
    { name: 'Loan', description: 'Easy online loan.' },
    { name: 'Cards', description: 'Apply through the app in just a few steps.' },
    { name: 'Help', description: 'Ask your questions and ask for our help.' },
  ]
  
const Services = () => {
    return (
        <div className='bg-white' id='services'>
            <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
                <div>
                    <p className='relative group'>
                        <span className='text-3xl font-bold tracking-tight text-amber-500 sm:text-4xl cursor-default hover:text-amber-500 duration-500 delay-150 ease-in-ou'>UNDA</span>
                        <span className='absolute -bottom-1 left-0 w-0 h-2 bg-purple-500 transition-all group-hover:w-full duration-500 ease-in-ou'></span>
                    </p>
                    
                    <p className='mt-4 text-gray-500'>
                        Online in the app
                    </p>
        
                    <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
                        {features.map((feature) => (
                            <div key={feature.name} className='border-t border-gray-200 pt-4'>
                                <dt className='font-medium text-gray-900'>{feature.name}</dt>
                                <dd className='mt-2 text-sm text-gray-500'>{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
                    <img
                        src={photo1}
                        alt=''
                        className='rounded-lg bg-gray-100 hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-amber-500/50 hover:shadow-purple-500/50'
                    />
                    <img
                        src={photo2}
                        alt=''
                        className='rounded-lg bg-gray-100 hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-amber-500/50 hover:shadow-purple-500/50'
                    />
                    <img
                        src={photo3}
                        alt=''
                        className='rounded-lg bg-gray-100 hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-amber-500/50 hover:shadow-purple-500/50'
                    />
                    <img
                        src={photo4}
                        alt=''
                        className='rounded-lg bg-gray-100 hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-amber-500/50 hover:shadow-purple-500/50'
                    />
                </div>
            </div>
        </div>
    )
}
export default Services