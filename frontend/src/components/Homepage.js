import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";




function Homepage() {  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [selectedBox, setSelectedBox] = useState(null);
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(!user);
  const [search, setSearch] = useState('')
  
  useEffect(() => {
   
    fetch('https://circuit-cityy-po9y.onrender.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    const cartData = localStorage.getItem('cartItems');
if (cartData) {
  setCart(JSON.parse(cartData));
}

const userData = localStorage.getItem('user');
    if (userData) {
      setUser(userData);
      setIsLoggedIn(true);
    }
    


  }, []);

  const incrementClicksAndSales = (productId) => {
    const analytics = JSON.parse(localStorage.getItem('analytics')) || {};
    const productAnalytics = analytics[productId] || { views: 0, clicks: 0, sales: 0 };
    productAnalytics.clicks++;
    productAnalytics.sales++;
    analytics[productId] = productAnalytics;
    localStorage.setItem('analytics', JSON.stringify(analytics));
  };

  const handleAddToCart = (product) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
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
    setCart(cart);
    incrementClicksAndSales(product.id);
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

  const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substr(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  return (
<>
      <div>
        <div>
        
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
        
        <div id="additional-boxes" className="boxes-container">
        <div
            className="box box4"
            onClick={() => setSelectedBox('box4')}
          >
            <img
              src="https://53525363.000webhostapp.com/Images/Skullcandy_Crusher_Wireless_Over-Ear_Headphones_-_Black-removebg-preview.png"
              alt=""
            />
            <h2>Latest sound system</h2>
            <h3>Special Offers</h3>
          </div>
          <div
            className="box box5"
            onClick={() => setSelectedBox('box5')}
          >
          <img
              src="https://53525363.000webhostapp.com/Images/HP_Pavilion_15-cs3000_%E8%A3%BD%E5%93%81%E8%A9%B3%E7%B4%B0_-_%E3%83%8E%E3%83%BC%E3%83%88%E3%83%91%E3%82%BD%E3%82%B3%E3%83%B3___%E6%97%A5%E6%9C%ACHP-removebg-preview.png"
              alt=""
            />
            <h2>Affordable prices</h2>
              <h3>Fast Shipping</h3>
          </div>
          <div
            className="box box6"
            onClick={() => setSelectedBox('box6')}
          >
            <img
              src="https://53525363.000webhostapp.com/Images/MSI_-_Prestige_14_EVO_14__FHD_Laptop_-_i5-1135G7_-_16GB_Memory_-_IrisXe_-_512GB_SSD_-_Win10Home_-_Rose_Pink-removebg-preview.png"
              alt=""
            />
            <h2>Latest Software</h2>
            <h3>100% Satisfaction Guarantee</h3>
          </div>
          </div>
        </div>
        <input type="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
        <div className="product-cards-container">
        
        {filteredProducts() &&  filteredProducts().filter((item) => {
          return search.toLowerCase() === ''? item : item.name.toLowerCase().includes(search)
        }).map(product => (
          
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{truncate(product.description,50)}</p>
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
    
    
   </> 
)}

export default Homepage;
    