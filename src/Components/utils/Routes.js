import React,{useState, useEffect, useContext} from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Account from '../Account/Account';
import Conjugation from '../Conjugation/Conjugation';
import Grammar from '../Grammar/Grammar';
import Home from '../Home/Home';
import Live from '../Live/Live';
import Messenger from '../Messenger/Messenger';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Exercices from '../Exe&Test/Exercices';
import Vocabulary from '../Vocabulary/Vocabulary';
import MyExercise from '../MyExercise/MyExercise';
import Index from '../Dashboard/index';
import {Index as IndexPayement} from '../Payement' ; 
import PrivateRoute from './Wrappers/PrivateRoute';
import NoAuthRoute from './Wrappers/NoAuthRoute';
import VipRoute from './Wrappers/VipRoute';
import FormExercise from '../MyExercise/Components/FormExercise';
import CardPricing from '../Payement/CardPricing';
import { useDispatch, useSelector } from "react-redux";
import {useLazyQuery, useMutation, useQuery} from '@apollo/client'
import { CurrentUSerContext } from '../Routes/AppContext';

const Routes = () => {
    const [loggedIn, setloggedIn] = useState(true)
    const uId = useContext(CurrentUSerContext)
    const user = useSelector(state => state.user);

   
    // useEffect(() => {
    //    if(uId === null){
    //        <Redirect to='login'/>
    //    }
    // }, [uId])

    return (
        
       <Router>
           
           <Route exact path="/">
                LandingPage
           </Route>
           <Route exact path='/home'>
               <Home/>
           </Route>
           <Route path ='/login'>
               <Login/>
           </Route>
           <Route exact path='/grammar'>
               <Grammar/>
           </Route>
           <Route exact path="/myexercise">
               <MyExercise/>
           </Route>
           <Route exact path='/account'>
               <Account/>    
           </Route>
           <Route path='/conjugation'>
               <Conjugation/>
           </Route>
           <Route path='/live'>
               <Live/>
           </Route>
           <Route exact path='/exercices&test'>
               <Exercices/>
           </Route>
           <Route path='/messenger'>
               <Messenger/>
           </Route>
           <Route path="/register">
                <Register/>
           </Route>
           <Route path="/vocabulary">
                <Vocabulary/>
           </Route>
           <Route exact path="/pratis">
                <FormExercise/>
           </Route>
           <VipRoute path='/dashboard'>
                <Index/>
           </VipRoute>
           <PrivateRoute path='/payement'>
                <IndexPayement/>
                {/* <CardPricing/> */}
           </PrivateRoute>
       </Router>
    )
}

export default Routes
