import React,{useState} from "react";

function Login(){
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    function handlesubmit(e){
        e.preventDefault()
        console.log(email,password)


        fetch(`http://localhost:4000`, {
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
                <label>
                    Email: <input type="text" name="email" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)}/>
                </label>

                <label>
                    Password: <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </label>
                
                <button type="submit" className="btn-btn primary" onClick={handlesubmit}>Login</button>
            </form>
        </div>
    )
}
export default Login;
