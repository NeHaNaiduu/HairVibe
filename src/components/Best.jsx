import React from 'react'
import { motion } from 'framer-motion';
import { bestItems } from '../constants/content'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {Swiper, SwiperSlide} from 'swiper/react'

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// import {EffectCoverflow, Pagination, Navigation} from 'swiper';

const Best = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    //const doubledBestItems = [...bestItems, ...bestItems];

  return (
    // <div id='best' className='flex flex-col items-center justify-center w-full bg-gradient-to-b from-pink-300 via-cyan-200 to-white'>
    //     <div className='flex flex-col justify-between items-center mt-20'>
    //     <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-20 text-purple-950'>Newest <span className='italic bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent rounded-2xl border-2 p-3'>Trending</span></h1>
    //     <div className='bg-red-200 w-full h-1/2 overflow-hidden flex flex-col items-center py-5'>
    //         <div className='flex flex-col md:flex-row marquee'>
    //             {doubledBestItems.map((item)=>(
    //                 <div className='flex items-center justify-center cursor-pointer overflow-hidden mb-5'>
    //                     <img src={item.href} alt="" className='transition-transform duration-500 ease-in-out h-4/5'/>
    //                 </div>
    //             ))}
    //         </div>
    //         <button className='py-3 px-10 bg-lime-300 font-semibold'>Explore</button>
    //     </div>
    // </div>
    // </div>

    // <div className="container">
    //     <h1>Newest Trending</h1>
    //     <Swiper 
    //     effect={'coverflow'}
    //     grabCursor={true}
    //     centeredSlides={true}
    //     loop={true}
    //     slidesPerView={'auto'}
    //     coverflowEffect={{
    //       rotate: 0,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 2.5,
    //     }}
    //     pagination={{ el: '.swiper-pagination', clickable: true }}
    //     navigation={{
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //       clickable: true,
    //     }}
    //     modules={[EffectCoverflow, Pagination, Navigation]}
    //     className="swiper_container">
    //         {bestItems.map((item)=>(
    //             <SwiperSlide>
    //                 <img src={item.href} alt="" />
    //             </SwiperSlide>
    //         ))}
    //         <div className="slider-controler">
    //       <div className="swiper-button-prev slider-arrow">
    //         <ion-icon name="arrow-back-outline"></ion-icon>
    //       </div>
    //       <div className="swiper-button-next slider-arrow">
    //         <ion-icon name="arrow-forward-outline"></ion-icon>
    //       </div>
    //       <div className="swiper-pagination"></div>
    //     </div>
    //     </Swiper>
    // </div>

    // <div className='slider'>
    //     <div className='prev'></div>
    //     <div className='next'></div>
    //     <ul>
    //         {bestItems.map((item)=>(
    //             <li>
    //                 <img src={item.href} alt="" />
    //             </li>
    //         ))}
    //     </ul>
    // </div>
    <div  id='best' className='my-20'>
        <div className="slider-container">
            <h1 className='text-center mb-20 sm:mb-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Newest <span className='bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent italic'>Trending</span></h1>
            <Slider {...settings}>
                {bestItems.map((item, index) => (
                <div key={index} className='flex items-center justify-center'>
                    <img src={item.href} alt={item.label} className='w-56 h-80'/>
                </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Best