import axios from 'axios'
import {
   LIKE_POST,
   UNLIKE_POST,
   GET_POSTS,
   MODIFY_POST
} from './actionTypes'



export const getPost = (postId, userId)=>{
    return(dispatch) =>{
        return axios.get(`${process.env.REACT_APP_API_URL}api/post`)
        .then((res)=>{
            dispatch({type: GET_POSTS, payload:res.data})
        }).catch((err)=>console.log(err))
    }
}

export const likePost = (postId, userId)=>{
    return(dispatch) =>{
        return axios.patch(`${process.env.REACT_APP_API_URL}api/post/like/${postId}`,
        {like:userId}
        ).then((res)=>{
            dispatch({type: LIKE_POST, payload:{postId, userId}})
        }).catch((err)=>console.log(err))
    }
}

export const unlikePost = (postId, userId)=>{
    return(dispatch) =>{
        return axios.patch(`${process.env.REACT_APP_API_URL}api/post/unlike/${postId}`,
        {like:userId}
        ).then((res)=>{
            dispatch({type: UNLIKE_POST, payload:{postId, userId}})
        }).catch((err)=>console.log(err))
    }
}

export const correctionPost = (postId, message) => {
    console.log(message,' reducer')
    return (dispatch) => {
      return axios.put(`${process.env.REACT_APP_API_URL}api/post/${postId}`,{ message })
        .then((res) => {
          dispatch({ type: MODIFY_POST, payload: { message, postId } });
        })
        .catch((err) => console.log(err));
    };
  };