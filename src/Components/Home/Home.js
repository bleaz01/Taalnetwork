import React,{useState,useEffect, useContext} from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardPost from './CardPost'
import Modal from '../utils/Modal'
import testImg from "../assets/workteam.png"
import CreatePostForm from '../utils/Forms/CreatePostForm'
import axios from 'axios'
import { UserContext } from '../../lib/context'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../lib/redux/actions/post'

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon  from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import { useHistory } from 'react-router';
import CardEmoji from './CardEmoji';

const Home = () => {
    // const [reload, setReload] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] =useState('')
    const posts = useSelector((state) => state.post);
    const{user} = useContext(UserContext)
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const [ successMsg, setSuccessMsg ] = useState('');
	const [ errMsg, setErrMsg ] = useState('');

    const SendPost = async (post)=>{
		axios
			.post(`${process.env.REACT_APP_API_URL}api/post`, {
				post
			})
			.then((res) => {
				setSuccessMsg('Image uploaded successfully');
				window.location.reload();
			})
			.catch((err) => {
				setErrMsg('Something went wrong!');
			});
	}
    // const {user} = useContext(UserContext)
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getPost())
      }, [posts])

      const onSubmit =(data)=>{
        console.log(data)
        const post = {
            message: data.text,
            author: user._id,
            posterImg: user.picture,
        };
        SendPost(post)
      }

      const handleModal =(value)=>{
          setShowModal(true)
          setValue(value)
      }

    return (
        <div className="h-max-screen">
            <Navbar/>
            <SideBar>
                <div className="flex justify-center mt-5">
                    <div className=" w-4/6 border-baseColor rounded-lg border-2 hover:bg-teal-100">
                        <div className="flex flex-col justify-between w-full items-center p-2 pl-2 border-transparent">
                            <div className="flex items-center w-full ">
                                <div className="flex relative w-12 h-12 bg-orange-500 justify-center items-center w-4 h-4 mt-1 rounded-full ">
                                    <img className="rounded-full h-10 w-10 " alt="image user" src={`${process.env.REACT_APP_API_URL}api/image/${user.picture}`}/> 
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4 py-1">
                                    <input {...register('text')} className="border-2 border rounded-2xl w-full px-4 py-1"placeholder="wat you thinds" type="text"/>
                                </form >
                            </div>
                            <div className="flex w-full justify-between">
                                <div onClick={() => history.push("./live") } className="cursor-pointer flex justify-center text-aligne py-2 mx-2 hover:bg-baseColor hover:text-whiteColor rounded-2xl h-10 w-1/3">
                                    <VideocamIcon style={{color:'red'}}/>
                                    <p className="pl-2">Live Video</p>
                                </div>
                                <div onClick={() => handleModal('picture')} className="cursor-pointer flex justify-center hover:bg-baseColor hover:text-whiteColor py-2 mx-2 rounded-2xl h-10 w-1/3"> 
                                    <PhotoLibraryIcon style={{color:"green"}}/>
                                    <p className="pl-2">Photo/Video</p>
                                </div>
                                <div onClick={() => handleModal('emoji')} className="cursor-pointer flex justify-center hover:bg-baseColor hover:text-whiteColor py-2 mx-2 rounded-2xl h-10 w-1/3">
                                    <InsertEmoticonIcon style={{color:"yellow"}}/>
                                    <p className="pl-2">Feeleng/Activity</p>
                                </div>
                            
                            {/* <div onClick={() => setShowModal(true)} class="cursor-pointer flex items-center justify-center flex-1 h-full p-2 bg-baseColor text-whiteColor shadow rounded-full">
                                <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="xs:m-0 sm:m-0 md:mx-10 lg:mx-14 xl:container">
                {posts && posts.map((post)=>{
                        return(
                            <CardPost key={post._id} image={testImg} post={post}/>

                        )

                    })}
               

                </div>
                   
            </SideBar>  
            <Modal
             showModal={showModal}
             setShowModal={setShowModal}
             title='Create post'
             >
                 {value === "picture" ? <CreatePostForm/> : <CardEmoji/> }
             </Modal>
             
        </div>
    )
}

export default Home
