import {
    IS_ROOM_HOST,
    CONNECT_ONLY_AUDIO,
    GET_ROOM_ID,
    SAVE_INDENTITY,
    SHOW_OVERLAY,
    SET_PARTICIPANTS
} from  "../actions/actionTypes"

const initialState ={
    identity:"",
    isRoomHost: false,
    connectOnlyWhithAudio:false,
    roomId:null,
    showOverlay:true,
    participants:[]
}

const meet = (state = initialState, {type, payload})=>{
  

    switch(type){
        case IS_ROOM_HOST:
            console.log(payload,'payload room host')

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
            console.log(payload,'payload roomId')

            return {
                ...state,
                roomId:payload
            }

        case SAVE_INDENTITY:
            console.log(payload,'payload indentity')

            return{
                ...state,
                identity:payload
            }
        case SHOW_OVERLAY:
            console.log(payload,'payload overlay')

            return{
                ...state,
                showOverlay:payload
            }
        case SET_PARTICIPANTS:
            console.log(payload,'payload overlay')
            return{
                ...state,
                participants: payload
            }
        default: 
            return state
    }
}

export default meet