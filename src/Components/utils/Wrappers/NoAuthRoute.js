import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUSerContext } from "../../Routes/AppContext";

const NoAuthRoute = ({ children, ...rest }) => {

  const ui = useContext(CurrentUSerContext)
  const [login, setlogin] = useState(false)
  const user = useSelector(state => state.user);
  if((user.user === null ) && (user.user === undefined)){
    setlogin(false)
}
  console.log(ui,'ui')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        ui === null ? (
          <Redirect
            to={{
              pathname: "/",
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