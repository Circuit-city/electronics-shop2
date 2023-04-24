import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Cart from './components/Cart';
import Homepage from "./components/Homepage"
import Admin from "./components/Admin"
import AdminId from "./components/AdminId"
import ProductsAdd from './components/ProductsAdd';

function App() {

  return (
  
    <Router>
    <div>
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/:id" element={<AdminId />}/>
          <Route path='/addproduct' element={<ProductsAdd />} />
          <Route path="/admin/products/:id" element={<AdminId />}/>
      
        </Routes>
    </div>
    </Router>
    
  );
}

export default App; 
