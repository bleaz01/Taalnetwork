import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import MessageContainer from './MessageContainer';
import { sendMessageUsingDataChannel} from '../../../lib/webRTCHandler'

const LiveMessenger = ({
    setIsMessenger, 
    sendMsg, 
    messageList
}) => {
  const [msg, setMsg] = useState("");
  
  const [showParticpant, setShowParticpant] = useState(true)
  const [showMsg, setShowMsg] = useState(false)
  console.log('liveMessae')
  const participants = useSelector(state => state.meet.participants)
  const messages = useSelector(state => state.meet.messages)
  const data = useSelector((state) => state.meet);  


    const handleChangeMsg = (e) => {
      console.log(e)
        setMsg(e.target.value);

      // }
    };
    console.log(msg,'msssss')
    
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          sendMessageUsingDataChannel(msg)
          
        }
      };
    
      const handleSendMsg = () => {
        sendMessageUsingDataChannel(msg)
       
      };

      const handleShowParticipant = ()=>{
        setShowMsg(false)
        setShowParticpant(true)
      }

      const handleShowMsg = ()=>{
        setShowMsg(true)
        setShowParticpant(false)
      }
      console.log(msg,"mes")
    return (
        <div className="h-full bg-greyColor flex flex-col">
          <div className="flex justify-between px-4 pt-6">
            <h3 className="text-secondeColor ">Meeting details</h3>
            <FontAwesomeIcon
              className="icon"
              icon={faTimes}
              onClick={() => {
                setIsMessenger(false);
              }}
            />
          </div>
    
          <div className="mt-12 flex justify-center">
            <div className="flex justify-around border-2 rounded-lg border-baseColor  w-1/2">
            <div onClick={() => handleShowParticipant()} className={showParticpant ? "bg-baseColor text-whiteColor w-1/2 text-center items-center":"bg-whiteColor w-1/2 text-center text-baseColor items-center  rounded-l-lg"}>
              <FontAwesomeIcon className="icon cursor-pointer" icon={faUserFriends} />
            </div>
            <div onClick={() => handleShowMsg()} className={showMsg? "bg-baseColor text-whiteColor w-1/2 text-center items-center ":"bg-whiteColor w-1/2 text-center text-baseColor items-center  rounded-r-lg"}>
              <FontAwesomeIcon className="icon cursor-pointer" icon={faCommentAlt} />
            </div>
            </div>
           
          </div>
    
            { showParticpant &&  <div className="chat-section">
              {participants && participants.map((participant)=>{
                return (
                <p className="pl-2" >{participant.identity}</p>
                )
                // console.log(participant.identity,'ppp')
              })}
            </div>

            }
           
            {
              showMsg && <div>
                {
                 messages && messages.map((message, index)=>{
                  //  console.log(message,"llll")
                  return(
                    <MessageContainer
                      key={`${message.content}${index}`}
                      message={message}
                    />      
                  )
                    
                   
                  })
                }
              </div>
            
            }
            {/* {messageList.map((item) => (
              <div key={item.time} className="chat-block">
                <div className="sender">
                  {item.user} <small>{item.time}</small>
                </div>
                <p className="msg">{item.msg}</p>
              </div>
            ))} */}
    
          <div className="justify-end mt-auto mx-auto">
            <input
              className='mb-2 rounded-lg p-1 '
              placeholder="Send a message to everyone"
              onChange={(e) => handleChangeMsg(e)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <FontAwesomeIcon
              className="ml-2 cursor-pointer "
              icon={faPaperPlane}
              onClick={() => handleSendMsg()}
            />
          </div>
        </div>
      );
    };


export default LiveMessenger
