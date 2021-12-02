import React, { useContext, useEffect, useState, } from 'react'
import CardComment from './CardComment'
import{useForm}from "react-hook-form"
import axios from 'axios'
import { UserContext } from '../../lib/context'
import { useDispatch } from 'react-redux'
import { correctionPost, likePost, unlikePost } from '../../lib/redux/actions/post'
import { formatDate } from '../utils/function'
import { useHistory } from 'react-router'
// import { fas } from 'fontawesome.macro'
const CardPost = ({image, post}) => {
    const [openFeed, setopenFeed] = useState(false)
    const [openComment, setopenComment] = useState(false)
    const [textUpdate, setTextUpdate] = useState('')
    const [modify, setModify] = useState(false)
    const [liked, setLiked] = useState(false)
    const {user} = useContext(UserContext)
    const dispatch =  useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
   

  console.log(user,'kkk')
    const onSubmit = (data)=>{
      console.log(data)

      axios.patch(`${process.env.REACT_APP_API_URL}api/post/comment-post/${post._id}`,{
        author:user._id,
        text:data.text

      })
    }
    const sendCorrectiont =async ()=>{
      console.log('nodify to user')
      if(setTextUpdate !== post?.message){
        dispatch(correctionPost(post._id,textUpdate))
        setModify(false)
      }
      return null
    }
    const like = ()=>{
      dispatch(likePost(post._id, user._id))
      setLiked(true)
    }

    const unlike = ()=>{
      dispatch(unlikePost(post._id, user._id))
      setLiked(false)
    }
    // useEffect(() => {
    //   if(post?.likers.length > 0){
    //     if(post?.likers.include(user._id)) {
    //       setLiked(true)
    //     }
    //   }
   
    // }, [user._id, liked, post?.likers])
    console.log(post?.author._id,"kkkk")

    return (
          <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
            <div className={
              post?.file !== undefined ? "w-full mx-auto px-4 py-4 bg-white shadow-md rounded-lg"
              :"w-full mx-auto px-4 py-4 bg-white shadow-md rounded-lg"}
              >
              <div className="py-2 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div onClick={() => history.push(`/profil/${post?.author._id}`)} className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                    <img className="rounded-full h-8 w-8 object-cover" src={post?.author.picture} alt=""/>
                    <p className="ml-2 text-base font-medium">{post?.author.pseudo}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-xs font-semibold text-gray-500">{formatDate(post?.createdAt)}</p>
                </div>
              </div>
              <div className="mt-2">
              <div className="py-2">
                {modify === false  && <p className="leading-snug">{post?.message}</p> }
                {
                  modify
                  &&
                  <div>
                   <textarea className='w-full bg-baseColor text-whiteColor rounded-lg pl-3 pt-2'
                      defaultValue={post?.message}
                      onChange={(e) => setTextUpdate(e.target.value)}
                  ></textarea> 
                  <button onClick={()=> sendCorrectiont()}>
                        send Correctiont
                  </button>
                  </div>

                }
                <small onClick={() =>setModify(!modify)} className="">correction</small>
              </div>
              { post?.file !== undefined
                ? (
                <div class="flex-shrink-0 mr-3">
                    <img className="object-cover w-full rounded-lg" src={post?.file} alt={"file post"}/>

                  </div>)
                  :null
                  }
                  {post?.video && (
                    
                      <iframe
                        width="100%"
                        height="450px"
                        src={post?.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={post?.video}
                      ></iframe>
                    )}
                <div className="py-2 flex flex-row items-center justify-between">
                  <div className="flex flex-row">
                  <button onClick={()=> like()} className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span  className="ml-1">{post?.likers.length === 0 ? 0 :post?.likers.length}</span>
                  </button>
                  <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3" onClick={() => setopenFeed(! openFeed)}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    <span className="ml-1">{post?.comments.length === 0 ? 0 :post?.comments.length}</span>
                  </button>
                  {/* <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    <span className="ml-1">340</span>
                  </button> */}
                  </div>
                  <div className="flex flex-row-reverse">
                    <button onClick={()=> setopenFeed(!openFeed)} className="flex flex-row justify-end items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> */}
                      <span className="cursor-pointer ml-1">Show comment</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`${openFeed === false ? "hidden" : ""}`}>
                <hr className="opacity-30 mx-4 my-5"/>
                <span> Comment </span>
                <div class="space-y-4">

                  <div className="flex flex-col">
           
                    {post?.comments.length === 0 ? null  : post?.comments.map((comment)=>{
                      return(
                        <CardComment comment={comment}/>

                      )
                    }) }
                    <div class="flex mx-auto items-center shadow-lg mt-4 mx-8 mb-4 max-w-lg">
                    <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                            <div class="flex flex-wrap -mx-3 mb-6">
                              <div className="flex-shrink-0 mb-3 mr-3">
                                <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={user.picture} alt="image user"/>
                              </div>
                              <div class="w-full md:w-full px-3 mb-2 mt-2">
                                  <textarea {...register('text')} class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"  placeholder='Type Your Comment'></textarea>
                              </div>
                              <div class="w-full md:w-full flex flex-col-reverse items-end md:w-full px-3">
                                  <div class="-mr-1">
                                    <input type='submit' class="bg-white idems-end text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'/>
                                  </div>
                              </div> 
                            </div>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default CardPost
