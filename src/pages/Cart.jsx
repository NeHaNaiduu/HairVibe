import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';
// import { useCart } from '../CartContext'

const Cart = () => {

    // const { cart } = useCart();

    // const elements=useSelector((state)=>state.reducer.itemList)
    const {itemList,totalPrice} = useSelector((state) => state.reducer);

    if (itemList.length > 0) {
      return (
        <div className='mt-24'>
          <h1 className='text-center text-2xl font-bold underline'>Your Cart</h1>
          <div className='md:flex md:items-start items-center justify-evenly'>
          <div className='md:flex md:mr-6 md:overflow-y-auto md:max-h-[calc(100vh-150px)] md:my-10 md:px-10'>
            <ul className='flex flex-col gap-4 my-10'>
              {itemList.map((item) => (
                <li key={item.id} className='w-full'>
                  <CartItem
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.id}
                    image={item.image}
                  />
                </li>
              ))}
            </ul>
          </div>
            <CartSummary totalAmount={totalPrice} />
          </div>
        </div>
      );
    } else {
      return <h1 className='mt-24 text-center font-bold mb-10'>Cart is empty</h1>;
    }
}

export default Cart