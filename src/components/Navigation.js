import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function Navigation (){

    const [token, setToken] = useState({})
    // console.log(token)
    
    return(

    <div>
        <Router>
            <Switch>
                <Route exact path = "/">
                    {
                       token && token.token  ? <Home /> : <Login setToken = {setToken} />
                    }
                </Route>
                {/* <Route path = "/" exact component = {Register} /> */}
                <Route path = "/login" >
                    {
                        <Login setToken= {setToken} />
                    }
                </Route>
                <Route path = "/register" component = {Register} />

            </Switch>
        </Router>
    </div>
    ) 
}

export default  Navigation;
