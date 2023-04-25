import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity,setItemQuantity]= useState(1)

  useEffect(() => {
    // const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    // if (cartItemsFromLocalStorage) {
    //   setCartItems(JSON.parse(cartItemsFromLocalStorage));
    // }
    fetch('https://circuit-cityy-po9y.onrender.com/products')
    .then(response => response.json())
    .then(data => setCartItems(data))
    .catch(error => console.error('Error fetching products:', error));
    
  }, []);
  console.log(cartItems)

  const checkout = () => {
    alert("checkout")
  };

  const addToCart = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const productToAdd = cartItems.find((item) => item.id === itemId);
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };
  
  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    }
  };
  
  return (
    <div>
      <Navbar />
      {cartItems.map((item) => (
        <div key={item.id}>
         <img src={item.image} alt={item.name} style={{ width: '300px', height: '200px' }} />
  
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button className="btn btn-primary"  onClick={() => increaseQuantity(item.id)}>+</button>
          <button className="btn btn-danger"  onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
      <button className="btn btn-success"  onClick={() => checkout()}>Checkout</button>
      <button className="btn btn-primary" onClick={() => addToCart(1)}>Add to Cart</button>
    </div>
  );  
      }

export default Cart;
