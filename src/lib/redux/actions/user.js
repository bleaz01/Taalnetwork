import axios from 'axios'
import {
    CURRENT_USER,
    UPLOAD_BIO,
    UPLOAD_PICTURE,
    UPLOAD_USER
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

export const uploadPicture = (fd,id)=>{
    return(dispach) =>{
           
        axios.post(`${process.env.REACT_APP_API_URL}api/image/change-profilepic`,fd
        //{
			// onUploadProgress: (progressEvent) => {
			//   setProgress((progressEvent.loaded / progressEvent.total) * 100);
			//   console.log(
			// 	'upload progress: ',
			// 	Math.round((progressEvent.loaded / progressEvent.total) * 100)
			//   );
			// }
		//}
        )
        .then((res)=>{
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

export const uploadUser = (data,id)=>{
    console.log('jjj', data)
    return(dispach) =>{
        axios({
            method:'put',
            url:`${process.env.REACT_APP_API_URL}api/user/${id}`,
                data:{
                    ...data
                }
            
          }).then((res)=>{
              return axios
              .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
              .then((res)=>{
                dispach({type:UPLOAD_USER, payload: res.data})
              })
          }).catch((err)=>{
              console.log(err)
          })
    }
    
} 
