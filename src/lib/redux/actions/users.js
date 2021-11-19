import axios from 'axios'
import {
    GET_ALL_USERS
} from './actionTypes'


export const getAllUser =(uId)=>{
    return (dispach) =>{
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/user`)
        .then((res)=>{
            dispach({ type: GET_ALL_USERS, payload: res.data})
        })
        .catch((err)=> console.log(err))
    }
}