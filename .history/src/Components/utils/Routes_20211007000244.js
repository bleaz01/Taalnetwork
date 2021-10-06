import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';

const Routes = () => {
    return (
       <Router>
           <Route path='/'>
               <Home/>
           </Route>
       </Router>
    )
}

export default Routes
