import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import './homepageAndNavbar.css';

function Homepage() {  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
  useEffect(() => {
   
    fetch('https://circuit-cityy-po9y.onrender.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    const cartData = localStorage.getItem('cartItems');
if (cartData) {
  setCart(JSON.parse(cartData));
}

  }, []);

  const handleAddToCart = (product) => {
    const cartData = localStorage.getItem('cartItems');
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

  return (

      <div>
        <div>
        <Navbar />
        <div id="slider" className="slider-container">
          <div className="slider-image">
            <img
              src="https://53525363.000webhostapp.com/Images/Product_Renders_Projects-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="slider-promotion">
              <h3>Special Discount</h3>
            <h2>40% off Sale on Headphones!</h2>
            <p>Get high-quality headphones at discounted prices.</p>
            <p>Unbeatable Sound Quality, elevate Your Audio Experience with Our Headphones.</p>
            <p>Premium Sound Experience, Get the Best Headphones for Your Music.</p>
          </div>
          
        </div>
        <div id="boxes" className="boxes-container">
          <div className="box">
            <img src="https://53525363.000webhostapp.com/Images/Wallet_icon_grey-removebg-preview.png" alt=""/>
            <h3>Reasonable Pricing</h3>
          </div>
          <div className="box">
            <img src="https://53525363.000webhostapp.com/Images/___2_-removebg-preview.png" alt=""/>
            <h3>24 hour Client Support</h3>
          </div>
          <div className="box">
          <img src="https://53525363.000webhostapp.com/Images/Clock_app_icon_gray-removebg-preview.png" alt=""/>
            <h3>Year round sales on select items</h3>
          </div>
        </div>
        <div id="additional-boxes" className="boxes-container">
          <div className="box box4">
            <img
              src="https://53525363.000webhostapp.com/Images/Skullcandy_Crusher_Wireless_Over-Ear_Headphones_-_Black-removebg-preview.png"
              alt=""
            />
            <h2>Latest sound system</h2>
            <h3>Special Offers</h3>
          </div>
          <div className="box box5">
          <img
              src="https://53525363.000webhostapp.com/Images/HP_Pavilion_15-cs3000_%E8%A3%BD%E5%93%81%E8%A9%B3%E7%B4%B0_-_%E3%83%8E%E3%83%BC%E3%83%88%E3%83%91%E3%82%BD%E3%82%B3%E3%83%B3___%E6%97%A5%E6%9C%ACHP-removebg-preview.png"
              alt=""
            />
            <h2>Affordable prices</h2>
              <h3>Fast Shipping</h3>
          </div>
          <div className="box box6">
            <i className="fas fa-check"></i>
            <img
              src="https://53525363.000webhostapp.com/Images/MSI_-_Prestige_14_EVO_14__FHD_Laptop_-_i5-1135G7_-_16GB_Memory_-_IrisXe_-_512GB_SSD_-_Win10Home_-_Rose_Pink-removebg-preview.png"
              alt=""
            />
            <h2>Latest Software</h2>
            <h3>100% Satisfaction Guarantee</h3>
          </div>
          </div>
        </div>
      
        <div className="product-cards-container">
        {products.map(product => (
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
    