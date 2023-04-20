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
  
    <Router>
    <div>
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
      
        </Routes>
    </div>
    </Router>
    
  );
}

export default App; 
