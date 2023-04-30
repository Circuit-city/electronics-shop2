import React, { useState, useEffect } from 'react';

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
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 pr-5">
          {cartItems.length === 0 && (
            <div className="alert alert-info" role="alert">
              Your cart is empty! Browse our categories and discover our best deals!
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="card mb-4">
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        {/* <p>{item.description}</p> */}
                        <p className="card-text">Price: {item.price}</p>
                        <p className="card-text">In stock</p>
                        {/* <span
                            className="delete-text"
                            onClick={() => deleteItem(item.id)}
                          >
                            Delete
                          </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
  );
};


export default Cart;
