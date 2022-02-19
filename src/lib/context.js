import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/actions/user';

export const UserContext = createContext();
// :JSON.parse(localStorage.getItem("user")) || null
const UserContextProvider = ({ children }) => {
	const [ cookietoken, setCookieToken ] = useState();
	const [ user, setUser ] = useState(
    () => {
		const json = localStorage.getItem('user');
		const data = JSON.parse(json);
		return !!data ? data : null;
	});
  const [pending, setPending] = useState(true);


  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jtwid`,
        withCredentials:true
      })
        .then((res) => {
          setCookieToken(res.data); 
         
        })
        .catch((err) => console.log("No token"));
    };

    fetchToken();
    console.log(cookietoken,"cook")

    // if (uid) dispatch(getUser(uid));
  }, [cookietoken]);



  useEffect(()=>{

    const fetchUser = async () => {

      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/${cookietoken}`,
        withCredentials:false
      })
      .then((res) => {
        setUser(res.data);
        setPending(false);

        console.log(res.data)
      })
      .catch((err) => console.log(err));

        
    };
    fetchUser();
    console.log(user,"mymy")
  },[ cookietoken ])


	useEffect(
		() => {
			localStorage.setItem('user', JSON.stringify(user));
		},
		[ user]
	);
  const logout = () => {
    setUser(null);
  };
  // if (pending) {
  //   return <>Loading...</>;
  // }
	return (
		<UserContext.Provider
			value={{
        logout,
				user,
				cookietoken
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
