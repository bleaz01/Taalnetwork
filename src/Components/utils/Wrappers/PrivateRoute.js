import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CurrentUSerContext } from "../../Routes/AppContext";

const PrivateRoute =  ({ children, ...rest }) => {

  const ui = useContext(CurrentUSerContext)

    const [login, setlogin] = useState(false)
    const user = useSelector(state => state.user);
    if(ui){
      console.log('il y a une user ')

    }
    else if(!ui){
      console.log('il y pas user')
    }
     return (
       <Route
         {...rest}
         render={({ location }) =>
          ui ? (
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