import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Homepage from "./components/Homepage"
import Admin from "./components/Admin"
import AdminId from "./components/AdminId"
import Cart from './components/Cart';
import ProductsAdd from './components/ProductsAdd';
import AdminUsers from './components/AdminUsers';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import './App.css' 



function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  
  return (
    
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      
        <Routes>
         
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/:id" element={<AdminId />}/>
          <Route path='/addproduct' element={<ProductsAdd />} />
          <Route path="/admin/products/:id" element={<AdminId />}/>
          <Route path='/adminusers' element={<AdminUsers />} />
         
        </Routes>
    </div>
    
  );
}

export default App; 