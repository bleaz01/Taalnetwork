import React from 'react'

const FriendsList = ({user}) => {
    console.log(user,'fr')
    return (
        <div onClick={()=> console.log("d") } class="mt-2 cursor-pointer">
        <div class="flex flex-col -mx-4">
          <div class="relative flex flex-row items-center bg-baseTextColor p-4">
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
            <img src={user.picture} alt="img profil" className=" rounded-2xl h-8 w-8 mr-2" /> 
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">{user.pseudo}</div>
            </div>
            <div class="flex-shrink-0 ml-2 self-end mb-1">
            </div>
          </div>
        </div>
      </div>
    )
}

export default FriendsList
