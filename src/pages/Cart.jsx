import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
// import { useCart } from '../CartContext'

const Cart = () => {

    // const { cart } = useCart();

    const elements=useSelector((state)=>state.reducer.itemList)

    if (elements.length > 0) {
      return (
        <div className='mt-24'>
          <h1 className='text-center text-2xl font-bold underline'>Your Cart</h1>
          <ul className='flex flex-col gap-4 my-10 mx-2'>
            {elements.map((item) => (
              <li key={item.id} className='w-full sm:w-1/2 md:w-1/3'>
                <CartItem
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  id={item.id}
                  image={item.image}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <h1 className='mt-24 text-center font-bold mb-10'>Cart is empty</h1>;
    }
}

export default Cart