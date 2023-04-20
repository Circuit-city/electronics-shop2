import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import '../components/Signup.css'
function Signup(){
    const [name, setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const navigate = useNavigate()

    function handlesubmit(){
        console.log(name,email,password)

        fetch(`https://circuit-city-sxh8.onrender.com/register`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name ,email , password})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/logout')
        })
    }

    return (
        <>
        <div className="signupPage">
            <div className="containerone">
                <div className="upper-div">
                    <div className="image">
                        <p className="img1"></p>
                        <img src={require('../assets/headphone.png')} alt="headphone" className="img2"/>
                    </div>
                <div className="form">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    handlesubmit()
                    }} className="sign-form">
                <center>
                    <h1>SIGN-UP</h1>
                </center>
                    <label>
                        Name: <input type="text" name="name" value={name} placeholder="Enter name" onChange={(e) => setname(e.target.value)} required />
                    </label>

                    <label>
                        Email: <input type="text" name="email" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)} required/>
                    </label>

                    <label>
                        Password: <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
                    </label>
                    <button type="submit" value='Signup' className="sign-btn">Sign up</button>
                    
                </form>
                </div>
            </div>
                <div className="lower-div">
                    <p>What will you discover?</p>
                <div className="big">
                    <div className="preview">
                        <div className="laptop">
                        <img src={require('../assets/laptop-preview.png')} alt="laptop" />
                        <p>Laptops</p>
                    </div>
                <div className="tv">
                        <img src={require('../assets/tv.png')} alt="television" />
                        <p>Flatscreens</p>
                </div>
                    <div className="hd">
                        <img src={require('../assets/hd.png')} alt="hd" />
                        <p>Headphones</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>        
</>
      );
}

export default Signup;