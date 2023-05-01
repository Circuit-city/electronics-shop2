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

    
    const data = await response.json();
    console.log("data:", data);

      if (response.ok ) {
        // If login is successful, set the user data in state
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('role', JSON.stringify(data.role));
        navigate('/')
        console.log(data)
       
      } else {
        // If login is unsuccessful, display an error message
        alert('Invalid email or password');
      }
    
  }
  console.log("user in Login:", user);
 
   
  return (
    <div className="container d-flex justify-content-center align-items-center loginPage">
      <div className="card">
        <div className="card-body">
        <h3 className="card-title text-center mb-4">
      <img src="" alt="" className="mr-2" />
      Welcome to Circuit City
      </h3>
          <form onSubmit={(e) => {
              e.preventDefault();
              userLogin();
            }}>
            <div className="form-group">
              <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <input ref={passwordRef} type="password" className="form-control" placeholder="Input password" required />
            </div>
            <div className="form-group text-right">
              
            </div>
            <div className="form-group text-center">
        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: 'orange', border: 'none'}}>Login</button>
    </div>
          </form>
          <div className="notregisterd text-center">
            <p>Not registered yet?</p>
            <Link to="/signup">Create an Account</Link>
          </div>
        </div>
      </div>
      {user && <LogOut user={user} />}
    </div>
  );
}

export default Login;