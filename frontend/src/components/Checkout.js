import React, { useState, useEffect } from 'react';

import './Checkout.css'

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const checkoutItemsFromLocalStorage = localStorage.getItem('checkoutItems');
    if (checkoutItemsFromLocalStorage) {
      setCheckoutItems(Object.values(JSON.parse(checkoutItemsFromLocalStorage)));
    }
  }, []);

  return (
    <div>
     
      <div className="checkout-items">
        {checkoutItems.map(item => (
          <div key={item.id} className="checkout-item">
            {/* <img src={item.image} alt={item.name} /> */}
            <h2>{item.name}</h2>
            <p className="price">Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkout;               