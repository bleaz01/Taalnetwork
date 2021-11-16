import {
    CURRENT_USER,
    LOGIN,
    LOGOUT
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

        default: 
            return state
    }
}

export default user 