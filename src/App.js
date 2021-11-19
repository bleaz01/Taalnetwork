import React, { Suspense, lazy} from "react";

// import logo from './logo.svg';
import './App.css';
// import Home from './Components/Home/Home';
import Routes from './Components/utils/Routes';
// import { useDispatch, useSelector } from "react-redux";
// import { RequestAPIAuth } from "./lib/axios";

// import { CurrentUSerContext } from "./Components/Routes/AppContext";
// import { getUser } from "./lib/redux/actions/user";
import UserContextProvider from "./lib/context";

const App =()=> {

  // const dispatch = useDispatch();
  // const [user, setUser] = useState(null)
  // const [uId, setUId] = useState(null)
  // useEffect(() => {

  //   const fetchToken  = async () =>{
  //     await axios({
  //       method:'get',
  //       url:`${process.env.REACT_APP_API_URL}jtwid`,
  //       withCredentials:true
  //     })
  //       .then((res)=> setUId(res.data))
  //       .catch((err)=> console.log("no token"))

  //   }

  //   fetchToken()
    
  // }, [uId]);


  // console.log(user,'user app')
  return (
    <UserContextProvider>
      <Routes></Routes>
    </UserContextProvider>
  );
}

export default App;
