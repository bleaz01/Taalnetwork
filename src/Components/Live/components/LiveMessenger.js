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

const LiveMessenger = ({
    setIsMessenger, 
    sendMsg, 
    messageList
}) => {
  const [msg, setMsg] = useState("");
  console.log('liveMessae')
  const participants = useSelector(state => state.meet.participants)
  const data = useSelector((state) => state.meet);  


    const handleChangeMsg = (e) => {
        setMsg(e.target.value);
      };
    
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          sendMsg(msg);
          setMsg("");
        }
      };
    
      const handleSendMsg = () => {
        sendMsg(msg);
        setMsg("");
      };
      console.log(participants,'list')

    return (
        <div className="md:w-2/5 w-1/5 bg-greenColor flex flex-col">
          <div className="flex  justify-between px-4 pt-6 ">
            <h3>Meeting details</h3>
            <FontAwesomeIcon
              className="icon"
              icon={faTimes}
              onClick={() => {
                setIsMessenger(false);
              }}
            />
          </div>
    
          <div className="mt-12 flex justify-around">
            <div className="tab">
              <FontAwesomeIcon className="icon cursor-pointer" icon={faUserFriends} />
              {/* <p>Participant: {participants.length}</p> */}
            </div>
            <div className="tab active">
              <FontAwesomeIcon className="icon cursor-pointer" icon={faCommentAlt} />
              <p>Chat</p>
            </div>
          </div>
    
          <div className="chat-section">
            {participants && participants.map((participant)=>{
              return (
              <p>{participant.identity}</p>
              )
              // console.log(participant.identity,'ppp')
            })}
            {/* {messageList.map((item) => (
              <div key={item.time} className="chat-block">
                <div className="sender">
                  {item.user} <small>{item.time}</small>
                </div>
                <p className="msg">{item.msg}</p>
              </div>
            ))} */}
          </div>
    
          <div className="justify-end mt-auto mx-auto">
            <input
            className='mb-2 rounded-lg p-1 '
              placeholder="Send a message to everyone"
              value={msg}
              onChange={(e) => handleChangeMsg(e)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <FontAwesomeIcon
              className="ml-2 cursor-pointer "
              icon={faPaperPlane}
              onClick={handleSendMsg}
            />
          </div>
        </div>
      );
    };


export default LiveMessenger
