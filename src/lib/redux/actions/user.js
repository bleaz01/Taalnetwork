import axios from 'axios'
import {
    CURRENT_USER
} from './actionTypes'

export const getUser =(uId)=>{
    return (dispach) =>{
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/user/${uId}`)
        .then((res)=>{
            dispach({ type: CURRENT_USER, payload: res.data})
        })
        .catch((err)=> console.log(err))
    }
}
