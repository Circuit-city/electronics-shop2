import React, {  useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogOut from "./LogOut";

const Login = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const userLogin = async () => {
    const response = await fetch('http://localhost:3000/login', {
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
        navigate('/logout')
        console.log(data)
       
      } else {
        // If login is unsuccessful, display an error message
        alert(data.message);
      }
    
  }
  console.log("user in Login:", user);
 
   
  return (
    <>
      <div className="loginPage">
        <div className="containerone">
          <div className="form">
            <h1>LOGIN </h1>
            <div className="lines">
              <div className="lineone"></div>
              <p>Sign in with email</p>
              <div className="line"></div>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              userLogin();
            }}>
              <div className="div"><p>Email*</p></div>
              <div className="emailplace"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com" required /></div>
              <div className="div"><p>Password*</p></div>
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
      </div>
      
      {user && <LogOut user={user} />}
    
    </>
  );
};

export default Login;