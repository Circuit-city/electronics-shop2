import React, { useState, useEffect } from 'react';

import './Cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    if (cartItemsFromLocalStorage) {
      const items = Object.values(JSON.parse(cartItemsFromLocalStorage));
      setCartItems(items);
      const price = items.reduce((total, item) => total + item.price, 0);
      setTotalPrice(price);
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
    setTotalPrice(0);
    window.location.href = '/checkout'; 
  }

  return (
    <div className="cart-container">
      
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">Price: {item.price}</p>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-container">
          <p className="total-price">Total Price: {totalPrice}</p>
          <button className="btn btn-success checkout-button" onClick={() => checkout()}>Checkout</button>

        </div>
      )}
    </div>
  );
}

export default Cart;