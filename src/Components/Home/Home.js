import React,{useState,useEffect, useContext} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardPost from './CardPost'
import Modal from '../utils/Modal'
import testImg from "../assets/workteam.png"
import CreatePostForm from '../utils/Forms/CreatePostForm'
import axios from 'axios'
import { UserContext } from '../../lib/context'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [posts, setPosts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {user} = useContext(UserContext)
    const dispatch = useDispatch()

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_URL}api/post`)
        .then((res)=>{
          setPosts(res.data)
        })
      }, [])

    return (
        <div className="">
            <Navbar/>
            <SideBar>
                <div className="flex justify-center mt-5">
                    <div className=" w-4/6 border-baseColor rounded-lg border-2 hover:bg-teal-100">
                        <div className="flex justify-between w-full items-center p-2 pl-2 border-transparent">
                            <div className="w-6 flex flex-col items-center">
                                <div className="flex  relative w-10 h-10 bg-orange-500 justify-center items-center ml-5 m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                                    <img className="rounded-full" alt="image user" src={user.picture}/> 
                                </div>
                            </div>
                                <div class="w-auto h-auto">
                                    <div class="flex-1 h-full">
                                    <div onClick={() => setShowModal(true)}class="cursor-pointer flex items-center justify-center flex-1 h-full p-2 bg-baseColor text-whiteColor shadow rounded-full">
                                        <div class="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {posts && posts.map((post)=>{
                return(
                    <CardPost image={testImg} post={post}/>

                )

            })}
               
            </SideBar>  
            <Modal
             showModal={showModal}
             setShowModal={setShowModal}
             title='Create post'
             >
                <CreatePostForm/>
             </Modal>
        </div>
    )
}

export default Home
