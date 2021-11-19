import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getcurrentDiscution } from '../../lib/redux/actions/messenger'

const RoomDesign = ({data}) => {
    const dispatch = useDispatch()

    const getConversation =()=>{
        dispatch(getcurrentDiscution(data.members[0],data.members[1]))
    }
    const {name, _id} = data
    console.log(data.members,'kkkk')
    return(

      <div onClick={()=> getConversation() } class="mt-2 cursor-pointer">
        <div class="flex flex-col -mx-4">
          <div class="relative flex flex-row items-center bg-baseTextColor p-4">
            <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">5 min</div>
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
              T
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">{name}</div>
              {/* <div class="text-xs truncate w-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloribus?</div> */}
            </div>
            <div class="flex-shrink-0 ml-2 self-end mb-1">
              {/* <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">{timestamp}</span> */}
            </div>
          </div>
        </div>
      </div>
    )
}

export default RoomDesign
