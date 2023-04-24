import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Cart from './components/Cart';
import Homepage from "./components/Homepage"
import Checkout from "./components/Checkout"
import ProductsAdd from './components/ProductsAdd';
import Admin from "./components/Admin"
import AdminId from "./components/AdminId"



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path='/addproduct' element={<ProductsAdd />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/:id" element={<AdminId />}/>
          <Route path="/admin/products/:id" element={<AdminId />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
