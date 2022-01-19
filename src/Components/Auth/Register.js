import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import bgRegister from "../assets/like.png"
import UpdateRegister from './UpdateRegister'
import imgProfil from "../assets/img-profil.png"
import { useHistory } from 'react-router';
import axios from 'axios';

const Register = () => {

    const dispatch = useDispatch();
    const [updateRegister, setupdateRegister] = useState(false)
    const [userId, setUserId] = useState('')
    const { register, handleSubmit, watch, errors } = useForm();
    const [user, setuser] = useState("")
    const history = useHistory()

    const onSubmit = data => {

        // const newUser = {
        //  ...data,
        // }
        axios({
            method:'post',
            url:`${process.env.REACT_APP_API_URL}api/user/register`,
            withCredentials:true,
                data:{
                    ...data
                }
          }).then((res)=>{
            if(res.data?.error) {
                    console.log(res.data?.error)
                }else{
                    setUserId(res.data?.user)
                    setupdateRegister(true)
                }
          }).catch((err)=>{
              console.log(err)
          })
        
        // console.log(newUser,"newuser")
        // handleUserRegistration(newUser).then(() => {
        //   history.push('/home')
        //   console.log("successsfuly");
        // });
    };
    console.log(userId,'id')
    return (
        <div className="bg-secondeColor ">
            {
                !updateRegister 
                ? 
                <>
            <div class="container  min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5 mx-auto">
            <div class="bg-baseTextColor text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
                <div class="md:flex w-full">
                    <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        <img src={bgRegister}/>
                    </div>
                    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="flex -mx-3">
                                <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Pseudo</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input name="name" {...register('pseudo')} type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                                    </div>
                                </div>
                                {/* <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Last name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input name="lastname" {...register('lastname')} type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                                    </div>
                                </div> */}
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-2/3 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1" >Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input name="email" {...register('email')} type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                                    </div>
                                </div>
                                {/* <div class="w-1/3 px-3 mb-5 my-auto">
                                    <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <select name="role" {...register('role')} class="w-full -ml-10 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                                <option>Prof</option>
                                                <option>Student</option>
                                        </select>
                                    </div>
                                </div> */}
                            </div>
                            
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1" >Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input name="password" {...register('password')} type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button type="submit" class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                </div>
                            </div>
                            <div className="flex justify-items-end">
                                <a href="./login">Login</a>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
                </>
                :
                <>
                <UpdateRegister id={userId}/>
                </>
            }

        </div>
       
        
     
        )
    }

export default Register
