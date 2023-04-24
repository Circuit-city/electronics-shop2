import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    if (cartItemsFromLocalStorage) {
      setCartItems(Object.values(JSON.parse(cartItemsFromLocalStorage)));
    }
  }, []);

  return (
    <div>
      <Navbar/>

      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
