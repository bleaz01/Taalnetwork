import axios from 'axios';
import React,{useContext,useSelector, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { UserContext } from '../../lib/context';
import { uploadPicture } from '../../lib/redux/actions/user';
import CardPost from '../Home/CardPost';
import { isEmpty } from '../utils/function';


const Profil = () => {
    const location = useLocation()
    const {user} = useContext(UserContext)
    const [moreDetails, setmoreDetails] = useState(false);
    const [tagUser, setTagUser] = useState();
    const [allPostUser, setAllPostUser] = useState();
    const url = location.pathname.split('/')[2]
    const [profilUser, setProfilUser] = useState("")
    
   
   const followers = ()=>{

        axios.patch(`${process.env.REACT_APP_API_URL}api/user/follow/`,{
            myId:user._id,
            followerId:profilUser._id
        })
   }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/user/${url}`).then((res)=>{
            setProfilUser(res.data)
            setTagUser(res.data?.tag)

        })
    }, [url])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/post/${url}`).then((res)=>{
            setAllPostUser(res.data)
        })
    }, [moreDetails])
    
    console.log(profilUser,'userProfil')
    console.log(allPostUser,'userPost')

    return (
        <div>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

        <main className="profile-page">
        <section className="relative block h-500-px">
            <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span id="blackOverlay" className="w-full h-full absolute  bg-baseColor"></span>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
            </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                        <img alt="profil-picture" src={profilUser.picture} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                        
                    </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button className="bg-baseColor active:bg-opacity-25 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                            <a href='/home'>Home</a>
                        </button>
                        <button onClick={() => followers()} className="bg-baseColor active:bg-opacity-25 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                           Follow
                        </button>
                    </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div onClick={() => console.log("modal following")} className="cursor-pointer mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{profilUser.following ?profilUser.following.length : 0}</span><span class="text-sm text-blueGray-400">Following</span>
                        </div>
                        <div onClick={() => console.log("modal followers")} class="cursor-pointer mr-4 p-3 text-center">
                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{profilUser.followers ? profilUser.followers.length : 0}</span><span class="text-sm text-blueGray-400">Follower</span>
                        </div>
                        <div onClick={() => console.log("modal level")} class="cursor-pointer lg:mr-4 p-3 text-center">
                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{profilUser?.rank}</span><span class="text-sm text-blueGray-400">Level</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="text-center mt-12">
                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {profilUser.pseudo}
                    </h3>
                        <span>Pour quoi je suis ici...</span>
                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            {profilUser.bio} 
                        </p>
                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            Centre d'interét
                        </p>
                        <div className="flex flex-row justify-center">
                        {tagUser &&
                            tagUser.map((item) => {
                                return (
                                    <div className="flex justify-between m-1 mr-2 w-24 bg-baseColor text-whiteColor rounded-xl p-2 font-bold text-sm">
                                        <p className="text-center">{item}</p>
                                        
                                    </div>
                                );
                            })}
                        </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            {/* {profilUser.bio} koiiulklk */}
                            </p>
                            <div onClick={()=> setmoreDetails(!moreDetails)} className="cursor-pointer font-normal text-baseColor">Show more</div>
                        </div>
                    </div>
                   {
                       moreDetails ?
                       (
                       <div className="flex w-full justify-between">
                            <div className="w-1/2">
                                  Mes exercice
                            </div>
                            <div className="w-1/2">
                            {allPostUser.length > 0 
                            ?
                            allPostUser.map((post)=>{
                                    console.log(post)
                                    return(
                                        <CardPost key={post._id}  post={post}/>

                                    )

                            })
                            :
                            <p>No post</p>
                        }
                            </div>

                        </div>)
                        :(
                            null
                        )

                   } 
                </div>
                </div>
            </div>
            </div>
            <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
               Taalnetwork
            </div>
            </div>
        </div>
        </footer>
        </section>
        </main>
    </div>
    )
}

export default Profil
