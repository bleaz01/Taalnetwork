import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getcurrentDiscution } from '../../lib/redux/actions/messenger'
import { UserContext } from '../../lib/context';

const RoomDesign = ({data}) => {
    const dispatch = useDispatch()
    const [lastMsg, setLastMsg] = useState("")
    const {user} = useContext(UserContext)

    const getConversation =()=>{
        dispatch(getcurrentDiscution(data.members[0],data.members[1]))
    }
    const {name, _id} = data

    const getLastMessages = ()=>{
     
        const res = axios.get(`${process.env.REACT_APP_API_URL}api/messagerie/last-message/${_id}`)
        setLastMsg(res.data)
     
    }

    const deleteConversation = ()=>{
        axios.patch(`${process.env.REACT_APP_API_URL}api/messagerie/delete-conversation/${_id}`,{
          id: user._id
        })
        window.location.reload()
    }
    useEffect(() => {
      getLastMessages()
       
     }, [])
 
   console.log(lastMsg,"data")
    return(

      <div onClick={()=> getConversation() } class="mt-2 cursor-pointer">
        <div class="flex flex-col -mx-4">
          <div class="relative flex flex-row items-center bg-baseTextColor p-4">
            <div onClick={() => deleteConversation()} className='border-solid border-2 w-5 h-5 text-center  rounded-full border-secondeColor absolute text-xs text-secondeColor right-0 -top-5 mr-4 mt-3'>x</div>
            <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">5 min</div>
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
            <img src={data.conversationImg} alt="img profil" className=" rounded-2xl h-8 w-8 mr-2" />
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">{name}</div>
              <div class="text-xs truncate w-40">{lastMsg?.text}</div>
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
