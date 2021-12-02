import configStore from '../redux/store'
import io from 'socket.io-client'
import { getRoomId, saveIndentity, setParticipants } from '../redux/actions/meet'
import { store } from '../..'
import * as webRTCHandler from '../../lib/webRTCHandler';
export const socket = io("http://localhost:5002", {transports: ['websocket', 'polling', 'flashsocket']})
export const connectWithSocketIoServer = async ()=>{

    // const SERVER = 'http://localhost:8500/'
    // var socket = io({transports: ['websocket'], upgrade: false,host:});

    // let socket = io(SERVER,{reconnect: true})

    socket.on('connect',()=>{
        console.log('successfully socket io server')
        console.log(socket.id,'id')

        
    });
    socket.on('room-id',(data)=>{
        const {roomId}= data
        store.dispatch(getRoomId(roomId))
    });

    socket.on('room-user', (data) =>{
        const{connectedUsers}= data
        store.dispatch(setParticipants(connectedUsers))
    });
    socket.on('conn-prepare', data =>{
        const {connUserSocketId}= data
        webRTCHandler.prepareNewPeerConnection(connUserSocketId)

        socket.emit('conn-init',{connUserSocketId: connUserSocketId})
    })

    socket.on('conn-signal', (data) =>{
        webRTCHandler.handleSignalingData(data)
    })

    socket.on('conn-init', (data)=>{
        const {connUserSocketId} = data

        webRTCHandler.prepareNewPeerConnection(connUserSocketId, true)
    })
    
}


export const createNewRoom = (identity)=>{
    
    const data ={
        identity
    }

    socket.emit('create-new-room', (data))
}

export const joinRoom= (identity, roomId)=>{
    const data ={
        roomId,
        identity
    }

    socket.emit('join-room', data)
}

export const signalPeerData = (data)=>{
    socket.emit('conn-signal', data)
}