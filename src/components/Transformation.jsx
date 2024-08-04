import React, { useEffect, useState } from 'react'


const transPhotos=[
    "images/t1.jpg",
    "images/t2.jpg",
    "images/t3.jpg"
]

const Transformation = () => {

    const[curIndex,setCurIndex]=useState(0);
useEffect(()=>{
  const updatePhoto=()=>{
    setCurIndex((prevIndex)=>(prevIndex+1)%transPhotos.length);
  }
  const intervalId=setInterval(updatePhoto,2000);
  return()=>clearInterval(intervalId);  
},[])


  return (
    // <div className='flex items-center justify-center border-b'>
    //   <div className='flex flex-col justify-between items-center w-full md:flex-row bg-gradient-to-b from-white to- bg-pink-300 lg:pr-10 lg:pl-36 md:pl-10 pb-20'>
    //     <div className='w-full'>
    //         <h1 className='text-3xl text-center w-full sm:text-5xl mb-10 bg-gradient-to-b from-orange-500 to-amber-900 bg-clip-text text-transparent py-2 font-bold md:text-5xl lg:text-7xl md:w-3/4 lg:text-left'>Amazing Transformations</h1>
    //     </div>
    //     <div>
    //       <img src={transPhotos[curIndex]} alt="" className='w-full duration-200 '/>
    //     </div>
    //   </div>
    // </div>

    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto pt-20 bg-gradient-to-b from-purple-400 to-white'>
      <div className='bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
          <div>
            <img src={transPhotos[curIndex]} alt="" className='lg:h-[386px] duration-200 w-full'/>
          </div>
          <div className='md:w-3/5'>
            <h2 className='md:text-7xl text-4xl font-bold text-white leading-relaxed'>Amazing Transformations</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transformation