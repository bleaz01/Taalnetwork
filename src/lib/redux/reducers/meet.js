import {
    IS_ROOM_HOST,
    CONNECT_ONLY_AUDIO,
    GET_ROOM_ID,
    SAVE_INDENTITY,
    SHOW_OVERLAY,
    SET_PARTICIPANTS,
    SET_MESSAGES
} from  "../actions/actionTypes"

const initialState ={
    identity:"",
    isRoomHost: false,
    connectOnlyWhithAudio:false,
    roomId:null,
    showOverlay:true,
    participants:[],
    messages:[]
}

const meet = (state = initialState, {type, payload})=>{
  

    switch(type){
        case IS_ROOM_HOST:

            return {
                ...state,
               isRoomHost:payload

            }
        case CONNECT_ONLY_AUDIO:
            return {
                ...state,
                connectOnlyWhithAudio:payload
            }
        case GET_ROOM_ID:

            return {
                ...state,
                roomId:payload
            }

        case SAVE_INDENTITY:
            return{
                ...state,
                identity:payload
            }
        case SHOW_OVERLAY:

            return{
                ...state,
                showOverlay:payload
            }
        case SET_PARTICIPANTS:
            return{
                ...state,
                participants: payload
            }
        case SET_MESSAGES:
            return{
                ...state,
                messages: payload
            }
        default: 
            return state
    }
}

export default meet