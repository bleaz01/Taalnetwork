import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

const VipRoute =  ({ children, ...rest }) => {
    const vip = true
    return (
        <Route
          {...rest}
          render={({ location }) =>
           vip ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/dashboard",
                  state: { from: location },
                }}
              />
            )
          }
        />
      );
   }

 
export default VipRoute;