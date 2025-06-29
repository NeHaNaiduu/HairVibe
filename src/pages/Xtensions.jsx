import React, {useEffect} from 'react'
import { hairExtensions } from '../constants/content'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartSlice";
import { motion } from 'framer-motion';

const Xtensions = () => {

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer.itemList);

  const handleAddtoCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price
    }));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart({
      id: item.id,
      price: item.price,
      image: item.image,
      quantity: item.quantity
    }));
  };

  const getItemQuantity = (id) => {
    const item = cartItems.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className='flex items-center justify-center px-4 mt-20'>
      <div id="xtensions" className='my-20 grid grid-cols md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 sm:[2rem] gap-10 items-center justify-between place-items-center mx-2'>
        {hairExtensions.map((item) => {
          const quantity = getItemQuantity(item.id);

          return (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              className='mx-auto w-full sm:w-60 shadow-3xl rounded flex flex-col hover:scale-105 duration-200 cursor-pointer bg-white'>
              
              <img src={item.image} alt={item.name} className='p-2 h-72 md:h-72 rounded' />
              
              <div className='flex justify-between px-2 my-1.5 items-center'>
                <h2 className='font-semibold'>{item.name}</h2>
                <p>{item.price}</p>
              </div>

              {quantity > 0 ? (
                <div className='flex justify-around items-center py-2'>
                  <button className='px-3 py-1 font-bold bg-red-300 rounded' onClick={() => handleRemoveFromCart(item)}>-</button>
                  <span className='font-semibold'>{quantity}</span>
                  <button className='px-3 py-1 font-bold bg-green-300 rounded' onClick={() => handleAddtoCart(item)}>+</button>
                </div>
              ) : (
                <button className='cursor-pointer p-3 font-bold rounded bg-blue-300 hover:text-purple-800' onClick={() => handleAddtoCart(item)}>
                  Add to Cart
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Xtensions;
