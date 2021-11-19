import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();
// :JSON.parse(localStorage.getItem("user")) || null
 const UserContextProvider = ({ children }) => {
    const [cookietoken, setCookieToken] = useState()
    const [user, setUser] = useState(() => {
        const json = localStorage.getItem("user");
        const data = JSON.parse(json);
        return !!data ? data : null;
      });
    useEffect(() => {
        console.log( cookietoken, 'user id')
    const fetchToken  = async () =>{
        await axios({
          method:'get',
          url:`${process.env.REACT_APP_API_URL}jtwid`,
          withCredentials:true
        })
        .then((res)=> {
            setCookieToken(res.data)
            axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${res.data}`)
            .then((res)=>{
                setUser(res.data)
            })
            .catch((err)=> console.log(err))
         })
         .catch((err)=> console.log("no token"))
  
      }
  
      fetchToken()
      
    },[cookietoken]);

   console.log(user, 'contex')
  
  return (
    <UserContext.Provider
      value={{
        user,
        cookietoken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider