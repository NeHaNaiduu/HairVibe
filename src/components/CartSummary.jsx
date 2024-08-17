import React from 'react';

const CartSummary = ({ totalAmount }) => {
  return (
    <div className='bg-blue-300 p-6 rounded mx-2 mb-5 shadow-md mt-6 md:w-1/3 md:mt-20'>
      <h2 className='text-xl font-bold mb-4'>Cart Summary :</h2>
      <div className='flex justify-between mb-4'>
        <span className='text-lg font-medium'>Delivery Charges :</span>
        <span className='text-lg font-bold'>Free</span>
      </div>
      <div className='flex justify-between mb-4'>
        <span className='text-lg font-medium'>Total :</span>
        <span className='text-lg font-bold'>${totalAmount}</span>
      </div>
      <div className='flex justify-between mb-4'>
        <span className='text-lg font-medium'>Payment Options :</span>
        <div className='flex justify-between w-1/4'>
            <div className='flex items-center font-bold'>
                <input type="radio" name='pay'/>
                <label htmlFor="pay">Cash</label>
            </div>
            <div className='flex items-center font-bold'>
                <input type="radio" name='pay'/>
                <label htmlFor="pay">Upi</label>
            </div>
        </div>
      </div>
      <button 
        className='w-full bg-black text-white py-2 rounded hover:bg-blue-600'
        onClick={() => alert('Proceeding to checkout')}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
