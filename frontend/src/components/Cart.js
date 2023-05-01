import React, { useState, useEffect } from 'react';
import Layout from './Layout'

import './Cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    if (cartItemsFromLocalStorage) {
      const items = Object.values(JSON.parse(cartItemsFromLocalStorage));
      setCartItems(items);
      const price = items.reduce((total, item) => total + item.price, 0);
      setTotalPrice(price);
  
    }
  }, []);

  // function deleteItem(itemId) {
  //   const updatedItems = cartItems.filter((item) => item.id !== itemId);
  //   localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  //   setCartItems(updatedItems);
  //   const price = updatedItems.reduce((total, item) => total + item.price, 0);
  //   setTotalPrice(price);
  // }

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
    <Layout>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          <div className="cart-items">
         {cartItems.length === 0 ? (
  <div className="alert alert-info" role="alert">
    Your cart is empty! Browse our categories and discover our best deals!
  </div>
) : (
  <div className="cart-items">
    {cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p className="price">Price: {item.price}</p>
        <p>In stock</p>
      </div>
    ))}
  </div>
            
          )}
        </div>
        </div>

        <div className="col-md-4">
          {cartItems.length > 0 && (
            <div className="checkout-container bg-light p-3">
              <h2>Checkout Summary</h2>
              <p className="card-text text-right">Subtotal: {totalPrice}</p>
              <button
                className="btn btn-success checkout-button w-100"
                onClick={() => checkout()}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </Layout>
  );
};


export default Cart;
