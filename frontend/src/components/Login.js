import React,{useState} from "react";

function Login(){
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    function handlesubmit(e){
        e.preventDefault()
        console.log(email,password)


        fetch(`http://localhost:3000`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email , password})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
            <center>
                <h1>Login</h1>
            </center>
                <label htmlFor="email" >Email</label>
                <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                
                
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                
                <button type="submit" className="btn-btn primary" onClick={handlesubmit}>Login</button>
            </form>
        </div>
    )
}
export default Login;