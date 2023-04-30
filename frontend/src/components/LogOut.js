import React from 'react'
import { useNavigate } from "react-router-dom";

const LogOut = ({user}) => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('name'));
  const loggedInUser = storedUser ? storedUser : null;
  const handleLogout = async () => {
    if (!loggedInUser && !user) {
      // If user is not logged in, redirect to login page
      navigate("/login");
      return;
    }
    const response = await fetch(`https://circuit-cityy-po9y.onrender.com/logout`, {
      method: 'DELETE'
    });

    if (response.ok) {
      // Clear user data from local storage 
      localStorage.clear();
      navigate("/login");
    } else {
      console.error(response);
    }
  }
  console.log("user in LogOut:", loggedInUser);
  return (
    <div>
      {loggedInUser && (
        <h1>
          Goodbye <span>{storedUser}</span>
        </h1>
      )}
      <button onClick={(e) => handleLogout(e)}>logout</button>
    </div>
  )
}

export default LogOut

