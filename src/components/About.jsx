import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    // <div className='flex items-center justify-center my-40 lg:pr-20'>
    //     <div className='flex flex-col lg:flex-row lg:justify-evenly px-2 justify-between'>
    //         <div className='flex flex-col lg:items-start items-center lg:w-1/3 w-full'>
    //             <h1 className='text-3xl sm:text-5xl md:text-7xl mb-10 bg-gradient-to-b from-orange-500 to-red-300 bg-clip-text text-transparent'>Who are We?</h1>
    //             <p className='font-serif text-neutral-500 text-center lg:text-left'>
    //                 Welcome to Hair Vibe, where our passion for beauty and excellence drives us to provide the finest hair extensions in the industry. Founded on a commitment to quality and customer satisfaction, we specialize in offering premium, 100% human hair extensions that blend seamlessly with your natural hair. Our mission is to empower individuals to express their unique style and enhance their confidence with luxurious, versatile hair solutions. At HairVibe, we pride ourselves on our meticulous attention to detail, from sourcing the highest-grade hair to ensuring every product meets our rigorous standards.
    //             </p>
    //             <button className='border py-3 px-10 hover:bg-slate-400 mt-10'>Learn More</button>
    //         </div>
    //         <div>
    //             <div className='lg:relative mt-20 sm:mt-32 md:mt-38 flex justify-between md:px-20'>
    //                 <img src="images/s1.jpg" alt="" className='lg:absolute rounded lg:w-60 w-40 lg:-bottom-10 lg:-right-40 md:w-56'/>
    //                 <img src="images/s2.jpg" alt="" className='rounded lg:w-40 w-40 lg:absolute lg:-top-28 lg:left-60 md:w-56'/>
    //                 <img src="images/s3.jpg" alt="" className='rounded lg:w-72 w-40 md:w-56'/>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <section className='container mx-auto pb-8 bg-gradient-to-b from-white via-pink-300 to-purple-400' id='about'>
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
            Who are We?
        </h2>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}} 
            className='w-full p-4 lg:w-1/2'>
                <img src="images/s2.jpg" alt="" className='rounded-xl lg:rotate-3 w-3/4'/>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}} 
            className='w-full px-2 lg:w-1/2'>
                <h2 className='text-4xl tracking-tighter lg:text-6xl'>Welcome to Hair Vibe</h2>
                <div className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3'></div>
                <p className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>where our passion for beauty and excellence drives us to provide the finest hair extensions in the industry. Founded on a commitment to quality and customer satisfaction, we specialize in offering premium, 100% human hair extensions that blend seamlessly with your natural hair. Our mission is to empower individuals to express their unique style and enhance their confidence with luxurious, versatile hair solutions. At HairVibe, we pride ourselves on our meticulous attention to detail, from sourcing the highest-grade hair to ensuring every product meets our rigorous standards.</p>
            </motion.div>
        </div>
    </section>
  )
}

export default About