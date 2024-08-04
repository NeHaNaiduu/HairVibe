import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gradient-to-b from-indigo-300 to-purple-400 py-20 flex justify-end'>
      <div className='bg-purple-300 flex justify-between items-center w-3/4 rounded-tl-[100px]'>
            <h1 className='text-3xl sm:text-5xl md:text-4xl
           font-bold text-orange-700 ml-20'>
              Unleash Your Best Hair: <br/>Effortless Length and Volume Awaits!
            </h1>
            <img src="banner-bg.png" alt="" className='w-1/2'/>
      </div>
    </div>
  )
}

export default Banner