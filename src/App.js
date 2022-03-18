import React, { Suspense, lazy} from "react";
import { CookiesProvider } from "react-cookie";
import './App.css';
import Routes from './Components/utils/Routes';
import LocaleContextProvider from "./Components/utils/Wrappers/LocalContext";
import UserContextProvider from "./lib/context";
import { BrowserRouter, HashRouter } from "react-router-dom";

const App =()=> {

  
  return (
    <LocaleContextProvider>
      <CookiesProvider>
        <UserContextProvider>
        <HashRouter>
        <Routes></Routes>
        </HashRouter>
     

         
        </UserContextProvider>
      </CookiesProvider>
    </LocaleContextProvider>
      
   
  );
}

export default App;
