import axios from 'axios'
import {
    CURRENT_USER,
    UPLOAD_BIO,
    UPLOAD_PICTURE
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

export const uploadPicture = (data,id)=>{
    return(dispach) =>{
        axios({
            method:'post',
            url:`${process.env.REACT_APP_API_URL}api/user/upload`,
                data:{
                   ...data
                }
            
          }).then((res)=>{
              return axios
              .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
              .then((res)=>{
                dispach({type:UPLOAD_PICTURE, payload: res.data.picture})
              })
          }).catch((err)=>{
              console.log(err)
          })
    }
    
} 
export const uploadBio = (data,id)=>{
    console.log('jjj', data)
    return(dispach) =>{
        axios({
            method:'put',
            url:`${process.env.REACT_APP_API_URL}api/user/${id}`,
                data:{
                   bio:data
                }
            
          }).then((res)=>{
              return axios
              .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
              .then((res)=>{
                dispach({type:UPLOAD_BIO, payload: res.data.bio})
              })
          }).catch((err)=>{
              console.log(err)
          })
    }
    
} 
