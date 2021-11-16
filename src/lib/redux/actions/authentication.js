import {
    LOGIN,
    LOGOUT,
    CURRENT_USER

} from './actionTypes'

export const handleAuthenticationErrors = err =>{
    return{
        type:LOGIN,
        payload: {current: null, user:null, err}
    }
}
export const handleCurrentUser = current =>{
    console.log(current,"reduxCurent")

    return{
        type:CURRENT_USER,
        payload: {current: current , user:null, error: null}
    }
}
export const handleLogin = user =>{
    console.log(user,"redux")
   
    return{
        type:LOGIN,
        payload:{ user , current:null, error:null}
    }
}

export const handleLogout=()=>{
    return{
        type:"LOGOUT",
        payload:{user: null , error:null}

    }
}