import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';

const Routes = () => {
    return (
       <Router>
           <Route path='/'>
               <Home/>
           </Route>
           <Route path='/grammar'>
           </Route>
           <Route path='/conjugation'>
           </Route>
           <Route path='/live'>
           </Route>
           <Route path='/exercices&test'>
           </Route>
           <Route path='/account'>
           </Route>
       </Router>
    )
}

export default Routes
