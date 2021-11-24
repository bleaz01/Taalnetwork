import React, { Suspense, lazy} from "react";
import './App.css';
import Routes from './Components/utils/Routes';
// import { useDispatch, useSelector } from "react-redux";
// import { RequestAPIAuth } from "./lib/axios";

// import { CurrentUSerContext } from "./Components/Routes/AppContext";
// import { getUser } from "./lib/redux/actions/user";
import UserContextProvider from "./lib/context";

const App =()=> {

  
  return (
    <UserContextProvider>
      <Routes></Routes>
    </UserContextProvider>
  );
}

export default App;
