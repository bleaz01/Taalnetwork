import {
    IS_ROOM_HOST,
    CONNECT_ONLY_AUDIO,
    GET_ROOM_ID,
    SAVE_INDENTITY,
    SHOW_OVERLAY,
    SET_PARTICIPANTS,
    SET_MESSAGES,
} from './actionTypes'

export const getIsRoomHost = (isRoomHost)=>{
    return{
        type:IS_ROOM_HOST,
        payload: isRoomHost
    }

}

export const handleAudio = (onlyAudio)=>{
    return{
        type:CONNECT_ONLY_AUDIO,
        payload:onlyAudio,

    }
}

export const saveIndentity =(indentity)=>{
    return{
        type:SAVE_INDENTITY,
        payload: indentity
    }
}

export const getRoomId = (id)=>{
    return{
        type:GET_ROOM_ID,
        payload:id
    }
}

export const ShowOverlay = (showOverlay)=>{
    return{
        type:SHOW_OVERLAY,
        payload: showOverlay
        
    }
}

export const setParticipants = (participants)=>{
    return{
        type:SET_PARTICIPANTS,
        payload:participants
    }
}

export const setMessages = (messages)=>{
    console.log(messages,'payload')
    return{
        type:SET_MESSAGES,
        payload:messages
    }
}