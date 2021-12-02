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
} from "@fortawesome/free-solid-svg-icons";

const LiveFooter = () => {
  const [ screenCastStream, setScreenCastStream ] = useState();
	const [ meetInfoPopup, setMeetInfoPopup ] = useState(true);
	const [ isPresenting, setIsPresenting ] = useState(false);
  const [ isAudio, setIsAudio ] = useState(true);

  const toggleAudio =()=>{

  }
  const disconnectCall= ()=>{

  }

  const stopScreenShare=()=>{

  }
  const screenShare = ()=>{
    
  }

    return (
    <div className="flex w-5/5 h-16 bg-baseColor justify-between items-center px-4">
        <div className="left-item  w-1/3">
          <div className="icon-block">
            Meeting details
            <FontAwesomeIcon className=" " icon={faAngleUp} />
          </div>
        </div>
        <div className="flex justify-between w-1/3">
          <div
            className={` border-2 border-whiteColor w-8 text-center rounded-full text-greenColor ${!isAudio ? "text-redColor" : null}`}
            onClick={() => toggleAudio(!isAudio)}
          >
            <FontAwesomeIcon
              className="icon"
              icon={isAudio ? faMicrophone : faMicrophoneSlash}
            />
          </div>
          <div className="border-2 border-whiteColor w-8 text-center rounded-full" onClick={disconnectCall}>
            <FontAwesomeIcon className="" icon={faPhone} />
          </div>
          <div className="border-2 border-whiteColor w-8 text-center rounded-full">
            <FontAwesomeIcon className="icon" icon={faVideo} />
          </div>
        </div>
        <div className="flex w-1/3 justify-end">
          <div className="text-center pr-3">
            <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
            <p className="">Turn on captions</p>
          </div>
  
          {isPresenting ? (
            <div className="text-center" onClick={stopScreenShare}>
              <FontAwesomeIcon className="" icon={faDesktop} />
              <p className="title">Stop presenting</p>
            </div>
          ) : (
            <div className="text-center" onClick={screenShare}>
              <FontAwesomeIcon className="icon red" icon={faDesktop} />
              <p className="title">Present now</p>
            </div>
          )}
        </div>
      </div>
    );
  };

export default LiveFooter
