import {
    CURRENT_USER,
    LOGIN,
    LOGOUT,
    UPLOAD_BIO,
    UPLOAD_PICTURE
} from  "../actions/actionTypes"

const initialState = {
    user:null,
}

const user = (state = initialState, {type, payload})=>{
    console.log(state.current,'pel')
    switch(type){
        case LOGIN:
            if(state.user) {
                return state
            }
            return{
                user:payload.user,
                error:payload.error,
            }
        case LOGOUT: 
        case CURRENT_USER:
            console.log(payload)
            return state.user = payload
        case UPLOAD_PICTURE:
            console.log(payload)
            return {
                ...state.user,
                picture:payload
            }
        case UPLOAD_BIO:
            console.log(payload)
            return {
                ...state.user,
                bio:payload
            }
        default: 
            return state
    }
}

export default user 