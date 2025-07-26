import React from 'react'
import { mainItems } from '../constants/content'
import {Slide, Fade} from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/anim'

const Mains = () => {
  return (
    <div className='flex items-center justify-center my-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6'>
        {mainItems.map((item)=>(
          <motion.div 
          key={item.id}
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