import React,{useState,useContext,useEffect} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import { useDispatch, useSelector,  } from "react-redux";
import UploadeImgAcount from './UploadImgAcount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

import BioUpdateForm from './BioUpdateForm';
import { UserContext } from '../../lib/context';

const Account = () => {
    const [upload, setUpload] = useState(false)
    const [bioUpdate, setBioUpdate] = useState(false)
    const {user} = useContext(UserContext)
    const history = useHistory()


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
                        <div className="sm:mt-10 w-full h-full lg:order-2 flex justify-center">
                            <div className="relative flex flex-row justify-center">
                                <div className="lg:w-48 lg:h-48 sm:w-36 sm:h-36">
                                {upload ? <UploadeImgAcount user={user._id}/> : <img alt="profil-picture" src={`${process.env.REACT_APP_API_URL}api/image/${user?.picture}`} className="rounded-full w-full h-full  border-none"/>   }     

                                    </div>
                                <div>
                                {upload ? null : <FontAwesomeIcon size='2x' color="#4337C9" className="cursor-pointer absolute right-2 bottom-0" onClick={()=> setUpload(!upload)} icon={faCamera} /> }

                                </div>
                                                        
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                            <button onClick={()=> history.push('./home')} className="bg-baseColor active:bg-opacity-25 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                            <FontAwesomeIcon icon={faHome}/>
                            </button>
                        </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="sm:pt-0 flex justify-center py-4 lg:pt-4 pt-8">
                            <div onClick={() => console.log("modal following")} className="cursor-pointer mr-4 p-3 text-center">
                                <span className="c text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.following ? user.following.length : 0}</span><span class="text-sm text-blueGray-400">Following</span>
                            </div>
                            <div onClick={() => console.log("modal followers")} class="cursor-pointer mr-4 p-3 text-center">
                                <span class=" text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.followers ? user.followers.length : 0}</span><span class="text-sm text-blueGray-400">Follower</span>
                            </div>
                            <div onClick={() => console.log("modal level")} class="cursor-pointer lg:mr-4 p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">B1</span><span class="text-sm text-blueGray-400">Level</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <h3 class="text-4xl font-semibold leading-normal text-blueGray-700">
                        {user.pseudo}
                        </h3>
                            <div className="flex justify-center">
                                <span className="pt-2">Pour quoi je suis ici...</span>
                                <img className="w-6 h-6 ml-2 cursor-pointer" onClick={()=> setBioUpdate(!bioUpdate)} src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-pen-back-to-school-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
                            </div>
                           
                            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                {user.bio} 
                            </p>
                            {bioUpdate ? <BioUpdateForm user={user._id}/> : null}

                       
                    </div>
                    <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-9/12 px-4">
                            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            </p>
                            <a href="#pablo" class="font-normal text-baseColor">Show more</a>
                        </div>
                        </div>
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

export default Account
