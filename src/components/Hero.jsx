import React from 'react'

const Hero = () => {
  return (
    <section className='relative flex h-screen items-center justify-center'>
        <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
            <video className='h-full w-full object-cover' loop autoPlay muted playsInline>
                <source src='hero.mp4' type='video/mp4'/>
            </video>
        </div>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black'></div>
        <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
            <img src="logo.png" alt="hairvibe-logo" className='w-full p-4'/>
        </div>
    </section>
  )
}

export default Hero