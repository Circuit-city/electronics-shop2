import React,{useState} from "react";

function Signup(){
    const [username, setusername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    function handlesubmit(e){
        e.preventDefault()
        console.log(username,email,password)

        fetch(`http://localhost:3000`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username ,email , password})
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
                <h1>Signup</h1>
            </center>
                <label htmlFor="username" >Username</label>
                <input type="text" name="username" value={username} placeholder="Enter Username" onChange={(e) => setusername(e.target.value)}/>
                
                <label htmlFor="email" >Email</label>
                <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                
                
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                
                <button type="submit" name="submit" onClick={handlesubmit}>Sign up</button>
            </form>
        </div>
    )
}
export default Signup