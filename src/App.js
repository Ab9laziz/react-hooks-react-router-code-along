import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from './Home'
import NavBar from './Navbar'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'

function App(){
    return(
         <>
            <NavBar/>
            <Switch>
                <Route exact path='/about'>
                <About/>
                </Route>
                <Route path='/login'>
                <Login/>
                </Route>
                <Route path='/signup'>
                <Signup/>
                </Route>
                <Route path='/messages'>
                <Messages/>
                </Route>
                <Route exact path='/'>
                <Home/>
                </Route>
            </Switch>
         </>
        
    )
}

export default App;