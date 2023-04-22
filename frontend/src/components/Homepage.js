import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import './homepageAndNavbar.css';

function Homepage() {  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [selectedBox, setSelectedBox] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
   
    fetch('https://circuit-cityy-po9y.onrender.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    const cartData = localStorage.getItem('cartItems');
if (cartData) {
  setCart(JSON.parse(cartData));
}

const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }

  }, []);

  

  const handleAddToCart = (product) => {
    if (!isLoggedIn) { 
      alert('Please log in to add items to cart.');
      return;
    }
    const cartData = localStorage.getItem('cart');
    let cart = {};
    if (cartData) {
      cart = JSON.parse(cartData);
    }
    if (cart[product.id]) {
      cart[product.id].quantity += 1;
    } else {
      cart[product.id] = {
        ...product,
        quantity: 1
      };
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
  };
  
  const isAddedToCart = (productId) => {
    return cart[productId] ? true : false;
  };

  const filteredProducts = () => {
    if (!selectedBox) {
      return products;
    } else if (selectedBox === 'box4') {
      return products.filter(product => [2, 6, 9].includes(product.id));
    } else if (selectedBox === 'box5') {
      return products.filter(product => [3, 7].includes(product.id));
    } else if (selectedBox === 'box6') {
      return products.filter(product => [4, 8].includes(product.id));
    }
  };

  return (

      <div>
       
      
        <div className="product-cards-container">
        {filteredProducts().map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            {isAddedToCart(product.id) ? (
              <button disabled>Added to Cart</button>
            ) : (
              <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
            )}
          </div>
        ))}

      </div>
    </div>
)}

export default Homepage;
    