import React from 'react'

const MessageContainer = ({message}) => {
    console.log(message," messageConatiner")
    console.log("juli")
    let firstLetter = message.identity.split('')[0]
    firstLetter = firstLetter.toUpperCase()
    return (
        <div className="p-2">
            <div className="rounded-full absolute  bg-baseColor w-5 h-5 text-center flex justify-center text-baseTextColor">
               <small className=""> {firstLetter} </small> 
            </div>
            <p className="p-5 text-sm bg-whiteColor rounded-lg">
                {message.content}
            </p>
            <small className="text-center flex justify-end text-xs"> from: {message.identity}</small>
        </div>
    )
}

export default MessageContainer
