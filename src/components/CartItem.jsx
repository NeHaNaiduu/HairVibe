import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart,removeFromCart } from '../store/CartSlice'

const CartItem = ({name,image,price,quantity,id}) => {
    console.log("CartItem props:", { name, image, price, quantity, id });

    const dispatch=useDispatch();
    const increment=()=>{
        dispatch(addToCart({id,name,price,image}))
    }
    const decrement=()=>{
        dispatch(removeFromCart({id,quantity,price}))
    }

  return (  
    <div className='container'>
        <div className='border flex justify-between py-5 px-10 items-center w-full'>
            <img src={image} alt="" className='w-32'/>
            <div className='flex flex-col items-start w-1/3'>
                <h3 className='font-semibold mb-2'>{name}</h3>
                <h3 className='font-semibold mb-3'>{price}</h3>
                <div className='w-full border flex justify-between items-center'>
                    <button onClick={increment} className='flex items-center justify-center border-r w-7 hover:bg-black hover:text-white duration-150'>+</button>
                    <h3 className="text-center">{quantity}</h3>
                    <button onClick={decrement} className='flex items-center justify-center border-l w-7 hover:bg-black hover:text-white duration-150'>-</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem