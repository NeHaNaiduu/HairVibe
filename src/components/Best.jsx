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


  return (
    <div  id='best' className='my-20'>
        <div className="slider-container">
            <h1 className='text-center mb-20 sm:mb-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Newest <span className='bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent italic'>Trending</span></h1>
            <Slider {...settings}>
                {bestItems.map((item) => (
                <div key={item.id} className='flex items-center justify-center outline-none'>
                    <a href="/xtensions">
                      <img src={item.href} alt={item.label} className='w-56 h-80'/>
                    </a>
                </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Best