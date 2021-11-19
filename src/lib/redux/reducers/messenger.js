import {
    CURRENT_CONVER,
} from  "../actions/actionTypes"

const initialState = {
    discution: null,
}

const messenger = (state = initialState, {type, payload})=>{
    console.log(payload,'pel')
    console.log('jea')

    switch(type){
        case CURRENT_CONVER:
            return state.discution = payload
        default: 
            return state
    }
}

export default messenger