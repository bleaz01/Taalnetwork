import axios from 'axios'
import {
    CURRENT_CONVER
} from './actionTypes'

export const getcurrentDiscution =(UserId,senderId)=>{
    // console.log(id, "====")
    return (dispach) =>{
        return axios.get(`${process.env.REACT_APP_API_URL}api/messagerie/conversation/find/${UserId}/${senderId}`)
        .then((res)=>{
           
                console.log(res.data)
                console.log(res.data,'ui')
                  dispach({ type: CURRENT_CONVER, payload: res.data})
        
          
        })
        .catch((err)=> console.log(err))
    }
}