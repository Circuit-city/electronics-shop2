import React, { useState, useEffect } from 'react';
import Layout from './Layout'
// import './homepageAndNavbar.css'
import {motion} from "framer-motion"

function Homepage() {  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [selectedBox, setSelectedBox] = useState(null);
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [currentSlide, setCurrentSlide] = useState(0);
  
useEffect(() => {
   
    fetch('https://circuit-cityy-po9y.onrender.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    const cartData = localStorage.getItem('cartItems');
if (cartData) {
  setCart(JSON.parse(cartData));
}

// const userData = localStorage.getItem('user');
//     if (userData) {
//       setUser(userData);
//       setIsLoggedIn(true);
//     }
    


const userData = localStorage.getItem('user');
    if (userData) {
      setUser(userData);
      
    }

    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);   
}, []);

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
  };
  
  const isAddedToCart = (productId) => {
    return cart[productId] ? true : false;
  };

  // const truncate = (str, maxLength) => {
  //   if (str.length > maxLength) {
  //     return str.substr(0, maxLength) + '...';
  //   } else {
  //     return str;
  //   }
  // };
 

  const filteredProducts = () => {
    if (!selectedBox) {
      return products;
    } else if (selectedBox === 'box4') {
      return products.filter(product => [2, 6, 9].includes(product.id));
    } else if (selectedBox === 'box5') {
      return products.filter(product => [3, 7].includes(product.id));
    } else if (selectedBox === 'box6') {
      return products.filter(product => [1, 5].includes(product.id));
    }
  };

  const slides = [
    {
      imageSrc: 'https://53525363.000webhostapp.com/Images/___7_-removebg-preview.png',
      promotionTitle: 'Special Discount',
      promotionSubtitle: '40% off Sale on Headphones!',
      promotionText: [
        'Get high-quality headphones at discounted prices.',
        'Unbeatable Sound Quality, elevate Your Audio Experience with Our Headphones.',
        'Premium Sound Experience, Get the Best Headphones for Your Music.'
      ]
    },
    {
      imageSrc: 'https://53525363.000webhostapp.com/Images/___6_-removebg-preview.png',
      promotionTitle: 'New Arrival',
      promotionSubtitle: 'Discover the Latest Smart Home Devices',
      promotionText: [
        'Transform your home with our latest smart home devices.',
        'Control your lights, thermostat, and more from your smartphone.',
        'Easy to install and use, get started today.'
      ]
    },
    {
      imageSrc: 'https://53525363.000webhostapp.com/Images/___3_-removebg-preview.png',
      promotionTitle: 'Upgrade Your Tech Today',
      promotionSubtitle: 'Save Big on Our Latest Electronics',
      promotionText: [
        'Upgrade your technology with our latest electronics, including laptops and more.',
        'Get up to 50% off on selected items for a limited time only.',
        'Experience lightning-fast performance and stunning graphics with our top-of-the-line products.'
      ]
    }
  ];
  

return (
 
  
      <motion.div 
        initial={{width:0}}
        animate={{width:"100vw"}}
        exit={{x:window.innerWidth,transition:{duration:0.7}}}
      >
        <Layout>
        <div>
        
        <div id="slider" className="slider-container" style={{ overflow: 'hidden',}}
        
        >
          <div className="slider-image">
            <img src={slides[currentSlide].imageSrc} alt="" /> 
          </div>
          <div className="slider-promotion">
            <h3>{slides[currentSlide].promotionTitle}</h3>
            <h2>{slides[currentSlide].promotionSubtitle}</h2>
            {slides[currentSlide].promotionText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
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
              src="https://53525363.000webhostapp.com/Images/The_Best_Travel_Cameras_for_Capturing_All_Your_Journeys-removebg-preview.png"
              alt=""
            />
            <h2>Latest Software</h2>
            <h3>100% Satisfaction Guarantee</h3>
          </div>
          </div>
        </div>
      
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
      </Layout>
      </motion.div>
    
   
    
  
)}

export default Homepage;
    