import React from 'react'
import { DemoVideos } from '../constants/content'

const Demos = () => {
  return (
    <div className='flex items-center justify-center mt-20 mb-48'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 sm:px-0'>
            {DemoVideos.map((item)=>(
                <div className='md:w-80 w-full md:h-96 mb-5'>
                    <video className='w-full h-full' loop muted autoPlay>
                        <source src={item.loc} type='video/mp4'/>
                    </video>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Demos