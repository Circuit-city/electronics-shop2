import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Cart from './components/Cart';
import Homepage from "./components/Homepage"
import Navbar from './components/Navbar';

function App() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);}

  

  return (
  
    <Router>
    <div>
    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
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
