import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faVideoSlash
} from "@fortawesome/free-solid-svg-icons";
import { toogleCamera, toogleMicro, toggleScreenShare } from '../../../lib/webRTCHandler';
import { Container } from 'postcss';
import LocalScreenSharingPreview from './LocalScreenSharingPreview';

const LiveFooter = () => {
  const [ screenCastStream, setScreenCastStream ] = useState();
	const [ meetInfoPopup, setMeetInfoPopup ] = useState(true);
	const [ isPresenting, setIsPresenting ] = useState(null);
  const [ isAudio, setIsAudio ] = useState(false);
  const [ isVideo, setIsVideo ] = useState(false);


  const constraints ={
    audio:false,
    video:true
  }
  const toggleAudio =()=>{
    toogleMicro(isAudio)
    setIsAudio(!isAudio)
  }
  const toggleVideo =()=>{
    toogleCamera(isVideo)
    setIsVideo(!isVideo)
    console.log('kkkk')
  }

  const handlePresenting = async ()=>{
    // setIsPresenting(!isPresenting)
    console.log("kkkkllll")
    if(!screenCastStream){
      let stream = null;
      try{
        stream = await navigator.mediaDevices.getDisplayMedia(constraints)
      }catch(err){
        console.log(err)
      }
      if(stream){
        setIsPresenting(stream)
        toggleScreenShare(screenCastStream, stream)
        setScreenCastStream(true)
      }
      else{
        toggleScreenShare(screenCastStream)
        setScreenCastStream(false)

        isPresenting.getTracks().forEach(t => t.stop())
        setIsPresenting(null)
      }

    }
  }
  const disconnectCall= ()=>{

  }

  const stopScreenShare=()=>{

  }
  const screenShare = ()=>{
    
  }

    return (
      <>
    <div className="flex w-5/5 h-24 bg-baseColor justify-between items-center px-4">
        <div className="left-item  w-1/3">
          <div className="icon-block">
            Meeting details
            <FontAwesomeIcon className=" " icon={faAngleUp} />
          </div>
        </div>
        <div className="flex justify-between w-1/3">
          <div
            className={` border-2 border-whiteColor w-8 text-center rounded-full text-greenColor ${isAudio ? "text-redColor" : null}`}
            onClick={() => toggleAudio()}
          >
            <FontAwesomeIcon
              className="icon"
              icon={!isAudio ? faMicrophone : faMicrophoneSlash}
            />
          </div>
          <div className="border-2 border-whiteColor w-8 text-center rounded-full" onClick={disconnectCall}>
            <FontAwesomeIcon className="" icon={faPhone} />
          </div>
          <div onClick={()=> toggleVideo()} className="border-2 border-whiteColor w-8 text-center rounded-full">
            <FontAwesomeIcon className="icon" icon={!isVideo ? faVideo : faVideoSlash} />
          </div>
        </div>
        <div className="flex w-1/3 justify-end">
          <div className="text-center  flex flex-col items-center pr-3">
            <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
            <span className="text-xs">Turn on captions</span>
          </div>
  
          {isPresenting ? (
            <div className="text-center flex flex-col items-center" onClick={stopScreenShare}>
              <FontAwesomeIcon className="" icon={faDesktop} />
              <span className="title text-xs">Stop presenting</span>
            </div>
          ) : (
            <div className="text-center flex flex-col items-center" onClick={screenShare}>
              <FontAwesomeIcon onClick={() => handlePresenting()}  className="icon red cursor-pointer" icon={faDesktop} />
              <span className="title text-xs">Present now</span>
            </div>
          )}
        </div>
      
      </div>
        {screenCastStream && (
          <LocalScreenSharingPreview stream={isPresenting}/>
        )}
        </>
    );
  };

export default LiveFooter
