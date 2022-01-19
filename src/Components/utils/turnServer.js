import axios from "axios"
import { applyMiddleware } from "redux"

let  TURNIceServers = null

export const fetchTurnCredentials = async ()=>{

    const responseData = await axios.get(`${process.env.REACT_APP_API_LIVE_URL}get-turn-credentials`)

    // console.log(responseData,'data')
    if(responseData.data.token?.iceServers){
        TURNIceServers = responseData.data.token.iceServers
    }
    console.log(TURNIceServers,"kkkkkkkkk")

    return TURNIceServers
}

export const getTurnIceServers = ()=>{

    return TURNIceServers
}