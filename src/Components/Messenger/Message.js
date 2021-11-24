import React from 'react'

const Message = ({msg, user}) => {
    console.log(msg.sender,'============',user.pseudo)

    return (
        msg.sender == user.pseudo 
        ?
        (
          <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <div
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
               <img src={msg.senderImg} alt="img profil" className="rounded-2xl h-8 w-8 mr-2" />
              </div>
              <div
                  className="relative mr-3 text-sm bg-baseColor bg-opacity-50 py-2 px-4 shadow rounded-xl"
    
                    
              >
                <div>{msg.text}</div>
                {/* <small>{msg.timestamp}</small> */}
              </div>
            </div>
          </div>
        )
        :
        (
            <div class="col-start-1 col-end-8 p-3 rounded-lg">    
            <div class="flex flex-row items-center">
              <div
                  class="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
              >
                A
                {/* <img src={imgProfil} alt="img profil" className="h-8 w-8 mr-2" /> */}
              </div>
              <div
                  class="relative ml-3 text-sm bg-white py-2 px-4 shadow bg-greenColor bg-opacity-50 rounded-xl"
              >
                 <div>{msg.text}</div>
              </div>
            </div>
          </div>






           

            )


     

    )
}

export default Message
