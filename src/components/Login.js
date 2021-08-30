import React, {useState} from 'react'
import axios from 'axios';
import {Link,  useHistory } from 'react-router-dom';

function Login({setToken}) {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    
    let history = useHistory()

    const loginsubmit = (e) => {
        e.preventDefault();
        const log = {username, password}
        axios.post('http://localhost:9000/login/', log)

    // fetch('http://localhost:9000/login/', {
    //     method: 'POST',
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(log)
    // } )
    .then(res =>  {
        console.log(res)
        alert(res.data.message)
        setToken(res.data)
        history.push("/")
        
    })

    }

    return (
        <div>
            <h1>Login Page </h1>
            <form onSubmit = {loginsubmit}>
            <h3>username : <input type = "text"
                                    required
                                    value={username}
                                    onChange = {(e) => setUsername(e.target.value )}
              />
            </h3>
            <h3>password : <input type = "text"
                                    required
                                    value= {password}
                                    onChange ={(e) => setPassword(e.target.value) }
             />
            </h3>
            <button   >Login</button>
            <Link to ="/register">
            <button>Register</button>
            </Link>
            </form>
            
        </div>
    )
}

export default Login;
