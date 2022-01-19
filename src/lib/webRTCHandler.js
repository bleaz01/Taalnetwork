import configStore from '../lib/redux/store'
import { useDispatch } from 'react-redux'
import { setMessages, ShowOverlay } from './redux/actions/meet'
import * as fsIo from './socket-io'
import { store } from '..'
import Peer from "simple-peer";
import { fetchTurnCredentials, getTurnIceServers } from '../Components/utils/turnServer'

const permistionDevice ={
    video :true,
    audio: true
}

let localStream

export const  getLocalPreviewAndinitRoomConnection = async (isRoomHost,identity,roomId = null) => {

    await fetchTurnCredentials()
    navigator.mediaDevices.getUserMedia(permistionDevice).then(stream =>{
        console.log('successfuly ')
        localStream = stream;
        store.dispatch(ShowOverlay(false))
        
        isRoomHost ? fsIo.createNewRoom(identity) : fsIo.joinRoom(identity, roomId)
        showLocalVideoPreview(localStream)

    }).catch((err)=>{
        console.log(err)
    })

}

let peers ={}
let streams=[]
const getConfiguration =()=>{
    const turnIceServers = getTurnIceServers()

    if(turnIceServers){
        console.log('TURN server credentaiols fetched')
        console.log(turnIceServers)
        return{
            iceServers:[
                {
                    url: 'stun:stun.l.google.com:19302'
                },
                ...turnIceServers
            ]
        }
    }else{
        console.warn("Using only STUN server")
        return{
            iceServers:[
                {
                    url: 'stun:stun.l.google.com:19302'
                }
            ]
        }
    }
    
}

const messengerChannel ="messenger";
export const prepareNewPeerConnection = (connUserSocketId, isInitiator)=>{
     const configuration = getConfiguration()
     console.log(connUserSocketId,'socket')
     peers[connUserSocketId] = new Peer({
         initiator:isInitiator,
         config: configuration,
         stream: localStream,
         channelName:messengerChannel
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

     peers[connUserSocketId].on('data', (data) =>{
        const messageData = JSON.parse(data)
        appendMessagesData(messageData)
     })

    

    
}

export const handleSignalingData = (data) =>{
    peers[data.connUserSocketId].signal(data.signal)
}

const addStream = (stream, connUserSocketId)=>{
    const videosContainer = document.getElementById('live-video')
    const videoContainer = document.createElement('div')
    videoContainer.id = connUserSocketId
    videosContainer.classList.add('live_video_tract') 
    const videoElement = document.createElement('video')
    videoElement.autoplay = true
    videoElement.srcObject = stream
    videoElement.id =`${connUserSocketId}-video`
    videoElement.onloadedmetadata = () =>{
        videoElement.play()
    }
    videosContainer.appendChild(videoElement)
    videosContainer.appendChild(videoContainer)

}



const showLocalVideoPreview = (stream)=>{
    const videosContainer = document.getElementById('live-video')
    videosContainer.classList.add("live_video_styles")
    const videoContainer = document.createElement('div')
    videoContainer.classList.add('video_tract_container')
    const videoElement = document.createElement('video')
    videoElement.autoplay = true
    videoElement.muted = true
    videoElement.srcObject = stream
    videoElement.onloadedmetadata = () =>{
        videoElement.play()
    }
    videosContainer.appendChild(videoElement)
    videosContainer.appendChild(videoContainer)
    
}


export const toogleMicro =(isMuted)=>{
    localStream.getAudioTracks()[0].enabled = isMuted ? true : false
}

export const toogleCamera =(isDisabled)=>{
    localStream.getVideoTracks()[0].enabled = isDisabled ? true : false
}

export const toggleScreenShare = (
    isScreenSharingActive,
    screenSharingStream = null
  ) => {
    if (isScreenSharingActive) {
      switchVideoTracks(localStream);
    } else {
      switchVideoTracks(screenSharingStream);
    }
  };
  
  const switchVideoTracks = (stream) => {
    for (let socket_id in peers) {
      for (let index in peers[socket_id].streams[0].getTracks()) {
        for (let index2 in stream.getTracks()) {
          if (
            peers[socket_id].streams[0].getTracks()[index].kind ===
            stream.getTracks()[index2].kind
          ) {
            peers[socket_id].replaceTrack(
              peers[socket_id].streams[0].getTracks()[index],
              stream.getTracks()[index2],
              peers[socket_id].streams[0]
            );
            break;
          }
        }
      }
    }
  };

  const appendMessagesData = (messagesData)=>{
    const messages = store.getState().meet.messages
    store.dispatch(setMessages([...messages,messagesData]))
  }

  export const sendMessageUsingDataChannel =(messageContent)=>{
      const identity = store.getState().meet.identity

      const localMessageData = {
          content: messageContent,
          identity,
          messageCreatedByMe:true
      }
      appendMessagesData(localMessageData)

      const messageData = {
        content: messageContent,
        identity,
    }

      const stringifieMessahgeData = JSON.stringify(messageData)

      for(let socketId in peers){
          peers[socketId].send(stringifieMessahgeData)
      }
  }