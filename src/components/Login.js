import React, {useState} from 'react'

function Login() {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    

    const loginsubmit = (e) => {
        e.preventDefault();
        const log = {username, password}
    fetch('http://localhost:9000/login/', {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(log)
    } )
    .then(() => {
        console.log('Login sucess....');
    } )

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
            <button>submit</button>
            </form>
            
        </div>
    )
}

export default Login;
