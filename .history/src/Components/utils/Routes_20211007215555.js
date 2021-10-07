import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from '../Account/Account';
import Conjugation from '../Conjugation/Conjugation';
import Grammar from '../Grammar/Grammar';
import Home from '../Home/Home';
import Live from '../Live/Live';
import Contact from '../Contact/Contact';
import Register from '../Auth/Register';
import Login from '../Auth/Login';

const Routes = () => {
    return (
       <Router>
           <Route exact path='/'>
               <Home/>
           </Route>
           <Route path ='/login'>
               <Login/>
           </Route>
           <Route path='/grammar'>
               <Grammar/>
           </Route>
           <Route path='/conjugation'>
               <Conjugation/>
           </Route>
           <Route path='/live'>
               <Live/>
           </Route>
           <Route path='/exercices&test'>
           </Route>
           <Route path='/account'>
               <Account/>
           </Route>
           <Route path='/contact'>
               <Contact/>
           </Route>
           <Route pathe="/register">
                <Register/>
           </Route>
          
       </Router>
    )
}

export default Routes
