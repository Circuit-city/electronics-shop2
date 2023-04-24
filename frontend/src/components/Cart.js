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

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity+1)
  };

  const decreaseQuantity = () => {
    // const existingItem = cartItems.find((item) => item.id === itemId);
    // if (existingItem.quantity > 1) {
    //   setCartItems(
    //     cartItems.map((item) =>
    //       item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    //     )
    //   );
    // } else {
    //   setCartItems(cartItems.filter((item) => item.id !== itemId));
    // }
setItemQuantity(itemQuantity-1)
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const checkout = () => {
    // implement checkout logic 
    setCartItems([]);
    alert('Thank you for your order!');
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
          <p>Quantity: {itemQuantity}</p>
          <button className="btn btn-primary"  onClick={() => increaseQuantity(item.id)}>+</button>
          <button className="btn btn-danger"  onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
      <button className="btn btn-success"  onClick={() => checkout()}>Checkout</button>
    </div>
  );
}

export default Cart;
