import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CurrentUSerContext } from "../../Routes/AppContext";
import { UserContext } from '../../../lib/context';

const PrivateRoute =  ({ children, ...rest }) => {

  const{ cookietoken } = useContext(UserContext)

    if(cookietoken){
      console.log('il y a un user ')

    }
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
        cookietoken ? (
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