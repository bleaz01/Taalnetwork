import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import Peer from 'peerjs'
import Logo from "../assets/logo.png"
import { 
   
    connectWithSocketIoServer,
    
}from '../../lib/socket-io'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faVideo } from '@fortawesome/free-solid-svg-icons'
import shortid from "shortid";
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { ShowOverlay } from '../../lib/redux/actions/meet';




const Live = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.meet)

   const history = useHistory()  
   const startCall =()=>{
      // const uid = shortid.generate();
      // history.push(`live/${uid}#init`);
   }
    // #video-grid{
    //     display: flex;
    //     justify-content: center;
    //     flex-wrap: wrap;
    //  }
    //  video{
    //     height: 300px;
    //     width: 400px;
    //     object-fit: cover;
    //     padding: 8px;
    //  }

    // useEffect(()=>{
    //   connectWithSocketIoServer()
    //   console.log('bonjour')

    // },[dispatch])

   
    return (
      <div className="container">
      
      <div className="flex flex-col bg-secondeColor   h-screen w-screen">
         <div className=" flex items-center pl-5 pt-5">
            <img className="w-20 rounded-full"src={Logo}/>
            <span className="text-baseTextColor pl-2">Taalnetwork</span>
         </div>
         <h2 className="text-center text-3xl pt-5 text-baseTextColor">Video meetings</h2>

        <div className="flex my-auto items-center  px-16">
          <div className="flex flex-col">
            <p className="text-center text-baseTextColor text-2xl pr-10">
              Ici créer des groupes de conversation video pour ameliorer votre oral. Vous pouvez également discuter avec vos éleves pour renforcé leurs axent  
            </p>
            <div  className=" min-w-1/2 bg-whiteColor flex  p-5 mt-10 mr-10 rounded-lg">
              <button onClick={() => history.push('live/joint-room?host=true')} className="w-full bg-baseColor text-baseTextColor mr-2 rounded-lg p-3" >
                <FontAwesomeIcon className="mr-2 text-greenColor" icon={faVideo} />
                   Create Meeting
              </button>
              <div className="flex min-w-1/2 items-center">
              <button onClick={() => history.push("live/joint-room")} className="w-full bg-whiteColor border-2 text-baseColor border-baseColor ml-2 rounded-lg p-3" >
                <FontAwesomeIcon className="mr-2 text-greenColor" icon={faVideo} />
                   Join meeting
              </button>
              </div>
            </div>
          </div>
          <div className="right-side">
          <div className="content">
            <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" />
          </div>
        </div>
        </div>
       
      </div>
    </div>
    )
}

export default Live

