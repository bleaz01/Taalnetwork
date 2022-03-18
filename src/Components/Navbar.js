import React,{useEffect, useState, useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
// import { handleLogout } from '../lib/redux/actions/authentication';
// import {useLazyQuery, useMutation, useQuery} from '@apollo/client'
import axios from 'axios';
import cookies from 'js-cookie';
import { UserContext } from '../lib/context';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


const Navbar = () => {
    const {user,logout} = useContext(UserContext)

    const dispatch = useDispatch()
    const [curentUser, setcurentUser] = useState()
    const pathname = window.location.pathname

    const logoutUser = async () => {

        const removeCookie = (key)=>{
            if(window !== "undefined"){
                cookies.remove(key,{expires:1})
            }
        }
        axios({
            method:'post',
            url:`${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials:true
          }).then((res)=>
            removeCookie('jwt'),
            logout()
           )
          .catch((err)=>{
                console.log(err)
          })
        window.location = '/'
          
    }
    return (
        <nav className="bg-white shadow-lg">
            <div className="mx-2 lg:px-6 flex justify-between w-full pl-0">
                <div className="flex justify-between">
                    <div className="flex space-x-14">
                        <div className="flex align-middle">
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="hidden sm:flex font-semibold text-gray-500 text-lg">
                                    Taalnetwork
                                </span>
                                
                            </a>
                        </div>
                        <div className="font-regular hidden lg:flex items-center space-x-1">
                            <a
                                href="/"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Home
                            </a>
                            <a
                                href="/grammar"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/grammar' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Grammaire
                            </a>
                            <a
                                href="/conjugation"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/conjugation' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Conjugaison
                            </a>
                            {/* <a
                                href="/live"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/live' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Live
                            </a> */}
                            <a
                                href="/exercices&test"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/exercices&test' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Exercices / Tests
                            </a>
                            <a
                                href="messenger"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/messenger' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Messenger
                            </a>
                            <a
                                href="vocabulary"
                                className={`py-4 px-2 text-green-500 ${ pathname === '/vocabulary' ? "border-b-4" : '' } border-baseColor font-semibold `}
                            >
                                Vocabulary
                            </a>
                        </div>
                    </div>
                    
                </div> 
                <div className="hidden lg:flex  my-auto justify-end">
                    <a href="/account" className="flex justify-end ">
                        {/* <img src={`${process.env.REACT_APP_API_URL}api/image/${user.picture}`} alt="img profil" className="rounded-full h-8 w-8 mr-2" /> */}
                        {/* <span> {user.pseudo}</span> */}
                        image_profile
                    </a>
                    <div className="flex align-middle" onClick={logoutUser} >
                        <MeetingRoomIcon fontSize={"large"} style={{color:"#4337C9"}}/>
                    </div>
                </div>
                <div className="lg:hidden flex my-auto mr-8">
                        <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
            </div>
	    </nav>
    )
}

export default Navbar
