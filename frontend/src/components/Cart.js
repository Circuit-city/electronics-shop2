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

  function increaseQuantity (){
    alert("adding item" )
  }

  function decreaseQuantity(){
    console.log("removing item" )
  }

  function checkout(){
    const itemsToCheckout = cartItems;
    localStorage.setItem('checkoutItems', JSON.stringify(itemsToCheckout));
    localStorage.removeItem('cartItems');
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
        {/* <p>{item.description}</p> */}
        <p className="price">Price: {item.price}</p>
        <button className="btn btn-primary"  onClick={() => increaseQuantity(item.id)}>+</button>
        <button className="btn btn-danger"  onClick={() => decreaseQuantity(item.id)}>-</button>
      </div>
    ))}
    <button className="btn btn-success"  onClick={() => checkout()}>Checkout</button>
  </div>
</div>
  );
}

export default Cart;