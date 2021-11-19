import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUSerContext } from "../../Routes/AppContext";
import UserContextProvider from "../../../lib/context";

const NoAuthRoute = ({ children, ...rest }) => {
const ui =true
  const {user} = useContext(UserContextProvider)
  console.log(user, 'mon user')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !ui ? (
          children
        ) : (
          <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
        )
      }
    />
  );
};

export default NoAuthRoute;