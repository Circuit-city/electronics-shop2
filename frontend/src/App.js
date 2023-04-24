import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Cart from './components/Cart';
import Homepage from "./components/Homepage"
import Checkout from "./components/Checkout"

function App() {

  return (
    <div>
      
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
     
    </div>
  )
}

export default App; 
