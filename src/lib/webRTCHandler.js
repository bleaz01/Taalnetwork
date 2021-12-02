import configStore from '../lib/redux/store'
import { useDispatch } from 'react-redux'
import { ShowOverlay } from './redux/actions/meet'
import * as fsIo from './socket-io'
import { store } from '..'
import Peer from "simple-peer";

const permistionDevice ={
    video :true,
    audio: true,
}

let localStream

export const  getLocalPreviewAndinitRoomConnection = async (isRoomHost,identity,roomId = null) => {


    navigator.mediaDevices.getUserMedia(permistionDevice).then(stream =>{
        console.log('successfuly ')
        localStream = stream;
        store.dispatch(ShowOverlay(false))

        showLocalVideoPreview(localStream)
        
        isRoomHost ? fsIo.createNewRoom(identity) : fsIo.joinRoom(identity, roomId)
    }).catch((err)=>{
        console.log(err)
    })

}

let peers ={}
let streams=[]
const getConfiguration =()=>{
    return{
        iceServers:[
            {
                utls: 'stun:stun.l.google.com:19302'
            }
        ]
    }
}
export const prepareNewPeerConnection = (connUserSocketId, isInitiator)=>{
     const configuration = getConfiguration()
     peers[connUserSocketId] = new Peer({
         initiator:isInitiator,
         config: configuration,
         stream: localStream
     });

     peers[connUserSocketId].on('signal', (data)=>{
         const signalData ={
             signal:data,
             connUserSocketId:connUserSocketId
         }
         fsIo.signalPeerData(signalData)
     })

     peers[connUserSocketId].on('stream', (stream) =>{
        console.log('new stream')

        addStream(stream,connUserSocketId)
        streams =[...streams, stream]
     })
}

export const handleSignalingData = (data) =>{
    peers[data.connUserSocketId].signal(data.signal)
}

const addStream = (stream, connUserSocketId)=>{
//
}



const showLocalVideoPreview = (stream)=>{
    const videosContainer = document.getElementById('live-video')
    videosContainer.classList.add("live_video_styles")
    const videoContainer = document.createElement('div')
    videoContainer.classList.add('live_video_tract')
    const videoElement = document.createElement('video')
    videoElement.autoplay = true
    videoElement.muted = true
    videoElement.srcObject = stream
    videoElement.onloadedmetadata = () =>{
        videoElement.play()
    }
    videosContainer.appendChild(videoElement)
    videosContainer.appendChild(videosContainer)
}