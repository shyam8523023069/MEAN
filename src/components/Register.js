import React, {useState} from 'react';

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [password, setPassword]= useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        const text = {name, email, phone, password};
        fetch('http://localhost:9000/login/register/',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(text)
        } )
        .then(() => {
            console.log('new text Name added');
        } )
    }
    return (
        <div>
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
                Phone : 
                <input type="number"
                        value = {phone}
                        onChange={e => setPhone(e.target.value)}
                />
            </h3>
            <h3>
                Password :
                <input type ="text"
                        required
                        value ={password}
                        onChange = {(e) => setPassword(e.target.value)}

                />
            </h3>
            <h3>Conform Password: <input /></h3>
            <button>Submit</button>
            
            </form>
        </div>
    )
}

export default Register;
