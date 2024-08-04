import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-neutral-200 flex flex-col gap-10 px-10 pb-5 pt-20'>
        <div className='flex flex-col gap-8 md:flex-row justify-between'>
            <div>
                <ul className='text-lg leading-10'>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>About Us</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Shipping & Delivery</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Returns Centre</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Exchange Policy</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Updating and Cancellation Policy</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Gift Card</li>
                </ul>
            </div>
            <div>
                <ul className='text-lg leading-10'>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Join our team</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Blog</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Contact Us</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Terms of Service</li>
                    <li className='cursor-pointer hover:text-neutral-400 duration-100'>Privacy Policy</li>
                </ul>
            </div>
            <div className='text-lg flex flex-col items-center md:w-1/3'>
                <h2>JOIN OUR VIBE</h2>
                <input type="text" className='border-b my-6 w-full outline-none ' placeholder='example@email.com'/>
                <p className='mb-4'>Be the first to know about our upcoming sales and product launches by subscribing to our newsletter!</p>
                <div className='flex w-1/2 justify-between'>
                    <FaFacebookF className='cursor-pointer hover:scale-150 duration-200 hover:text-blue-600'/>
                    <FaInstagram className='cursor-pointer hover:scale-150 duration-200 hover:text-pink-800'/>
                    <FaPinterestP className='cursor-pointer hover:scale-150 duration-200 hover:text-red-800'/>
                    <FaXTwitter className='cursor-pointer hover:scale-150 duration-200 hover:text-neutral-500'/>
                    <FaYoutube className='cursor-pointer hover:scale-150 duration-200 hover:text-red-600'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='text-center'>
                Copyright@NehaNaidu | 2024. All rights reserved.
            </div>
            <div className='flex justify-between md:w-1/3'>
                <div className='hover:border-b cursor-pointer'>Powered by Shopify</div>
                <div className='hover:border-b cursor-pointer'>Refund Policy</div>
                <div className='hover:border-b cursor-pointer'>Terms of Service</div>
            </div>
        </div>
    </div>
  )
}

export default Footer