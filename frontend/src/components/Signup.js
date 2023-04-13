import React,{useState} from "react";

function Signup(){
    const [name, setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    function handlesubmit(e){
        e.preventDefault()
        console.log(name,email,password)

        fetch(`http://localhost:4000/register`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name ,email , password})
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
                <label>
                    Name: <input type="text" name="name" value={name} placeholder="Enter name" onChange={(e) => setname(e.target.value)}/>
                </label>

                <label>
                    Email: <input type="text" name="email" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)}/>
                </label>
                
                <label>
                    Password: <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </label>
                <button type="submit" name="submit" onClick={handlesubmit}>Sign up</button>
            </form>
        </div>
    )
}
export default Signup