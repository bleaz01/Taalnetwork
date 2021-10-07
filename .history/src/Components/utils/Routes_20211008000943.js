import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Account from '../Account/Account';
import Conjugation from '../Conjugation/Conjugation';
import Grammar from '../Grammar/Grammar';
import Home from '../Home/Home';
import Live from '../Live/Live';
import Contact from '../Messenger/Messenger';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Exercices from '../Exe&Test/Exercices';

const Routes = () => {
    const [loggedIn, setloggedIn] = useState(true)


    return (
       <Router>
           <Route exact path='/'>
                {loggedIn ? <Home/> : <Redirect to="/login" /> }  
           </Route>
           <Route path ='/login'>
               <Login/>
           </Route>
           <Route path='/grammar'>
               <Grammar/>
           </Route>
           <Route path='/account'>
                {loggedIn ? <Account/> : <Redirect to="/login" />}    
           </Route>
           <Route path='./conjugation'>
               <Conjugation/>
           </Route>
           <Route path='/live'>
               <Live/>
           </Route>
           <Route path='/exercices&test'>
               <Exercices/>
           </Route>
           <Route path='/contact'>
               <Contact/>
           </Route>
           <Route path="/register">
                <Register/>
           </Route>
       </Router>
    )
}

export default Routes
