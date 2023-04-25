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

  function checkout() {
    const itemsToCheckout = cartItems;
    const checkoutItemsFromLocalStorage = localStorage.getItem('checkoutItems');
    let checkoutItems = [];
    if (checkoutItemsFromLocalStorage) {
      checkoutItems = Object.values(JSON.parse(checkoutItemsFromLocalStorage));
    }
    checkoutItems.push(...itemsToCheckout);
    localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    localStorage.removeItem('cartItems');
    setCartItems([]);
    window.location.href = '/checkout'; 
  }

  return (
    <div>
      <Navbar/>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">Price: {item.price}</p>
          </div>
        ))}
        {cartItems.length > 0 && <button className="btn btn-success" onClick={() => checkout()}>Checkout</button>}
      </div>
    </div>
  );
}

export default Cart;