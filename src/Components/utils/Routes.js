import React,{useState, useEffect, useContext} from 'react'
import { BrowserRouter as Router, Route, Redirect,} from "react-router-dom";
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
import LivePage from '../Live/LivePage';
import Profil from '../Profil/Profil';
import LiveRoom from '../Live/LiveRoom';
import UpdateRegister from '../Auth/UpdateRegister';
import Taalnetworker from '../Taalnetworker/Taalnetworker';


const Routes = () => {
    const [loggedIn, setloggedIn] = useState(true)
    const uId = useContext(CurrentUSerContext)

   
    // useEffect(() => {
    //    if(uId === null){
    //        <Redirect to='login'/>
    //    }
    // }, [uId])

    return (
        
    //    <Router basename="https://bleaz01.github.io/Taalnetwork">
    <Router>
           <NoAuthRoute  exact path="/">
                LandingPage   
           </NoAuthRoute>
           <PrivateRoute exact path="/home">
                <Home/>
           </PrivateRoute>
          
            <NoAuthRoute path="/login">
                <Login/>
           </NoAuthRoute>
          
           <Route exact path='/grammar'>
               <Grammar/>
           </Route>
           <Route exact path="/myexercise">
               <MyExercise/>
           </Route>
           <PrivateRoute exact path='/account'>
               <Account/>    
           </PrivateRoute>
           <PrivateRoute path='/conjugation'>
               <Conjugation/>
           </PrivateRoute>
           <PrivateRoute exact path='/live'>
               <Live/>
           </PrivateRoute>
           <PrivateRoute exact path='/live/joint-room'>
               <LivePage/>
           </PrivateRoute>
           <PrivateRoute exact path='/room'>
               <LiveRoom/>
           </PrivateRoute>
           <PrivateRoute exact path='/exercices&test'>
               <Exercices/>
           </PrivateRoute>
           <PrivateRoute path='/messenger'>
               <Messenger/>
           </PrivateRoute>
           <NoAuthRoute path="/register">
                <Register/>
                {/* <UpdateRegister/> */}
           </NoAuthRoute>
           <PrivateRoute path='/p/:id'>
                <Profil/>
            </PrivateRoute>
           <PrivateRoute path="/vocabulary">
                <Vocabulary/>
           </PrivateRoute>
           <PrivateRoute exact path="/pratis">
                <FormExercise/>
           </PrivateRoute>
           <PrivateRoute path='/users'>
               <Taalnetworker/>
           </PrivateRoute>
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
