import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import '../components/Signup.css'
function Signup(){
    const [name, setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate()

    function handlesubmit(){
        console.log(name,email,password)

        fetch(`https://circuit-cityy-po9y.onrender.com/register`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name ,email , password, role})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('name', JSON.stringify(data.user.name));
            navigate('/')
        })
    }

    return (
        <>
<div className="signupPage d-flex justify-content-center align-items-center">
  <div className="containerone">
    <div className="form">
      <form onSubmit={(e)=>{
        e.preventDefault()
        handlesubmit()
      }} className="sign-form">
        <center>
          <h1>SIGN-UP</h1>
        </center>
        <label>
          Name: <input id= "name"type="text" name="name" value={name} placeholder="Enter name" onChange={(e) => setname(e.target.value)} required />
        </label>
        <label>
          Email: <input type="text" name="email" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)} required/>
        </label>
        <label>
          Password: <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
        </label>
        <label>
          Role: 
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <button type="submit" value='Signup' className="sign-btn">Sign up</button>
      </form>
    </div>
  </div>
</div>

   
</>
      );
}

export default Signup;