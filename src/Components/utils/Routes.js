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
        
       <Router>
    {/* // <Router> */}
           <NoAuthRoute  exact path="/">
                LandingPage   
           </NoAuthRoute>
           <NoAuthRoute exact path="/home">
                <Home/>
           </NoAuthRoute>
          
            <NoAuthRoute path="/login">
                <Login/>
           </NoAuthRoute>
          
           <Route exact path='/grammar'>
               <Grammar/>
           </Route>
           <Route exact path="/myexercise">
               <MyExercise/>
           </Route>
           <NoAuthRoute exact path='/account'>
               <Account/>    
           </NoAuthRoute>
           <NoAuthRoute path='/conjugation'>
               <Conjugation/>
           </NoAuthRoute>
           <NoAuthRoute exact path='/live'>
               <Live/>
           </NoAuthRoute>
           <NoAuthRoute exact path='/live/joint-room'>
               <LivePage/>
           </NoAuthRoute>
           <NoAuthRoute exact path='/room'>
               <LiveRoom/>
           </NoAuthRoute>
           <NoAuthRoute exact path='/exercices&test'>
               <Exercices/>
           </NoAuthRoute>
           <NoAuthRoute path='/messenger'>
               <Messenger/>
           </NoAuthRoute>
           <NoAuthRoute path="/register">
                <Register/>
                {/* <UpdateRegister/> */}
           </NoAuthRoute>
           <NoAuthRoute path='/p/:id'>
                <Profil/>
            </NoAuthRoute>
           <NoAuthRoute path="/vocabulary">
                <Vocabulary/>
           </NoAuthRoute>
           <NoAuthRoute exact path="/pratis">
                <FormExercise/>
           </NoAuthRoute>
           <NoAuthRoute path='/users'>
               <Taalnetworker/>
           </NoAuthRoute>
           <VipRoute path='/dashboard'>
                <Index/>
           </VipRoute>
           <NoAuthRoute path='/payement'>
                <IndexPayement/>
                {/* <CardPricing/> */}
           </NoAuthRoute>
       </Router>
    )
}

export default Routes
