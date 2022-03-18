import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CurrentUSerContext } from "../../Routes/AppContext";
import { UserContext } from '../../../lib/context';


const PrivateRoute =  ({ children, ...rest }) => {

  // const user = useSelector(state => state.user)
  const{user,cookietoken } = useContext(UserContext)

    // if(cookietoken){
    //   console.log(user,"my")

    // }
    // if(user){
    //   console.log(user,"=>>>>>>>>>>>>>>>>")
    // }else{
    //   console.log("nooooooooooooon")
    // }
    // console.log(user,'jjjjj')
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
         user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
   }

 
export default PrivateRoute;