import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";


function Homepage() {
  return (
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
        </div>
        
      </div>
      <div id="boxes" className="boxes-container">
        <div className="box">
          <i className="fas fa-wallet"></i>
          <h3>Reasonable Pricing</h3>
        </div>
        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>24/7 Client Support</h3>
        </div>
        <div className="box">
          <i className="fas fa-clock"></i>
          <h3>Year round sales on select items</h3>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
