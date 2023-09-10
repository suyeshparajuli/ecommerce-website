// ProductPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from './ContextProvider';
import './Products.css';

const ProductPage = () => {
  const {cartItems, setCartItems} = useStateContext();
  const {items, setItems} = useStateContext()
      
  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);
  

  const addToCart = (id) => {
    const itemToAdd = items.find(item => item.id === id);
    setCartItems(prevCartItems => [...prevCartItems, itemToAdd]);
  };

  return (
    <div>
      <h2>Product Page</h2>
      <div className='itemList'>
        {items.map(item => (
          <div className='lists' key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <img className='images' src={item.image} alt="" />
            <button onClick={() => addToCart(item.id)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default ProductPage;
