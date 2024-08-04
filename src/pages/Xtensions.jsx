import React from 'react'
import {hairExtensions} from '../constants/content'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { motion } from 'framer-motion';

// import { useCart } from '../CartContext'

const Xtensions = ({name,id,price}) => {

    // const {addToCart}=useCart();

    // const handleAddtoCart=(item)=>{
    //     addToCart(item);
    // }

        const dispatch = useDispatch();
        const handleAddtoCart = (item) => {
          dispatch(addToCart({
             id:item.id, 
             name:item.name, 
             image:item.image, 
             totalPrice: Number(item.price) }));
        };

  return (
    <div className='bg-neutral-700 flex items-center justify-center px-4 mt-20'>
        <div id="xtensions" className='my-20 grid grid-cols md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 sm:gap-20 gap-10 items-center justify-between place-items-center'>
            {hairExtensions.map((item)=>(
                <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0, y:50}}
                whileHover={{ scale: 1.1 }}
                transition={{duration:0}} 
                key={item.id} 
                className='mx-auto w-full sm:w-60 shadow-3xl rounded flex flex-col hover:scale-150 duration-200 cursor-pointer bg-slate-400'>
                    <img src={item.image} alt={item.name}  className='p-2 h-72 md:h-72 rounded'/>
                    <div className='flex justify-between px-2 my-1.5 items-center'>
                        <h2 className='font-semibold'>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                    <button className='cursor-pointer bg-gradient-to-r from-purple-400 to-pink-300 p-3 font-bold rounded hover:bg-gradient-to-l text-white hover:text-purple-800' onClick={()=>handleAddtoCart(item)}>Add to Cart</button>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Xtensions;