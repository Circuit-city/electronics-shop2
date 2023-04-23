import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Cart from './components/Cart';
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!JSON.parse(localStorage.getItem('user')));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<LogOut onLogout={handleLogout} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
