import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Cart.css'

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
      
  <div className="cart-items">
    {cartItems.map(item => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        {/* <p>{item.description}</p> */}
        <p className="price">Price: {item.price}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default Cart;

export default Cart;