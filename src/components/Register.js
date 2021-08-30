import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './register.css';

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [password, setPassword]= useState('')
    const [rePassword, setRePassword] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        const text = {name, email, phone, password};
        if(name && email && phone ){
            if(password === rePassword){

                axios.post('http://localhost:9000/login/register/', text)
                .then(res => {
                    // console.log('new text Name added');
                    alert(res.data.message)
                } )
    
                // fetch('http://localhost:9000/login/register/',{
                //     method: 'POST',
                //     headers:{"Content-Type":"application/json"},
                //     body:JSON.stringify(text)
                // } )
                // .then(() => {
                //     console.log('new text Name added');
                //     alert('register sucess..')
                // } )
            }else{alert('incurret conformation Password ')}
            
        }else{
            alert('Please Enter Registration Details...')
        }
    }
    return (
        <div className= "register">
            <form onSubmit ={handleSubmit} >
                <h1>Register page </h1>
            
            <h3>
                <label>Name  :</label> 
                <input type ="text" 
                        required 
                        value={name}
                        onChange ={(e)=> setName(e.target.value) } />
            </h3>
            <h3>
                Email : 
                <input type ="text"
                        required
                        value={email}
                        onChange ={(e)=> setEmail(e.target.value) }
                />
            </h3>
            <h3>
                <label>

                Phone : 
                </label>
                <input type="number"
                        value = {phone}
                        onChange={e => setPhone(e.target.value)}
                />
            </h3>
            <h3>
            <label>
                    
                Password :
                    </label>
                <input type ="text"
                        required
                        value ={password}
                        onChange = {(e) => setPassword(e.target.value)}

                />
            </h3>
            
            <h3> <label>
                    
                Conform Password: 
                    </label>
                <input type="text"
                value = {rePassword}
                onChange = {(e) => setRePassword(e.target.value) } 
                />
            </h3>
            <button>Register</button>
          <Link to = "/login">
            <button>Login</button>
          </Link>
            
            </form>
        </div>
    )
}

export default Register;
