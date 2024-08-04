import React from 'react'
import {motion} from 'framer-motion'

const Care = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <div className='bg-gradient-to-t from-neutral-900 to-neutral-400 rounded-xl md:p-9 px-4 py-9 mb-32'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                <div>
                    <img src="images/love.png" alt="" className='lg:h-[386px] md:w-[700px]'/>
                </div>
                <div>
                    <h2 className='md:text-7xl text-4xl text-white font-bold mb-6 leading-relaxed '>Love your Hair</h2>
                    <p className='text-neutral-400 text-2xl mb-8'>Loving yourself promotes self-care, leading to healthier habits such as regular hair maintenance and a balanced diet that supports hair growth. Embracing self-love also reduces stress, which can prevent hair loss and promote overall hair health.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-32'>
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:0.5}}
            className='md:w-1/2'>
                <img src="images/pro.jpg" alt="" className='w-3/4'/>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-indigo-800 mb-5 leading-normal'>Use a <span className='text-purple-700'>Sulfate-Free</span> Shampoo</h2>
                <p className='text-neutral-600
                text-lg mb-7'> Sulfates are harsh detergents found in many shampoos that can strip your hair of its natural oils, leading to dryness and damage. Using a sulfate-free shampoo helps to maintain the natural moisture balance of your hair, keeping it hydrated and reducing the risk of brittleness and split ends.</p>
            </motion.div>
        </div>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='md:w-1/2'>
                <img src="images/trim.jpg" alt="" />
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-indigo-800 mb-5 leading-normal'>Regular  <span className='text-purple-700'>Trimming</span></h2>
                <p className='text-neutral-600
                text-lg mb-7'> Regular trimming is essential for maintaining healthy hair. It helps to remove split ends and prevent further breakage, which can lead to healthier, stronger hair over time. Aim to trim your hair every 6-8 weeks to keep it looking fresh and to encourage growth.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Care