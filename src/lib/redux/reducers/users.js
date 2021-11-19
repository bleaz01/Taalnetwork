import {
    GET_ALL_USERS
} from  "../actions/actionTypes"

const initialState = {
    
}
const users = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_ALL_USERS:
           return payload
        default: 
            return state
    }
}

export default users