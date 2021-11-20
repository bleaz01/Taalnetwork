import axios from 'axios'
import {
   LIKE_POST,
   UNLIKE_POST,
   GET_POSTS
} from './actionTypes'



export const getPost = (postId, userId)=>{
    return(dispatch) =>{
        return axios.get(`${process.env.REACT_APP_API_URL}api/post`,
        {ike:userId}
        ).then((res)=>{
            dispatch({type: GET_POSTS, payload:res.data})
        }).catch((err)=>console.log(err))
    }
}

export const likePost = (postId, userId)=>{
    return(dispatch) =>{
        return axios.patch(`${process.env.REACT_APP_API_URL}api/post/like/${postId}`,
        {ike:userId}
        ).then((res)=>{
            dispatch({type: LIKE_POST, payload:{postId, userId}})
        }).catch((err)=>console.log(err))
    }
}

export const unlikePost = (postId, userId)=>{
    return(dispatch) =>{
        return axios.patch(`${process.env.REACT_APP_API_URL}api/post/unlike/${postId}`,
        {ike:userId}
        ).then((res)=>{
            dispatch({type: UNLIKE_POST, payload:{postId, userId}})
        }).catch((err)=>console.log(err))
    }
}