import {
    CURRENT_USER,
    LOGIN,
    LOGOUT,
    UPLOAD_BIO,
    UPLOAD_PICTURE,
    UPLOAD_USER
} from  "../actions/actionTypes"

const initialState = {
    user:null,
}

const user = (state = initialState, {type, payload})=>{
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
            case UPLOAD_USER:
                console.log(payload)
                return {
                    ...state.user,
                    ...payload
                }
        default: 
            return state
    }
}

export default user 