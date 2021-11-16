import React, { Suspense, lazy, useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Routes from './Components/utils/Routes';
import { useDispatch, useSelector } from "react-redux";
import { RequestAPIAuth } from "./lib/axios";

import axios from "axios";
import { CurrentUSerContext } from "./Components/Routes/AppContext";
import { getUser } from "./lib/redux/actions/user";

function App() {

  const dispatch = useDispatch();

  const [uId, setUId] = useState(null)
  useEffect((async () => {

    await axios({
      method:'get',
      url:`${process.env.REACT_APP_API_URL}jtwid`,
      withCredentials:true
    }).then((res)=>{
      setUId(res.data)
      // console.log(res.data)
    })
    if(uId){
      dispatch(getUser(uId))

    }
  }), [uId]);
  const pathname = window.location.pathname
  console.log(pathname)
  return (
    <CurrentUSerContext.Provider value ={uId}>
      <Routes></Routes>
    </CurrentUSerContext.Provider>
  );
}

export default App;
