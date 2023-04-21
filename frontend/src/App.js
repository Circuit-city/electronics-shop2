import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Cart from './components/Cart';
import Homepage from "./components/Homepage"

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    <div>
      
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/checkout" element={<Chekout />}/>
        </Routes>
     
    </div>
  )
}

export default App; 
