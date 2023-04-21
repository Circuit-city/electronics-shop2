import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Homepage from "./components/Homepage"
import Admin from "./components/Admin"
import AdminId from "./components/AdminId"
import Cart from './components/Cart';
import ProductsAdd from './components/ProductsAdd';



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    
    <div>
      
        <Routes>
         
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/:id" element={<AdminId />}/>
          <Route path='/addproducts' element={<ProductsAdd />} />
          <Route path="/admin/products/:id" element={<AdminId />}/>
         
         
        </Routes>
    </div>
    
  );
}

export default App; 
