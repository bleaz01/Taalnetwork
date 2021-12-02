import React,{useEffect, useRef,useContext, useState}from 'react'
import SideBar from "./sideBar"
import Header from "./Header"
import Pusher from "pusher-js"
import axios from 'axios'
import{ useForm}from "react-hook-form"
import { useSelector } from 'react-redux'
import imgBg from '../assets/Dialogue.png'
import Message from './Message'
import { UserContext } from '../../lib/context'
import { dataeParser } from '../utils/function'




 

const Messenger = () => {
  const [messages, setMessages] = useState([])
  const [listRooms, setListRooms] = useState([])    
  const {user} = useContext(UserContext)

  const currentDiscution = useSelector(state => state.messenger)
  const [userToRes, setUserToRes] = useState("")
  const [lastTimestamp, setlastTimestamp]=useState('')
  const scrollRef = useRef()
  
  const { register, handleSubmit, watch, setFocus, formState: { errors } } = useForm();

  const pusher = new Pusher('446a9c83560cab0e7f8d', {
    cluster: 'eu'
  });

 
  const getListRooms = ()=>{
      axios({
          method:'get',
          url:`${process.env.REACT_APP_API_URL}api/messagerie/conversation/${user._id}`,
        }).then((res)=> setListRooms(res.data)).then((err)=>{
          console.log(err)
        })

   
  }

  const getMessage = ()=>(
    axios({
      method:'get',
      url:`${process.env.REACT_APP_API_URL}api/messagerie/message/${currentDiscution._id}`,
    }).then((res)=> setMessages(res.data)).then((err)=>{
      console.log(err)
    })
  )


 console.log(messages,'list')
  
const onSubmit = data => {

    // console.log(currentDiscution[0]._id,'send')
    axios.post(`${process.env.REACT_APP_API_URL}api/messagerie/new/message`,
    {
      conversationId:currentDiscution._id,
      sender: user.pseudo,
      senderImg: user.picture,
      text: data.message,
   })
}


console.log(user)

  useEffect(() => {
    getListRooms()
    
  }, [user._id])

  

  useEffect(() => {
    getMessage()
   }, [currentDiscution])  

  useEffect(() => {
    pusher.unsubscribe('messages')

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (message) => {
      setMessages([...messages,message])
    });

     return ()=>{
       channel.unbind_all();
       channel.unsubscribe()
     }
  
  },[setFocus])

  useEffect(() => {
   scrollRef.current?.scrollIntoView({behavior:"smooth"})
  }, [messages])

 

    return (
        <div class="flex flex-row h-screen antialiased text-gray-800">
          <SideBar listRooms={listRooms}/>
            <div class="bg-secondeColor flex flex-col h-full w-full bg-white space-y-6 px-4 py-6">
            <Header user={currentDiscution.conversationImg}/>
              <div class="bg-greyColor h-full overflow-hidden py-4 rounded-2xl">
                <div class="h-full overflow-y-auto">
                  <div class="flex flex-col gap-y-2">
                  
                  { 
                   currentDiscution ? messages.map((msg) =>(
                      <div className={'flex flex-col'} ref={scrollRef}>
                        <Message key={msg._id} msg={msg} user= {user}/> 
                      </div>
                    )) : <img className='w-2/3 align-middle' src={imgBg}/>
                  }   

                  </div>
                </div>
              </div>
              <div class="flex flex-row items-center">
                <div class="bg-baseColor flex flex-row items-center w-full border rounded-2xl h-12 px-2">
                  <button class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
                    <svg class="w-5 h-5"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                    </svg>
                  </button>
                  <form onSubmit={handleSubmit(onSubmit)} class="w-full flex">
                    <input {...register("message") }
                        type="text"
                           class="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center" placeholder="Type your message...."/>
                        <div class="ml-6">
                      <button type="submit" class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white">
                        <svg class="w-5 h-5 transform rotate-90 -mr-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                  <div class="flex flex-row">
                    <button class="flex items-center justify-center h-10 w-8 text-gray-400">
                      <svg class="w-5 h-5"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                      </svg>
                    </button>
                    <button class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
                      <svg class="w-5 h-5"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    )
    
}

export default Messenger
