import React from 'react'

const Hero = () => {
  return (
    // <div className='flex flex-col items-center bg-gradient-to-b from-purple-800 to-pink-200'>
    //     <div className='flex justify-center w-full h-1/2'>
    //         <video autoPlay loop muted className='md:rounded-lg border border-neutral-700 shadow-orange-400 mx-2 mb-4 h-1/2'>
    //             <source src='hero.mp4' type='video/mp4' />
    //             Your browser does not support the video tag.
    //         </video>
    //     </div>
    //     <div className='px-5'>
    //         <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-20'>
    //         Instant glam with 
    //             <span className='bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text italic'>
    //                 {" "}
    //                 effortless extensions
    //             </span>
    //         </h1>
    //         <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
    //             Elevate your look with Hair Vibe—where effortless style meets everyday glam. Discover your perfect strands and embrace the vibe of fabulous hair!
    //         </p>
    //         <div className="flex justify-center my-10">
    //             <a href="#" className='bg-gradient-to-r from-blue-500 to-green-500 py-3 px-4 mx-3 rounded-md'>
    //                 Shop Now
    //             </a>
    //             <a href="#" className='py-3 px-4 rounded-md border hover:bg-white hover:text-black duration-200 font-semibold'>
    //                 Best Deals
    //             </a>
    //         </div>
    //     </div>
    // </div>

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