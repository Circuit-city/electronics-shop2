import React, {  useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogOut from "./LogOut";
import './Login.css'

const Login = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  
  const userLogin = async () => {
    const response = await fetch('https://circuit-cityy-po9y.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    });

    
      if (response.ok) {
        // If login is successful, set the user data in state
        const data = await response.json();
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/')
        console.log(data)
       
       
      } else {
        // If login is unsuccessful, display an error message
        alert('Invalid email or password');
      }
    
  }
  console.log("user in Login:", user);
  
 
   
  return (
    <>
      
         <div className="login-div">
          <div className="form">
            <div className="img">
              {/* <img src="https://53525363.000webhostapp.com/CIRCUIT__3_-removebg-preview%20(1).png" alt="pic" className="image"/> */}
              <h1>LOGIN </h1>  
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              userLogin();
            }}>
              <div className="emailplace"><input ref={emailRef} type="email" placeholder="Enter email" required /></div>
              <div className="passplace"><input ref={passwordRef} type="password" placeholder="Input password" required /></div>
              <div className="forgot">
                <p>Forgot password?</p>
              </div>
              <div className="loginBtn">
                <input type='submit' value='login' />
              </div>
            </form>
            <div className="notregisterd">
              <p>Not registered yet?</p>
              <Link to='/Signup'>Create an Account</Link>
            </div>
          </div>
         </div>
      
      {user && <LogOut user={user} />}
    
    </>
  );
};

export default Login;