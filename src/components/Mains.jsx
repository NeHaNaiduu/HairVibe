import React from 'react'
import { mainItems } from '../constants/content'
import {Slide, Fade} from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/anim'

const Mains = () => {
  return (
    <div className='flex items-center justify-center my-20'>
      {/* <div className='grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full
      sm:px-10 justify-between items-center gap-5 py-20 bg-gradient-to-b from-pink-200 '>
          {mainItems.map((item)=>(
              <div key={item.label} className=' relative rounded-xl border-2 border-purple-300 cursor-pointer hover:-translate-y-4 duration-200 shadow-3xl mains-container main-cards '>
                    <div className='flex items-center justify-center'>
                      <img src={item.href} alt={item.label} className='w-60 h-80 md:w-80 md:h-96 z-40 main-image'/>
                    </div>
                    <div className='flex items-center justify-center'>
                      <h2 className='text-center flex items-center justify-center gap-10  inline-block text-xl font-semibold mains-head sm:text-sm md:text-xl text-purple-600 bg-white absolute'>{item.label}</h2>
                    </div>
                  <div className='main-description'>
                    <div className='desc-lines mb-2 mt-1 px-1'>
                      {item.desc}
                    </div>
                    <button className='border py-1.5 px-5 rounded border-purple-700 bg-red-200 hover:bg-purple-700 hover:text-white duration-200 text-neutral-700 '>Explore</button>
                  </div>
              </div>
          ))}
      </div> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6'>
        {mainItems.map((item)=>(
          <motion.div 
          variants={fadeIn("up",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}} 
          className='text-white shadow-3xl rounded-lg overflow-hidden relative group cursor-pointer'>
            <img src={item.href} alt="" className='w-full max-w-[300px] h-[400px] rounded-lg'/>
            <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500 duration-500'>
              <div className='space-y-4'>
                <Slide cascade>
                  <h1 className='text-3xl font-bold'>{item.label}</h1>
                  <Fade cascade damping={0.02}>
                    <p>{item.desc}</p>
                  </Fade>
                  <a href='/xtensions'>
                    <button className='border border-neutral-400 px-4 py-2 rounded-lg hover:bg-purple-500 duration-300'>Explore</button>
                  </a>
                </Slide>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Mains