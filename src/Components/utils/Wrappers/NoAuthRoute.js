import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUSerContext } from "../../Routes/AppContext";
import UserContextProvider, { UserContext } from "../../../lib/context";

const NoAuthRoute = ({ children, ...rest }) => {
  
const {user,cookietoken } = useContext(UserContext)
if(user){
    console.log('il y pa user')
  }  

  if(cookietoken){
    console.log('cooooooookiiiii')
  }  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cookietoken && user ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default NoAuthRoute;