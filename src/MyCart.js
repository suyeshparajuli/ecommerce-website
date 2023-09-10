/* eslint-disable no-unreachable */
// CartPage.js
import React, { useState } from 'react';
import { useStateContext } from './ContextProvider';
import './Cart.css';


const CartPage = () => {
  const { cartItems } = useStateContext();
  const items = Array.isArray(cartItems) ? cartItems : [];
  const [filterCart, setFilterCart] = useState(items);

  const handleQuantityChange = (event, item) => {
    const updatedCart = filterCart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(event.target.value) || 1, 
        };
      }
      return cartItem;
    });

    setFilterCart(updatedCart);
  };

  const removeCart = (item) => {
    const updatedCart = filterCart.filter((el) => el.id !== item.id);
    setFilterCart(updatedCart);
  };
 
  return (
  <div>
    <div>
      <h2>Cart Page</h2>
      <div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='itemList'>
            {filterCart &&
              filterCart.map((item, index) => (
                <div className='lists' key={index}>
                  <p className='text'>{item.title}</p>
                  <img className='images' src={item.image} alt='' />
                  <input
                    type='number'
                    id={`quantity-${item.id}`} 
                    placeholder='1'
                    name='quantity'
                    min='1'
                    max='500'
                    value={item.quantity}
                    onChange={(event) => handleQuantityChange(event, item)}
                  />
                  <button className='button-delete' onClick={() => removeCart(item)}>
                    <i className='fa fa-trash' aria-hidden='true'></i>
                  </button>
                  <p>{item.price}</p>
                  <p>{item.price * item.quantity}</p>
                  
                </div>
                
              ))}
          </div>
          
        )}
      </div>
      
    </div>
    
    <p>Total :{filterCart.map(item => item.price * item.quantity).reduce((total, value)=> total + value, 0)}</p>
  </div>
  );
  
};

export default CartPage;
